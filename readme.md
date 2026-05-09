# imageFormatFallback

----
**This repo is archived**

This repo has been stale for years, and there are alternatives. 

Alternatives include
- HTML Picture-Tag
- CSS @media / @supports
- check request headers for support (with Htaccess or PHP)
- As of 2026, WEBP is pretty much universally supported anyway. Exotic file formats are exotic anyway and shouldn't be used. In cases where PNGs are preferred, check out [Oxipng](https://github.com/oxipng/oxipng)
  

\* As of 2026, I'm currently mirroring Repos from GitHub to GitLab bidirectionally. Target platform might change later.  
GitLab: https://gitlab.com/Maingron/imageFormatFallback-js  
GitHub: https://github.com/Maingron/imageFormatFallback.js


**News - Read first: https://github.com/Maingron/imageFormatFallback.js/issues/13 (Cancel development because of alternatives)**
  
----

## How to use
1. Load images onto the server - In this example we have image.webp; image.xjr and image.jpg
2. Go into the HTML and add the format Attribute to your \<img\>-Tag: `<img src="images/image.webp" formats="webp,xjr,jpg" alt="image">`
3. Publish.

## Configuration options
- `fallbackPrefix`: If all your fallback images should have a prefix, you can set it here. Example: "fallback_"
- `fallbackAttributeName`: If you want a different attribute than `formats=""`, you can set it here

## Supported image formats
- .avif
- .bmp
- .gif
- .heic
- .ico
- .jpg
- .jxr
- .png
- .tga
- .tiff
- .webp

## Tested working browsers
- **Firefox 8** and later
- **Google Chrome 9** and later
- **Internet Explorer 9** and later
- **Safari 3** and later
- **Opera 12** and later
- Other Browsers:
    - Nintendo 3DS Browser
    - Nintendo Switch Browser
    - Playstation 3 Browser
