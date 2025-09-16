import React from "react"

type SectionProps = React.PropsWithChildren<{ className?: string; id?: string }>

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-[1152px] mx-auto px-6 md:px-8">{children}</div>
    </section>
  )
}

export default Section
