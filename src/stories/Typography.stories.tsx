import type { Meta, StoryObj } from "@storybook/react"
import { Typography } from "../components/Typography"

const meta: Meta<typeof Typography> = {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Headers: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Header Styles</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm text-gray-500 font-mono">
            text-[96px] font-[Geist] font-semibold leading-none
          </div>
          <div className="text-[96px] font-[Geist] font-semibold leading-none text-gray-900">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-xs text-gray-400">
            Font: Geist, Size: 96px, Weight: 600, Line Height: 1
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-500 font-mono">
            text-[64px] font-[Geist] font-semibold leading-none
          </div>
          <div className="text-[64px] font-[Geist] font-semibold leading-none text-gray-900">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-xs text-gray-400">
            Font: Geist, Size: 64px, Weight: 600, Line Height: 1
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-500 font-mono">
            text-[32px] font-[Geist] font-semibold leading-none
          </div>
          <div className="text-[32px] font-[Geist] font-semibold leading-none text-gray-900">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-xs text-gray-400">
            Font: Geist, Size: 32px, Weight: 600, Line Height: 1
          </div>
        </div>
      </div>
    </div>
  ),
}

export const BodyText: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Body Text Styles
      </h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm text-gray-500 font-mono">
            text-[22px] font-[Geist] font-normal leading-none
          </div>
          <div className="text-[22px] font-[Geist] font-normal leading-none text-gray-900">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-xs text-gray-400">
            Font: Geist, Size: 22px, Weight: 400, Line Height: 1
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-500 font-mono">
            text-[20px] font-[Geist] font-normal leading-none
          </div>
          <div className="text-[20px] font-[Geist] font-normal leading-none text-gray-900">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-xs text-gray-400">
            Font: Geist, Size: 20px, Weight: 400, Line Height: 1
          </div>
        </div>
      </div>
    </div>
  ),
}
