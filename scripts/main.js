const myImage = document.querySelector("img");
const myVideo = document.querySelector("video");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


/* Functions */
if (myImage) 
{
    myImage.onclick = () => 
    {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/pusheen.png") 
        {
            myImage.setAttribute("src", "images/pusheenangry.png");
        } else 
        {
            myImage.setAttribute("src", "images/pusheen.png");
        }
    };
}

if (myVideo) 
{
    myVideo.onclick = () => 
    {
        myVideo.play();
    };
}

const cardsElement = document.getElementById("cards");
if (cardsElement) {
    cardsElement.onmousemove = (e) => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };
}