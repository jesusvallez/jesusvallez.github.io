import type { Document } from '@contentful/rich-text-types'
import { type EntitySys, type AssetFile } from 'contentful'

interface BlogEntries {
  id: EntitySys['id']
  createdAt: EntitySys['createdAt']
  url: string
  title: string | null
  description: string | null
  image?: AssetFile | null
  tags?: string[] | null
}

interface BlogEntry {
  id: EntitySys['id']
  createdAt: EntitySys['createdAt']
  url: string
  title: string | null
  description: string | null
  body: Document
  image?: AssetFile | null
  tags?: string[] | null
}

export type { BlogEntries, BlogEntry }
