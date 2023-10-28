import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import { type TypeBlogPageSkeleton } from '../models/index.ts'

import { contentfulConfig, CONTENTFUL_MODE } from '../config'

async function getLocales({
  space,
  accessToken,
  mode = CONTENTFUL_MODE.PRODUCTION,
}: {
  space: string
  accessToken: string
  mode?: CONTENTFUL_MODE
}) {
  const config = contentfulConfig[mode]

  await createClient({
    ...config,
    space,
    accessToken,
  })
    .withAllLocales.getLocales()
    .then(({ items: entries }) => {
      for (const { code, name } of entries) {
        console.log(`${code}: ${name}`)
      }
    })
}

async function getBlogEntries({
  space,
  accessToken,
  mode = CONTENTFUL_MODE.PRODUCTION,
}: {
  space: string
  accessToken: string
  mode?: CONTENTFUL_MODE
}) {
  const config = contentfulConfig[mode]

  return await createClient({
    ...config,
    space,
    accessToken,
  })
    .getEntries<TypeBlogPageSkeleton>({
      content_type: 'blogPage',
      include: 3,
      locale: 'es',
    })
    .then(({ items: entries }) => {
      const fields = entries.map(({ fields, sys }) => ({
        ...fields,
        body: fields.body && documentToHtmlString(fields.body),
        locale: sys.locale,
        updatedAt: sys.updatedAt,
        createdAt: sys.createdAt,
        id: sys.id,
      }))

      return fields

      // for (const { fields, sys } of entries) {
      //   const { createdAt, updatedAt, locale } = sys

      //   console.log(`Sys: ${createdAt} ${updatedAt} ${locale}`)
      //   console.log(fields)
      // }
    })
}

async function getBlogEntry({
  space,
  accessToken,
  url,
  mode = CONTENTFUL_MODE.PRODUCTION,
}: {
  space: string
  accessToken: string
  url: string
  mode?: CONTENTFUL_MODE
}) {
  const config = contentfulConfig[mode]

  return await createClient({
    ...config,
    space,
    accessToken,
  })
    .getEntries<TypeBlogPageSkeleton>({
      content_type: 'blogPage',
      'fields.url': url,
    })
    .then(({ items: entries }) => {
      if (!entries.length) {
        return null
      }

      const { fields, sys } = entries[0]

      return {
        ...fields,
        body: fields.body && documentToHtmlString(fields.body),
        locale: sys.locale,
        updatedAt: sys.updatedAt,
        createdAt: sys.createdAt,
        id: sys.id,
      }
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

export { getLocales, getBlogEntries, getBlogEntry }
