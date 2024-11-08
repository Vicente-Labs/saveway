import { ReactNode } from 'react'

export function AnimatedBadge({ children }: { children: ReactNode }) {
  return (
    <div className="animate-shine inline-flex w-fit items-center justify-center rounded-full border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] bg-[length:200%_100%] p-2 px-3 py-1 text-sm font-medium text-neutral-400 transition-colors">
      {children}
    </div>
  )
}
