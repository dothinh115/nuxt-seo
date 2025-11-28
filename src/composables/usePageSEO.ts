import { useRuntimeConfig, useRoute } from '#imports'
import { useSEO } from './useSEO'
import type { SEOConfig } from '../types'

export const usePageSEO = (pageConfig: Partial<SEOConfig> = {}) => {
  const runtimeConfig = useRuntimeConfig()
  const publicConfig = (runtimeConfig.public || {}) as any
  const seoConfig = publicConfig.seo || {}
  const route = useRoute()
  
  const currentPath = route.path
  const pages = seoConfig.pages || {}
  const pageConfigFromNuxt = (pages[currentPath] || {}) as Partial<SEOConfig>
  const defaultUrl = seoConfig.siteUrl ? `${seoConfig.siteUrl}${currentPath}` : currentPath
  const finalUrl = pageConfig.url || pageConfigFromNuxt.url || defaultUrl
  
  const mergedConfig: SEOConfig = {
    siteName: seoConfig.siteName,
    locale: seoConfig.defaultLocale || 'en',
    type: seoConfig.defaultType || 'website',
    image: seoConfig.defaultImage || '',
    url: finalUrl,
    ...pageConfigFromNuxt,
    ...pageConfig,
  }
  
  return useSEO(mergedConfig)
}

