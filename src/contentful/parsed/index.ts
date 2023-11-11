import { createClient } from 'contentful'

import { type TypeBlogPageSkeleton } from '../models/index.ts'

import { contentfulConfig, CONTENTFUL_MODE } from '../config'
import type { BlogEntries, BlogEntry } from './models.ts'

interface ContentfulClient {
  space: string
  accessToken: string
  mode?: CONTENTFUL_MODE
}

function generateClient({ space, accessToken, mode = CONTENTFUL_MODE.PRODUCTION }: ContentfulClient) {
  const config = contentfulConfig[mode]

  return createClient({
    ...config,
    space,
    accessToken,
  }).withoutUnresolvableLinks
}

async function getLocales({ space, accessToken, mode = CONTENTFUL_MODE.PRODUCTION }: ContentfulClient) {
  await generateClient({ space, accessToken, mode })
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
}: ContentfulClient): Promise<BlogEntries[] | null> {
  return await generateClient({ space, accessToken, mode })
    .getEntries<TypeBlogPageSkeleton>({
      content_type: 'blogPage',
      include: 2,
      locale: 'es',
      select: [
        'sys.id',
        'sys.createdAt',
        'fields.url',
        'fields.title',
        'fields.description',
        'fields.image',
        'fields.tags',
      ],
    })
    .then(({ items: entries }) => {
      const fields = entries.map(({ fields, sys }) => ({
        id: sys.id,
        createdAt: sys.createdAt,
        url: fields.url,
        title: fields.title,
        description: fields.description,
        image: fields.image?.sys.type === 'Asset' && fields.image.fields.file ? fields.image.fields.file : null,
        tags: fields.tags || [],
      }))

      return fields
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

async function getBlogEntry({
  space,
  accessToken,
  url,
  mode = CONTENTFUL_MODE.PRODUCTION,
}: ContentfulClient & { url: string }): Promise<BlogEntry | null> {
  return await generateClient({ space, accessToken, mode })
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
        id: sys.id,
        createdAt: sys.createdAt,
        url: fields.url,
        title: fields.title,
        body: fields.body,
        image: fields.image?.sys.type === 'Asset' && fields.image.fields.file ? fields.image.fields.file : null,
        tags: fields.tags || [],
      }
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

export { getLocales, getBlogEntries, getBlogEntry }
