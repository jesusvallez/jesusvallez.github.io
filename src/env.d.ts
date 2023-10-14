/// <reference types="astro/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    CONTENTFUL_SPACE_ID?: string
    CONTENTFUL_MANAGEMENT_TOKEN?: string
    CONTENTFUL_PREVIEW_TOKEN?: string
    CONTENTFUL_DELIVERY_TOKEN?: string
  }
}
