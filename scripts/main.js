const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* Functions */
myImage.onclick = () => 
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pusheen.png") {
        myImage.setAttribute("src", "images/pusheenangry.png");
    } else {
        myImage.setAttribute("src", "images/pusheen.png");
    }
};
