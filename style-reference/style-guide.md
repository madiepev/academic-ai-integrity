# Academic AI Integrity - Style Guide

## Typography

### Font Family
**Primary Font:** Clean, modern sans-serif
- System stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- Fallback: `Arial, Helvetica, sans-serif`

### Headings
- **H1 (Page Title):** 36px, font-weight: 600, letter-spacing: -0.5px
- **H2 (Section):** 28px, font-weight: 600, letter-spacing: -0.3px
- **H3 (Subsection):** 22px, font-weight: 600
- **H4 (Card Title):** 18px, font-weight: 600

### Capitalization
- **Sentence case:** Use sentence casing for all headings and UI text (capitalize only the first word and proper nouns)
- Example: "Understanding AI and hallucinations" not "Understanding AI And Hallucinations"
- Buttons: "Continue to apply" not "Continue To Apply"

### Body Text
- **Regular:** 16px, font-weight: 400, line-height: 1.6
- **Small:** 14px, font-weight: 400, line-height: 1.5
- **Caption:** 12px, font-weight: 400, line-height: 1.4

### Text Colors
- Primary text: `#333333`
- Secondary text: `#666666`
- Tertiary/muted text: `#999999`
- Links: `#0066cc`

---

## Color Palette

### Primary Colors
- **Primary Blue:** `#0066cc` - Main interactive elements, primary CTAs
- **Success Green:** `#28a745` - Positive actions, continue buttons
- **Accent Orange:** `#ff6600` - Navigator persona, secondary emphasis

### Semantic Colors
- **Info Blue:** `#0066cc`
- **Warning Yellow:** `#ffc107`
- **Error Red:** `#dc3545`
- **Neutral Gray:** `#666666`

### Background Colors
- **White:** `#ffffff` - Main background
- **Light Gray:** `#f8f9fa` - Section backgrounds, cards
- **Medium Gray:** `#f0f0f0` - Placeholders, inactive states
- **Border Gray:** `#dddddd` - Dividers, borders

### Icon Circle Colors
Use bright, distinct, flat colors for categorization:
- Blue: `#5dade2` or `#3498db`
- Green: `#2ecc71` or `#27ae60`
- Orange: `#ff6600` or `#e67e22`
- Purple: `#9b59b6` or `#8e44ad`
- Pink: `#ec407a` or `#e91e63`
- Yellow: `#f1c40f` or `#f39c12`
- Teal: `#1abc9c` or `#16a085`
- Red: `#e74c3c` or `#c0392b`

---

## Icons & Graphics

### Style Principles
- **Flat design:** No gradients, shadows, or 3D effects
- **Simple & minimal:** Clean lines, geometric shapes
- **Contained:** Icons placed within colored circles for consistency
- **Monochrome within circles:** Icons should be single-color (white or dark) inside colored background circles
- **No emojis:** Use proper icons or icon fonts instead for a professional, consistent appearance

### Icon Sizing
- Large decorative: 48-64px
- Medium inline: 24-32px
- Small inline: 16-20px

### Visual Examples

**Icon circles with different colors (as visual categories):**

<div style="display: flex; gap: 20px; margin: 20px 0; flex-wrap: wrap;">
  <div style="display: flex; flex-direction: column; align-items: center;">
    <div style="background-color: #3498db; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    </div>
    <p style="font-size: 14px; margin-top: 8px; color: #666;">Search</p>
  </div>
  
  <div style="display: flex; flex-direction: column; align-items: center;">
    <div style="background-color: #2ecc71; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <p style="font-size: 14px; margin-top: 8px; color: #666;">Complete</p>
  </div>
  
  <div style="display: flex; flex-direction: column; align-items: center;">
    <div style="background-color: #ff6600; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    </div>
    <p style="font-size: 14px; margin-top: 8px; color: #666;">Learn</p>
  </div>
  
  <div style="display: flex; flex-direction: column; align-items: center;">
    <div style="background-color: #9b59b6; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    </div>
    <p style="font-size: 14px; margin-top: 8px; color: #666;">Tools</p>
  </div>
</div>

### Recommended Icon Sources
- Feather Icons (minimal line style)
- Heroicons (clean and modern)
- Bootstrap Icons (comprehensive set)
- Lucide Icons (Feather fork with more icons)

---

## Buttons

### Primary Button
```css
padding: 15px 30px
font-size: 16px
background-color: #0066cc
color: white
border: none
border-radius: 5px
cursor: pointer
font-weight: 600
```

**Visual example:**
<div style="margin: 20px 0;">
  <button style="padding: 15px 30px; font-size: 16px; background-color: #0066cc; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Primary action</button>
</div>

### Secondary Button (Success/Continue)
```css
padding: 15px 40px
font-size: 16px
background-color: #28a745
color: white
border: none
border-radius: 5px
cursor: pointer
font-weight: bold
```

**Visual example:**
<div style="margin: 20px 0;">
  <button style="padding: 15px 40px; font-size: 16px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Continue to next step</button>
