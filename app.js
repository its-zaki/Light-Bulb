const Bulb = document.getElementById("bulb");
const button = document.getElementById("btn");
Bulb.addEventListener("mouseover", function (e) {
  if (Bulb.src.includes("off")) {
    Bulb.src = "./img/bulb-on.png";
  } else {
    Bulb.src = "./img/bulb-off.png";
  }
});
button.addEventListener("click", togglebtn);
function togglebtn(e) {
  if (button.textContent.includes("On")) {
    Bulb.src = "./img/bulb-on.png";
    button.textContent = "Turn Off";
  } else {
    Bulb.src = "./img/bulb-off.png";
    button.textContent = "Turn On";
  }
}
