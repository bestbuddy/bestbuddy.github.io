window.onload = resizeCanvas();

document.getElementById("sheet").addEventListener("click", function () {
  console.log("sssssssssss=>", "click");
  window.pencolor = "white";
});

function resizeCanvas() {
  console.log(window.innerHeight, "------->", window.innerWidth);
  var convas = document.getElementById("sheet");

  convas.width = window.innerWidth / 3.5;
}

document.getElementById("eraser-canvas").addEventListener("click", function () {
  console.log("sssssssssss=>", "click");
  window.pencolor = "white";
});

document
  .getElementById("eraser-canvas-2")
  .addEventListener("click", function () {
    console.log("sssssssssss=>", "click");
    window.pencolor = "white";
  });

document.getElementById("black1").addEventListener("click", function () {
  window.pencolor = "black";
});

document.getElementById("black2").addEventListener("click", function () {
  window.pencolor = "black";
});
