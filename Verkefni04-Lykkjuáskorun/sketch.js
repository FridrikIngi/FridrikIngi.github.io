function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  colorMode(HSB);
  frameRate(2);
}

function draw() {
    fill(random(0,180),100,100)
    for(var i = 100; i < 300; i = i + 25)
      rect(10,190,20,20);

}

function draw(){
  for(var i = 50; i < 351; i = i + 25) {
    fill(random(180,360),100,100);
    ellipse(i,150,20,20);
  }

  for(var i = 75; i < 326; i = i + 25) {
    fill(random(180,360),100,100);
    ellipse(i,250,20,20);

  }



}
