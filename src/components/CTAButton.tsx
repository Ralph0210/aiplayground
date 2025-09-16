import React from "react"

interface CTAButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  /** Optional custom colors using tokens/hex. */
  colors?: {
    base: string
    hover: string
    active: string
    border?: string
    text?: string
  }
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  colors,
}) => {
  const baseClasses =
    "group relative rounded-cta font-geist font-medium text-center whitespace-nowrap transition-transform duration-150 active:translate-y-[3px]"

  const useCustom = Boolean(colors)

  const hoverBg = useCustom
    ? "hover:bg-[var(--btn-bg-hover)]"
    : "hover:bg-neutral-50"

  const activeBg = useCustom
    ? "active:bg-[var(--btn-bg-active)]"
    : "active:bg-neutral-50"

  const textColor = useCustom
    ? "text-[color:var(--btn-text)]"
    : "text-primary-black"

  const variantClasses = useCustom
    ? `bg-[var(--btn-bg)] ${hoverBg} ${activeBg} ${textColor}`
    : {
        primary:
          "bg-primary-white text-primary-black hover:bg-neutral-50 active:bg-neutral-50 shadow-cta",
        secondary:
          "bg-secondary-grey text-primary-black hover:bg-neutral-50 active:bg-neutral-50",
      }[variant]

  const sizeClasses = {
    sm: "px-6 py-3 text-body2",
    md: "px-20 py-5 text-body",
    lg: "px-24 py-6 text-h3",
  }

  const classes = `${baseClasses} ${variantClasses} ${sizeClasses[size]} ${className}`

  const defaultBorder = "border-[0px_0px_6px] bottom-[-6px]"
  const pressedBorder =
    "group-active:border-[0px_0px_3px] group-active:bottom-[-3px]"

  const styleVars: React.CSSProperties | undefined = useCustom
    ? ({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore CSS variable names
        "--btn-bg": colors?.base,
        // @ts-ignore
        "--btn-bg-hover": colors?.hover,
        // @ts-ignore
        "--btn-bg-active": colors?.active,
        // @ts-ignore
        "--btn-border": colors?.border ?? "var(--color-secondary-grey)",
        // @ts-ignore
        "--btn-text": colors?.text ?? "var(--color-primary-black)",
      } as React.CSSProperties)
    : undefined

  return (
    <button
      className={classes}
      onClick={onClick}
      type="button"
      style={styleVars}
    >
      <div className="flex items-center justify-center gap-2.5">{children}</div>
      {/* bottom highlight ring */}
      <div
        className={`absolute ${useCustom ? "border-[color:var(--btn-border)]" : "border-secondary-grey"} border-solid left-0 right-0 rounded-cta top-0 pointer-events-none ${defaultBorder} ${pressedBorder} transition-all duration-150 ease-out`}
        aria-hidden="true"
      />
    </button>
  )
}

export default CTAButton
