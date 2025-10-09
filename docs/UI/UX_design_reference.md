# BGC Foundation UI/UX Design Reference

## Brand Colors & Design System

### Primary Color Palette
- **Primary**: #13b2c0 (Teal/Cyan) - Trust, healthcare, professionalism
- **Secondary**: #2b2868 (Deep Navy) - Authority, stability, medical expertise
- **Primary Light**: #4fc3cf (Lighter teal for hover states)
- **Primary Dark**: #0f8a95 (Darker teal for emphasis)

### Supporting Colors
- **White**: #ffffff (Clean backgrounds, cards)
- **Light Gray**: #f8f9fa (Section backgrounds)
- **Medium Gray**: #6c757d (Text secondary)
- **Dark Gray**: #343a40 (Primary text)


### Gradients
- **Primary Gradient**: linear-gradient(135deg, #13b2c0 0%, #2b2868 100%)
- **Light Gradient**: linear-gradient(135deg, #4fc3cf 0%, #13b2c0 100%)
- **Card Gradient**: linear-gradient(135deg, rgba(19,178,192,0.05) 0%, rgba(43,40,104,0.05) 100%)

---

## Typography System

### Font Family
- **Primary**: 'Inter', system-ui, -apple-system, sans-serif
- **Headings**: 'Inter', weight 600-700
- **Body**: 'Inter', weight 400-500
- **Accent**: 'Inter', weight 500-600

### Typography Scale
```css
--font-xs: 0.75rem (12px)
--font-sm: 0.875rem (14px)
--font-base: 1rem (16px)
--font-lg: 1.125rem (18px)
--font-xl: 1.25rem (20px)
--font-2xl: 1.5rem (24px)
--font-3xl: 1.875rem (30px)
--font-4xl: 2.25rem (36px)
--font-5xl: 3rem (48px)
--font-6xl: 3.75rem (60px)
```

### Text Hierarchy
- **H1 Hero**: font-size: 3.75rem, font-weight: 700, line-height: 1.1
- **H2 Section**: font-size: 2.25rem, font-weight: 600, line-height: 1.2
- **H3 Subsection**: font-size: 1.875rem, font-weight: 600, line-height: 1.3
- **H4 Card Title**: font-size: 1.25rem, font-weight: 600, line-height: 1.4
- **Body Large**: font-size: 1.125rem, font-weight: 400, line-height: 1.6
- **Body Regular**: font-size: 1rem, font-weight: 400, line-height: 1.6
- **Caption**: font-size: 0.875rem, font-weight: 500, line-height: 1.5

---

## Layout System

### Container & Spacing
- **Max Width**: 1200px (main container)
- **Wide Container**: 1400px (hero sections)
- **Narrow Container**: 800px (content sections)
- **Padding**: 1rem mobile, 2rem tablet, 3rem desktop
- **Section Spacing**: 4rem mobile, 6rem tablet, 8rem desktop

### Grid System
- **12-column grid** with CSS Grid
- **Gap**: 1.5rem mobile, 2rem desktop
- **Breakpoints**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
  - Large: 1440px+

---

## Component Design Specifications

### Navigation Bar
```
Style: Clean, minimalist, sticky header
Background: White with subtle shadow
Height: 80px
Logo: Left-aligned, max-height: 40px
Navigation: Center-aligned horizontal menu
CTA Button: Right-aligned, primary color button
Mobile: Hamburger menu with slide-out drawer
```

### Hero Section
```
Layout: Split-screen design (60/40 text/image)
Background: Light gradient with subtle pattern
Height: 90vh minimum
Content Alignment: Left-aligned text, right-aligned image
Image: Professional doctor/medical team photo
CTA Placement: Below hero text with 2rem margin
Statistics: Floating cards overlaying hero image
```

### Cards & Components

#### Service Cards
```
Style: Clean white cards with subtle shadow
Border Radius: 12px
Padding: 2rem
Shadow: 0 4px 6px rgba(0, 0, 0, 0.05)
Hover Effect: Lift animation + primary color accent
Icon: Top-left, 48px, primary color
Title: H4 styling, 1.5rem margin-top
Description: Body text, 1rem margin-top
```

#### Statistics Cards
```
Style: Gradient background cards
Background: Primary gradient with opacity
Border Radius: 16px
Padding: 2rem
Text Color: White
Number: Large font (3xl), bold weight
Label: Small font, medium weight
Animation: CountUp on scroll into view
```

#### Doctor/Team Cards
```
Style: Professional profile cards
Image: Circular, 120px diameter, centered
Background: White card with border
Border Radius: 16px
Padding: 2rem
Shadow: Soft shadow with hover lift
Name: H4 styling, centered
Title: Body text, primary color, centered
Qualifications: Small text, gray color
```

#### Impact/Results Cards
```
Style: Data visualization cards
Layout: Icon + Number + Description
Background: Light background with colored accent
Border: Left border in primary color (4px)
Padding: 1.5rem
Icon: 32px, primary color
Number: 2xl font, bold, primary color
Description: Body text, dark gray
```

### Buttons & Interactive Elements

#### Primary Button
```
Background: Primary color (#13b2c0)
Color: White
Padding: 12px 32px
Border Radius: 8px
Font Weight: 600
Hover: Darker shade + lift animation
Focus: Outline ring in primary color
```

#### Secondary Button
```
Background: Transparent
Border: 2px solid primary color
Color: Primary color
Padding: 10px 30px
Border Radius: 8px
Font Weight: 600
Hover: Filled background + white text
```

#### Ghost Button
```
Background: Transparent
Color: Dark gray
Padding: 8px 24px
Border Radius: 6px
Font Weight: 500
Hover: Light gray background
```

---

## Section-Specific Design Patterns

### Hero Section Design
```
Layout: Asymmetrical split with dominant text side
Text Side (60%):
  - Large headline with gradient text effect
  - Subtitle with comfortable reading width
  - Key points with checkmark icons
  - Primary CTA button
  - Statistics badges floating below

Image Side (40%):
  - Professional medical team photo
  - Overlay statistics cards
  - Subtle background geometric patterns
  - Mobile: Stack vertically, image first
```

### "About Our Goal" Section
```
Layout: Centered content with side illustration
Background: Light gray section
Content: Max-width 800px, centered
Illustration: Medical/healthcare themed
Statistics: Grid layout of key metrics
Mobile: Single column, image below text
```

### "Meet Our Doctors" Section
```
Layout: Grid of doctor cards (3-4 per row)
Header: Centered section title
Cards: Circular photos with hover effects
Navigation: Carousel arrows on mobile
Featured Doctor: Larger card with more details
```

### Services Grid
```
Layout: 8-card grid (4 columns desktop, 2 mobile)
Cards: Icon + Title + Description format
Icons: Consistent style, primary color
Spacing: Even grid with comfortable gaps
Hover Effects: Subtle lift and primary accent
```

### Impact/Statistics Section
```
Layout: Large numbers with descriptions
Style: Dark section with white text
Numbers: Animated counters
Background: Primary gradient or dark solid
Layout: 4 columns desktop, 2 mobile
Accent: Divider lines between stats
```

### Mobile Endoscopy Feature Section
```
Layout: Hero-style section with emphasis
Background: Primary gradient
Content: White text on colored background
CTA: Prominent white button
Supporting: Feature list with icons
Image: Mobile unit mockup or diagram
```

---

## Animation & Interaction Guidelines

### Micro-interactions
- **Hover States**: 0.3s ease-in-out transitions
- **Button Clicks**: 0.2s scale transform
- **Card Hovers**: Lift effect with shadow increase
- **Loading States**: Subtle pulse animations

### Scroll Animations
- **Fade In**: Elements appear on scroll with 0.6s duration
- **Counter Animation**: Numbers count up when in viewport
- **Stagger Effect**: Card grids animate with 0.1s delays
- **Parallax**: Subtle background movement on scroll

### Page Transitions
- **Route Changes**: 0.4s fade transition
- **Modal Overlays**: Scale and fade entrance
- **Mobile Menu**: Slide-in from right with backdrop

---

## Responsive Design Breakpoints

### Mobile (320px - 767px)
- Single column layouts
- Stacked navigation
- Larger touch targets (44px minimum)
- Simplified typography scale
- Reduced padding and margins

### Tablet (768px - 1023px)
- 2-column layouts where appropriate
- Maintained card grids
- Horizontal navigation
- Optimized for touch and mouse

### Desktop (1024px+)
- Full multi-column layouts
- Hover interactions
- Maximum content width utilization
- Advanced grid systems

### Large Screens (1440px+)
- Centered max-width containers
- Enhanced spacing
- Larger imagery
- Expanded grid layouts

---

## Accessibility Guidelines

### Color Contrast
- All text meets WCAG AAA standards (7:1 ratio)
- Interactive elements have 3:1 minimum
- Focus indicators are clearly visible

### Navigation
- Keyboard accessible throughout
- Screen reader friendly structure
- Semantic HTML elements
- Skip links for main content

### Content Structure
- Proper heading hierarchy (H1-H6)
- Alt text for all images
- Descriptive link text
- Form labels and error messages

---

## Content Layout Patterns

### Page Structure Template
```
1. Navigation (sticky)
2. Hero Section (full viewport)
3. Key Statistics (floating or integrated)
4. About/Mission Section
5. Services Grid
6. Impact/Results Section
7. Team Showcase
8. Call-to-Action Section
9. Footer
```

### Content Density
- **High**: Statistics, data-heavy sections
- **Medium**: Service descriptions, team info
- **Low**: Hero sections, call-to-action areas

### Visual Hierarchy
- **Primary**: Main headlines, key statistics
- **Secondary**: Section headers, important CTAs
- **Tertiary**: Body content, supporting information

This design reference ensures Claude Code can create a professional, modern healthcare website that matches the visual quality of the reference while maintaining BGC Foundation's brand identity and serving their specific content needs.