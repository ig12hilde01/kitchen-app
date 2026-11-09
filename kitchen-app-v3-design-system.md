  --container-pad:  20px;     /* Mobile Padding */

  /* ── Border Radius Scale ───────────────────── */
  --radius-sm:    6px;        /* Micro: Tags, Inline */
  --radius-md:    10px;       /* Standard: Buttons, Inputs */
  --radius-lg:    16px;       /* Cards, Modals */
  --radius-xl:    20px;       /* Large Panels */
  --radius-full:  9999px;     /* Pills, Capsules */
  --radius-circle:50%;        /* Avatars, Icon Buttons */

  /* ── Z-Index Scale ─────────────────────────── */
  --z-base:       0;
  --z-nav:        100;
  --z-overlay:    500;
  --z-modal:      1000;
  --z-scanner:    2000;       /* Scanner Overlay */
  --z-toast:      3000;       /* Toast Notifications */

  /* ── Transition Timings ────────────────────── */
  --ease-out:     cubic-bezier(0.32, 0.72, 0, 1);  /* Apple Spring */
  --ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);     /* Standard */
  --duration-fast:  0.15s;
  --duration-normal: 0.25s;
  --duration-slow:  0.35s;
}
```

### Mobile-First Breakpoints

```css
/* Breakpoint-System (Apple + Linear Hybrid) */
:root {
  --breakpoint-sm: 375px;    /* Mobile Small (iPhone SE) */
  --breakpoint-md: 768px;    /* Tablet Small */
  --breakpoint-lg: 1024px;   /* Desktop */
  --breakpoint-xl: 1280px;   /* Large Desktop */
}

/* Mobile-first: alles standard, dann expandieren */
@media (min-width: 768px) {
  :root { --container-pad: 32px; }
}

@media (min-width: 1024px) {
  :root { --container-pad: 40px; }
}
```

### Layout Grid

```css
/* ── Page Layout (Mobile-First) ────────────── */
.kitchen-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--bg-primary);
}

.kitchen-main {
  flex: 1;
  padding: var(--space-4);
  padding-bottom: calc(var(--space-4) + 80px); /* Nav Bar Space */
  max-width: var(--container-max);
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

/* ── Section Header (Apple Style) ──────────── */
.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: var(--space-6) var(--space-4) var(--space-3);
}

.section-header h2 {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: var(--fw-bold);
  line-height: 1.14;
  letter-spacing: -0.4px;
  color: var(--text-primary);
}

.section-header .section-action {
  font-size: var(--fs-ui);
  color: var(--accent-primary);
  font-weight: var(--fw-medium);
  text-decoration: none;
}

/* ── Section Subheader (Apple Style) ───────── */
.section-subheader {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-4) var(--space-2);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ── Product Grid (Responsive) ─────────────── */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;           /* Mobile: 1 Spalte */
  gap: var(--space-3);
  padding: 0 var(--space-4);
}

@media (min-width: 500px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 800px) {
  .product-grid { grid-template-columns: repeat(3, 1fr); gap: var(--space-4); }
}

@media (min-width: 1024px) {
  .product-grid { grid-template-columns: repeat(4, 1fr); }
}

/* ── Horizontal Scroll Section (Airbnb Pill Bar) */
.scroll-section {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: var(--space-3);
  padding: 0 var(--space-4) var(--space-4);
  scrollbar-width: none;
}

.scroll-section::-webkit-scrollbar { display: none; }

.scroll-section > * {
  flex-shrink: 0;
  scroll-snap-align: start;
}
```

### Bottom Navigation (iOS Tab Bar + Linear Minimal)

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 80px;
  padding-top: 8px;
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  backdrop-filter: saturate(180%) blur(20px); /* Apple Glass */
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  z-index: var(--z-nav);
}

/* Dark Mode: Linear Panel + Apple Glass */
@media (prefers-color-scheme: dark) {
  .bottom-nav {
    background: rgba(15, 16, 17, 0.85);
    border-top: 1px solid rgba(255,255,255,0.05);
  }
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--text-tertiary);
  font-family: var(--font-primary);
  font-size: var(--fs-micro);
  font-weight: var(--fw-medium);
  transition: color var(--duration-fast) var(--ease-in-out);
  -webkit-tap-highlight-color: transparent;
}

.nav-item.active {
  color: var(--accent-primary);
}

.nav-icon {
  width: 24px;
  height: 24px;
  transition: transform var(--duration-fast) var(--ease-out);
}

.nav-item:active .nav-icon {
  transform: scale(0.85);
}
```

