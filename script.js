window.onload = function () {
  typeWriter();
};

let i = 0;
let txt = "We take care of your comfort";
let speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
