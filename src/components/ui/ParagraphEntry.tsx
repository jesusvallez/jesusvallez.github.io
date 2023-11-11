import type { Paragraph } from '@contentful/rich-text-types'
import type { PropsWithChildren } from 'react'

interface Props {
  node: Paragraph
}

export default function ParagraphEntry({ children }: PropsWithChildren<Props>) {
  return <p className="mb-3">{children}</p>
}
