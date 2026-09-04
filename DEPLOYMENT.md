# Deployment Guide - Chicken Karahi PWA

This guide will help you deploy the Chicken Karahi Progressive Web App to Vercel and configure it for production use.

## Pre-Deployment Checklist

Before deploying, complete these steps:

### 1. Update Configuration Files

Replace all placeholder values with your actual business information:

#### `assets/js/script.js`
```javascript
const WHATSAPP_PHONE = '923017730687'; // Your WhatsApp number
const BUSINESS_NAME = 'Chicken Karahi'; // Your business name
const DOMAIN = 'https://your-domain.com'; // Your actual domain
```

#### `index.html`
Replace `https://your-domain.com` with your actual domain in:
- Open Graph meta tags (lines 16-17, 25)
- Canonical URL (line 28)
- JSON-LD structured data (lines 48, 82-85, 94-96)

#### `robots.txt`
Replace `https://your-domain.com` with your actual domain (line 11)

#### `sitemap.xml`
Replace `https://your-domain.com` with your actual domain (lines 6, 12, 18, 24, 30)

#### `manifest.json`
Update if needed:
- `name` and `short_name`
- `description`
- Contact information in JSON-LD

### 2. Convert SVG Icons to PNG

Convert the SVG icons to PNG format for PWA compatibility:

**Option 1: Online Converter (Recommended)**
1. Visit https://cloudconvert.com/svg-to-png
2. Upload `assets/icons/icon-192x192.svg`
3. Set size to 192x192
4. Download as `icon-192x192.png`
5. Repeat for 512x512 icon

**Option 2: Command Line (ImageMagick)**
```bash
cd assets/icons
convert icon-192x192.svg -resize 192x192 icon-192x192.png
convert icon-512x512.svg -resize 512x512 icon-512x512.png
```

### 3. Optimize Images

Optimize all images for web performance:
- Compress PNG/JPG images using tools like TinyPNG or ImageOptim
- Ensure images are WebP format where possible
- Keep file sizes under 500KB per image

## Deployment to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy from project directory**
```bash
cd c:\Users\dell5590\Desktop\dev-karahi
vercel
```

4. **Follow the prompts**
- Set project name (e.g., chicken-karahi)
- Confirm settings
- Deploy to production

5. **Deploy to production**
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Connect your GitHub repository (if using Git)
4. Or drag and drop the project folder
5. Configure build settings (not needed for static sites)
6. Click "Deploy"

### Method 3: Using Git (Recommended for ongoing updates)

1. **Initialize Git repository**
```bash
cd c:\Users\dell5590\Desktop\dev-karahi
git init
git add .
git commit -m "Initial commit"
```

2. **Create GitHub repository**
- Go to github.com and create a new repository
- Follow the instructions to push your code

3. **Connect to Vercel**
- Import the GitHub repository in Vercel
- Vercel will automatically deploy on push

## Post-Deployment Configuration

### 1. Verify HTTPS

Vercel automatically provides HTTPS. Verify:
- Open your site in a browser
- Check for the lock icon in the address bar
- Ensure the URL starts with `https://`

### 2. Test PWA Installation

**On Desktop (Chrome/Edge):**
1. Open your site in Chrome or Edge
2. Look for the install icon in the address bar
3. Click to install and test the PWA

**On Mobile (Android):**
1. Open your site in Chrome
2. Tap the menu (three dots)
3. Select "Add to Home Screen" or "Install App"
4. Test the installed app

**On Mobile (iOS):**
1. Open your site in Safari
2. Tap the share button
3. Select "Add to Home Screen"
4. Test the installed app

### 3. Test Service Worker

1. Open Chrome DevTools (F12)
2. Go to Application tab
3. Check Service Workers section
4. Verify the service worker is active
5. Test offline functionality by disconnecting network

### 4. Test WhatsApp Integration

1. Click "Order" buttons on menu items
2. Verify WhatsApp opens with pre-filled message
3. Check that the message includes the correct item name
4. Test with your actual WhatsApp number

### 5. Verify SEO

1. Check meta tags using [Meta SEO Inspector](https://metaseo.inspector/)
2. Test structured data using [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Submit sitemap to Google Search Console
4. Verify robots.txt is accessible

### 6. Performance Testing

Run Lighthouse audit in Chrome:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit for Progressive Web App
4. Aim for 90+ score in all categories

## Custom Domain Setup (Optional)

### Using Vercel

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Wait for SSL certificate to generate

### Update Configuration Files

After setting up custom domain, update:
- `assets/js/script.js` - DOMAIN variable
- `index.html` - All domain references
- `robots.txt` - Sitemap URL
- `sitemap.xml` - All URLs

## Ongoing Maintenance

### Updating Content

To update menu items, prices, or information:
1. Edit `index.html` directly
2. Commit and push changes (if using Git)
3. Vercel will automatically redeploy

### Adding New Features

The codebase is structured for easy expansion:
- Add new sections in `index.html`
- Add styles in `assets/css/style.css`
- Add functionality in `assets/js/script.js`
- Update service worker cache in `sw.js`

### Monitoring

- Use Vercel Analytics to track performance
- Monitor PWA installation rates
- Track WhatsApp order conversions
- Review Lighthouse scores regularly

## Troubleshooting

### PWA Not Installing

**Problem:** Install prompt doesn't appear
**Solutions:**
- Ensure HTTPS is enabled
- Verify manifest.json is accessible
- Check service worker is registered
- Test in Chrome/Edge on desktop or Android

### Service Worker Not Working

**Problem:** Offline functionality not working
**Solutions:**
- Check browser console for errors
- Verify sw.js path is correct
- Ensure service worker scope is "/"
- Clear site data and reload

### WhatsApp Not Opening

**Problem:** Order buttons don't open WhatsApp
**Solutions:**
- Verify WHATSAPP_PHONE number format
- Check for JavaScript errors in console
- Ensure WhatsApp is installed on device
- Test with different phone number format

### Images Not Loading

**Problem:** Images appear broken
**Solutions:**
- Verify image paths are correct
- Check file names match exactly
- Ensure images are in correct directories
- Verify image files are not corrupted

## Security Considerations

- Always use HTTPS (Vercel provides this)
- Keep WhatsApp number private if needed
- Regularly update dependencies (if added later)
- Monitor for any security vulnerabilities
- Keep backup of all configuration files

## Performance Optimization Tips

1. **Images**
   - Use WebP format where possible
   - Implement responsive images
   - Lazy load below-the-fold images (already implemented)

2. **Code**
   - Minify CSS and JavaScript (Vercel does this automatically)
   - Remove unused code
   - Optimize font loading

3. **Caching**
   - Service worker caches static assets (already implemented)
   - Use appropriate cache headers
   - Implement cache-busting for updates

## Support and Resources

- [Vercel Documentation](https://vercel.com/docs)
- [PWA Best Practices](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp/)

## Next Steps

After successful deployment:

1. Set up Google Analytics for tracking
2. Configure Facebook Pixel for marketing
3. Set up email notifications for orders
4. Add online payment integration (future)
5. Implement customer reviews system (future)
6. Add delivery tracking (future)

---

**Note:** This PWA is designed to be easily extended with a Laravel backend for online ordering, customer accounts, and advanced features in the future.
