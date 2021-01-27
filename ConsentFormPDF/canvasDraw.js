//window.onload = resizeCanvas();
window.onload = function(){
	/*
  var canvas = document.getElementById("sheet");
  var ctx = canvas.getContext("2d");
  
  var img = new Image();
  img.src = "./img/body1.jpg";
  img.onload = function() {
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height
  )
  ctx.globalCompositeOperation  = 'destination-over';
  console.log(ctx.globalCompositeOperation);
  };
  
  console.log(img,"imagepath");
	*/
  resizeCanvas();
};

document.getElementById("sheet").addEventListener("click", function () {
  console.log("sssssssssss=>click", window.pencolor);
  //window.pencolor = "white";
});


function resizeCanvas() {
  console.log(window.innerHeight, "------->", window.innerWidth);
  var convas = document.getElementById("sheet");

  //convas.width = window.innerWidth / 3.5;
  window.pencolor = "black";  // set pencolor for default drawing
  
}

document.getElementById("eraser-canvas").addEventListener("click", function () {
  console.log("sssssssssss=>", "click");
  window.pencolor = "white";
  window.pixelDepth = "50px";
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
