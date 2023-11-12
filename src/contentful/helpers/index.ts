import richTextTypes from '@contentful/rich-text-types'

import type { Block, Inline, Hyperlink, Paragraph } from '@contentful/rich-text-types'

function isParagraphNode(node: Block | Inline): node is Paragraph {
  return richTextTypes.helpers.isBlock(node) && node.nodeType === richTextTypes.BLOCKS.PARAGRAPH
}

function isHyperlinkNode(node: Block | Inline): node is Hyperlink {
  return richTextTypes.helpers.isInline(node) && node.nodeType === richTextTypes.INLINES.HYPERLINK
}

export { isHyperlinkNode, isParagraphNode }
