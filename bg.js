const body = document.querySelector("body");

function getRandom() {
  return Math.floor(Math.random() * 3);
}

function displayBg() {
  const image = new Image();
  image.src = `images/${getRandom() + 1}.jpg`;
  image.classList.add("bgImg");
  body.appendChild(image);
}

function init() {
  displayBg();
}

init();
