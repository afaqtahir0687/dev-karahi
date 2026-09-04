# App Icons

This directory contains SVG icon files that need to be converted to PNG for the PWA:

- `icon-192x192.svg` - Source SVG for 192x192 pixel icon
- `icon-512x512.svg` - Source SVG for 512x512 pixel icon
- `icon-192x192.png` - PNG icon for mobile devices (convert from SVG)
- `icon-512x512.png` - PNG icon for high-resolution displays (convert from SVG)

## Icon Design
The icons feature:
- Brand color gradient (#8B0000 to #6B0000 deep red/maroon)
- Food emoji 🍛 and "Karahi" text
- Modern rounded corners (squircle design)
- Orange accent circle for visual interest
- Clean, premium restaurant aesthetic

## Converting SVG to PNG

Before deploying to production, convert the SVG files to PNG using one of these methods:

### Online Converters (Recommended)
- https://cloudconvert.com/svg-to-png
- https://convertio.co/svg-png/
- https://www.aconvert.com/image/svg-to-png/

### Command Line (if you have ImageMagick)
```bash
convert icon-192x192.svg -resize 192x192 icon-192x192.png
convert icon-512x512.svg -resize 512x512 icon-512x512.png
```

### Using Node.js with sharp
```bash
npm install sharp
node -e "const sharp = require('sharp'); sharp('icon-192x192.svg').resize(192, 192).png().toFile('icon-192x192.png'); sharp('icon-512x512.svg').resize(512, 512).png().toFile('icon-512x512.png');"
```

## PWA Requirements
For the best PWA experience, ensure the PNG icons are:
- Square aspect ratio (192x192 and 512x512)
- Optimized for file size (under 50KB each)
- Use transparency where appropriate
- Include both solid and maskable versions if needed

## Testing
After converting, test the icons by:
1. Opening the website in a browser
2. Checking the browser's address bar for the favicon
3. Testing PWA installation on mobile devices
4. Verifying the icon appears on the home screen