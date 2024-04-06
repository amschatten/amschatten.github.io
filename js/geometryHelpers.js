
const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const contentRatio = 4/6; /* 1 */
const maxWidth = 1920;/* px */
const maxContent = maxWidth*contentRatio; /* px */
const minWidth = 640; /* px */
const minContent = minWidth*contentRatio; /* px */

function setWidthMode() {
    /*
    def contentWidth(windowWidth) -> float:
        if windowWidth < 640: return 640*4/6
        elif 640 <= windowWidth < 1920: return windowWidth*4/6
        elif 1920 <= windowWidth: return 1920*4/6
    */
    const containerElement = document.querySelector(".container");
    if (windowWidth <= minWidth) {
        containerElement.style.width = minContent + "px";
        containerElement.style.marginLeft = (windowWidth-minContent)/2 + "px";
        console.log("Thin mode");
    }
    else if (windowWidth <= maxWidth) {
        containerElement.style.width = contentRatio*100 + "%";
        containerElement.style.marginLeft = (1-contentRatio)*100/2 + "%";
        console.log("Wide mode");
    }
    else {
        containerElement.style.width = maxContent + "px";
        containerElement.style.marginLeft = (windowWidth-maxContent)/2 + "px";
        console.log("Ultra wide mode");
    }
    containerElement.style.marginRight = containerElement.style.marginLeft;
}

function setTextSizeFromImage(imageId, textId, scale) {
    const imageElementWidth = document.getElementById(imageId).naturalWidth;
    document.getElementById(textId).style.fontSize = imageElementWidth*scale + "pt";
}

function setTextSizeFromVector(imageId, textId, scale) {
    const imageElementWidth = document.getElementById(imageId).getBoundingClientRect().width;
    document.getElementById(textId).style.fontSize = imageElementWidth*scale + "pt";
}

function getElementWidth(elementID) {
    const htmlElement = document.getElementById(elementID);
    return htmlElement.offsetWidth;
}

function setHeaderButtonWidth(headerID) {
    const headerWidth = getElementWidth(headerID);
}

function createDivInAnchor(name, href) {
    const divMas = document.createElement("div");
    const anchor = document.createElement("a");
    const divSub = document.createElement("div");
    if (href === "") {
        anchor.href = "./" + name + ".html";
    } else {
        anchor.href = "./" + href + ".html";
    }
    divSub.textContent = name;
    anchor.appendChild(divSub);
    divMas.appendChild(anchor);
    return divMas
}

function createDivFiller() {
    const div = document.createElement("div");
    div.textContent = "/";
    return div
}

function dynamicHeader(){
    const navElement = document.getElementById("nav");
    navElement.appendChild(createDivInAnchor("home", "index"));
    const subpageNames = ["photos", "videos", "about"];
    for (let subpageId in subpageNames) {
        navElement.appendChild(createDivFiller());
        navElement.appendChild(createDivInAnchor(subpageNames[subpageId], ""));
    }
}