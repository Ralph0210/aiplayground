import React from "react"

type BrowserFrameProps = React.PropsWithChildren<{ className?: string }>

export function BrowserFrame({ children, className = "" }: BrowserFrameProps) {
  return (
    <div
      className={`rounded-[8px_8px_0px_0px] border border-secondary-grey bg-primary-white shadow-sm overflow-hidden ${className}`}
    >
      <div className="h-10 flex items-center gap-2 px-3 border-b border-secondary-grey bg-secondary-blue/20">
        <div className="flex gap-1">
          <span className="size-3 rounded-full bg-[#ff5f56]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        {/* <div className="ml-3 flex-1 h-6 rounded bg-primary-white/70" /> */}
      </div>
      <div className="bg-primary-white">{children}</div>
    </div>
  )
}

export default BrowserFrame
