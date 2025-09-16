import React from "react"
import Image from "next/image"
import { noCode } from "@/content/sections"

function highlightSynthia(text: string) {
  const parts = text.split(/(Synthia)/g)
  return parts.map((part, idx) =>
    part === "Synthia" ? (
      <span key={idx} className="font-semibold text-primary-blue">
        {part}
      </span>
    ) : (
      <React.Fragment key={idx}>{part}</React.Fragment>
    )
  )
}

function getImageForFeature(title: string): string {
  const key = title.toLowerCase()
  if (key.includes("operator")) return "/operators.png"
  if (key.includes("dataset")) return "/datasets.png"
  if (key.includes("test")) return "/test.png"
  return "/operators.png"
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  const imgSrc = getImageForFeature(title)
  return (
    <div className="group">
      <div className="rounded-[16px] min-h-[500px] bg-primary-white/80 border border-secondary-grey text-left shadow-sm relative overflow-hidden transition-transform duration-300 ease-out will-change-transform group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary-blue/10">
        <div className="p-6">
          <div className="text-h3 font-geist font-semibold text-primary-black">
            {title}
          </div>
          <p className="mt-2 text-body2 font-geist text-primary-dark-gray">
            {highlightSynthia(body)}
          </p>
        </div>
        <div className="bottom-[-10px] absolute right-[-10px] pointer-events-none">
          <Image
            src={imgSrc}
            alt=""
            width={562}
            height={320}
            className="w-[562px] h-auto transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-105"
          />
        </div>
        {/* sheen */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-[20%] bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.25)_35%,rgba(255,255,255,0)_60%)] animate-[pan_2s_linear]" />
        </div>
      </div>
    </div>
  )
}

export function NoCodeSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto px-20 text-center">
        <h2 className="text-h2 font-geist font-semibold leading-none text-primary-black">
          {noCode.title}
        </h2>
        <p className="mt-2 text-body font-geist text-primary-dark-gray">
          {noCode.subtitle}
        </p>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {noCode.features.map((f) => (
            <FeatureCard key={f.title} title={f.title} body={f.body} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NoCodeSection
