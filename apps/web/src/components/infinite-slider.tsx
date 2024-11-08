import { cn } from '@/lib/utils'

type InfiniteSliderProps = {
  children: React.ReactNode
  className?: string
  pauseOnHover?: boolean
}

export function InfiniteSlider({
  children,
  className,
  pauseOnHover,
}: InfiniteSliderProps) {
  return (
    <div
      data-id="slider"
      className={cn('group relative flex gap-10 overflow-hidden', className)}
    >
      <div className="absolute left-0 z-10 h-full w-1/12 bg-gradient-to-r from-background to-transparent" />

      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'animate-infinite-slider flex shrink-0 justify-around gap-10 [--gap:1rem]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
          )}
          data-id={`slider-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
      <div className="absolute right-0 z-10 h-full w-1/12 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
