import React from "react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="pt-3">
      <div className="max-w-[1152px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-end gap-2">
          <Image
            src="/logo.svg"
            alt="AI Playground logo"
            width={24}
            height={24}
          />
          <span className="text-[22px] leading-none font-geist font-semibold text-primary-black">
            AI Playground
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8">
          {/* Language */}
          <button className="inline-flex items-center gap-[6px] text-[20px] leading-none font-geist text-primary-black">
            <span>English</span>
            <span className="inline-block rotate-[-90deg]">
              <svg
                width="8"
                height="11"
                viewBox="0 0 8 11"
                fill="none"
                aria-hidden
              >
                <path
                  d="M0 5.49684C0 5.65516 0.056075 5.79448 0.174456 5.9148L5.11529 10.8227C5.22121 10.9367 5.35828 10.9937 5.52028 10.9937C5.84426 10.9937 6.09348 10.7467 6.09348 10.4174C6.09348 10.2527 6.02495 10.1135 5.92527 10.0058L1.38942 5.49684L5.92527 0.987911C6.02495 0.880256 6.09348 0.734601 6.09348 0.576282C6.09348 0.246978 5.84426 0 5.52028 0C5.35828 0 5.22121 0.0569949 5.11529 0.164652L0.174456 5.07887C0.056075 5.19287 0 5.33852 0 5.49684Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>

          {/* Sign in */}
          <Link
            href="#"
            className="relative inline-flex items-center justify-center px-[20px] py-3 rounded-cta text-[20px] leading-none font-geist text-primary-black"
          >
            <span className="relative z-[1]">Sign in</span>
            <span
              aria-hidden
              className="absolute inset-0 rounded-cta border border-border-muted"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
