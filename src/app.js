const doboz1 = document.querySelector("#doboz1");
const startButton = document.querySelector("#startButton");

startButton.addEventListener("click",()=>{
    console.log("Működik");
    doboz1.style.backgroundColor="mistyrose";
    doboz1.style.animation = "bito1 10s";
});