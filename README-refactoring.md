# TacEval Website - Refactored Structure

## Overview

The original large HTML file has been refactored into a modular, component-based structure that is much easier to maintain and edit. Each section is now in its own file, making it simple to update individual parts without affecting the entire website.

## New File Structure

```
TacEval/
├── components/           # Reusable HTML components
│   ├── head.html        # Meta tags, CSS/JS imports
│   ├── navigation.html  # Hamburger menu
│   ├── hero.html        # Title and author section
│   ├── teaser.html      # Main image and description
│   ├── abstract.html    # Paper abstract
│   ├── papers-table.html # Interactive papers table
│   ├── evaluation-sections.html # Container for all evaluation sections
│   ├── summary.html     # Summary section
│   ├── bibtex.html      # Citation section
│   ├── footer.html      # Footer
│   └── lightbox.html    # Image lightbox overlay
├── sections/            # Individual evaluation sections
│   ├── calibration.html
│   ├── spatial-resolution.html
│   ├── sensitivity.html
│   ├── spatial-robustness.html
│   ├── lighting-robustness.html
│   ├── repeatability.html
│   └── additional-analysis.html
├── styles/
│   └── main.css         # All custom styles (extracted from inline CSS)
├── scripts/
│   ├── include.js       # Component loading system
│   └── main.js          # Main JavaScript functionality
├── static/              # Original static assets (unchanged)
├── index.html           # Original file (backup)
└── index-new.html       # New modular main file
```

## How to Use

### 1. Development
- Use `index-new.html` as your main file
- Edit individual components in the `components/` and `sections/` directories
- Styles are in `styles/main.css`
- JavaScript is in `scripts/main.js`

### 2. Editing Content
To edit a specific section:
- **Title/Authors**: Edit `components/hero.html`
- **Abstract**: Edit `components/abstract.html`
- **Calibration**: Edit `sections/calibration.html`
- **Spatial Resolution**: Edit `sections/spatial-resolution.html`
- And so on...

### 3. Adding New Sections
1. Create a new file in `sections/` (e.g., `sections/new-metric.html`)
2. Add it to `components/evaluation-sections.html`:
   ```html
   <div data-include="sections/new-metric.html"></div>
   ```
3. Update the navigation in `components/navigation.html` if needed

### 4. Deployment
For production, you have two options:

#### Option A: Use as-is (requires server)
- Deploy `index-new.html` and all component files
- Requires a web server (components load via fetch)
- Cannot be opened directly in browser due to CORS restrictions

#### Option B: Build a single file
Create a build script that combines all components into one file:

```javascript
// build.js (example)
const fs = require('fs');
const path = require('path');

function processIncludes(content, basePath) {
  return content.replace(/data-include="([^"]+)"/g, (match, includePath) => {
    const fullPath = path.join(basePath, includePath);
    if (fs.existsSync(fullPath)) {
      const includeContent = fs.readFileSync(fullPath, 'utf8');
      return `data-included="${includePath}"`;
    }
    return match;
  });
}

// Build process would go here
```

## Benefits of This Structure

1. **Modularity**: Each section is independent and can be edited separately
2. **Reusability**: Components can be reused or easily moved around
3. **Maintainability**: Much easier to find and edit specific content
4. **Collaboration**: Multiple people can work on different sections simultaneously
5. **Version Control**: Git diffs will be much cleaner and more meaningful
6. **Testing**: Individual components can be tested in isolation

## Component Loading System

The `scripts/include.js` file provides a simple client-side include system:
- Uses `data-include` attributes to specify which file to load
- Automatically loads and inserts content when the page loads
- Handles errors gracefully

## Migration Notes

- All original functionality is preserved
- All styles have been moved to `styles/main.css`
- All JavaScript has been moved to `scripts/main.js`
- The original `index.html` is kept as a backup
- Static assets remain unchanged

## Future Enhancements

Consider these additional improvements:
1. Add a proper build system (Webpack, Vite, etc.)
2. Use a static site generator (Jekyll, Hugo, etc.)
3. Add TypeScript for better JavaScript development
4. Implement CSS preprocessing (Sass, PostCSS)
5. Add automated testing for components

## Getting Started

1. Test the new structure by serving `index-new.html` from a local web server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   
   # Or use any other local server
   ```

2. Navigate to `http://localhost:8000/index-new.html`

3. Verify everything works as expected

4. When ready, replace the original `index.html` with the content of `index-new.html` 