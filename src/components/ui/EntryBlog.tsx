import type { BlogEntry } from '@/contentful/parsed/models'
import { type PropsWithChildren } from 'react'
import { documentToReactComponents, type Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import CodeEntry from './CodeEntry'
import ParagraphEntry from './ParagraphEntry'
import StrongEntry from './StrongEntry'
import HyperlinkEntry from './HyperlinkEntry'
import { isHyperlinkNode, isParagraphNode } from '@/contentful/helpers'

interface Props {
  data: BlogEntry
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <StrongEntry>{text}</StrongEntry>,
    [MARKS.CODE]: (text) => <CodeEntry>{text}</CodeEntry>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => isParagraphNode(node) && <ParagraphEntry node={node}>{next}</ParagraphEntry>,
    [INLINES.HYPERLINK]: (node, next) => isHyperlinkNode(node) && <HyperlinkEntry node={node}>{next}</HyperlinkEntry>,
  },
}

export function EntryBlog({ data }: PropsWithChildren<Props>) {
  const parsed = documentToReactComponents(data.body, options)

  return (
    <>
      <header className="flex w-full flex-col items-center justify-end">
        <h1 className="mb-6 inline-block self-center text-h5 font-bold md:text-h3 md:leading-tight">{data.title}</h1>

        {data.image && (
          <img
            src={data.image.url}
            alt={data.image.fileName}
            className="mask-my-image aspect-[3/1] object-cover sm:w-full"
          />
        )}
      </header>

      <section>{parsed}</section>
    </>
  )
}
