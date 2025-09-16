import React from "react"

type Variant = "hero" | "pastel"

type GradientPanelProps = React.PropsWithChildren<{
  variant?: Variant
  className?: string
  animated?: boolean
  grain?: boolean
}>

const pastelBg =
  "bg-[linear-gradient(90deg,var(--color-secondary-blue)_0%,var(--color-secondary-purple)_50%,var(--color-secondary-red)_100%)]"

// Encoded grain texture as data URL to avoid JSX parsing issues
const grainSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.3"/></svg>`
const grainDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(grainSvg)}`

export function GradientPanel({
  variant = "pastel",
  className = "",
  children,
  animated = true,
  grain = true,
}: GradientPanelProps) {
  if (variant === "hero") {
    return (
      <div
        className={`relative overflow-hidden rounded-[24px] bg-primary-black isolate ${className}`}
      >
        {/* Radial-gradient blobs (token-based) */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute top-[-6rem] left-[-20rem] w-[1000px] h-[600px] rounded-full ${animated ? "animate-[blob3_20s_ease-in-out_infinite]" : ""}`}
            style={{
              transform: "rotate(-2deg)",
              // explicit ellipse: rx ry and centered
              backgroundImage:
                "radial-gradient( ellipse 65% 50% at 50% 50%, var(--color-primary-blue) 0%, color-mix(in srgb, var(--color-primary-blue) 65%, transparent) 40%, transparent 75% )",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              filter: "blur(300px)",
              opacity: 1,
              scale: "1.5",
            }}
          />
          <div
            className={`absolute top-[-6rem] left-[-20rem] w-[1000px] h-[600px] rounded-full ${animated ? "animate-[blob_20s_ease-in-out_infinite]" : ""}`}
            style={{
              transform: "rotate(-2deg)",
              // explicit ellipse: rx ry and centered
              backgroundImage:
                "radial-gradient( ellipse 65% 50% at 50% 50%, var(--color-accent-pink) 0%, color-mix(in srgb, var(--color-accent-pink) 65%, transparent) 40%, transparent 75% )",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              filter: "blur(300px)",
              opacity: 1,
              scale: "1.5",
            }}
          />

          <div
            className={`absolute top-[-4rem] right-[-8rem] w-[900px] h-[680px] rounded-full ${animated ? "animate-[blob2_24s_ease-in-out_infinite]" : ""}`}
            style={{
              animationDelay: "-4s",
              transform: "rotate(-2deg)",
              backgroundImage:
                "radial-gradient( circle at 50% 50%, var(--color-accent-amber) 0%, color-mix(in srgb, var(--color-accent-amber) 60%, transparent) 40%, transparent 70% )",
              filter: "blur(130px)",
              opacity: 1,
              scale: "1.5",
            }}
          />

          <div
            className={`absolute bottom-[-10rem] left-[-6rem] w-[720px] h-[680px] rounded-full ${animated ? "animate-[blob_26s_ease-in-out_infinite]" : ""}`}
            style={{
              animationDelay: "-8s",
              transform: "rotate(-2deg)",
              backgroundImage:
                "radial-gradient( circle at 50% 50%, var(--color-accent-cyan) 0%, color-mix(in srgb, var(--color-accent-cyan) 60%, transparent) 40%, transparent 70% )",
              filter: "blur(140px)",
              opacity: 1,
              scale: "1.2",
            }}
          />
          <div
            className={`absolute bottom-[-8rem] right-[-4rem] w-[760px] h-[720px] rounded-full ${animated ? "animate-[blob2_28s_ease-in-out_infinite]" : ""}`}
            style={{
              animationDelay: "-12s",
              transform: "rotate(6deg)",
              backgroundImage:
                "radial-gradient( circle at 50% 50%, var(--color-accent-red) 0%, color-mix(in srgb, var(--color-accent-red) 60%, transparent) 40%, transparent 70% )",
              filter: "blur(140px)",
              opacity: 1,
              scale: "1.2",
            }}
          />
          <div
            className={`absolute bottom-[-20rem] right-[-4rem] w-[720px] h-[720px] rounded-full ${animated ? "animate-[blob_20s_ease-in-out_infinite]" : ""}`}
            style={{
              animationDelay: "-12s",
              transform: "rotate(6deg)",
              backgroundImage:
                "radial-gradient( circle at 50% 50%, var(--color-accent-teal) 0%, color-mix(in srgb, var(--color-accent-teal) 60%, transparent) 40%, transparent 70% )",
              filter: "blur(140px)",
              opacity: 1,
              scale: "1.2",
            }}
          />
        </div>

        {/* Matte overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-white/8 backdrop-blur-[2px]" />

        {/* Optional grain */}
        {grain && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 mix-blend-multiply opacity-[0.06]"
            style={{
              backgroundImage: `url(${grainDataUrl})`,
              backgroundSize: "128px 128px",
              animation: animated ? "grain 6s steps(10) infinite" : undefined,
            }}
          />
        )}

        <div className="relative z-20">{children}</div>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] bg-primary-black ${pastelBg} ${className}`}
    >
      {/* Matte overlay for pastel too */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white/8 backdrop-blur-[2px]" />
      <div className="relative z-20">{children}</div>
    </div>
  )
}

export default GradientPanel
