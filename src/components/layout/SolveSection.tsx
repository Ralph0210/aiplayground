import React from "react"
import { solveCopy } from "@/content/sections"
import GradientPanel from "../primitives/GradientPanel"
import BrowserFrame from "../primitives/BrowserFrame"

export function SolveSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto px-20 text-center">
        <h2 className="text-h2 font-geist font-semibold leading-none text-primary-black">
          {solveCopy.title}
        </h2>
        <p className="mt-2 text-body font-geist text-primary-dark-gray">
          {solveCopy.subtitle}
        </p>
        <div className="mt-8">
          <GradientPanel variant="hero" className="pt-30">
            <div className="rounded-[8px_8px_0px_0px] overflow-hidden bg-primary-white/80 max-w-[900px] mx-auto">
              <BrowserFrame>
                <video
                  src="/solve.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                  aria-label="Solve section demo video"
                />
              </BrowserFrame>
            </div>
          </GradientPanel>
        </div>
      </div>
    </section>
  )
}

export default SolveSection
