import React from "react"

interface TypographyExampleProps {
  name: string
  className: string
  text: string
  description?: string
}

const TypographyExample: React.FC<TypographyExampleProps> = ({
  name,
  className,
  text,
  description,
}) => (
  <div className="space-y-2">
    <div className="text-sm text-gray-500 font-mono">{className}</div>
    <div className={`${className} text-gray-900`}>{text}</div>
    {description && <div className="text-xs text-gray-400">{description}</div>}
  </div>
)

export const Typography: React.FC = () => {
  const typographyExamples = [
    {
      name: "H1 - Header",
      className: "text-h1 font-geist font-semibold leading-none",
      text: "The quick brown fox jumps over the lazy dog",
      description: "Font: Geist, Size: 96px, Weight: 600, Line Height: 1",
    },
    {
      name: "H2 - Header",
      className: "text-h2 font-geist font-semibold leading-none",
      text: "The quick brown fox jumps over the lazy dog",
      description: "Font: Geist, Size: 64px, Weight: 600, Line Height: 1",
    },
    {
      name: "H3 - Header",
      className: "text-h3 font-geist font-semibold leading-none",
      text: "The quick brown fox jumps over the lazy dog",
      description: "Font: Geist, Size: 32px, Weight: 600, Line Height: 1",
    },
    {
      name: "Body - Normal",
      className: "text-body font-geist font-normal leading-none",
      text: "The quick brown fox jumps over the lazy dog",
      description: "Font: Geist, Size: 22px, Weight: 400, Line Height: 1",
    },
    {
      name: "Body2",
      className: "text-body2 font-geist font-normal leading-none",
      text: "The quick brown fox jumps over the lazy dog",
      description: "Font: Geist, Size: 20px, Weight: 400, Line Height: 1",
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Typography Scale
      </h2>
      <div className="space-y-6">
        {typographyExamples.map((example) => (
          <TypographyExample key={example.name} {...example} />
        ))}
      </div>
    </div>
  )
}

export default Typography
