import React from "react"

interface ColorSwatchProps {
  name: string
  color: string
  description?: string
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  color,
  description,
}) => (
  <div className="flex flex-col items-center space-y-2">
    <div
      className="w-20 h-20 rounded-lg border border-gray-200 shadow-sm"
      style={{ backgroundColor: color }}
    />
    <div className="text-center">
      <p className="text-sm font-medium text-gray-900">{name}</p>
      <p className="text-xs text-gray-500 font-mono">{color}</p>
      {description && (
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      )}
    </div>
  </div>
)

export const ColorPalette: React.FC = () => {
  const primaryColors = [
    { name: "Blue", color: "#1a76ff" },
    { name: "Red", color: "#ee54a7" },
    { name: "Green", color: "#28cc57" },
    { name: "Yellow", color: "#ffa31a" },
    { name: "Purple", color: "#9d62ff" },
    { name: "White", color: "#ffffff" },
    { name: "Black", color: "#000000" },
    { name: "Dark Gray", color: "#5a5a5a" },
  ]

  const secondaryColors = [
    { name: "Secondary Blue", color: "#dae3fe" },
    { name: "Secondary Red", color: "#eebfd8" },
    { name: "Secondary Green", color: "#9fe8b3" },
    { name: "Secondary Yellow", color: "#ffdeae" },
    { name: "Secondary Purple", color: "#d4b8ff" },
    { name: "Grey", color: "#eeeeee" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Primary Colors
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {primaryColors.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Secondary Colors
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {secondaryColors.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorPalette
