// imageFormatFallback.js 1.2.2-dev by Maingron (https://maingron.com/imageformatfallback)
// Licensed under MIT (https://github.com/Maingron/imageFormatFallback.js/blob/master/LICENSE)

if(!data) {
    var data = {};
    var d = data;
}

if(!data["imageFormatFallback"]) {
    var imageFormatFallback = data["imageFormatFallback"] = {
        "elements":{},
        "data":{},
        "config":{}
    }
}

// config
imageFormatFallback.config = {
    "fallbackPrefix":"",
    "fallbackAttributeName":"formats" //<img src="img/image.webp" formats="webp,png,jpg" alt="alt">
}

imageFormatFallback.data.supportedFormats = [];


if(window.addEventListener) {
    window.addEventListener("load",function() {
        checkSupportedImageFormats();
    });
} else {
    window.setTimeout(function() {
        attachEvent("onload", checkSupportedImageFormats);
    },100);
}


function checkSupportedImageFormats() {
    imageFormatFallback.elements.checkDiv = document.createElement("div");
    imageFormatFallback.elements.checkDiv.style.position = "fixed";
    imageFormatFallback.elements.checkDiv.style.top = "-400px";
    imageFormatFallback.elements.checkDiv.style.opacity = 0;

    document.body.appendChild(imageFormatFallback.elements.checkDiv);

    spawnIMGs();
}


