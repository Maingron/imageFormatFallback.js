# imageFormatFallback

## How to use
1. Load images onto the server - In this example we have image.webp; image.xjr and image.jpg
2. Go into the HTML and add the format Attribute to your \<img\>-Tag: `<img src="images/image.webp" formats="webp,xjr,jpg" alt="image">`
3. Publish.

## Configuration options
- `fallbackPrefix`: If all your fallback images should have a prefix, you can set it here. Example: "fallback_"
- `fallbackAttributeName`: If you want a different attribute than `formats=""`, you can set it here

## Supported image formats
- .avif
- .png
- .bmp
- .gif
- .jpg
- .webp
- .jxr
- .tga
- .tiff
- .heic

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