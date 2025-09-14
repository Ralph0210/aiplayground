import { CTAButton, ColorPalette, Typography } from "@/components"

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-[96px] font-[Geist] font-semibold leading-none text-[#000000]">
            AI Playground
          </h1>
          <p className="text-[22px] font-[Geist] font-normal leading-none text-[#5a5a5a]">
            Design System Demo
          </p>
        </div>

        {/* CTA Button Demo */}
        <div className="space-y-8">
          <h2 className="text-[64px] font-[Geist] font-semibold leading-none text-[#000000]">
            CTA Button Component
          </h2>
          <div className="flex gap-4 items-center justify-center">
            <CTAButton variant="primary" size="md">
              Get Started
            </CTAButton>
            <CTAButton variant="secondary" size="md">
              Learn More
            </CTAButton>
          </div>
        </div>

        {/* Typography Demo */}
        <div className="space-y-8">
          <h2 className="text-[64px] font-[Geist] font-semibold leading-none text-[#000000]">
            Typography Scale
          </h2>
          <div className="space-y-6">
            <div className="text-[32px] font-[Geist] font-semibold leading-none text-[#000000]">
              H3 - The quick brown fox jumps over the lazy dog
            </div>
            <div className="text-[22px] font-[Geist] font-normal leading-none text-[#000000]">
              Body - The quick brown fox jumps over the lazy dog
            </div>
            <div className="text-[20px] font-[Geist] font-normal leading-none text-[#5a5a5a]">
              Body2 - The quick brown fox jumps over the lazy dog
            </div>
          </div>
        </div>

        {/* Color Palette Demo */}
        <div className="space-y-8">
          <h2 className="text-[64px] font-[Geist] font-semibold leading-none text-[#000000]">
            Color Palette
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 rounded-lg bg-[#1a76ff]"></div>
              <span className="text-sm font-medium">Primary Blue</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 rounded-lg bg-[#ee54a7]"></div>
              <span className="text-sm font-medium">Primary Red</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 rounded-lg bg-[#28cc57]"></div>
              <span className="text-sm font-medium">Primary Green</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 rounded-lg bg-[#ffa31a]"></div>
              <span className="text-sm font-medium">Primary Yellow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
