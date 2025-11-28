import type { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    seo?: ModuleOptions
  }
  interface NuxtOptions {
    seo?: ModuleOptions
  }
}

export type { ModuleOptions } from './module'
export type { SEOConfig } from './src/types'

