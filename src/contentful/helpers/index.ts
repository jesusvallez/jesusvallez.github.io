import { INLINES, helpers, BLOCKS } from '@contentful/rich-text-types'
import type { Block, Inline, Hyperlink, Paragraph } from '@contentful/rich-text-types'

function isParagraphNode(node: Block | Inline): node is Paragraph {
  return helpers.isBlock(node) && node.nodeType === BLOCKS.PARAGRAPH
}

function isHyperlinkNode(node: Block | Inline): node is Hyperlink {
  return helpers.isInline(node) && node.nodeType === INLINES.HYPERLINK
}

export { isHyperlinkNode, isParagraphNode }
