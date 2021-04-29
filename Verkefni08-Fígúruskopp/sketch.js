var bukur = 100
var loftnet = 100
var hendur = 70
var fætur = 100
var h = 0
var s = 360
var b = 360

function setup(){
	createCanvas(600,600)
	colorMode(HSB)
	background(180,100,100)
	rectMode(CENTER)
}

function mousePressed(){
	//teikna robot á x og y gildi en hafa random hæð og breidd miðað við búkinn
	robot(mouseX,mouseY,random(50,150))
	h = random(0,360)
}

function robot(mouseX,mouseY,bukur){
	fill(0,0,75);
	rect(mouseX,mouseY,100,bukur);
	rect(mouseX,mouseY - bukur/1.3,80,60); //haus 1,3

	fill(h,s,b);
	rect(mouseX - 25,mouseY - bukur/1.2,20,20);
	rect(mouseX + 25,mouseY - bukur/1.2,20,20)

	fill(0);
	line(mouseX - 40,mouseY - bukur,mouseX - 40,mouseY - loftnet - 30); //loftnet
	fill(0,0,75);
	rect(mouseX - 20,mouseY + bukur/2 + 30,fætur/5,60); //fætur
	rect(mouseX + 20,mouseY + bukur/2 + 30,fætur/5,60); //fætur
	//hendur
	rect(mouseX - 50 - hendur/2,mouseY - bukur/4,hendur,15); //bukur
	rect(mouseX + 50 + hendur/2,mouseY - bukur/4,hendur,15); //bukur
}
