import React from "react"
import { testimonials } from "@/content/sections"

function TestimonialCard({
  quote,
  name,
  title,
}: {
  quote: string
  name: string
  title: string
}) {
  return (
    <div className="rounded-[16px] bg-primary-white border border-secondary-grey p-6 shadow-sm h-full flex flex-col">
      <p className="text-body font-geist text-primary-black">{`“${quote}”`}</p>
      <div className="mt-auto pt-4 flex items-center gap-3">
        <div className="size-10 rounded-full bg-secondary-grey" />
        <div>
          <div className="text-body font-geist text-primary-black">{name}</div>
          <div className="text-body2 font-geist text-primary-dark-gray">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1152px] mx-auto px-6 md:px-8">
        <h2 className="text-h2 font-geist font-semibold leading-none text-primary-black text-center">
          Loved by
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.slice(0, 3).map((t, idx) => (
            <TestimonialCard key={`row1-${idx}`} {...t} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.slice(3, 6).map((t, idx) => (
            <TestimonialCard key={`row2-${idx}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