---

## (e) Interaktions-Design

### Animationen & Übergänge (Apple Spring-Feeling)

```css
/* ── Easing Curves ─────────────────────────── */
/* Apple Spring (natürliches Feedback) */
--spring-ease: cubic-bezier(0.32, 0.72, 0, 1);
/* Linear Precise */
--linear-ease: cubic-bezier(0.4, 0, 0.2, 1);

/* ── Page Transitions ──────────────────────── */
.section {
  display: none;
  animation: sectionFadeIn var(--duration-normal) var(--spring-ease);
}

.section.active {
  display: block;
}

@keyframes sectionFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Card Entry Animation ──────────────────── */
.product-card {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
  animation: cardEntry var(--duration-normal) var(--spring-ease) forwards;
}

/* Staggered Entry (jede Karte nacheinander) */
.product-card:nth-child(1) { animation-delay: 0ms; }
.product-card:nth-child(2) { animation-delay: 40ms; }
.product-card:nth-child(3) { animation-delay: 80ms; }
.product-card:nth-child(4) { animation-delay: 120ms; }

@keyframes cardEntry {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ── Modal/Sheet Animation ─────────────────── */
@keyframes sheetSlideUp {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}

.modal-overlay {
  animation: fadeOverlay var(--duration-fast) linear;
}

@keyframes fadeOverlay {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ── Haptic Visual Feedback ────────────────── */
@keyframes tapBounce {
  0%   { transform: scale(1); }
  30%  { transform: scale(0.96); }
  60%  { transform: scale(1.01); }
  100% { transform: scale(1); }
}

.btn-primary:active {
  animation: tapBounce 0.2s ease;
}

/* ── Status Pulse ──────────────────────────── */
@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.6; }
}

.product-status.expired {
  animation: statusPulse 1.5s ease-in-out infinite;
}

/* ── Toast Notification ────────────────────── */
.kitchen-toast {
  position: fixed;
  top: calc(20px + env(safe-area-inset-top));
  left: 50%;
  transform: translateX(-50%) translateY(-100px);
  background: var(--bg-inverse);
  color: var(--text-inverse);
  padding: 14px 24px;
  border-radius: var(--radius-md);
  font-size: var(--fs-body);
  font-weight: var(--fw-medium);
  z-index: var(--z-toast);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  animation: toastSlideIn var(--duration-normal) var(--spring-ease) forwards;
}

@keyframes toastSlideIn {
  to { transform: translateX(-50%) translateY(0); }
}
```

### Touch Targets (Apple Human Interface Guidelines)

```css
/* Minimum Touch Targets: 44×44px (Apple) */
.btn-primary,
.btn-ghost,
.btn-icon,
.nav-item,
.kitchen-input,
.kitchen-select {
  min-height: 44px;
  min-width: 44px;
}

/* Quantity Stepper — Apple style */
.qty-stepper button {
  min-width: 44px;
  min-height: 44px;
  border-radius: 10px;
}

/* Large Tap Targets for critical actions */
.btn-primary {
  min-height: 52px;    /* Premium Feeling */
  padding: 14px 32px;
  border-radius: 14px;
}
```

### Gestures & Swipes

```css
/* Swipe-to-delete pattern (Airbnb Style) */
.kitchen-swipe-row {
  position: relative;
  overflow: hidden;
  touch-action: pan-y;
}

.swipe-delete-bg {
  position: absolute;
  inset: 0;
  background: var(--status-expired);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  color: white;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-body);
}

/* Pull-to-refresh */
.pull-indicator {
  width: 32px;
  height: 32px;
  border: 2px solid var(--border-card);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  margin: 0 auto var(--space-3);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.pull-indicator.visible {
  opacity: 1;
  animation: spinLoader 0.8s linear infinite;
}

@keyframes spinLoader {
  to { transform: rotate(360deg); }
}
```

---

## (f) Navigation

### Primary: Bottom Tab Bar (iOS + Linear Hybrid)

```
┌─────────────────────────────────────────────────────┐
│  [Vorrat] [Rezepte] [Plan] [Einkauf] [Mehr]        │ ← Section Title
│                                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐ │
│  │ 🍎   │  │ 📖   │  │ 📅   │  │ 🛒   │  │ ⚙️   │ │
│  │ Vorrat│  │Rezepte│  │  Plan │  │Einkauf│ │Mehr  │ │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
```

