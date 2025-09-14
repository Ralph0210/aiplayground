import React from "react"

interface CTAButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseClasses =
    "relative rounded-[200px] font-[Geist] font-medium text-center whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95"

  const variantClasses = {
    primary: "bg-[#ffffff] text-[#000000] shadow-[0_0_6px_#eeeeee]",
    secondary: "bg-[#eeeeee] text-[#000000]",
  }

  const sizeClasses = {
    sm: "px-6 py-3 text-[20px]",
    md: "px-20 py-5 text-[22px]",
    lg: "px-24 py-6 text-[32px]",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={classes} onClick={onClick} type="button">
      <div className="flex items-center justify-center gap-2.5">{children}</div>
      {variant === "primary" && (
        <div
          className="absolute border-[#eeeeee] border-[0px_0px_6px] border-solid bottom-[-6px] left-0 pointer-events-none right-0 rounded-cta top-0"
          aria-hidden="true"
        />
      )}
    </button>
  )
}

export default CTAButton
