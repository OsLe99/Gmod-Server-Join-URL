# basementdwellers.net

Static community page for the basementdwellers.net Garry's Mod server.

## Files

| File | Purpose |
|---|---|
| `index.html` | Main community page |
| `join.html` | Redirect page that auto-launches Steam |
| `images.config.js` | **Change images here** |
| `assets/css/styles.css` | Styles for the main page |
| `assets/css/join.css` | Styles for the join page |
| `assets/media/` | Put local image files here |

## Changing images

Open `images.config.js` and edit the values at the top of the file.

```js
var joinPageImage   = "assets/media/MajoraSpin.gif";  // join page GIF
var heroBannerImage = "https://...";                   // hero background
var galleryImageA   = "assets/media/screenshot1.jpg"; // gallery slot A
var galleryImageB   = "assets/media/screenshot2.jpg"; // gallery slot B
var galleryImageC   = "assets/media/screenshot3.jpg"; // gallery slot C
var galleryImageD   = "assets/media/screenshot4.jpg"; // gallery slot D
```

- Use a **local path** like `assets/media/yourfile.jpg` (place the file in `assets/media/`)
- Or use a **full URL** like `https://example.com/image.png`
- Leave a value as `""` to keep the default placeholder

## Deployment

No build step needed. Upload all files to any static host (GitHub Pages, Netlify, etc.) or drop them on a web server as-is.
