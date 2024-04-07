import type { AnchorHTMLAttributes } from 'react'

interface Props {
  link?: AnchorHTMLAttributes<HTMLAnchorElement>['href']
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
}

export default function CVButton({ link, onClick }: Props) {
  return (
    <a className="relative" target="_blank" rel="noopener noreferrer" href={link} onClick={onClick}>
      <div className="absolute inset-[4px] rounded-full"></div>
      <div className="relative flex cursor-pointer items-center justify-center gap-x-2 rounded-full border border-white/10 bg-neutral-800 px-3 py-1 text-xs transition hover:scale-105 hover:bg-neutral-700 md:px-4 md:py-2 md:text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-6 w-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12" />
        </svg>
        Curriculum
      </div>
    </a>
  )
}
