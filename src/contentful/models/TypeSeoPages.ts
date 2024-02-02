import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeSeoPagesFields {
  url: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Symbol
  openGraph?: EntryFieldTypes.Object
  extend?: EntryFieldTypes.Object
  jsonLD?: EntryFieldTypes.Object
}

export type TypeSeoPagesSkeleton = EntrySkeletonType<TypeSeoPagesFields, 'seoPages'>
export type TypeSeoPages<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeSeoPagesSkeleton,
  Modifiers,
  Locales
>
