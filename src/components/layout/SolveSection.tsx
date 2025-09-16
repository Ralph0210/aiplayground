import React from "react"
import { solveCopy } from "@/content/sections"
import GradientPanel from "../primitives/GradientPanel"
import BrowserFrame from "../primitives/BrowserFrame"

export function SolveSection() {
  return (
    <section className="py-20 md:py-28 min-h-[600px]">
      <div className="mx-auto px-20 text-center min-h-[800px]">
        <h2 className="text-h2 font-geist font-semibold leading-none text-primary-black">
          {solveCopy.title}
        </h2>
        <p className="mt-2 text-body font-geist text-primary-dark-gray">
          {solveCopy.subtitle}
        </p>
        <div className="mt-8">
          <GradientPanel variant="pastel2" className="pt-30">
            <div className="rounded-[8px_8px_0px_0px] overflow-hidden bg-primary-white/80 max-w-[900px] mx-auto">
              <BrowserFrame>
                <div
                  className="relative overflow-hidden bottom-[-25px]"
                  style={{ clipPath: "inset(0 0 5% 0)" }}
                >
                  <video
                    src="/solve.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover object-top"
                    aria-label="Solve section demo video"
                  />
                </div>
              </BrowserFrame>
            </div>
          </GradientPanel>
        </div>
      </div>
    </section>
  )
}

export default SolveSection
