import type { PropsWithChildren } from 'react'

export default function StrongEntry({ children }: PropsWithChildren) {
  return <strong className="font-bold">{children}</strong>
}
