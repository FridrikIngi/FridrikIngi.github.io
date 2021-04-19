function setup(){
  createCanvas(400,400);
    colorMode(HSB);
    frameRate(2);
  background(203,46,98);
}

function draw(){
  noStroke()
  fill(120,100,100)
  rect(0,300,400,100)
  fill(60,100,100)
  ellipse(60,60,70,70)
  fill(25,86,55);
  rect(300,200,20,100)
  fill(random(80,130),100,100);
  for(var i = 270; i < 360; i = i + 20){
    ellipse(i,200,20,20);
  }
  for(var i = 280; i < 360; i = i + 20){
    ellipse(i,185,20,20);
  }
  for(var i = 290; i < 350; i = i + 20){
    ellipse(i,170,20,20);
  }
  fill(0,0,random(70,96));
  for(var i = 100; i < 160; i = i + 2){
    ellipse(i + 200,100,30,30)
    ellipse(i + 40,80,20,30)
  }
}
