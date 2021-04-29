var r = 255
var g = 255
var b = 255
var takki = false

function setup(){
  createCanvas(600,600);
  background(230,255,110);
  rectMode(CENTER);
}

function draw(){
  background(230,255,110);
  if(mouseY < height/2 && mouseX < width/2) {
    noStroke();
    fill(0,255,0);
    rect(150,150,300,300);
    stroke(1)
    fill(0,g,b);
    rect(mouseX,mouseY,50,50);
  }

  if(mouseY > height/2 && mouseX > width/2){
    noStroke();
    fill(0,255,255);
    rect(450,450,300,300);
    stroke(1);
    fill(0,g,0);
    rect(mouseX,mouseY,50,50,);
  }

  if(mouseY > height/2 && mouseX < width/2){
    noStroke();
    fill(255,0,0);
    rect(150,450,300,300);
    stroke(1);
    fill(r,g,0);
    ellipse(mouseX,mouseY,50,50);
  }

  if(mouseY < height/2 && mouseX > width/2){
    noStroke();
    fill(255,255,0)
    rect(450,150,300,300)
    stroke(1)
    fill(r,0,0);
    ellipse(mouseX,mouseY,50,50);
  }
  if (takki){
    background(0);
    fill(255);
    textSize(15);
    text("Þú hefur ýtt á bilslána... hvers vegna???",150,200);
    text("vinsamlegast ýttu aftur á bilslána til þess að fara til baka",95,300);
  }
}

  function mousePressed(){
    r = random(150,255);
    g = random(150,255);
    b = random(150,255);
}

  function keyPressed(){
    if (keyCode == 32){
    takki = !takki
  }
}