```css
/* Tab Bar — Apple Glass + Linear Precision */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 8px;
  padding-bottom: env(safe-area-inset-bottom, 8px);
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  height: 80px;
  z-index: 100;
}

@media (prefers-color-scheme: dark) {
  .bottom-nav {
    background: rgba(15, 16, 17, 0.85);
    border-top: 1px solid rgba(255,255,255,0.05);
  }
}

/* Active Tab Indicator — Apple Underline */
.nav-item::after {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent-primary);
  margin-top: 2px;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.2s ease, transform 0.2s var(--spring-ease);
}

.nav-item.active::after {
  opacity: 1;
  transform: scale(1);
}
```

### Secondary: Section-Level Navigation

```css
/* Horizontal Scroll Category Bar (Airbnb Pill Style) */
.category-bar {
  display: flex;
  gap: var(--space-2);
  overflow-x: auto;
  padding: var(--space-3) var(--space-4);
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.category-bar::-webkit-scrollbar { display: none; }

.category-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  background: var(--bg-elevated);
  border: 1.5px solid transparent;
  font-family: var(--font-primary);
  font-size: var(--fs-body);
  font-weight: var(--fw-medium);
  color: var(--text-secondary);
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.15s ease;
}

.category-pill:active,
.category-pill.active {
  background: var(--accent-subtle);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

/* Search / Filter Bar (Apple Style) */
.filter-bar {
  display: flex;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
}

.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.15s ease;
}

.filter-chip.active {
  background: var(--accent-primary);
  color: var(--text-inverse);
  border-color: var(--accent-primary);
}
```

### Tertiary: Settings / Sub-Screens

```
Settings
├── 📋 Kategorien
├── 📦 Lagerplätze
├── ⬇️ Export/Import
├── ℹ️ Über
└── ← Zurück
```

```css
/* Settings Page (Apple Settings Style) */
.settings-group {
  margin: var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.settings-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: 14px 16px;
  border-bottom: 1px solid var(--border-subtle);
  cursor: pointer;
  transition: background 0.1s ease;
}

.settings-item:last-child {
  border-bottom: none;
}

.settings-item:active {
  background: var(--bg-elevated);
}

.settings-item-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--accent-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.settings-item-text {
  flex: 1;
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  color: var(--text-primary);
}

.settings-item-arrow {
  color: var(--text-tertiary);
  font-size: 14px;
}

/* Apple Grouped Settings: separate groups with spacing */
.settings-group + .settings-group {
  margin-top: var(--space-6);
}
```

### Navigation States (Dark Mode)

```css
/* Dark Mode Navigation Adjustments */
@media (prefers-color-scheme: dark) {
  .bottom-nav {
    background: rgba(15, 16, 17, 0.95);
    backdrop-filter: saturate(200%) blur(20px);
  }

  .nav-item {
    color: var(--text-tertiary-dark);
  }

  .nav-item.active {
    color: var(--accent-primary);
  }

  /* Linear command palette trigger */
  .command-palette-trigger {
    position: fixed;
    top: calc(20px + env(safe-area-inset-top));
    left: 50%;
    transform: translateX(-50%);
    display: none;           /* Visible nur auf Desktop */
    padding: 10px 20px;
    background: var(--bg-surface-dark);
    border: 1px solid var(--border-dark-strong);
    border-radius: var(--radius-full);
    color: var(--text-tertiary-dark);
    font-size: var(--fs-small);
    font-weight: var(--fw-medium);
    cursor: pointer;
    z-index: var(--z-nav);
  }

  @media (min-width: 1024px) {
    .command-palette-trigger { display: flex; align-items: center; gap: 8px; }
  }
}
```

---

## Integration: Vorrats-App Specific UX Patterns

### 1. Verfalls-Dashboard (Expiry Dashboard)

```css
.expiry-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  border-left: 4px solid var(--status-ok);
  box-shadow: var(--shadow-card);
  transition: transform 0.15s ease;
}

.expiry-card.warning  { border-left-color: var(--status-warning); }
.expiry-card.low      { border-left-color: var(--status-low); }
.expiry-card.expired  { border-left-color: var(--status-expired); }

.expiry-card:active {
  transform: scale(0.98);
}

/* Progress Bar für Verfallszeit */
.expiry-progress {
  height: 4px;
  border-radius: 2px;
  background: var(--bg-elevated);
  overflow: hidden;
  margin-top: 8px;
}

.expiry-progress-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.5s ease;
}

.expiry-progress-fill.ok       { background: var(--status-ok); width: 80%; }
.expiry-progress-fill.warning  { background: var(--status-warning); width: 35%; }
.expiry-progress-fill.low      { background: var(--status-low); width: 15%; }
.expiry-progress-fill.expired  { background: var(--status-expired); width: 0%; }
```

