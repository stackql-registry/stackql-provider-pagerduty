# StackQL pagerduty provider build pipeline.
#
# Every step is deterministic and re-runnable; manual mapping decisions live
# in provider-dev/scripts, never in hand-edited artifacts. `make all` runs
# the full chain: fetch/pin the spec -> inventory -> split service specs ->
# mappings -> pre-normalize -> normalize -> generate -> post-process ->
# offline + integration + meta-route tests -> docs -> website build.
# The live smoke suite (`make smoke`, `make smoke-live`) needs credentials
# and is never part of `all`.
#
# Requirements: Node >= 20, GNU make, a stackql binary ($STACKQL, ./stackql
# or on PATH; bin/start-server.sh downloads one if none is found), Python 3
# with pyyaml and jinja2 for the smoke suite, yarn for the website. Runs
# under Linux / WSL / macOS.
#
# Live credentials for the smoke suite (never committed - .env is
# gitignored; `make smoke` sources it if present, see .env.example):
#   PAGERDUTY_TOKEN, optionally PAGERDUTY_FROM_EMAIL

SHELL := bash
.DEFAULT_GOAL := help

PROVIDER := pagerduty
VERSION := v00.00.00000
SERVICES_DIR := provider-dev/openapi/src/$(PROVIDER)
PROVIDER_DIR := $(SERVICES_DIR)/$(VERSION)
CONFIG_DIR := provider-dev/config
PORT ?= 5444
ENV_FILE := .env
PYTHON ?= $(shell command -v python3 >/dev/null 2>&1 && echo python3 || echo python)

.PHONY: help deps fetch-spec refresh-spec inventory split mappings check-mappings pre-normalize normalize generate post-process build \
        test-offline test-integration test-meta test smoke smoke-live smoke-cleanup smoke-list \
        start-server stop-server server-status docs website website-start clean all

help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-18s %s\n", $$1, $$2}'

deps: ## install node dependencies (latest @stackql/provider-utils per package.json range)
	npm install

# ---------------------------------------------------------------- pipeline

fetch-spec: ## download the PagerDuty REST spec and verify it against the pin (fails on drift)
	npm run fetch-spec

refresh-spec: ## download the spec and ACCEPT the upstream change (rewrites the pin - review the diff)
	npm run fetch-spec -- --update

inventory: ## build provider-dev/config/endpoint_inventory.csv from the pinned spec
	npm run build-inventory

split: ## split the pinned spec into per-service specs (tag map in provider-dev/config/service_names.json)
	npm run split -- --provider-name $(PROVIDER) --overwrite

mappings: ## refresh all_services.csv (analyze keeps existing rows) and apply the deterministic mapping rules
	npm run generate-mappings -- --input-dir provider-dev/source --output-dir $(CONFIG_DIR)
	npm run map-operations

check-mappings: ## like mappings, but FAIL if a previously mapped operation would change resource/method/verb
	npm run generate-mappings -- --input-dir provider-dev/source --output-dir $(CONFIG_DIR)
	npm run map-operations -- --check

pre-normalize: ## pagerduty-specific spec adjustments (header params, deep refs, body unions, absolute doc links)
	npm run pre-normalize

normalize: ## generic provider-utils normalize pass (allOf flatten, oneOf/anyOf lowering, bare-array wrap)
	npm run normalize -- --api-dir provider-dev/source

generate: ## generate the provider (api_key auth, fixed server, naive request body translate)
	rm -rf provider-dev/openapi/*
	npm run generate-provider -- \
	  --provider-name $(PROVIDER) \
	  --input-dir provider-dev/source \
	  --output-dir $(SERVICES_DIR) \
	  --config-path $(CONFIG_DIR)/all_services.csv \
	  --servers $(CONFIG_DIR)/servers.json \
	  --provider-config $(CONFIG_DIR)/provider_config.json \
	  --naive-req-body-translate \
	  --overwrite
	$(MAKE) post-process

post-process: ## re-apply generated-provider fixes (cursor pagination, pushdown, POST-select object keys)
	npm run post-process

build: fetch-spec inventory split mappings pre-normalize normalize generate ## full spec -> provider pipeline

# ------------------------------------------------------------------- tests

test-offline: ## quick offline validation against the local file registry (SHOW / DESCRIBE)
	npm run test-offline

test-integration: ## row-level integration tests against the mock PagerDuty API (no credentials)
	npm run test-integration

test-meta: ## meta-route suite against a local stackql server
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/provider-dev/openapi" --port $(PORT)
	node bin/test-meta-routes.cjs $(PROVIDER) --port $(PORT); status=$$?; bash bin/stop-server.sh --port $(PORT); exit $$status

test: test-offline test-integration test-meta ## all non-live test layers

# `make smoke` sources .env when present so a developer checkout works
# without exporting anything; CI sets PAGERDUTY_TOKEN from a secret.
with_env = set -a; [ -f $(ENV_FILE) ] && source <(tr -d '\r' < $(ENV_FILE)); set +a;

smoke: ## live smoke suite against the LOCAL provider (reads + team / escalation policy / service / incident lifecycle)
	@$(with_env) $(PYTHON) tests/smoke.py $(SMOKE_ARGS)

smoke-live: ## live smoke suite against the PUBLISHED provider in the public registry (--live)
	@$(with_env) $(PYTHON) tests/smoke.py --live $(SMOKE_ARGS)

smoke-cleanup: ## discover and delete stackql-smoke-* breadcrumbs, then exit
	@$(with_env) $(PYTHON) tests/smoke.py --rollback $(SMOKE_ARGS)

smoke-list: ## list the smoke tests and exit
	@$(PYTHON) tests/smoke.py --list

start-server: ## start a local stackql server on PORT (default 5444) with the local registry
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/provider-dev/openapi" --port $(PORT)

stop-server: ## stop the local stackql server
	bash bin/stop-server.sh --port $(PORT)

server-status: ## show the local stackql server status
	bash bin/server-status.sh --port $(PORT)

# -------------------------------------------------------------------- docs

docs: ## generate the website docs, then sanitize (MDX escaping, quoted "From" in examples)
	rm -rf website/docs/services
	npm run generate-docs -- \
	  --provider-name $(PROVIDER) \
	  --provider-dir ./$(PROVIDER_DIR) \
	  --output-dir ./website \
	  --provider-data-dir ./provider-dev/docgen/provider-data
	node website/scripts/sanitize-docs.mjs

website: ## build the docusaurus microsite (vendors shared config first)
	cd website && yarn install && yarn build

website-start: ## run the docusaurus dev server
	cd website && yarn install && yarn start

clean: ## remove generated artifacts (provider output, docs, website build, test registry copy)
	rm -rf provider-dev/openapi/* website/build website/.docusaurus website/docs/services tests/integration/.registry-tmp

all: deps build test docs website ## everything non-live: deps, pipeline, tests, docs, site build
