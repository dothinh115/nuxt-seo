import SEOModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    SEOModule,
  ],
  seo: {
    enabled: true,
    siteUrl: 'https://example.com',
    siteName: 'Test Nuxt SEO',
    defaultLocale: 'en',
    robots: {
      enabled: true,
      sitemap: true,
    },
  },
})

