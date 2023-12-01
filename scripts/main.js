const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* Functions */
function setUserName() 
{
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome, ${myName}`;
    }
  }

/* Main */
if (!localStorage.getItem("name")) 
{
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
}

myButton.onclick = () => 
{
    setUserName();
};

myImage.onclick = () => 
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pusheen.png") {
        myImage.setAttribute("src", "images/pusheenangry.png");
    } else {
        myImage.setAttribute("src", "images/pusheen.png");
    }
};
