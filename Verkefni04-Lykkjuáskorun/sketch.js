// Hér kemur kóðinn þinn:
var bukur = 100
var loftnet = 100
var hendur = 70
var fætur = 100
var litaveröld
var h = 0
var s = 360
var b = 360


function setup(){
    createCanvas(350,550);
    rectMode(CENTER);
    colorMode(HSB);
    }

    function draw(){
      background(180,12,100);
      fill(0,0,75);
      rect(mouseX,mouseY,100,bukur);
      rect(mouseX,mouseY - bukur/1.3,80,60); //haus 1,3

      fill(h,s,b);
      rect(mouseX - 25,mouseY - bukur/1.2,20,20);
      rect(mouseX + 25,mouseY - bukur/1.2,20,20);

      fill(0);
      line(mouseX - 40,mouseY - bukur,mouseX - 40,mouseY - loftnet - 30); //loftnet
      fill(0,0,75);
      rect(mouseX - 20,mouseY + bukur/2 + 30,fætur/5,60); //fætur
      rect(mouseX + 20,mouseY + bukur/2 + 30,fætur/5,60); //fætur
      //hendur
      rect(mouseX - 50 - hendur/2,mouseY - bukur/4,hendur,15); //bukur
      rect(mouseX + 50 + hendur/2,mouseY - bukur/4,hendur,15); //bukur
    }

function mousePressed(){
      bukur = random(70,110);
      loftnet = random(70,110);
      hendur = random(70,110);
      fætur = random(70,120);
      h = random (0,360);

}
