import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig ={
  logo: <strong>CIEL CARDANO GUIDEBOOK</strong>,
  project: {
    link: 'https://github.com/449sabu',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true
  },
  darkMode: true,
  primaryHue: 183,   // number | { dark: number; light: number }
  i18n: [
    { locale: 'ja', text: '日本語'},
    // { locale: 'en', text: 'English' }
  ],
  docsRepositoryBase: "https://github.com/449sabu/ctool-docs/tree/main",
}

export default config;