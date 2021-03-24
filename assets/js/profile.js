

let skillButton = document.querySelectorAll(".skill-button");
let skillHeading = document.querySelector(".skill-heading");
let skillBox = document.querySelectorAll(".skill-box");
console.log(skillHeading.length);
console.log(skillBox.length);
let color = ["red", "#1B9CFC", "green", "gray", "black"];
let arr = ["FRONTEND TECHNOLOGIES", "BACKEND TECHNOLOGIES", "DATABSES", "FRAMEWORKS", "VERSION CONTROL"];
for (let i = 0; i < skillButton.length; i++){
    skillButton[i].addEventListener("click", (e) => {
        for (let j = 0; j < skillBox.length; j++){
            skillBox[j].style.display = "none";
        }   
            skillBox[i].classList.add('magictime', 'swap'); 
            skillHeading.innerHTML = arr[i];
            skillHeading.style.color = color[i];
            skillBox[i].style.display = "flex";
      
       
    })
}



/* Floating Button Logic Code */
const floatingOne = document.getElementById("float-one");
const navbar = document.getElementById("navbar");
const body = document.getElementById("bad");
const educationHeader = document.getElementById("education-header");
const projectTitle = document.querySelector(".project-title");
const skillHeader = document.getElementById("skill-header");
const accomplishment = document.getElementById("a-header");
const contact = document.querySelector(".reach-me");
const footer = document.getElementById("footer");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

// Dark Mode
moon.addEventListener("click", () => {
    moon.style.display = "none";
    sun.style.color = "yellow";
    sun.style.display = "block";
    educationHeader.style.background = "linear-gradient(to top left,#1F1B24 50%,black)";
    projectTitle.style.background = "linear-gradient(to top left,#1F1B24 50%,black)";
    skillHeader.style.background = "linear-gradient(to top left,#1F1B24 50%,black)";
    navbar.style.background="linear-gradient(to top left,#5e81cf 50%, #5e81cf)";
    accomplishment.style.background = "linear-gradient(to top left,#1F1B24 50%,black)";
    contact.style.background = "linear-gradient(to top left,#1F1B24 50%,black)";
    footer.style.background = "linear-gradient(to top left,#1F1B24 50%,black)";
    footer.style.opacity = "0.8";
})

// Bright Mode
sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";
    educationHeader.style= "background: url(img/b2.png);background-color: #1B9CFC;background-repeat: repeat-y;";
    projectTitle.style= "background: url(img/b2.png);background-color: #1B9CFC;background-repeat: repeat-y;";
    projectTitle.style="color:white;"
    skillHeader.style="background: url(img/b2.png);background-color: #1B9CFC;background-repeat: repeat-y;";
    navbar.style="background: url(img/b2.png);background-color: #1B9CFC;background-repeat: repeat-y;";
    accomplishment.style="background: url(img/b2.png);background-color: #1B9CFC;background-repeat: repeat-y;";
    contact.style="background: url(img/b2.png);background-color: #1B9CFC;background-repeat: repeat-y;";
    footer.style="background: url(img/b2.png);background-color: #1B9CFC;background-repeat: repeat-y;";
    footer.style.opacity = "1";
})
