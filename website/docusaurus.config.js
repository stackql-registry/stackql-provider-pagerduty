import {themes as prismThemes} from 'prism-react-renderer';
import { createConfig } from './.shared-config/index.js';
import { providerName, providerTitle } from './provider.js';

const config = createConfig({
  providerName,
  providerTitle,
  prismThemes,
  overrides: {
    // Docusaurus Faster (rspack + swc, via @docusaurus/faster) - kept for
    // build speed and consistency with the other provider microsites.
    future: {
      v4: true,
      faster: true,
    },
  },
});

// Use the locally vendored registry-branded logos (STACKQL>> | REGISTRY,
// matching the awscc microsite) instead of the shared config's hotlinked
// main-site wordmark - self-contained assets, no cross-origin fetch.
// global.css swaps in the -mobile variants below 996px.
const registryLogo = {
  alt: 'StackQL',
  href: '/',
  src: 'img/stackql-registry-logo.svg',
  srcDark: 'img/stackql-registry-logo-white.svg',
};
config.themeConfig.navbar.logo = { ...registryLogo };
config.themeConfig.footer.logo = { ...registryLogo };

// Date-stamp every doc page ("Last updated on ..."), matching the main
// stackql.io site. The shared config ships showLastUpdateTime: false, and
// .shared-config is wiped and re-cloned on every build (vendor-config), so
// the flip must live here post-createConfig. Timestamps come from git
// history; the docs tree is committed after every regen, so pages stamp
// with their last regeneration date.
config.presets[0][1].docs.showLastUpdateTime = true;

// URL form. The shared config sets trailingSlash: false, which makes
// Docusaurus emit `services/incidents/incidents.html`; GitHub Pages then
// serves /services/incidents/incidents but returns 404 for the same URL
// with a trailing slash. Dropping the setting restores the Docusaurus
// default: `services/incidents/incidents/index.html`, which GitHub Pages
// serves for both forms (the slash-less URL redirects to the slash form).
// Internal links are unchanged.
delete config.trailingSlash;

export default config;
