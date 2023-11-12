import { type CreateClientParams } from 'contentful'

const previewMode: Pick<CreateClientParams, 'host'> = {
  host: 'preview.contentful.com',
}

const productionMode: Pick<CreateClientParams, 'host'> = {
  host: 'cdn.contentful.com',
}

const enum CONTENTFUL_MODE {
  PREVIEW = 'PREVIEW',
  PRODUCTION = 'PRODUCTION',
}

interface ContentfulConfig {
  [CONTENTFUL_MODE.PREVIEW]: typeof previewMode
  [CONTENTFUL_MODE.PRODUCTION]: typeof productionMode
}

const contentfulConfig: ContentfulConfig = {
  PREVIEW: previewMode,
  PRODUCTION: productionMode,
}

export { contentfulConfig, CONTENTFUL_MODE }
