# How to use:
1. Load images onto the server - In this example we have image.webp; image.xjr and image.jpg
2. Go into the HTML and add the format Attribute to your \<img\>-Tag: `<img src="images/image.webp" formats="webp,xjr,jpg" alt="image">`
3. Publish.

## Configuration options:
`fallbackPrefix`: If all your fallback images should have a prefix, you can set it here. Example: "fallback_".<br>
`fallbackAttributeName`: If you want a different attribute than `formats=""`, you can set it here.