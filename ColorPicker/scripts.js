const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange= document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

const getBg = (selectedElement) => {
return window.getComputedStyle(selectedElement).backgroundColor;

}



const magicColor = (ele,color) => {
return ele.addEventListener('mouseenter', () => {
        center.style.backgroundColor = color;
    })
}
magicColor(red,getBg(red));
magicColor(cyan,getBg(cyan));
magicColor(violet,getBg(violet));
magicColor(orange,getBg(orange));
magicColor(pink,getBg(pink));