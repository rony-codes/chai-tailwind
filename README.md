# ☕ chai-tailwind

> A lightweight, zero-dependency utility-first CSS-in-JS framework — style HTML elements directly using readable class names.

[![jsdelivr](https://img.shields.io/badge/CDN-jsDelivr-f59e0b?style=flat-square)](https://cdn.jsdelivr.net/gh/rony-codes/chai-tailwind@main/index.js)
[![license](https://img.shields.io/badge/license-MIT-f59e0b?style=flat-square)](./LICENSE)
[![github](https://img.shields.io/badge/GitHub-rony--codes%2Fchai--tailwind-f59e0b?style=flat-square)](https://github.com/rony-codes/chai-tailwind)

---

## What is chai-tailwind?

**chai-tailwind** is a utility-first micro-framework that reads your HTML class names and applies inline styles — no build step, no config file, no stylesheet required. Just drop in the script and start styling with readable class names like `chai-p-4`, `chai-bg-blue`, or `chai-text-center`.

It works by scanning all elements with a `class` attribute on page load and translating `chai-*` classes into direct `element.style` assignments — making it ideal for quick prototyping, learning projects, or lightweight production pages.

---

## Features

- ✅ **Zero dependencies** — pure vanilla JavaScript
- ✅ **Zero config** — drop in one `<script>` tag and it works
- ✅ **Zero build step** — no bundler, no compilation
- ✅ **Readable class names** — intuitive, predictable naming
- ✅ **Covers the essentials** — spacing, colors, typography, borders, layout, flexbox, sizing, positioning, opacity
- ✅ **~3KB** — tiny footprint

---

## Installation

### CDN — the only way you need

```html
<script src="https://cdn.jsdelivr.net/gh/rony-codes/chai-tailwind@main/index.js"></script>
```

Add this before your closing `</body>` tag. That's it. No npm, no bundler, no config.

---

## Quick Start

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>

    <div class="chai-bg-amber chai-p-6 chai-rounded-lg chai-text-center">
      <h1 class="chai-text-xl chai-font-bold chai-text-white">Hello, chai-tailwind! ☕</h1>
      <p class="chai-text-sm chai-text-white chai-opacity-75">Zero config. Pure utility.</p>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/rony-codes/chai-tailwind@main/index.js"></script>
  </body>
</html>
```

---

## Utility Reference

All classes are prefixed with `chai-` to avoid conflicts with other frameworks.

---

### Spacing

Controls `padding` and `margin`. Values are multiplied by `4px`.

| Class | CSS Output |
|-------|------------|
| `chai-p-{n}` | `padding: n×4px` |
| `chai-pt-{n}` | `padding-top: n×4px` |
| `chai-pb-{n}` | `padding-bottom: n×4px` |
| `chai-pl-{n}` | `padding-left: n×4px` |
| `chai-pr-{n}` | `padding-right: n×4px` |
| `chai-px-{n}` | `padding-left + padding-right: n×4px` |
| `chai-py-{n}` | `padding-top + padding-bottom: n×4px` |
| `chai-m-{n}` | `margin: n×4px` |
| `chai-mt-{n}` | `margin-top: n×4px` |
| `chai-mb-{n}` | `margin-bottom: n×4px` |
| `chai-ml-{n}` | `margin-left: n×4px` |
| `chai-mr-{n}` | `margin-right: n×4px` |
| `chai-mx-{n}` | `margin-left + margin-right: n×4px` |
| `chai-my-{n}` | `margin-top + margin-bottom: n×4px` |

**Example:**
```html
<div class="chai-p-4 chai-mx-2">Padded box</div>
<!-- padding: 16px; margin-left: 8px; margin-right: 8px -->
```

---

### Colors

Named color values map directly to CSS color names.

| Class | CSS Output |
|-------|------------|
| `chai-bg-{color}` | `background-color: {color}` |
| `chai-text-{color}` | `color: {color}` |

**Available colors:** `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `pink`, `amber`, `teal`, `gray`, `white`, `black`

**Example:**
```html
<div class="chai-bg-blue chai-text-white">Blue card</div>
<p class="chai-text-red">Error message</p>
```

---

### Typography

Controls font size, text alignment, and font weight.

#### Font Size

| Class | CSS Output |
|-------|------------|
| `chai-text-sm` | `font-size: 12px` |
| `chai-text-md` | `font-size: 16px` |
| `chai-text-lg` | `font-size: 20px` |
| `chai-text-xl` | `font-size: 24px` |

#### Text Alignment

| Class | CSS Output |
|-------|------------|
| `chai-text-left` | `text-align: left` |
| `chai-text-center` | `text-align: center` |
| `chai-text-right` | `text-align: right` |

#### Font Weight

| Class | CSS Output |
|-------|------------|
| `chai-font-bold` | `font-weight: bold` |

**Example:**
```html
<h1 class="chai-text-xl chai-text-center chai-font-bold">Page Title</h1>
<p class="chai-text-sm chai-text-left">Small paragraph</p>
```

---

### Borders

| Class | CSS Output |
|-------|------------|
| `chai-border` | `border: 1px solid` |
| `chai-border-{n}` | `border-width: n×4px; border-style: solid` |
| `chai-border-{color}` | `border-color: {color}` |

**Example:**
```html
<div class="chai-border chai-border-red">Red 1px border</div>
<div class="chai-border-2 chai-border-blue">Blue 8px border</div>
```

> **Tip:** Combine width + color: `chai-border chai-border-2 chai-border-amber`

---

### Border Radius

| Class | CSS Output |
|-------|------------|
| `chai-rounded` | `border-radius: 6px` |
| `chai-rounded-sm` | `border-radius: 4px` |
| `chai-rounded-md` | `border-radius: 8px` |
| `chai-rounded-lg` | `border-radius: 12px` |
| `chai-rounded-xl` | `border-radius: 16px` |
| `chai-rounded-full` | `border-radius: 9999px` |

**Example:**
```html
<button class="chai-bg-amber chai-p-2 chai-rounded-full">Pill Button</button>
```

---

### Display

| Class | CSS Output |
|-------|------------|
| `chai-block` | `display: block` |
| `chai-inline` | `display: inline` |
| `chai-flex` | `display: flex` |
| `chai-hidden` | `display: none` |

---

### Flexbox

> Requires `chai-flex` on the parent element.

| Class | CSS Output |
|-------|------------|
| `chai-justify-center` | `justify-content: center` |
| `chai-justify-between` | `justify-content: space-between` |
| `chai-items-center` | `align-items: center` |
| `chai-items-start` | `align-items: flex-start` |
| `chai-items-end` | `align-items: flex-end` |

**Example:**
```html
<div class="chai-flex chai-justify-between chai-items-center">
  <span>Left</span>
  <span>Right</span>
</div>
```

---

### Sizing

Values are multiplied by `4px`. Use `full` for `100%`.

| Class | CSS Output |
|-------|------------|
| `chai-w-{n}` | `width: n×4px` |
| `chai-w-full` | `width: 100%` |
| `chai-h-{n}` | `height: n×4px` |
| `chai-h-full` | `height: 100%` |

**Example:**
```html
<div class="chai-w-full chai-h-10">Full-width, 40px tall</div>
```

---

### Positioning

| Class | CSS Output |
|-------|------------|
| `chai-relative` | `position: relative` |
| `chai-absolute` | `position: absolute` |
| `chai-fixed` | `position: fixed` |
| `chai-top-{n}` | `top: n×4px` |
| `chai-bottom-{n}` | `bottom: n×4px` |
| `chai-left-{n}` | `left: n×4px` |
| `chai-right-{n}` | `right: n×4px` |

**Example:**
```html
<div class="chai-relative">
  <span class="chai-absolute chai-top-0 chai-right-0">Badge</span>
</div>
```

---

### Opacity

| Class | CSS Output |
|-------|------------|
| `chai-opacity-{n}` | `opacity: n/100` |

**Example:**
```html
<p class="chai-opacity-50">50% transparent</p>
<p class="chai-opacity-75">75% visible</p>
```

---

## Real-World Examples

### Card Component
```html
<div class="chai-bg-white chai-p-6 chai-rounded-lg chai-border chai-border-gray">
  <h2 class="chai-text-lg chai-font-bold chai-text-black">Card Title</h2>
  <p class="chai-text-sm chai-text-gray chai-py-2">Card description goes here.</p>
  <button class="chai-bg-amber chai-text-white chai-px-4 chai-py-2 chai-rounded-md chai-font-bold">
    Action
  </button>
</div>
```

### Navigation Bar
```html
<nav class="chai-flex chai-justify-between chai-items-center chai-bg-black chai-px-6 chai-py-4">
  <span class="chai-text-white chai-font-bold chai-text-lg">Brand</span>
  <div class="chai-flex chai-items-center">
    <a class="chai-text-white chai-px-4">Home</a>
    <a class="chai-text-white chai-px-4">About</a>
    <a class="chai-text-white chai-px-4">Contact</a>
  </div>
</nav>
```

### Alert Banners
```html
<div class="chai-bg-green chai-text-white chai-p-4 chai-rounded-md">✓ Success!</div>
<div class="chai-bg-red chai-text-white chai-p-4 chai-rounded-md">✗ Error occurred.</div>
<div class="chai-bg-yellow chai-text-black chai-p-4 chai-rounded-md">⚠ Warning.</div>
```

### Overlay Badge
```html
<div class="chai-relative chai-w-10 chai-h-10 chai-bg-gray chai-rounded-lg">
  <span class="chai-absolute chai-top-0 chai-right-0 chai-bg-red chai-text-white chai-text-sm chai-rounded-full chai-p-1">
    3
  </span>
</div>
```

---

## How It Works

chai-tailwind runs a single JavaScript pass when the script loads. It:

1. Selects all elements that have a `class` attribute
2. Iterates each element's class list
3. Filters for classes starting with `chai-`
4. Parses the class name into `type` and `value` segments
5. Applies the corresponding `element.style` property directly

```
chai-p-4
 │   │ └─ value: 4
 │   └─── type: p (padding)
 └─────── prefix: chai
```

Because it uses inline styles, chai-tailwind classes always have the highest specificity — no stylesheet conflicts.

---

## Project Structure

```
chai-tailwind/
├── index.js      ← the entire framework
├── README.md
└── LICENSE
```
---

## Browser Support

Works in all modern browsers. No polyfills required.

| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |

---

## Roadmap

- [ ] `chai-font-medium`, `chai-font-light` weight variants
- [ ] `chai-text-2xl`, `chai-text-3xl` size variants
- [ ] `chai-gap-{n}` flex gap utility
- [ ] `chai-flex-col` direction utility
- [ ] `chai-overflow-hidden` / `chai-overflow-auto`
- [ ] `chai-z-{n}` z-index utility
- [ ] `chai-max-w-{n}` max-width utility
- [ ] Hover state support via JS event listeners
- [ ] Minified build (`index.min.js`)

---

## Contributing

Contributions are welcome!

```bash
# 1. Fork the repo on GitHub
# 2. Clone your fork
git clone https://github.com/rony-codes/chai-tailwind.git

# 3. Create a branch
git checkout -b feature/your-utility

# 4. Make your changes to index.js

# 5. Push and open a Pull Request
```

---

## License

MIT © [rony-codes](https://github.com/rony-codes)

---

<p align="center">
  Built with ☕ — simple, honest, utility-first styling.
</p>

---

## What is chai-tailwind?

**chai-tailwind** is a utility-first micro-framework that reads your HTML class names and applies inline styles — no build step, no config file, no stylesheet required. Just drop in the script and start styling with readable class names like `chai-p-4`, `chai-bg-blue`, or `chai-text-center`.

It works by scanning all elements with a `class` attribute on page load and translating `chai-*` classes into direct `element.style` assignments — making it ideal for quick prototyping, learning projects, or lightweight production pages.

---

## Features

- ✅ **Zero dependencies** — pure vanilla JavaScript
- ✅ **Zero config** — drop in one `<script>` tag and it works
- ✅ **Zero build step** — no bundler, no compilation
- ✅ **Readable class names** — intuitive, predictable naming
- ✅ **Covers the essentials** — spacing, colors, typography, borders, layout, flexbox, sizing, positioning, opacity
- ✅ **~3KB** minified

---

## Installation

### CDN (Recommended — no install needed)

```html
<script src="https://cdn.jsdelivr.net/npm/chai-tailwind"></script>
```

Add this before your closing `</body>` tag. That's it.

### npm

```bash
npm install chai-tailwind
```

```js
import 'chai-tailwind';
// or
require('chai-tailwind');
```

---

## Quick Start

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>

    <div class="chai-bg-amber chai-p-6 chai-rounded-lg chai-text-center">
      <h1 class="chai-text-xl chai-font-bold chai-text-white">Hello, chai-tailwind! ☕</h1>
      <p class="chai-text-sm chai-text-white chai-opacity-75">Zero config. Pure utility.</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chai-tailwind"></script>
  </body>
</html>
```

---

## Utility Reference

All classes are prefixed with `chai-` to avoid conflicts with other frameworks.

---

### Spacing

Controls `padding` and `margin`. Values are multiplied by `4px`.

| Class | CSS Output |
|-------|------------|
| `chai-p-{n}` | `padding: n×4px` |
| `chai-pt-{n}` | `padding-top: n×4px` |
| `chai-pb-{n}` | `padding-bottom: n×4px` |
| `chai-pl-{n}` | `padding-left: n×4px` |
| `chai-pr-{n}` | `padding-right: n×4px` |
| `chai-px-{n}` | `padding-left + padding-right: n×4px` |
| `chai-py-{n}` | `padding-top + padding-bottom: n×4px` |
| `chai-m-{n}` | `margin: n×4px` |
| `chai-mt-{n}` | `margin-top: n×4px` |
| `chai-mb-{n}` | `margin-bottom: n×4px` |
| `chai-ml-{n}` | `margin-left: n×4px` |
| `chai-mr-{n}` | `margin-right: n×4px` |
| `chai-mx-{n}` | `margin-left + margin-right: n×4px` |
| `chai-my-{n}` | `margin-top + margin-bottom: n×4px` |

**Example:**
```html
<div class="chai-p-4 chai-mx-2">Padded & centered horizontally</div>
<!-- padding: 16px; margin-left: 8px; margin-right: 8px -->
```

---

### Colors

Named color values map to standard CSS color names.

| Class | CSS Output |
|-------|------------|
| `chai-bg-{color}` | `background-color: {color}` |
| `chai-text-{color}` | `color: {color}` |

**Available colors:** `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `pink`, `amber`, `teal`, `gray`, `white`, `black`

**Example:**
```html
<div class="chai-bg-blue chai-text-white">Blue card</div>
<p class="chai-text-red">Error message</p>
```

---

### Typography

Controls font size, text alignment, and font weight.

#### Font Size

| Class | CSS Output |
|-------|------------|
| `chai-text-sm` | `font-size: 12px` |
| `chai-text-md` | `font-size: 16px` |
| `chai-text-lg` | `font-size: 20px` |
| `chai-text-xl` | `font-size: 24px` |

#### Text Alignment

| Class | CSS Output |
|-------|------------|
| `chai-text-left` | `text-align: left` |
| `chai-text-center` | `text-align: center` |
| `chai-text-right` | `text-align: right` |

#### Font Weight

> Applied via the `chai-font-{weight}` pattern — maps to standard CSS font-weight values.

| Class | CSS Output |
|-------|------------|
| `chai-font-bold` | `font-weight: bold` |

**Example:**
```html
<h1 class="chai-text-xl chai-text-center chai-font-bold">Page Title</h1>
<p class="chai-text-sm chai-text-left">Small left-aligned paragraph</p>
```

---

### Borders

Controls border width, border color, and the default 1px border shorthand.

| Class | CSS Output |
|-------|------------|
| `chai-border` | `border: 1px solid` |
| `chai-border-{n}` | `border-width: n×4px; border-style: solid` |
| `chai-border-{color}` | `border-color: {color}` |

**Example:**
```html
<div class="chai-border chai-border-red">Red 1px border</div>
<div class="chai-border-2 chai-border-blue">Blue 8px border</div>
```

> **Tip:** Combine a width class and a color class together: `chai-border chai-border-2 chai-border-amber`

---

### Border Radius

| Class | CSS Output |
|-------|------------|
| `chai-rounded` | `border-radius: 6px` |
| `chai-rounded-sm` | `border-radius: 4px` |
| `chai-rounded-md` | `border-radius: 8px` |
| `chai-rounded-lg` | `border-radius: 12px` |
| `chai-rounded-xl` | `border-radius: 16px` |
| `chai-rounded-full` | `border-radius: 9999px` |

**Example:**
```html
<button class="chai-bg-amber chai-p-2 chai-rounded-full">Pill Button</button>
```

---

### Display

| Class | CSS Output |
|-------|------------|
| `chai-block` | `display: block` |
| `chai-inline` | `display: inline` |
| `chai-flex` | `display: flex` |
| `chai-hidden` | `display: none` |

---

### Flexbox

> Flexbox utilities require `chai-flex` on the parent element.

| Class | CSS Output |
|-------|------------|
| `chai-justify-center` | `justify-content: center` |
| `chai-justify-between` | `justify-content: space-between` |
| `chai-items-center` | `align-items: center` |
| `chai-items-start` | `align-items: flex-start` |
| `chai-items-end` | `align-items: flex-end` |

**Example:**
```html
<div class="chai-flex chai-justify-between chai-items-center">
  <span>Left</span>
  <span>Right</span>
</div>
```

---

### Sizing

Values are multiplied by `4px`. Use `full` for `100%`.

| Class | CSS Output |
|-------|------------|
| `chai-w-{n}` | `width: n×4px` |
| `chai-w-full` | `width: 100%` |
| `chai-h-{n}` | `height: n×4px` |
| `chai-h-full` | `height: 100%` |

**Example:**
```html
<div class="chai-w-full chai-h-10">Full-width, 40px tall bar</div>
```

---

### Positioning

| Class | CSS Output |
|-------|------------|
| `chai-relative` | `position: relative` |
| `chai-absolute` | `position: absolute` |
| `chai-fixed` | `position: fixed` |
| `chai-top-{n}` | `top: n×4px` |
| `chai-bottom-{n}` | `bottom: n×4px` |
| `chai-left-{n}` | `left: n×4px` |
| `chai-right-{n}` | `right: n×4px` |

**Example:**
```html
<div class="chai-relative">
  <span class="chai-absolute chai-top-0 chai-right-0">Badge</span>
</div>
```

---

### Opacity

| Class | CSS Output |
|-------|------------|
| `chai-opacity-{n}` | `opacity: n/100` |

**Example:**
```html
<p class="chai-opacity-50">50% transparent</p>
<p class="chai-opacity-75">75% visible</p>
```

---

## Real-World Examples

### Card Component
```html
<div class="chai-bg-white chai-p-6 chai-rounded-lg chai-border chai-border-gray">
  <h2 class="chai-text-lg chai-font-bold chai-text-black">Card Title</h2>
  <p class="chai-text-sm chai-text-gray chai-py-2">Card description goes here.</p>
  <button class="chai-bg-amber chai-text-white chai-px-4 chai-py-2 chai-rounded-md chai-font-bold">
    Action
  </button>
</div>
```

### Navigation Bar
```html
<nav class="chai-flex chai-justify-between chai-items-center chai-bg-black chai-px-6 chai-py-4">
  <span class="chai-text-white chai-font-bold chai-text-lg">Brand</span>
  <div class="chai-flex chai-items-center">
    <a class="chai-text-white chai-px-4">Home</a>
    <a class="chai-text-white chai-px-4">About</a>
    <a class="chai-text-white chai-px-4">Contact</a>
  </div>
</nav>
```

### Alert Banners
```html
<div class="chai-bg-green chai-text-white chai-p-4 chai-rounded-md">✓ Success!</div>
<div class="chai-bg-red chai-text-white chai-p-4 chai-rounded-md">✗ Error occurred.</div>
<div class="chai-bg-yellow chai-text-black chai-p-4 chai-rounded-md">⚠ Warning.</div>
```

### Overlay Badge
```html
<div class="chai-relative chai-w-10 chai-h-10 chai-bg-gray chai-rounded-lg">
  <span class="chai-absolute chai-top-0 chai-right-0 chai-bg-red chai-text-white chai-text-sm chai-rounded-full chai-p-1">
    3
  </span>
</div>
```

---

## How It Works

chai-tailwind runs a single JavaScript pass on `DOMContentLoaded`. It:

1. Selects all elements that have a `class` attribute
2. Iterates each element's class list
3. Filters for classes starting with `chai-`
4. Parses the class name into `type` and `value` segments
5. Applies the corresponding `element.style` property directly

```
chai-p-4
 │   │ └─ value: 4
 │   └─── type: p (padding)
 └─────── prefix: chai
```

Because it uses inline styles, chai-tailwind classes always have the highest specificity — no stylesheet conflicts.

---

## Project Structure

```
chai-tailwind/
└── index.js   # The entire framework — one file
└── package.json
└── README.md      
```

---

## Browser Support

Works in all modern browsers. No polyfills required.

| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |

---

## Roadmap

- [ ] `chai-font-medium`, `chai-font-light` weight variants
- [ ] `chai-text-2xl`, `chai-text-3xl` size variants  
- [ ] `chai-gap-{n}` flex gap utility
- [ ] `chai-flex-col` direction utility
- [ ] `chai-overflow-hidden` / `chai-overflow-auto`
- [ ] `chai-z-{n}` z-index utility
- [ ] `chai-max-w-{n}` max-width utility
- [ ] Hover state support via JS event listeners
- [ ] Minified build (`index.min.js`)

---

## Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/your-username/chai-tailwind.git

# 3. Create a branch
git checkout -b feature/chai-gap-utility

# 4. Make your changes to index.js

# 5. Open a Pull Request
```

Please keep PRs focused — one utility category per PR is ideal.

---

## License

MIT © chai-tailwind

---

<p align="center">
  Built with ☕ — simple, honest, utility-first styling.
</p>