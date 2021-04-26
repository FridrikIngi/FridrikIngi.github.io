function setup(){
  createCanvas(600,600);
  background(245,255,250);
}

function draw(){
  if(mouseY < height/2 && mouseX < width/2) {
    noStroke()
    fill(124,252,0)
    rect(0,0,300,300)
  }
  else {
      background(245,255,250)
 }

 if(mouseY < height/2 && mouseX > width/2) {
    noStroke()
    fill(255,255,255)
    rect (300,0,300,300)
}
  else {
      background(245,255,250);
    }
