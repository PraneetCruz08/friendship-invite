const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const btnGroup = document.getElementById("btn-group");

yesBtn.addEventListener("click", () => {
    // 1. Change the text
    question.innerHTML = "Yay! We are Friends 👯‍♀️";
    
    // 2. Change the GIF (You can replace this URL below)
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejRtcHF2dHUzdm42bHRtdDcwaGN2ZG4xZHFiMml5d2czamF0c25mdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/O5uOk4PAjSlMtkS8oF/giphy.gif";
    
    // 3. Hide the buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    // Optional: Hide the container too so it doesn't take up space
    btnGroup.style.display = "none"; 
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed"; 
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});