# ☕ chai-tailwind

> A lightweight, zero-dependency utility-first styling framework for HTML — powered by a single JavaScript file.

[![jsdelivr](https://img.shields.io/badge/CDN-jsDelivr-f59e0b?style=flat-square)](https://cdn.jsdelivr.net/gh/rony-codes/chai-tailwind@main/index.js)
[![license](https://img.shields.io/badge/license-MIT-f59e0b?style=flat-square)](./LICENSE)
[![github](https://img.shields.io/badge/GitHub-rony--codes%2Fchai--tailwind-f59e0b?style=flat-square)](https://github.com/rony-codes/chai-tailwind)

---

## What is chai-tailwind?

**chai-tailwind** reads your HTML class names and applies styles directly — no stylesheet, no build step, no configuration. Drop in one `<script>` tag and start using readable utility classes like `chai-p-4`, `chai-bg-blue`, or `chai-text-center` immediately.

It scans every element on page load, finds `chai-*` classes, and maps them to inline CSS — perfect for prototyping, learning, or any project where you want zero overhead.

---

## Install

```html
<script src="https://cdn.jsdelivr.net/gh/rony-codes/chai-tailwind@main/index.js"></script>
```

Place it before your closing `</body>` tag. That's the entire setup.

---

## Quick Start

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body>

    <div class="chai-bg-amber chai-p-6 chai-rounded-lg chai-text-center">
      <h1 class="chai-text-xl chai-font-bold chai-text-white">
        Hello, chai-tailwind! ☕
      </h1>
      <p class="chai-text-sm chai-text-white chai-opacity-75">
        Zero config. Pure utility.
      </p>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/rony-codes/chai-tailwind@main/index.js"></script>
  </body>
</html>
```

---

## Utility Reference

All classes are prefixed with `chai-` to avoid conflicts with anything else on the page.

---

### Spacing

Values multiply by `4px` — so `chai-p-4` = `padding: 16px`.

| Class | Output |
|-------|--------|
| `chai-p-{n}` | `padding: n×4px` |
| `chai-px-{n}` | `padding-left + right: n×4px` |
| `chai-py-{n}` | `padding-top + bottom: n×4px` |
| `chai-pt-{n}` | `padding-top: n×4px` |
| `chai-pb-{n}` | `padding-bottom: n×4px` |
| `chai-pl-{n}` | `padding-left: n×4px` |
| `chai-pr-{n}` | `padding-right: n×4px` |
| `chai-m-{n}` | `margin: n×4px` |
| `chai-mx-{n}` | `margin-left + right: n×4px` |
| `chai-my-{n}` | `margin-top + bottom: n×4px` |
| `chai-mt-{n}` | `margin-top: n×4px` |
| `chai-mb-{n}` | `margin-bottom: n×4px` |
| `chai-ml-{n}` | `margin-left: n×4px` |
| `chai-mr-{n}` | `margin-right: n×4px` |

```html
<div class="chai-p-6 chai-mx-4">Padded box with horizontal margin</div>
```

---

### Colors

| Class | Output |
|-------|--------|
| `chai-bg-{color}` | `background-color: {color}` |
| `chai-text-{color}` | `color: {color}` |

**Available colors** — `red` `blue` `green` `yellow` `orange` `purple` `pink` `amber` `teal` `gray` `white` `black`

```html
<div class="chai-bg-amber chai-text-white">Amber background, white text</div>
<p class="chai-text-red">Something went wrong.</p>
```

---

### Typography

| Class | Output |
|-------|--------|
| `chai-text-sm` | `font-size: 12px` |
| `chai-text-md` | `font-size: 16px` |
| `chai-text-lg` | `font-size: 20px` |
| `chai-text-xl` | `font-size: 24px` |
| `chai-text-left` | `text-align: left` |
| `chai-text-center` | `text-align: center` |
| `chai-text-right` | `text-align: right` |
| `chai-font-bold` | `font-weight: bold` |

```html
<h1 class="chai-text-xl chai-font-bold chai-text-center">Page Title</h1>
<p class="chai-text-sm chai-text-gray">Subtle helper text</p>
```

---

### Borders

| Class | Output |
|-------|--------|
| `chai-border` | `border: 1px solid` |
| `chai-border-{n}` | `border-width: n×4px; border-style: solid` |
| `chai-border-{color}` | `border-color: {color}` |

> Combine width and color: `chai-border chai-border-2 chai-border-amber`

```html
<div class="chai-border chai-border-blue chai-p-4">Blue bordered box</div>
```

---

### Border Radius

| Class | Output |
|-------|--------|
| `chai-rounded` | `border-radius: 6px` |
| `chai-rounded-sm` | `border-radius: 4px` |
| `chai-rounded-md` | `border-radius: 8px` |
| `chai-rounded-lg` | `border-radius: 12px` |
| `chai-rounded-xl` | `border-radius: 16px` |
| `chai-rounded-full` | `border-radius: 9999px` |

```html
<button class="chai-bg-amber chai-px-4 chai-py-2 chai-rounded-full">Pill</button>
```

---

### Display

| Class | Output |
|-------|--------|
| `chai-block` | `display: block` |
| `chai-inline` | `display: inline` |
| `chai-flex` | `display: flex` |
| `chai-hidden` | `display: none` |

---

### Flexbox

> Requires `chai-flex` on the parent element.

| Class | Output |
|-------|--------|
| `chai-justify-center` | `justify-content: center` |
| `chai-justify-between` | `justify-content: space-between` |
| `chai-items-center` | `align-items: center` |
| `chai-items-start` | `align-items: flex-start` |
| `chai-items-end` | `align-items: flex-end` |

```html
<div class="chai-flex chai-justify-between chai-items-center">
  <span>Left</span>
  <span>Right</span>
</div>
```

---

### Sizing

Values multiply by `4px`. Use `full` for `100%`.

| Class | Output |
|-------|--------|
| `chai-w-{n}` | `width: n×4px` |
| `chai-w-full` | `width: 100%` |
| `chai-h-{n}` | `height: n×4px` |
| `chai-h-full` | `height: 100%` |

```html
<div class="chai-w-full chai-h-10">Full-width, 40px tall</div>
```

---

### Positioning

| Class | Output |
|-------|--------|
| `chai-relative` | `position: relative` |
| `chai-absolute` | `position: absolute` |
| `chai-fixed` | `position: fixed` |
| `chai-top-{n}` | `top: n×4px` |
| `chai-bottom-{n}` | `bottom: n×4px` |
| `chai-left-{n}` | `left: n×4px` |
| `chai-right-{n}` | `right: n×4px` |

```html
<div class="chai-relative">
  <span class="chai-absolute chai-top-0 chai-right-0">Badge</span>
</div>
```

---

### Opacity

| Class | Output |
|-------|--------|
| `chai-opacity-{n}` | `opacity: n ÷ 100` |

```html
<p class="chai-opacity-50">Half transparent</p>
<p class="chai-opacity-75">Mostly visible</p>
```

---

## Examples

### Card
```html
<div class="chai-bg-white chai-p-6 chai-rounded-lg chai-border chai-border-gray">
  <h2 class="chai-text-lg chai-font-bold chai-text-black">Card Title</h2>
  <p class="chai-text-sm chai-text-gray chai-py-2">Description goes here.</p>
  <button class="chai-bg-amber chai-text-white chai-px-4 chai-py-2 chai-rounded-md chai-font-bold">
    Action
  </button>
</div>
```

### Navbar
```html
<nav class="chai-flex chai-justify-between chai-items-center chai-bg-black chai-px-6 chai-py-4">
  <span class="chai-text-white chai-font-bold chai-text-lg">Brand</span>
  <div class="chai-flex chai-items-center">
    <a class="chai-text-white chai-px-4">Home</a>
    <a class="chai-text-white chai-px-4">About</a>
  </div>
</nav>
```

### Alerts
```html
<div class="chai-bg-green  chai-text-white chai-p-4 chai-rounded-md">✓ Success</div>
<div class="chai-bg-red    chai-text-white chai-p-4 chai-rounded-md">✗ Error</div>
<div class="chai-bg-yellow chai-text-black chai-p-4 chai-rounded-md">⚠ Warning</div>
```

### Badge Overlay
```html
<div class="chai-relative chai-w-10 chai-h-10 chai-bg-gray chai-rounded-lg">
  <span class="chai-absolute chai-top-0 chai-right-0 chai-bg-red chai-text-white chai-text-sm chai-rounded-full chai-p-1">
    3
  </span>
</div>
```

---

## How It Works

chai-tailwind runs one JavaScript pass when the script loads:

1. Selects every element with a `class` attribute
2. Filters for classes starting with `chai-`
3. Parses each class into a `type` and `value`
4. Sets the matching `element.style` property directly

```
chai-p-4
 │   │ └── value  →  4  →  4×4px = 16px
 │   └──── type   →  p  →  padding
 └──────── prefix →  chai
```

Inline styles always win over stylesheets — no specificity battles, no conflicts.

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

| Chrome | Firefox | Safari | Edge |
|--------|---------|--------|------|
| ✅ | ✅ | ✅ | ✅ |

No polyfills. No dependencies. Works everywhere modern JavaScript runs.

---

## Roadmap

- [ ] `chai-font-medium` / `chai-font-light`
- [ ] `chai-text-2xl` / `chai-text-3xl`
- [ ] `chai-gap-{n}` flex gap
- [ ] `chai-flex-col` direction
- [ ] `chai-overflow-hidden` / `chai-overflow-auto`
- [ ] `chai-z-{n}` z-index
- [ ] `chai-max-w-{n}` max-width
- [ ] Minified build (`index.min.js`)

---

## Contributing

```bash
git clone https://github.com/rony-codes/chai-tailwind.git
cd chai-tailwind

# make your changes to index.js
# open a pull request
```

One utility category per PR keeps things clean and easy to review.

---

## License

MIT © [rony-codes](https://github.com/rony-codes)

---

<p align="center">Built with ☕ — simple, honest, utility-first styling.</p>