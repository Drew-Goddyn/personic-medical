# Personic Medical - Design & Brand Guide
*Reference document for website development*

## Executive Summary
This guide provides comprehensive design and content direction for the Personic Medical static website, derived from analysis of the mayonic-medical repository. The site should embody modern medical professionalism while maintaining approachability and patient-centered design principles.

## Brand Identity

### Color Palette
**Primary Colors**
- `#52683E` - **Dark Green** (Primary brand color)
  - Usage: Headers, primary buttons, navigation, key text
  - Conveys: Trust, health, nature, stability
- `#3B3B37` - **Dark Grey** (Primary dark)
  - Usage: Main body text, secondary headers
  - Conveys: Professionalism, readability

**Secondary Colors**
- `#589AA1` - **Sky Blue** (Secondary)
  - Usage: Links, secondary buttons, icons
  - Conveys: Medical professionalism, cleanliness, calm
- `#B6BB85` - **Pale Green** (Primary light)
  - Usage: Light accents, hover states, subtle backgrounds
  - Conveys: Natural, calming, healthy

**Accent Colors**
- `#D3B01C` - **Mustard** (Attention/Warning)
  - Usage: Call-to-action elements, highlights, important notices
  - Conveys: Energy, optimism, attention
- `#E59D63` - **Apricot** (Warm accent)
  - Usage: Special sections, testimonials, warm highlights
  - Conveys: Warmth, approachability, comfort

**Background Colors**
- `#FFFFFF` - **White** (Primary background)
- `#D6D6CE` - **Light Grey** (Neutral sections)
- `#D9C2AD` - **Oat** (Warm sections)
- `#E59D63` - **Apricot** (Accent sections)

**Utility Colors**
- `#E74C3C` - **Red** (Errors, critical alerts)
- `#52683E` - **Dark Green** (Success messages)
- `#D3B01C` - **Mustard** (Warnings)
- `#589AA1` - **Sky Blue** (Information)

### Typography
**Primary Font Stack**
```css
font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```
- Usage: Body text, paragraphs, captions, form fields
- Characteristics: Readable, friendly, professional, accessible

**Heading Font Stack**
```css
font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```
- Usage: H1-H6, card titles, navigation, buttons
- Characteristics: Strong, modern, authoritative, clean

**Typography Scale**
- H1: 2.5rem (40px) - Font weight 700
- H2: 2rem (32px) - Font weight 600
- H3: 1.5rem (24px) - Font weight 600
- Body: 1rem (16px) - Line height 1.6
- Small: 0.875rem (14px)

## Design Language

### Visual Style
- **Aesthetic**: Modern medical professionalism with human warmth
- **Approach**: Clean, uncluttered, evidence-based design
- **Mood**: Trustworthy, welcoming, competent, hopeful
- **Personality**: Professional yet approachable, scientific yet caring

### Design Principles
1. **Clarity First** - Information should be easily scannable and digestible
2. **Patient-Centered** - Design decisions prioritize patient comfort and understanding
3. **Accessibility** - Inclusive design for all users and abilities
4. **Trust Building** - Visual elements reinforce credibility and expertise
5. **Emotional Comfort** - Reduce anxiety through calming, professional presentation

### Spacing System
```css
--spacing-xs: 0.25rem    /* 4px */
--spacing-sm: 0.5rem     /* 8px */
--spacing-md: 1rem       /* 16px */
--spacing-lg: 1.5rem     /* 24px */
--spacing-xl: 2rem       /* 32px */
--spacing-xxl: 3rem      /* 48px */
```

### Border Radius
```css
--border-radius-sm: 0.25rem    /* Subtle rounding */
--border-radius-md: 0.375rem   /* Standard cards/buttons */
--border-radius-lg: 0.625rem   /* Prominent elements */
--border-radius-pill: 9999px   /* Badges, tags */
```

### Shadows & Depth
```css
--shadow-sm: 0 2px 4px 0 rgba(0, 0, 0, 0.06)
--shadow-md: 0 4px 8px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.07)
--shadow-lg: 0 12px 20px -3px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.07)
```

## Component Patterns

### Hero Section
- **Structure**: Large heading, descriptive paragraph, primary CTA button
- **Visual Elements**: Geometric stripe accent (left-aligned decorative stripes)
- **Colors**: Primary text on white/light background
- **CTA**: Primary button style with prominent placement

### Cards
- **Layout**: Clean white cards with subtle shadows
- **Behavior**: Hover lift effect (translateY(-5px))
- **Content**: Icon + title + description pattern
- **Spacing**: Consistent internal padding, grid layouts

