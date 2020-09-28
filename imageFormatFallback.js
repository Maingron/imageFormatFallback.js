if(!data) {
    var data = d = {};
    data["imageFormatFallback"] = {
        "elements":{},
        "data":{},
        "config":{}
    }
    var imageFormatFallback = data["imageFormatFallback"];
}

imageFormatFallback.config = {
    "fallbackPrefix":"",
    "fallbackAttributeName":"formats" //<img src="img/image.webp" formats="webp,png,jpg" alt="alt">
}



imageFormatFallback.data.supportedFormats = [];

if(window.addEventListener) {
    window.addEventListener("DOMContentLoaded",function() {
        checkSupportedImageFormats();
    })
} else {
    window.setTimeout(function() {
        attachEvent("onload", checkSupportedImageFormats());
    },100)
}


function checkSupportedImageFormats() {
    imageFormatFallback.elements.checkDiv = document.createElement("div");
    imageFormatFallback.elements.checkDiv.style.position = "fixed";
    imageFormatFallback.elements.checkDiv.style.top = "-300px";
    imageFormatFallback.elements.checkDiv.style.opacity = 0;

    document.body.appendChild(imageFormatFallback.elements.checkDiv);

    spawnIMGs();
}



function spawnIMGs() {
    imageFormatFallback.elements.check = [];
    function spawnTestImage(format,base64String) {
        imageFormatFallback.elements.check[format] = document.createElement("img");
        imageFormatFallback.elements.check[format].alt = "";
        imageFormatFallback.elements.check[format].setAttribute("onload","if(this.offsetWidth > 45) {imageFormatFallback.data.supportedFormats.push('"+format+"')}");
        imageFormatFallback.elements.check[format].src = base64String;
        imageFormatFallback.elements.checkDiv.appendChild(imageFormatFallback.elements.check[format]);
    }

    var a7 = "AAAAAAA", a28 = a7+a7+a7+a7, a84 = a28+a28+a28, a336 = a84+a84+a84+a84, a512 = "", aS = "///////////////////////////////////////////";
    aS+=aS;

    for(var i = 0; 512 / 16 > i; i++) {
        a512 += "AAAAAAAAAAAAAAAA";
    }

    var a1023 = a512 + a336 + a84 + a84 + a7;

    spawnTestImage("png","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAABCAIAAAATs2rlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAPSURBVBhXY/zPMPgAAwMAlpgBAcC6F+AAAAAASUVORK5CYII=");
    spawnTestImage("bmp","data:image/bmp;base64,Qk2S"+a7+"AAHYAAAAoAAAAMgAAAAEAAAABAAQ"+a7+"AAAADEDgAAxA4AABAAAAAQAAAAAAD//wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w"+a28+a7+"AA=");
    spawnTestImage("gif","data:image/gif;base64,R0lGODlhMgABAHAAACwAAAAAMgABAIf/"+a1023+"IDgABCBxIsKDBgwgTFgwIADs=");
    spawnTestImage("jpg","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAARAAAATg"+a7+"ABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMi4xMgAA/9sAQwD"+aS+"9sAQwH"+aS+"8AAEQgAAQAyAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEB"+a7+"AAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQE"+a7+"ABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8AbRRRSNAooooAKKKKACiiigD/2Q==");
    spawnTestImage("webp","data:image/webp;base64,UklGRt4AAABXRUJQVlA4WAoAAAAIAAAAMQAAAAAAVlA4TAoAAAAvMQAAAIj+R/8DRVhJRq4AAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAMQECABEAAABmAAAAaYcEAAEAAAB4"+a7+"AAGAAAAABAAAAYAAAAAEAAABwYWludC5uZXQgNC4yLjEyAAAEAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAKgBAABAAAAMgAAAAOgBAABAAAAAQ"+a7+"AA=");
    spawnTestImage("jxr","data:image/vnd.ms-photo;base64,SUm8AQgAAAANABoBBQABAAAAqgAAABsBBQABAAAAsgAAACgBAwABAAAAAgAAADEBAgARAAAAugAAAAG8AQAQAAAAzAAAAAK8BAAB"+a7+"AAAS8BAAB"+a7+"AAIC8BAABAAAAMgAAAIG8BAABAAAAAQAAAIK8CwABAAAAAADAQoO8CwABAAAAAADAQsC8BAABAAAA3AAAAMG8BAABAAAAfw"+a7+"ABgAAAAAQAAAGAAAAABAAAAcGFpbnQubmV0IDQuMi4xMgAAJMPdbwNO/kuxhT13do3JDFdNUEhPVE8AEUbAcQAxAABwAM4Pb2zhCQjPEVFAAAEAAAAQAE3/AARCgAABAAABAYCgUEwAAAgAAI"+a7+"QI"+a28+a28+a7+a7+a7+"AAEDRyc=");
    spawnTestImage("tga","data:image/x-tga;base64,AAAK"+a7+"AAAAAMgABABgAsQAA/+8B"+a336+a84+a28+a28+a7+"AAAAHABsA5AcOAAkAKw"+a28+a28+a7+"HBhaW50Lm5ldCA0LjIuMTI"+a28+a7+"AgAAAAAAEAAQABAAE"+a7+a7+"AAAABY"+a7+"AAVFJVRVZJU0lPTi1YRklMRS4A");
    spawnTestImage("tiff","data:image/tiff;base64,SUkqACAAAACAP8AQOCQWDQeEQmFQuGQ2HQ+IRGHQEAAQAP4ABAAB"+a7+"AAAABBAABAAAAMgAAAAEBBAABAAAAAQAAAAIBAwADAAAA5gAAAAMBAwABAAAABQAAAAYBAwABAAAAAgAAABEBBAABAAAACAAAABUBAwABAAAAAwAAABYBBAABAAAAAQAAABcBBAABAAAAFwAAABoBBQABAAAA7AAAABsBBQABAAAA9AAAABwBAwABAAAAAQAAACgBAwABAAAAAgAAADEBAgARAAAA/AAAAD0BAwABAAAAAg"+a7+"AAIAAgACAAAdwEA6AMAAAB3AQDoAwAAcGFpbnQubmV0IDQuMi4xMgAA");


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

                    if(imageFormatFallback.data.supportedFormats.indexOf(thisOriginalFormat) > -1) {
                    } else {
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
        },100)
    }
    fixImages();
}