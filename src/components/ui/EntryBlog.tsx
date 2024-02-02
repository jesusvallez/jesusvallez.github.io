import { type PropsWithChildren } from 'react'

import type { BlogEntry } from '@/contentful/parsed/models'
import { documentToReactComponents, type Options } from '@contentful/rich-text-react-renderer'
import richTextTypes from '@contentful/rich-text-types'
import { isHyperlinkNode, isParagraphNode } from '@/contentful/helpers'

import CodeEntry from './CodeEntry'
import ParagraphEntry from './ParagraphEntry'
import StrongEntry from './StrongEntry'
import HyperlinkEntry from './HyperlinkEntry'

interface Props {
  data: BlogEntry
}

const options: Options = {
  renderMark: {
    [richTextTypes.MARKS.BOLD]: (text) => <StrongEntry>{text}</StrongEntry>,
    [richTextTypes.MARKS.CODE]: (text) => <CodeEntry>{text}</CodeEntry>,
  },
  renderNode: {
    [richTextTypes.BLOCKS.PARAGRAPH]: (node, next) =>
      isParagraphNode(node) && <ParagraphEntry node={node}>{next}</ParagraphEntry>,
    [richTextTypes.INLINES.HYPERLINK]: (node, next) =>
      isHyperlinkNode(node) && <HyperlinkEntry node={node}>{next}</HyperlinkEntry>,
  },
}

export function EntryBlog({ data }: PropsWithChildren<Props>) {
  const parsed = documentToReactComponents(data.body, options)

  return (
    <>
      <header className="flex w-full flex-col items-center justify-end gap-2">
        {/* <h1 className="inline-block w-full text-center text-h5 font-bold md:text-h3 md:leading-tight"></h1> */}

        <h1 className="inline-block self-center text-center text-h5 font-bold md:text-h3 md:leading-tight">
          {data.title}
        </h1>

        <h2 className="inline-block w-full text-center text-body1 opacity-60 md:text-h6 md:leading-tight">
          {data.description}
        </h2>

        {data.image && (
          <img
            src={data.image.url}
            alt={data.image.fileName}
            className="mask-my-image my-4 aspect-[5/2] rounded-sm object-cover sm:w-full"
          />
        )}
      </header>

      <section>{parsed}</section>
    </>
  )
}
