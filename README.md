# Energy Construction Projects

Corporate landing page for showcasing projects in:
- Industrial Construction
- Energy Construction
- Civil Construction

The website is built as a static frontend without a build step: `HTML + CSS + JavaScript`.

## Features
- Main project slider powered by `Owl Carousel`
- Construction category cards
- Project and description content blocks
- Custom icons via local font files (`fonts/energo.*`)
- Emoji house favicon

## Tech Stack
- `HTML5`
- `CSS3`
- `JavaScript (ES5)`
- `jQuery`
- `Owl Carousel 2`

## Quick Start
1. Go to the project folder:
   ```bash
   cd /Users/danila/Projets/EnergyConstruction
   ```
2. Run any static server, for example:
   ```bash
   python3 -m http.server 8080
   ```
3. Open in your browser:
   - `http://localhost:8080`

## Project Structure
```text
EnergyConstruction/
├── index.html              # Main page
├── styles/                 # Styles (layout, slider, buildings, footer, icons)
├── js/
│   ├── jquery.js           # Local jQuery copy
│   ├── owl.carousel.min.js # Slider plugin
│   └── script.js           # Carousel initialization
├── images/                 # Project images
└── fonts/                  # Fonts and icons
```

## Customization
- Text content and blocks: `index.html`
- Slider settings (autoplay, nav, responsive): `js/script.js`
- Visual styles:
  - `styles/style.css`
  - `styles/slider.css`
  - `styles/buildings.css`
  - `styles/footer.css`
- Icons (`icon-*` classes): `styles/iconsfont.css`

## Notes
- The project does not require `npm install` or a build process.
- All dependencies are local, so the site can run offline.
- After favicon changes, a hard refresh may be required (`Ctrl+F5` / `Cmd+Shift+R`).
