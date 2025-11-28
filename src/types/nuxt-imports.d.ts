/**
 * Type declarations for Nuxt auto-imports
 * These are provided at runtime by Nuxt but need declarations for TypeScript
 */

declare module '#imports' {
  export const useRuntimeConfig: () => {
    public: {
      seo?: {
        enabled?: boolean
        siteUrl?: string
        siteName?: string
        defaultLocale?: string
        defaultImage?: string
        defaultType?: 'website' | 'article' | 'product' | 'profile'
        pages?: Record<string, any>
        social?: {
          twitter?: {
            site?: string
            creator?: string
          }
          facebook?: {
            appId?: string
          }
        }
        robots?: {
          enabled?: boolean
          disallow?: string[]
          sitemap?: boolean
          sitemapPath?: string
        }
      }
    }
    [key: string]: any
  }
  
  export const useSeoMeta: (meta: Record<string, any>) => void
  export const useHead: (head: any) => void
  export const useRoute: () => {
    path: string
    [key: string]: any
  }
}