function spawnIMGs() {
    imageFormatFallback.elements.check = [];
    function spawnTestImage(format,base64String) {
        imageFormatFallback.elements.check[format] = document.createElement("img");
        imageFormatFallback.elements.check[format].alt = "";
        imageFormatFallback.elements.check[format].setAttribute("onload","if(this.offsetWidth > 90 && this.offsetHeight > 90) {imageFormatFallback.data.supportedFormats.push('"+format+"')}");
        imageFormatFallback.elements.check[format].src = base64String;
        imageFormatFallback.elements.checkDiv.appendChild(imageFormatFallback.elements.check[format]);
    }

    // Compression
    const a = "AAAAAAAAAA";
    const a4 = a+a+a+a;
    const a44 = a4+a4+a4+a4;
    const s = "////////";
    const ico1 = s+s+"wAAAA"+s+s+"8AAAAP"+s+s+"AAAAD";
    const tga1 = "4////+P////j////";
    const tga14 = tga1+tga1+tga1+tga1;

    spawnTestImage("avif","data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAG4bWV0YQAAAAAAAAAoaGRscg"+a+"cGljd"+a+"AAAAAAFBETmF2aWYAAAAADnBpdG0AAAAAAAEAAAA6aWxvYwAAAABEAAADAAEAAAABAAAB4AAAABgAAgAAAAEAAAH4AAAAFQADAAAAAQAAAg0AAACyAAAAW2lpbmYAAAAAAAMAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAABppbmZlAgAAAAACAABhdjAxQWxwaGEAAAAAGWluZmUCAAAAAAMAAEV4aWZFeGlmAAAAAChpcmVm"+a+"5hdXhsAAIAAQABAAAADmNkc2MAAwABAAEAAAC5aXBycAAAAJFpcGNvAAAAFGlzcGUAAAAAAAAAZAAAAGQAAAAQcGFzcAAAAAEAAAABAAAADGF2MUOBABwAAAAADnBpeGkAAAAAAQgAAAA4YXV4QwAAAAB1cm46bXBlZzptcGVnQjpjaWNwOnN5c3RlbXM6YXV4aWxpYXJ5OmFscGhhAAAAABNjb2xybmNseAABAA0AAYAAAAAgaXBtYQAAAAAAAAACAAEFAQKDhIYAAgUBAoOEhQAAAOdtZGF0EgAKCRgZsePtgIaA0DIJEAAAm28MTzl/EgAKBhgZsePtUDIJEAAAm28MTzl/AAAAAElJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAAxAQIAEQAAAGYAAABphwQAAQAAAHgAAAAAAAAA8nYBAOgDAADydgEA6AMAAHBhaW50Lm5ldCA0LjIuMTQAAAQAAJAHAAQAAAAwMjMwAaADAAEAAAABAAAAAqAEAAEAAABkAAAAA6AEAAEAAABk"+a+"==");
    spawnTestImage("png","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAAAAAKVnuc8AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABlJREFUOE9j+I8EPjCM8kZ5o7xR3iiPxjwAvusJXPgOWb4AAAAASUVORK5CYII=");
    spawnTestImage("bmp","data:image/bmp;base64,Qk16BgAAAAAAADoAAAAoAAAAZAAAAGQAAAABAAE"+a+"ADEDgAAxA4AAAEAAAABAAAA/////w"+a44+a44+a44+a44+a44+a44+a44+a44+a44+a44+a44+a44+a44+a4+a+"AAA=");
    spawnTestImage("gif","data:image/gif;base64,R0lGODlhZABkAHAAACH5BAEAAAEALAAAAABkAGQAgQ"+a+"AAAAAAJzjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CGlYAAA7");
    spawnTestImage("jpg","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAARAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMi4xNAAA/9sAQwD"+s+s+s+s+s+s+s+s+s+s+"//////9sAQwH"+s+s+s+s+s+s+s+s+s+s+"//////8AAEQgAZABkAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEB"+a+"ABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8AkooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==");
    spawnTestImage("webp","data:image/webp;base64,UklGRuIAAABXRUJQVlA4WAoAAAAYAAAAYwAAYwAAVlA4TA0AAAAvY8AYEAcQERGIiP4HAEVYSUauAAAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAADEBAgARAAAAZgAAAGmHBAABAAAAeAAAAAAAAABgAAAAAQAAAGAAAAABAAAAcGFpbnQubmV0IDQuMi4xNAAABAAAkAcABAAAADAyMzABoAMAAQAAAAEAAAACoAQAAQAAAGQAAAADoAQAAQAAAGQAAAAAAAAA");
    spawnTestImage("jxr","data:image/vnd.ms-photo;base64,SUm8AQgAAAANABoBBQABAAAAqgAAABsBBQABAAAAsgAAACgBAwABAAAAAgAAADEBAgARAAAAugAAAAG8AQAQAAAAzAAAAAK8BAAB"+a+"S8BAABAAAAAAAAAIC8BAABAAAAZAAAAIG8BAABAAAAZAAAAIK8CwABAAAAAADAQoO8CwABAAAAAADAQsC8BAABAAAA3AAAAMG8BAABAAAAmQAAAAAAAABgAAAAAQAAAGAAAAABAAAAcGFpbnQubmV0IDQuMi4xNAAAJMPdbwNO/kuxhT13do3JDFdNUEhPVE8AEUbAcQBjAGNwAM4Pb2zhCQjPEVFAAAEAAAAeAGH/AARCgAABAAABAYEAABAAACAAAgABAAQAgIVVVVVVVVVVVVVUAAABAg"+a4+a4+"AAAAAAAQNHJ///////+A==");
    spawnTestImage("tga","data:image/x-tga;base64,AAAK"+a+"AAZABkABgA"+tga14+tga14+tga14+tga14+tga14+tga14+tga14+tga14+tga1+"4////+8B"+a44+a44+a44+"AAAAAAAKAB0A5AcKABQ"+a4+a+a+"AAAAAAHBhaW50Lm5ldCA0LjIuMTQ"+a+a+a+"AAAAAAgAAAAAAEAAQABAAE"+a+"AAAAAAAAKIBAAAAAAAAVFJVRVZJU0lPTi1YRklMRS4A");
    spawnTestImage("tiff","data:image/tiff;base64,SUkqAEQAAACAACBQOCQWDQeEQmFQuGQ2HQ+IRGJROKRWLReMRmNRuOR2PR+QSGRSOSSWTSeUSmVSuWS2XS+YTGZRmAgQAP4ABAAB"+a+"ABBAABAAAAZAAAAAEBBAABAAAAZAAAAAIBAwABAAAAAQAAAAMBAwABAAAABQAAAAYBAwABAAAAAwAAABEBBAABAAAACAAAABUBAwABAAAAAQAAABYBBAABAAAAZAAAABcBBAABAAAAPAAAABoBBQABAAAACgEAABsBBQABAAAAEgEAACgBAwABAAAAAgAAADEBAgARAAAAGgEAAD0BAwABAAAAAQAAAEABAwAGAAAALAEAAAAAAAAAdwEA6AMAAAB3AQDoAwAAcGFpbnQubmV0IDQuMi4xNAAA//8AAP//AAD//wAA");
    spawnTestImage("heic","data:image/heic;base64,AAAAGGZ0eXBoZWljAAAAAG1pZjFoZWljAAACJ21ldGEAAAAAAAAAIWhkbHI"+a+"HBpY3Q"+a+a+"ADnBpdG0AAAAAAAEAAAA0aWxvYwAAAABEQAACAAIAAAAAAkcAAQAAAAAAAAAcAAEAAAAAAmMAAQAAAAAAAAAcAAAAOGlpbmYAAAAAAAIAAAAVaW5mZQIAAAAAAQAAaHZjMQAAAAAVaW5mZQIAAAAAAgAAaHZjMQAAAAFmaXBycAAAAUNpcGNvAAAAdmh2Y0MBA3"+a+"AAAe8AD8/fj4AAAPAyAAAQAYQAEMAf//A3AAAAMAkAAAAwAAAwAeugJAIQABAClCAQEDcAAAAwCQAAADAAADAB6gNIGnd5bqSSmubAgAAAMACAAAAwAIQCIAAQAHRAHBcrAiQAAAABRpc3BlAAAAAAAAAGQAAABkAAAAJ2F1eEMAAAAAdXJuOm1wZWc6aGV2YzoyMDE1OmF1eGlkOjEAAAAAdmh2Y0MBA3"+a+"AAAe8AD8/fj4AAAPAyAAAQAYQAEMAf//A3AAAAMAkAAAAwAAAwAeugJAIQABAClCAQEDcAAAAwCQAAADAAADAB6gNIGnd5bqSSmubAgAAAMACAAAAwAIQCIAAQAHRAHBcrAiQAAAABRpc3BlAAAAAAAAAGQAAABkAAAAG2lwbWE"+a+"gACA4ECgwABAoQFAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAABAbWRhdAAAABgoAa8FWP1dV3B/wpG7UnAsAG+AAGQAFtAAAAAYKAGvBVj9XVdwf8KRu1JwLABvgABkABbQ");
    spawnTestImage("ico","data:image/x-icon;base64,AAABAAEAZGQCAAEAAQCwDAAAFgAAACgAAABkAAAAyAAAAAEAAQ"+a44+a44+a44+a44+a44+a44+a44+a44+a44+a44+a44+a44+a44+a4+a4+a+"AAAAAAD"+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+ico1+s+s+"wAAAA"); // 1bbp


    function fixImages() {
        window.setTimeout(function() {
            imageFormatFallback.elements.checkDiv.outerHTML = "";
            imageFormatFallback.elements.checkDiv = "";

            imageFormatFallback.elements.img = document.getElementsByTagName("img");

            for(var i=0; imageFormatFallback.elements.img.length > i; i++) {
                if(imageFormatFallback.elements.img[i].getAttribute(imageFormatFallback.config.fallbackAttributeName)) {
                    var thisFormats = imageFormatFallback.elements.img[i].getAttribute(imageFormatFallback.config.fallbackAttributeName).split(",");
                    var thisOriginalFormat = imageFormatFallback.elements.img[i].getAttribute("src").split(".").pop();
                    imageFormatFallback.elements.img[i].setAttribute("originalformat",thisOriginalFormat);
                    if(imageFormatFallback.data.supportedFormats.indexOf(thisOriginalFormat) < 0) {
                        for(var j=0; thisFormats.length > j; j++) {
                            if(imageFormatFallback.data.supportedFormats.indexOf(thisFormats[j].replace(/\s/g, '')) > -1) {
                                var newSrc = imageFormatFallback.config.fallbackPrefix + imageFormatFallback.elements.img[i].getAttribute("src").split(thisOriginalFormat)[0] + thisFormats[j].replace(/\s/g, '');
                                imageFormatFallback.elements.img[i].setAttribute("src",newSrc);
                                break;
                            }
                        }
                    }
                }
            }
        },25)
    }
    fixImages();
}