</div>

### Tertiary Button (Back/Cancel)
```css
padding: 10px 20px
font-size: 14px
background-color: #666666
color: white
border: none
border-radius: 5px
cursor: pointer
```

**Visual example:**
<div style="margin: 20px 0;">
  <button style="padding: 10px 20px; font-size: 14px; background-color: #666666; color: white; border: none; border-radius: 5px; cursor: pointer;">← Back to home</button>
</div>

### Button States
- **Hover:** Slightly darker shade (-10% brightness)
- **Active:** Even darker shade (-20% brightness)
- **Disabled:** 50% opacity, no cursor pointer

---

## Cards & Containers

### Card Style
```css
border: 2px solid [thematic-color]
border-radius: 10px
padding: 20px
background-color: white
box-shadow: none (flat design)
```

### Section Containers
```css
background-color: #f8f9fa
padding: 20px
border-radius: 5px
margin: 20px 0
```

### Highlighted/Info Boxes
```css
background-color: #f9f9f9
padding: 15px
border-left: 4px solid #0066cc
border-radius: 3px
margin: 20px 0
```

---

## Spacing & Layout

### Margins
- **Large section spacing:** 40-60px
- **Medium element spacing:** 20-30px
- **Small element spacing:** 10-15px

### Padding
- **Large containers:** 30-40px
- **Medium containers:** 20px
- **Small elements:** 10-15px

### Whitespace Philosophy
- **Generou s breathing room** between sections
- **Clear visual hierarchy** through consistent spacing
- **Avoid cramming** - let elements breathe

---

## Forms & Interactive Elements

### Input Fields
```css
padding: 10px 15px
font-size: 16px
border: 1px solid #dddddd
border-radius: 5px
background-color: white
```

### Radio Buttons & Checkboxes
- Use native styling or minimal custom styling
- Ensure adequate click area (min 20px)
- Clear label association

### Details/Accordion
```css
cursor: pointer
color: #0066cc
font-weight: bold
```

---

## Visual Hierarchy

### Priority Levels
1. **Primary:** Large headings, hero buttons - most prominent
2. **Secondary:** Section headers, body text, secondary buttons
3. **Tertiary:** Captions, metadata, helper text

### Technique
- **Size:** Larger = more important
- **Weight:** Bolder = more important
- **Color:** Higher contrast = more important
- **Space:** More isolated = more important

---

## Accessibility

### Minimum Requirements
- **Color contrast:** 4.5:1 for normal text, 3:1 for large text
- **Touch targets:** Minimum 44x44px for interactive elements
- **Keyboard navigation:** All interactive elements must be keyboard accessible
- **Alt text:** Descriptive alt text for all meaningful images

### Best Practices
- Don't rely solely on color to convey meaning
- Provide text labels for icon-only buttons
- Use semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- Test with screen readers

---

## Animation & Transitions

### Philosophy
Keep it minimal and purposeful

### Acceptable Uses
- **Button hover states:** `transition: background-color 0.2s ease`
- **Link hover:** `transition: color 0.15s ease`
- **Smooth scrolling:** `scroll-behavior: smooth`

### Avoid
- Excessive animations
- Auto-playing videos (without controls)
- Distracting motion

---

## Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Considerations
- Stack cards vertically on mobile
- Increase button size for touch (min 44px height)
- Reduce font sizes slightly but maintain readability
- Simplify navigation

---

## Do's and Don'ts

### ✅ Do
- Use plenty of whitespace
- Maintain consistent spacing
- Use clear, concise language
- Stick to the color palette
- Keep icons simple and flat
- Make buttons obvious and clickable
- Use sentence casing for all text

### ❌ Don't
- Use gradients or drop shadows
- Mix multiple font families
- Use decorative fonts
- Clutter the interface
- Use low-contrast color combinations
- Make clickable elements look like plain text
- Use emojis in place of proper icons
- Use title case or ALL CAPS for headings

---

## Example Component Patterns

### Two-Column Card Layout
```html
<div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
  <div style="border: 2px solid #0066cc; border-radius: 10px; padding: 20px; width: 300px;">
    <h4>Card Title</h4>
    <p>Card content</p>
    <button>Action</button>
  </div>
  <div style="border: 2px solid #ff6600; border-radius: 10px; padding: 20px; width: 300px;">
    <h4>Card Title</h4>
    <p>Card content</p>
    <button>Action</button>
  </div>
</div>
```

### Info Box
```html
<div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0066cc;">
  <p><strong>Note:</strong> Important information here</p>
</div>
```

### Icon Circle (Conceptual)
```html
<div style="background-color: #0066cc; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
  <!-- Use icon font or SVG here, not emoji -->
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
    <!-- Icon path here -->
  </svg>
</div>
```

---

*This style guide should be referenced when creating new pages or components to maintain consistency across the Academic AI Integrity e-learning platform.*
