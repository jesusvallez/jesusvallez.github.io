import { type Hyperlink } from '@contentful/rich-text-types'
import type { PropsWithChildren } from 'react'

interface Props {
  node: Hyperlink
}

export default function HyperlinkEntry({ children, node }: PropsWithChildren<Props>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={node.data.uri}
      className="hover:underlinefocus text-my-tertiary hover:underline focus:ring"
    >
      {children}
    </a>
  )
}
