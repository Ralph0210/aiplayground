import type { Meta, StoryObj } from "@storybook/react"
import { CTAButton } from "../components/CTAButton"

const meta: Meta<typeof CTAButton> = {
  title: "Components/CTAButton",
  component: CTAButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "clicked" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Get started",
    variant: "primary",
    size: "md",
  },
}

export const Secondary: Story = {
  args: {
    children: "Learn more",
    variant: "secondary",
    size: "md",
  },
}

export const Small: Story = {
  args: {
    children: "Get started",
    variant: "primary",
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    children: "Get started",
    variant: "primary",
    size: "lg",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Primary Variants</h3>
        <div className="flex gap-4 items-center">
          <CTAButton variant="primary" size="sm">
            Small
          </CTAButton>
          <CTAButton variant="primary" size="md">
            Medium
          </CTAButton>
          <CTAButton variant="primary" size="lg">
            Large
          </CTAButton>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Secondary Variants</h3>
        <div className="flex gap-4 items-center">
          <CTAButton variant="secondary" size="sm">
            Small
          </CTAButton>
          <CTAButton variant="secondary" size="md">
            Medium
          </CTAButton>
          <CTAButton variant="secondary" size="lg">
            Large
          </CTAButton>
        </div>
      </div>
    </div>
  ),
}
