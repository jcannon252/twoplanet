
var nav = 1;



//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(0,0,0); //black background
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;
  let iy = height - mouseY;
  stroke(76,0,153) // an RGB color for the circle's border
  fill(mouseY,ix,nav); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  stroke(mouseY);
  strokeWeight(0)
  ellipse(iy,mouseX,nav,nav);
  strokeWeight(0);
  ellipse(250,nav,nav,nav);

  
nav = nav + 1;

}


