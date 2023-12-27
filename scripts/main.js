const myImage = document.querySelector("img");
const myVideo = document.querySelector("video");
let myHeading = document.querySelector("h1");

const playButton = document.getElementById("playButton");

/* Functions */
if (myImage) {
    myImage.onclick = () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/pusheen.png") {
            myImage.setAttribute("src", "images/pusheenangry.png");
        } else {
            myImage.setAttribute("src", "images/pusheen.png");
        }
    };
}

if (playButton && myVideo) {
    myVideo.onloadeddata = () => {
        const videoContainer = document.querySelector(".video-container");
        videoContainer.classList.add("fade-in");

        setTimeout
            (function () {
                if (!myVideo.paused)
                    playButton.style.display = "none";
                if (myVideo.paused)
                    playButton.style.display = "block";
            }, 2000
            );

    };

    playButton.onclick = () => {
        if (myVideo.paused) {
            myVideo.play();
            playButton.style.display = "none";
        }
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