### Service Icons
- **Style**: Circular background with SVG icons
- **Colors**: Icons on primary-light background
- **Size**: 60px diameter standard
- **Usage**: Service highlights, feature callouts

### Buttons
**Primary Button**
- Background: Primary color (#52683E)
- Text: White
- Usage: Main CTAs, form submissions

**Secondary Button**
- Background: Transparent
- Border: Primary color
- Text: Primary color
- Usage: Secondary actions, navigation

### Accent Sections
- **Light**: Light grey background for neutral content
- **Warm**: Oat background for welcoming content
- **Apricot**: Apricot background for testimonials/special content

### Forms
- **Style**: Clean, accessible inputs with clear labels
- **Validation**: Color-coded feedback using utility colors
- **Layout**: Logical grouping with adequate spacing

## Content Strategy

### Page Structure
**Essential Pages**
1. **Homepage** - Value proposition, services overview, approach highlights
3. **Services** - Detailed service offerings with clear categorization
4. **Team** - Staff profiles with credentials and specializations
6. **Contact** - Contact information, hours, appointment booking

### Content Themes
**Core Medical Focus**
- Specialized medical care (adapt from weight management to relevant specialty)
- Evidence-based treatment approaches
- Personalized patient care
- Comprehensive health solutions
- Long-term patient success

**Key Value Propositions**
- Medical expertise and credentials
- Personalized treatment plans
- Compassionate, judgment-free care
- Evidence-based approaches
- Comprehensive care coordination
- Patient education and empowerment

### Messaging Tone
- **Professional**: Credible, knowledgeable, competent
- **Approachable**: Warm, understanding, accessible
- **Empathetic**: Caring, patient-centered, supportive
- **Confident**: Authoritative without being intimidating
- **Hopeful**: Optimistic about patient outcomes

## Technical Specifications

### Responsive Breakpoints
- Mobile: < 600px
- Tablet: 600px - 768px
- Desktop: > 768px

### Performance Requirements
- Fast loading times (minimize dependencies)
- Optimized images and assets
- Semantic HTML for accessibility
- SEO-optimized structure

### Implementation Stack
- **HTML5**: Semantic structure
- **Tailwind CSS**: Utility-first styling
- **Alpine.js**: Minimal JavaScript interactivity
- **GitHub Pages**: Static site deployment

## Content Guidelines

### Writing Style
- **Clarity**: Use clear, jargon-free language
- **Empathy**: Address patient concerns and emotions
- **Authority**: Demonstrate medical expertise appropriately
- **Action-Oriented**: Guide users toward next steps
- **Inclusive**: Welcome all patients and backgrounds

### Photography/Imagery
- **Style**: Professional medical photography
- **Subjects**: Diverse patients, medical staff, clean facilities
- **Mood**: Positive, hopeful, professional, comfortable
- **Quality**: High-resolution, well-lit, authentic

### Call-to-Action Strategy
- **Primary**: "Schedule a Consultation" / "Book an Appointment"
- **Secondary**: "Learn More" / "Contact Us" / "View Services"
- **Placement**: Above fold on homepage, end of service descriptions, contact pages

## Implementation Notes

### Tailwind CSS Configuration
- Configure custom colors to match brand palette
- Set up spacing scale and typography utilities
- Create component classes for cards, buttons, sections
- Ensure responsive design utilities are properly configured

### Alpine.js Usage
- Form validation and interactivity
- Mobile navigation toggles
- Accordion/collapsible content sections
- Contact form handling

### Accessibility Considerations
- Proper heading hierarchy (H1-H6)
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader compatibility

### SEO Requirements
- Semantic HTML structure
- Meta descriptions and title tags
- Schema markup for medical practice
- Local SEO optimization
- Fast loading performance

---

## Quick Reference

### Brand Colors (Hex Codes)
```
Primary: #52683E (Dark Green)
Primary Light: #B6BB85 (Pale Green)
Primary Dark: #3B3B37 (Dark Grey)
Secondary: #589AA1 (Sky Blue)
Accent: #D3B01C (Mustard)
Background Warm: #D9C2AD (Oat)
Background Light: #D6D6CE (Light Grey)
Background Accent: #E59D63 (Apricot)
```

### Fonts
- **Headers**: Montserrat (600-700 weight)
- **Body**: Nunito Sans (400-600 weight)

### Key Components
- Hero with geometric stripes
- Service cards with icons
- Testimonial sections
- Contact forms
- Team profiles
- Accent sections with varied backgrounds

This guide should serve as the definitive reference for maintaining brand consistency and design quality throughout the Personic Medical website development process. 