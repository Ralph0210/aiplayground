# Design System

This project includes a comprehensive design system built with Tailwind CSS and Storybook, based on design tokens extracted from Figma.

## Design Tokens

### Colors

#### Primary Colors

- **Blue**: `#1a76ff` - Primary brand color
- **Red**: `#ee54a7` - Error/alert color
- **Green**: `#28cc57` - Success color
- **Yellow**: `#ffa31a` - Warning color
- **Purple**: `#9d62ff` - Accent color
- **White**: `#ffffff` - Background color
- **Black**: `#000000` - Text color
- **Dark Gray**: `#5a5a5a` - Secondary text color

#### Secondary Colors

- **Secondary Blue**: `#dae3fe` - Light blue variant
- **Secondary Red**: `#eebfd8` - Light red variant
- **Secondary Green**: `#9fe8b3` - Light green variant
- **Secondary Yellow**: `#ffdeae` - Light yellow variant
- **Secondary Purple**: `#d4b8ff` - Light purple variant
- **Grey**: `#eeeeee` - Light gray variant

### Typography

#### Font Family

- **Primary**: Geist (Google Fonts)

#### Font Sizes

- **H1**: 96px, Weight: 600, Line Height: 1
- **H2**: 64px, Weight: 600, Line Height: 1
- **H3**: 32px, Weight: 600, Line Height: 1
- **Body**: 22px, Weight: 400, Line Height: 1
- **Body2**: 20px, Weight: 400, Line Height: 1

### Components

#### CTA Button

A call-to-action button component with multiple variants and sizes.

**Variants:**

- `primary`: White background with black text and shadow
- `secondary`: Light gray background with black text

**Sizes:**

- `sm`: Small size (px-6 py-3)
- `md`: Medium size (px-20 py-5) - Default
- `lg`: Large size (px-24 py-6)

**Usage:**

```tsx
import { CTAButton } from "@/components"
;<CTAButton variant="primary" size="md" onClick={handleClick}>
  Get started
</CTAButton>
```

## Tailwind Configuration

The design tokens are configured in `tailwind.config.ts` and can be used throughout the project:

```tsx
// Colors
<div className="bg-primary-blue text-primary-white">
<div className="bg-secondary-grey text-primary-black">

// Typography
<h1 className="text-h1 font-geist font-semibold">
<p className="text-body font-geist font-normal">

// CTA Button specific
<button className="rounded-cta shadow-cta">
```

## Storybook

Run Storybook to explore all design tokens and components:

```bash
npm run storybook
```

Available stories:

- **Design System/Color Palette**: View all primary and secondary colors
- **Design System/Typography**: Explore all typography styles
- **Components/CTAButton**: Interactive CTA button examples

## File Structure

```
src/
├── components/
│   ├── CTAButton.tsx      # CTA button component
│   ├── ColorPalette.tsx   # Color palette display component
│   ├── Typography.tsx     # Typography display component
│   └── index.ts           # Component exports
├── stories/
│   ├── CTAButton.stories.tsx
│   ├── ColorPalette.stories.tsx
│   └── Typography.stories.tsx
└── app/
    └── globals.css        # Global styles with Geist font
```

## Usage in Your Landing Page

1. Import components from the design system
2. Use Tailwind classes with the configured design tokens
3. Follow the established patterns for consistency
4. Use Storybook to reference component variations and styling

This design system ensures consistency across your landing page and provides a solid foundation for future development.
