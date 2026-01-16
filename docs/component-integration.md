# Component Integration Guide

This document provides guidelines for integrating React components into the KAIKI Link codebase.

## Project Structure

The KAIKI Link project follows shadcn/ui conventions:

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles & CSS variables
├── components/
│   ├── ui/                # Reusable UI components (shadcn style)
│   │   ├── dialog.tsx
│   │   ├── hero-1.tsx
│   │   ├── testimonials-columns.tsx
│   │   └── ...
│   └── sections/          # Page section components
│       └── testimonials.tsx
└── lib/
    ├── utils.ts           # Utility functions (cn helper)
    └── types.ts           # TypeScript types
```

## Prerequisites

The codebase supports:
- ✅ **shadcn project structure** - Components in `/components/ui`
- ✅ **Tailwind CSS v4** - Configured with CSS variables
- ✅ **TypeScript** - Full type support

### Required Dependencies

```bash
# Already installed
npm install motion lucide-react @radix-ui/react-dialog clsx tailwind-merge
```

## Integration Checklist

When adding a new component:

### 1. Analyze Component Structure

- [ ] Identify all required imports
- [ ] Check for external dependencies (motion, icons, etc.)
- [ ] Note any TypeScript interfaces/types

### 2. Copy Component to Correct Location

```bash
# UI components go to:
src/components/ui/component-name.tsx

# Page sections go to:
src/components/sections/section-name.tsx
```

### 3. Install Dependencies

```bash
npm install <package-name>
```

### 4. Update Imports

```tsx
// Use the @ alias for clean imports
import { ComponentName } from "@/components/ui/component-name";
```

### 5. Add to Page

```tsx
// In page.tsx or layout
import ComponentName from "@/components/sections/component-name";

// Use in JSX
<ComponentName />
```

---

## Example: TestimonialsColumn Integration

### Component Location
`src/components/ui/testimonials-columns.tsx`

### Section Location
`src/components/sections/testimonials.tsx`

### Dependencies
- `motion` (already installed)

### Props Interface

```tsx
interface Testimonial {
  text: string;
  image: string;  // URL to avatar
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;  // Animation duration in seconds
}
```

### Usage in Page

```tsx
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <Testimonials />
      {/* More sections */}
    </>
  );
}
```

### Customization

To customize testimonials data, edit `src/components/sections/testimonials.tsx`:

```tsx
const testimonials: Testimonial[] = [
  {
    text: "Your testimonial text",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Name",
    role: "Role",
  },
  // ... more testimonials
];
```

---

## CSS Variables

The project uses CSS variables for theming. Key variables:

```css
/* Light mode (default) */
--background: #ffffff;
--surface: #f8fafc;
--text: #1e293b;
--text-muted: #64748b;
--primary: #6366f1;
--border: #e2e8f0;
```

Components should use these variables for consistent theming:

```tsx
className="bg-[var(--background)] text-[var(--text)]"
```

---

## Responsive Behavior

Components follow mobile-first responsive design:

- Mobile: Single column layouts
- Tablet (md:): Two column layouts
- Desktop (lg:): Full multi-column layouts

Example from TestimonialsColumn:

```tsx
<TestimonialsColumn testimonials={firstColumn} duration={15} />
<TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
<TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
```

---

## Image Assets

For avatar images, use:
- Random User API: `https://randomuser.me/api/portraits/{gender}/{id}.jpg`
- Unsplash: `https://images.unsplash.com/photo-xxx`

For icons, use `lucide-react`:

```tsx
import { Icon } from "lucide-react";

<Icon className="w-6 h-6" />
```

---

## Paddle Verification

Adding UI components like testimonials **does not affect** Paddle verification or any payment integration. These are purely visual components that enhance the user experience.
