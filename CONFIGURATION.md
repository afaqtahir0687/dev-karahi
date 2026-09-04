# Configuration Summary - Chicken Karahi PWA

This document provides a quick reference for all configuration values that need to be updated before deploying the Chicken Karahi Progressive Web App to production.

## Quick Configuration Checklist

### 1. JavaScript Configuration (`assets/js/script.js`)

**Lines 4-6:** Update these values with your actual business information

```javascript
const WHATSAPP_PHONE = '923017730687'; // WhatsApp phone number (without + or spaces)
const BUSINESS_NAME = 'Chicken Karahi'; // Business name for WhatsApp messages
const DOMAIN = 'https://your-domain.com'; // Website domain (replace with actual domain)
```

**What to change:**
- `WHATSAPP_PHONE`: Your actual WhatsApp number in international format (e.g., 923017730687)
- `BUSINESS_NAME`: Your restaurant name as it should appear in WhatsApp messages
- `DOMAIN`: Your actual website domain after deployment (e.g., https://chickenkarahi.com)

---

### 2. HTML Meta Tags (`index.html`)

**Lines 16-17:** Open Graph image and URL
```html
<meta property="og:image" content="https://your-domain.com/assets/images/karahi.png">
<meta property="og:url" content="https://your-domain.com/">
```

**Line 25:** Twitter Card image
```html
<meta name="twitter:image" content="https://your-domain.com/assets/images/karahi.png">
```

**Line 28:** Canonical URL
```html
<link rel="canonical" href="https://your-domain.com/">
```

**Lines 48-96:** JSON-LD Structured Data
```json
{
  "url": "https://your-domain.com/",
  "telephone": "+923017730687",
  "email": "info@your-domain.com",
  "address": {
    "streetAddress": "Musa St, Johar View, Near Doctor Hospital",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "postalCode": "54000",
    "addressCountry": "PK"
  },
  "geo": {
    "latitude": "31.5204",
    "longitude": "74.3587"
  },
  "menu": "https://your-domain.com/#menu",
  "image": [
    "https://your-domain.com/assets/images/karahi.png",
    "https://your-domain.com/assets/images/chicken.png"
  ],
  "sameAs": [
    "https://www.facebook.com/your-domain",
    "https://www.instagram.com/your-domain",
    "https://twitter.com/your-domain"
  ]
}
```

**What to change:**
- Replace all `https://your-domain.com` with your actual domain
- Update `telephone` with your actual phone number
- Update `email` with your actual email address
- Update `address` with your actual business address
- Update `geo` coordinates with your actual location
- Update `sameAs` with your actual social media links

---

### 3. Robots.txt (`robots.txt`)

**Line 11:** Sitemap URL
```
Sitemap: https://your-domain.com/sitemap.xml
```

**What to change:**
- Replace `https://your-domain.com` with your actual domain

---

### 4. Sitemap.xml (`sitemap.xml`)

**Lines 6, 12, 18, 24, 30:** All page URLs
```xml
<loc>https://your-domain.com/</loc>
<loc>https://your-domain.com/#menu</loc>
<loc>https://your-domain.com/#about</loc>
<loc>https://your-domain.com/#gallery</loc>
<loc>https://your-domain.com/#contact</loc>
```

**What to change:**
- Replace all `https://your-domain.com` with your actual domain

---

### 5. Manifest.json (`manifest.json`)

**Lines 2-4:** App name and description
```json
{
  "name": "Chicken Karahi",
  "short_name": "Karahi",
  "description": "Authentic Pakistani Chicken Karahi and Desi Food - Fresh ingredients, made to order, hygienic kitchen, fast delivery."
}
```

**What to change:**
- Update `name` with your full app name
- Update `short_name` with a short version (max 12 characters)
- Update `description` with your business description

---

### 6. App Icons (`assets/icons/`)

**Required Action:** Convert SVG files to PNG

**Files to convert:**
- `icon-192x192.svg` → `icon-192x192.png`
- `icon-512x512.svg` → `icon-512x512.png`

**Conversion methods:**
1. Online: https://cloudconvert.com/svg-to-png
2. Command line: `convert icon-192x192.svg -resize 192x192 icon-192x192.png`

---

## Business Information Template

Use this template to gather all your business information before configuration:

### Contact Information
- **WhatsApp Number:** _______________ (format: 923017730687)
- **Phone Number:** _______________ (format: +923017730687)
- **Email:** _______________ (format: info@yourdomain.com)

### Address
- **Street Address:** _______________
- **City:** _______________
- **State/Region:** _______________
- **Postal Code:** _______________
- **Country:** _______________ (format: PK)

### Location
- **Latitude:** _______________ (format: 31.5204)
- **Longitude:** _______________ (format: 74.3587)
- **Google Maps Link:** _______________

### Business Details
- **Business Name:** _______________
- **Short Name:** _______________ (max 12 characters)
- **Description:** _______________
- **Opening Hours:** _______________ (format: 11:00 - 23:00)

### Online Presence
- **Website Domain:** _______________ (format: https://yourdomain.com)
- **Facebook URL:** _______________
- **Instagram URL:** _______________
- **Twitter URL:** _______________

### Menu Items
Update these in `index.html` if needed:
- **Chicken Karahi:** Rs. 1,099
- **Garlic Naan:** Rs. 120
- **Raita:** Rs. 100
- **Fresh Salad:** Rs. 120

---

## Configuration Priority

### High Priority (Must configure before deployment)
1. ✅ WhatsApp phone number in `script.js`
2. ✅ Domain name in all files
3. ✅ Business address in JSON-LD
4. ✅ Contact information in JSON-LD
5. ✅ Convert SVG icons to PNG

### Medium Priority (Configure for best results)
1. ⚠️ Social media links in JSON-LD
2. ⚠️ Business description in manifest
3. ⚠️ Opening hours in JSON-LD
4. ⚠️ Geo coordinates in JSON-LD

### Low Priority (Optional improvements)
1. 💡 Menu items and prices
2. 💡 Customer reviews
3. 💡 Gallery images
4. 💡 Special deals

---

## Testing After Configuration

After updating all configuration values, test the following:

### 1. WhatsApp Integration
- [ ] Click "Order" buttons on menu items
- [ ] Verify WhatsApp opens with correct message
- [ ] Check message includes business name and item name

### 2. PWA Installation
- [ ] Open site in Chrome/Edge on desktop
- [ ] Look for install icon in address bar
- [ ] Test installation on mobile device
- [ ] Verify app icon appears correctly

### 3. SEO Meta Tags
- [ ] Test with Meta SEO Inspector
- [ ] Validate structured data with Google Rich Results Test
- [ ] Check Open Graph preview with Facebook Debugger
- [ ] Verify Twitter Card preview

### 4. Service Worker
- [ ] Check service worker is registered in DevTools
- [ ] Test offline functionality
- [ ] Verify caching works correctly
- [ ] Check cache storage in Application tab

---

## Common Configuration Mistakes

### ❌ Wrong Phone Number Format
**Incorrect:** +92 301 7730687, 0301-7730687, (0301) 7730687
**Correct:** 923017730687

### ❌ Missing HTTPS in Domain
**Incorrect:** http://yourdomain.com, yourdomain.com
**Correct:** https://yourdomain.com

### ❌ Inconsistent Domain Names
**Incorrect:** yourdomain.com in one file, www.yourdomain.com in another
**Correct:** Use the same domain format everywhere (preferably without www)

### ❌ Missing PNG Icons
**Incorrect:** Only SVG files present
**Correct:** Both SVG and PNG files present (PNG required for PWA)

### ❌ Invalid JSON-LD Format
**Incorrect:** Missing commas, wrong quote types, invalid structure
**Correct:** Validate JSON-LD using Google's Structured Data Testing Tool

---

## Configuration Tools

### JSON-LD Validator
https://search.google.com/test/rich-results

### Meta Tag Tester
https://metatags.io/

### Open Graph Debugger
https://developers.facebook.com/tools/debug/

### Twitter Card Validator
https://cards-dev.twitter.com/validator

### Sitemap Validator
https://www.xml-sitemaps.com/validate-xml-sitemap.html

---

## Support

If you encounter configuration issues:

1. Check the [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions
2. Review browser console for JavaScript errors
3. Validate all JSON files using online validators
4. Test configuration changes incrementally
5. Keep backups of original files before making changes

---

**Remember:** Always test configuration changes in a development environment before deploying to production.
