# pagerduty provider microsite

Docusaurus 3.10 site for [pagerduty-provider.stackql.io](https://pagerduty-provider.stackql.io), on the shared architecture used by the other StackQL provider microsites: navbar, footer, theme and plugin configuration come from [`stackql/docusaurus-config`](https://github.com/stackql/docusaurus-config), vendored into `.shared-config/` by the `prestart` / `prebuild` hooks. Site-local files are `provider.js` (provider identity), thin wrappers (`docusaurus.config.js`, `sidebars.js`), the shared components and theme under `src/`, and the static assets (`static/CNAME` pins the hostname).

The pages under `docs/` are generated - run `make docs` from the repository root after regenerating the provider; do not edit them by hand. `docs/index.md` is assembled from `provider-dev/docgen/provider-data/headerContent1.txt` and `headerContent2.txt`.

```bash
yarn install
yarn start      # dev server (vendors the shared config first; needs GitHub access)
yarn build      # static build into build/
yarn serve      # serve the static build
```

Deployment is GitHub Pages via `.github/workflows/prod-web-deploy.yml` on pushes to `main` that touch `website/**`.
