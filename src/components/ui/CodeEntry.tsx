import type { PropsWithChildren } from 'react'

export default function CodeEntry({ children }: PropsWithChildren) {
  return (
    <code className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-left text-body2 text-white sm:px-4 sm:py-2">
      <span className="flex gap-4">
        <span className="shrink-0 text-zinc-400">$</span>
        <span className="flex-1">{children}</span>
      </span>
    </code>
  )
}
