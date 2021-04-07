// Hér kemur kóðinn þinn:



function setup(){
    createCanvas(300,300);
    background(255);
    noStroke()
    fill(139,69,19);
    triangle(140,180,140,100,60,180);
    triangle(260,180,180,100,180,180);
    fill(205,133,63);
    rect(140,100,40,180);
    fill(0)
    rect(0,180,300,200)

  }

    function draw() {
      noStroke()
      fill(255,69,0)
      ellipse(random(140,180), random(100,210), 10,10);
      frameRate(3)

    }
