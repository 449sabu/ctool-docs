// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})
 
module.exports = withNextra({
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja'
  }
})
