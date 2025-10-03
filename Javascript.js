
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("showdata");
});


const phrases = [

  "We love to code",
  "We are Concept",
  "We are creative",
  "We have to dream",
];

let i = 0;
const textEl = document.getElementById("text");

function showText() {
  textEl.textContent = phrases[i];
  textEl.classList.add("show");


  setTimeout(() => {
    textEl.classList.remove("show");
  }, 2000);


  i = (i + 1) % phrases.length;
}


showText();

setInterval(showText, 3000);