### 2. Barcode Scanner UI

```css
.scanner-overlay {
  position: fixed;
  inset: 0;
  background: #000;
  z-index: var(--z-scanner);
  display: flex;
  flex-direction: column;
}

.scanner-viewfinder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.scanner-frame {
  width: 280px;
  height: 280px;
  border: 2px solid rgba(255,255,255,0.6);
  border-radius: 24px;
  position: relative;
}

/* Animated scan line (Linear precision) */
.scanner-line {
  position: absolute;
  left: 8px;
  right: 8px;
  height: 2px;
  background: var(--accent-primary);
  animation: scanPulse 2s ease-in-out infinite;
  border-radius: 1px;
}

@keyframes scanPulse {
  0%, 100% { top: 8px; opacity: 0.3; }
  50%      { top: calc(100% - 10px); opacity: 1; }
}

.scanner-controls {
  display: flex;
  justify-content: center;
  gap: var(--space-8);
  padding: var(--space-8) 0 calc(var(--space-8) + env(safe-area-inset-bottom));
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
}

/* Apple-Style Camera Toggle */
.camera-toggle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 3. Warenkorb / Einkaufsliste

```css
.shopping-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.shopping-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border-subtle);
  transition: background 0.1s ease;
}

.shopping-item:active {
  background: var(--bg-elevated);
}

.shopping-checkbox {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--border-card);
  flex-shrink: 0;
  transition: all 0.15s ease;
  position: relative;
}

.shopping-checkbox.checked {
  background: var(--status-ok);
  border-color: var(--status-ok);
}

.shopping-checkbox.checked::after {
  content: '✓';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
}

.shopping-item.checked .shopping-name {
  text-decoration: line-through;
  color: var(--text-tertiary);
}
```

### 4. Wochenplan Grid

```css
.week-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.week-day {
  background: var(--bg-surface);
  padding: 12px 8px;
  text-align: center;
  transition: background 0.15s ease;
}

.week-day.today {
  background: var(--accent-subtle);
}

.week-day-name {
  font-size: var(--fs-micro);
  font-weight: var(--fw-medium);
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.week-day-date {
  font-size: var(--fs-body);
  font-weight: var(--fw-semibold);
  color: var(--text-primary);
}

.week-meal {
  margin-top: 8px;
  font-size: var(--fs-caption);
  color: var(--text-secondary);
  line-height: 1.3;
}

/* Meal placeholder */
.meal-placeholder {
  margin-top: 6px;
  height: 24px;
  border-radius: 6px;
  background: var(--bg-elevated);
  border: 1px dashed var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-micro);
  color: var(--text-tertiary);
}
```

---

## Quick-Reference: Token Mapping

| Element | Apple | Airbnb | Linear | Kitchen-App |
|---------|-------|--------|--------|-------------|
| Primary BG | `#f5f5f7` | `#ffffff` | `#08090a` | `#f5f5f7` light / `#08090a` dark |
| Card BG | `#ffffff` | `#ffffff` | `rgba(255,255,255,0.02)` | `#ffffff` light / `#191a1b` dark |
| Text Primary | `#1d1d1f` | `#222222` | `#f7f8f8` dark | `#1d1d1f` light / `#f7f8f8` dark |
| Accent | `#0071e3` | `#ff385c` | `#5e6ad2` | `#0071e3` (Apple Blue) |
| Status Colors | Apple Green/Orange/Red | Warm palette | Emerald/Success | Apple + Warm Hybrid |
| Font UI | SF Pro | Cereal VF | Inter 510 | Inter + DM Sans |
| Card Radius | 8px | 20px | 8px | 16px (Hybrid) |
| Button Radius | 8px | 8px | 6px | 12px (Hybrid) |
| Shadows | None/1 layer | 3-layer warm | Transp. borders | Airbnb 3-layer |
| Nav Glass | `saturate(180%) blur(20px)` | Opaque white | Dark panel | Apple Glass + Dark variant |
| Interactions | Spring easing | Warm transitions | Precise, fast | Apple Spring |

---

## Einsatz in der Single-File App

```html
<!-- Fonts laden -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;510;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&display=swap" rel="stylesheet">

<!-- CSS mit Design-Tokens -->
<style>
  /* Alle CSS Custom Properties aus den Abschnitten (a)-(f) */
  /* ... */
</style>
```
