import type { Meta, StoryObj } from "@storybook/react"
import { ColorPalette } from "../components/ColorPalette"

const meta: Meta<typeof ColorPalette> = {
  title: "Design System/Color Palette",
  component: ColorPalette,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimaryColors: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Primary Colors</h2>
      <div className="grid grid-cols-4 gap-6">
        {[
          { name: "Blue", color: "#1a76ff" },
          { name: "Red", color: "#ee54a7" },
          { name: "Green", color: "#28cc57" },
          { name: "Yellow", color: "#ffa31a" },
          { name: "Purple", color: "#9d62ff" },
          { name: "White", color: "#ffffff" },
          { name: "Black", color: "#000000" },
          { name: "Dark Gray", color: "#5a5a5a" },
        ].map((color) => (
          <div
            key={color.name}
            className="flex flex-col items-center space-y-2"
          >
            <div
              className="w-20 h-20 rounded-lg border border-gray-200 shadow-sm"
              style={{ backgroundColor: color.color }}
            />
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">{color.name}</p>
              <p className="text-xs text-gray-500 font-mono">{color.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const SecondaryColors: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Secondary Colors
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {[
          { name: "Secondary Blue", color: "#dae3fe" },
          { name: "Secondary Red", color: "#eebfd8" },
          { name: "Secondary Green", color: "#9fe8b3" },
          { name: "Secondary Yellow", color: "#ffdeae" },
          { name: "Secondary Purple", color: "#d4b8ff" },
          { name: "Grey", color: "#eeeeee" },
        ].map((color) => (
          <div
            key={color.name}
            className="flex flex-col items-center space-y-2"
          >
            <div
              className="w-20 h-20 rounded-lg border border-gray-200 shadow-sm"
              style={{ backgroundColor: color.color }}
            />
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">{color.name}</p>
              <p className="text-xs text-gray-500 font-mono">{color.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}
