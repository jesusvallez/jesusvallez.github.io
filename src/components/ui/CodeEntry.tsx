import type { PropsWithChildren } from 'react'

export default function CodeEntry({ children }: PropsWithChildren) {
  return (
    <code className="scrolling-touch block w-full items-center overflow-x-scroll whitespace-pre-wrap rounded-md bg-zinc-800 p-0 px-2 py-1 text-left text-overline text-white sm:px-4 sm:py-2 sm:text-caption">
      {children}
    </code>
  )
}
