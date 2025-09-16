import React from "react"
import Image from "next/image"
import { builtAtLogos } from "@/content/sections"

export function LogoStrip() {
  return (
    <section className="py-40">
      <div className="max-w-[1152px] mx-auto px-6 md:px-8 text-center">
        <div className="text-body2 font-geist text-primary-dark-gray">
          Built at
        </div>
        <div className="mt-4 flex items-center justify-center gap-10 opacity-80">
          {builtAtLogos.map((l) => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={200}
              height={100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoStrip
