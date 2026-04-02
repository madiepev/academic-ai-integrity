# Academic AI Integrity Brand Constitution

## Purpose
This document defines the visual identity baseline for Academic AI Integrity.
It specifies the canonical color system and typography choices that all pages and components must follow.

## Brand principles
- Clarity over decoration.
- Trustworthy academic tone.
- Strong contrast for accessibility.
- Consistent use of a small, recognizable palette.

## Typography constitution

### Primary typeface
- Use a modern sans-serif system stack as the default brand font.
- Canonical stack:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Typographic roles
- Display and headline text: bold, clean, high contrast.
- Body text: regular weight, comfortable line height.
- Labels and overlines: uppercase, tighter size, increased letter spacing.

### Core type scale
- H1: clamp(38px, 5.5vw, 60px), weight 800, line-height 1.08.
- H2: clamp(22px, 3vw, 30px), weight 700, line-height 1.25.
- Body: 16px, weight 400, line-height 1.8.
- Overline: 11px, weight 600, letter-spacing 1.5px, uppercase.
- Section label: 10.5px, weight 700, letter-spacing 1.4px, uppercase.

## Color constitution

### Core brand palette
These colors define the primary visual identity and should be treated as the source palette.

- Deep navy (base background): `#061228`
- Indigo (surface depth): `#0d1e55`
- Cobalt (surface depth): `#0f2468`
- Brand blue (primary accent): `#6a9fe8`
- Action blue: `#009CDE`
- Institutional blue: `#003082`
- Highlight yellow: `#FFB300`
- Warm orange: `#FF9800`
- Accent pink: `#DF407A`
- Accent rose: `#c0325e`

### Text-on-dark rules
- Primary text on dark backgrounds: `#ffffff` at high opacity.
- Secondary text on dark backgrounds: white with reduced opacity.
- Muted text on dark backgrounds: white at low opacity.

Recommended opacity ranges:
- Primary: 0.90 to 1.00
- Secondary: 0.55 to 0.80
- Muted: 0.20 to 0.50

### Functional color usage
- Primary brand actions and key labels: `#6a9fe8` and `#009CDE`.
- Integrity and ethics accents: `#DF407A` and `#c0325e`.
- Conceptual core and highlight elements: `#FFB300`.
- Supporting warmth and motion accents: `#FF9800`.

## Implementation rules
- Do not introduce new brand colors without updating this file.
- Reuse existing tokens before adding visual variations.
- Keep gradients subtle and within the approved palette.
- Ensure minimum contrast targets for readability.

## CSS token reference
Use these custom properties as the canonical implementation layer.

```css
:root {
  --brand-bg: #061228;
  --brand-surface-1: #0d1e55;
  --brand-surface-2: #0f2468;

  --brand-blue: #6a9fe8;
  --brand-action-blue: #009cde;
  --brand-institutional-blue: #003082;

  --brand-yellow: #ffb300;
  --brand-orange: #ff9800;
  --brand-pink: #df407a;
  --brand-rose: #c0325e;

  --text-primary-on-dark: rgba(255, 255, 255, 0.95);
  --text-secondary-on-dark: rgba(255, 255, 255, 0.68);
  --text-muted-on-dark: rgba(255, 255, 255, 0.4);

  --font-brand: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

## Governance
- This constitution is normative.
- If a page conflicts with this specification, update the page to conform.
- If the brand evolves, revise this document first, then update implementation files.