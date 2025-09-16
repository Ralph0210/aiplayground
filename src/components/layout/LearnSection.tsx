import React from "react"
import { GradientPanel } from "../primitives/GradientPanel"
import { learnCopy } from "@/content/sections"
import BrowserFrame from "../primitives/BrowserFrame"

export function LearnSection() {
  return (
    <section className="pb-20 md:pb-20">
      <div className="mx-auto px-20 text-center min-h-[800px]">
        <h2 className="text-h2 font-geist font-semibold leading-none text-primary-black">
          {learnCopy.title}
        </h2>
        <p className="mt-2 text-body font-geist text-primary-dark-gray">
          {learnCopy.subtitle}
        </p>
        <div className="mt-8">
          <GradientPanel variant="pastel1" className="pt-30">
            <div className="rounded-[8px_8px_0px_0px] overflow-hidden bg-primary-white/80 max-w-[900px] mx-auto">
              <BrowserFrame>
                <video
                  src="/learn.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                  aria-label="Learn section demo video"
                />
              </BrowserFrame>
            </div>
          </GradientPanel>
        </div>
      </div>
    </section>
  )
}

export default LearnSection
