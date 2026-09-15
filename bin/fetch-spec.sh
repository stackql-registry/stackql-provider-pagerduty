#!/usr/bin/env bash

# Downloads the PagerDuty REST API v2 OpenAPI spec from the vendor's public
# api-schema repository (https://github.com/PagerDuty/api-schema,
# reference/REST/openapiv3.json) into provider-dev/downloaded/, validates it
# with @apidevtools/swagger-parser, and records the fetch date and content
# hash in provider-dev/config/spec_pin.json.
#
# The repository carries no release tags, so the pin is the record of what
# was built. If a download does not match the recorded pin the script fails
# without writing anything; pass --update to accept the upstream change and
# rewrite the pin (treat the resulting spec diff as a reviewed refresh).
#
# Usage: bin/fetch-spec.sh [--update]

set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
DOWNLOAD_DIR="$REPO_ROOT/provider-dev/downloaded"
PIN_FILE="$REPO_ROOT/provider-dev/config/spec_pin.json"

SPEC_URL="${PAGERDUTY_SPEC_URL:-https://raw.githubusercontent.com/PagerDuty/api-schema/main/reference/REST/openapiv3.json}"
SPEC_FILE="pagerduty-rest-v2.json"

UPDATE=false
if [ "${1:-}" = "--update" ]; then
  UPDATE=true
fi

mkdir -p "$DOWNLOAD_DIR"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "Fetching PagerDuty REST API spec from $SPEC_URL"
curl -fsSL "$SPEC_URL" -o "$TMP_DIR/$SPEC_FILE"

# Validate, verify against the pin (or write it), then move into place.
UPDATE="$UPDATE" TMP_DIR="$TMP_DIR" DOWNLOAD_DIR="$DOWNLOAD_DIR" PIN_FILE="$PIN_FILE" \
SPEC_URL="$SPEC_URL" SPEC_FILE="$SPEC_FILE" \
node "$REPO_ROOT/provider-dev/scripts/record_spec_pin.mjs"

echo "Spec downloaded to $DOWNLOAD_DIR/$SPEC_FILE, pin recorded in $PIN_FILE"
