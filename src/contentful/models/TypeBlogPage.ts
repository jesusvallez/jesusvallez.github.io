import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeBlogPageFields {
  url: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  image?: EntryFieldTypes.AssetLink
  body: EntryFieldTypes.RichText
  recommendedPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>
}

export type TypeBlogPageSkeleton = EntrySkeletonType<TypeBlogPageFields, 'blogPage'>
export type TypeBlogPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeBlogPageSkeleton,
  Modifiers,
  Locales
>
