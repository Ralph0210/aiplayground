import React from "react"
import Image from "next/image"
import { GradientPanel } from "../primitives/GradientPanel"
import { CTAButton } from "../CTAButton"

export function Hero() {
  return (
    <section>
      <div className="p-[18px]">
        <GradientPanel
          variant="hero"
          className="text-center text-primary-white"
        >
          <div className="pt-20 pb-10">
            <h1 className="text-h1 font-geist font-semibold leading-none">
              AI Playground
            </h1>
            <p className="mt-3 text-body font-geist text-primary-white">
              Build AI, learn concepts, and explore interactive lessons
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton size="md">Get started</CTAButton>
            </div>
          </div>

          <div className="mt-2 rounded-[8px_8px_0px_0px] overflow-hidden bg-primary-white/80 max-w-[1192px] mx-auto">
            <Image
              src="/hero.png"
              alt="Hero preview"
              width={1192}
              height={652}
              className="w-full h-auto"
              priority
            />
          </div>
        </GradientPanel>
      </div>
    </section>
  )
}

export default Hero
