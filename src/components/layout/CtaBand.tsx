import React from "react"
import Image from "next/image"
import { CTAButton } from "../CTAButton"
import { ctaBand } from "@/content/sections"

export function CtaBand() {
  return (
    <section className="relative px-2 py-20 md:py-28 min-h-[820px] md:min-h-[820px] flex items-center justify-center">
      {/* Background image behind content */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ctaSection.png"
          alt="CTA background"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
        <div className="absolute inset-0 bg-primary-white/10" />
      </div>

      <div className="relative z-10 px-6 md:px-8 text-center max-w-[1152px] w-full">
        <h2 className="text-h2 font-geist font-semibold leading-none text-primary-black">
          {ctaBand.title}
        </h2>
        <div className="mt-6 flex justify-center">
          <CTAButton
            size="md"
            colors={{
              base: "var(--color-primary-blue)",
              hover: "#2B80FF",
              active: "#0067FF",
              border: "#1662D2",
              text: "var(--color-primary-white)",
            }}
          >
            {ctaBand.cta}
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
