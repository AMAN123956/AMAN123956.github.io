

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