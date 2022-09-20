const toggle = document.querySelector(".right");
const statusBg = document.querySelectorAll(".unread");
const dots = document.querySelectorAll(".dot");
const num = document.querySelector(".num");

toggle.addEventListener("click", () => {
    num.innerHTML = "0";
    for(let i = 0; i < statusBg.length; i++) {
        statusBg[i].style.backgroundColor = "transparent";
    }
    for(let j = 0; j < dots.length; j++) {
        dots[j].style.display = "none";
    }
})