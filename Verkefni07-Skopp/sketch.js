
var boltiX = 100;
var boltiY = 100;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;

function setup() {
	createCanvas(400,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(176,224,230);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
	//F ef boltinn snertir vinstri vegginn
  if ((boltiX < 0-boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }

  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
  }

	// F bolti snertir botnin



	if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2){
		hradiY = hradiY * -1;
		stig = stig + 1
}

	// Teikna boltann
  fill(255,105,180);
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(240,230,140);
  rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(mouseX, spadiY, 10,10);
	// Teikna stigin
  fill(0);
  text("Stig: " + stig,10,20);
	fill(0)
	text("r = restart",270,20)
}
function keyPressed(){
	if (keyCode == 82 ){
		boltiX = 100;
		boltiY = 100;
		stig = stig * 0;
	}
}
