const bg = document.querySelector("a");
let lastY = null;

function checkposElement() {
  const pos = bg.getBoundingClientRect();
  const posY = pos.y;

  console.log(posY);

  if (lastY !== posY) {
    console.log("from Elemet",posY);
    lastY = posY;
  }

  requestAnimationFrame(checkposElement);
}

checkposElement();

window.addEventListener("scroll", () => {
    console.log(scrollY+lastY)
});


