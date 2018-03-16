let angleRF = 0;
let angleLF = 0;
let angleF = 0;
let scalar = 50;
let rotor = 0.5;

let angleRH1 = 0;
let angleF1 = 0;

let lever = 0;
let lever2 = 0;
let lever3 = 0;

let buttonRH1;
let buttonRH2;
let buttonLH1;
let buttonLH2;

let state1 = false;
let state2 = false; 
let state3 = false;
let state4 = false;

let stateA = 0;
let stateB = 0;
let stateC = 0;
let stateD = 0;

//sound function
let blink = 0;
let blonk = 0;
let blynk = 0;
let blink2 = 0;
let blink3 = 0; 
let blink4 = 0;

//small ellipse function
let bubblestate1 = 0;
let bubblestate2 = 0; 
let bubblestate3 = 0; 
let bubblestate4 = 0;

//small ellipse fills
let fill1a, fill1b, fill1c = 0;
let fill2a, fill2b, fill2c = 0;
let fill3a, fill3b, fill3c = 0;
let fill4a, fill4b, fill4c = 0;

let ellipseangle = 0;
let ellipseangle2 = 0;

cursor1 = 0;

let standard = 0;

let volumestate = false;

let anchor1;
let anchor2;
let anchor3;
let anchor4;
let anchor5;
let anchor6;

function preload() {
  face = loadImage("ICMface.png");
  handR = loadImage("ICMhand1.png");
  handL = loadImage("ICMhand2.png");
  footR = loadImage("ICMfoot2.png");
  footL = loadImage("ICMfoot1.png");
  dslr = loadImage("dslr.png");
  macbook = loadImage("macbook.png");
  theory = loadImage("theory.png");
  p = loadImage("oldpiano.png");
  keyboard = loadImage("keyboard.png");
  feather2 = loadImage("feather2.png");
  feather1 = loadImage("feather1.png");
  buzz = loadSound("buzz.wav");
  typing = loadSound("typing.mp3");
  shutter = loadSound("camera.wav");
  loop1 = loadSound("1.WAV");
  loop2 = loadSound("2.WAV");
  loop3 = loadSound("3.WAV");
  loop4 = loadSound("4.WAV");
  loop5 = loadSound("5.WAV");
  mute = loadImage("mute.png");
  sound = loadImage("sound.png");
  idea = loadImage("idea.png");
}

function setup() { 
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  
  standard = createButton('View in Standard Mode');
  standard.position(width/2-60, height-50);
  
  //standard mode anchor
  anchor6 = createA('https://williamfhallett.wordpress.com/', '', '_blank');
  anchor6.position(width/2-60, height-50);
  anchor6.size(160, 15);
  //anchor6.style("border", "1px black solid");
  
  
  //technology anchor
  anchor1 = createA('https://williamfhallett.wordpress.com/technology/', '', '_blank');
  anchor1.position(100, 280);
  anchor1.size(270, 50);
  anchor1.hide();
  
  //music anchor
  anchor2 = createA('https://williamfhallett.wordpress.com/music/', '', '_blank');
  anchor2.position(100, height-100);
  anchor2.size(270, 50);
  //anchor1.style("border", "1px black solid");
  anchor2.hide();
  
  //film/photography anchor 
   anchor3 = createA('https://williamfhallett.wordpress.com/film-photography/', '', '_blank');
  anchor3.position(width-400, 280);
  anchor3.size(370, 50);
  //anchor3.style("border", "1px black solid");
  anchor3.hide();
  
  //writing anchor
   anchor4 = createA('https://williamfhallett.wordpress.com/writing/', '', '_blank');
  anchor4.position(width-300, height-100);
  anchor4.size(170, 50);
  //anchor4.style("border", "1px black solid");
  anchor4.hide();
  
  //concept anchor
  anchor5 = createA('https://williamfhallett.wordpress.com/portfolio/icm-final-project/', '', '_blank');
  anchor5.position(width-75, height-75);
  anchor5.size(75, 50);
  //anchor5.style("border", "1px black solid");
  
} 

function draw() { 
  background(255);
  rectMode(CENTER);
  
  //sine
  let angF = radians(angleF);
  let z1 = rotor * sin(angF);
  angleF += 3;
  stroke(2);
  
  //info
  image(idea, width-65, height-65, 50, 50);
  
  
  
   //if (stateA == 1 && stateB == 1 && stateC == 1 && stateD == 1) {
  	 push();
  	 translate(0,0);
  	 rotate(-PI/2);
  	 textSize(15);
  	 textFont("Helvetica");
     fill(0);
     noStroke();
     text('William Hallett', -height/2 - 150, 15);
     text('Masters Candidate, NYU', -height/2 + 50, 15);
  	 pop();
  	 
   //}
  
  textFont("Helvetica");
  
   //top left mouseover   
  if (bubblestate1==1) {
    stateA = 1;
  }
  if (stateA == 1) {
   image(macbook, 100, 50);
    anchor1.show();
    textSize(40);
    fill(255, 0);
    stroke(2);
    if (mouseX > 100 && mouseX < 400 && mouseY > 250 && mouseY < 350) {
      fill(0);
    } else {
    fill(255,0);
    }
    text("- Design -", 150, 320);
  }
  if (stateA==1 && blink4==0){
    loop4.loop();
    blink4=1;
  }
  
  //top right mouseover
  if (bubblestate4==1) {
    stateB = 1;
  }
  
  if (stateB == 1) {
    image(dslr, width-350, 50);
    anchor3.show();
    textSize(40);
    stroke(2);
    if (mouseX > width-400 && mouseX < width-50 && mouseY > 250 && mouseY < 350) {
     fill(0); 
    } else {
     fill(255,0);
    }
    text("- Film/Photography -", width-400, 320);
  }
  
  //toprightsound
  if(stateB==1 && blonk==0) {
    loop1.loop();
    //shutter.loop();
    //shutter.setVolume(0.5);
    blonk=1;
  }
  
  //bottom left mouseover 
  if (bubblestate3==1) {
    stateC = 1;
  }
  if (stateC == 1) {
    image(p, 75, height-350, 300, 250);
    anchor2.show();
    textSize(40);
    stroke(2);
    if (mouseX > 100 && mouseX < 300 && mouseY > height-100 && mouseY < height-30) {
      fill(0);
    } else {
    fill(255,0);
    }
    text("- Music -", 150, height-50);
  }
	if (stateC==1 && blink3==0) {
    loop2.loop();
    blink3 = 1;
  }
  
	//bottom right mouseover
	if (bubblestate2==1) {
    stateD = 1;
  }
	if (stateD == 1) {
    image(keyboard, width - 400, height - 300);
    anchor4.show();
    textSize(40);
    if (mouseX > width-350 && mouseX < width-100 && mouseY > height-100 && mouseY < height-30) {
     fill(0); 
    } else {
    fill(255, 0);
    }
    stroke(2);
    text("- Writing -", width-300, height-50);
  }
  //feather1 
  push(); 
  translate(width/2, height/2);
  angleF1 += 0.015;
  rotate(-angleF1);
  image(feather1, 0, -300, 300, 300);
  pop();
  
  //feather2
  push(); 
  translate(width/2, height/2);
  angleF1 += 0.015;
  rotate(angleF1);
  image(feather2, -350, -300, 400, 350);
  pop();
  
  //face
  push();
  translate(width/2, height/2);
  rotate(lever);
  image(theory, -105, -300, 200, 200);
  pop();
  
  //right hand (top)
  push();
  translate(width/2, height/2);
  rotate(lever + 0.5);
  //rotate(angleRH1);
  //angleRH1 += 0.01;
  image(handR, -300, -100);  
  pop();
  
  //right hand (bottom)
  push();
  translate(width/2, height/2);
  rotate(lever-0.5);
  image(handR, -290, -100);
  pop(); 
  
  // left hand (top)
  push();
  translate(width/2, height/2);
  rotate(lever + 1);
  image(handL, -100, -330);
  pop(); 
  
  //left hand (bottom)
  push();
  translate(width/2, height/2);
  rotate(lever + 2);
  image(handL, -100, -320);
  pop(); 
  
  //right foot
  let angRF = radians(angleRF);
  let y1 = 50 + (scalar * sin(angRF));
  angleRF += 3;
  push();
  translate(width/2, height/2);
  image(footR, -90, lever2);
  pop();
  
  
  //left foot
  let angLF = radians(angleLF);
  let y2 = 50 + (scalar * cos(angLF));
  angleLF += 3;
  push();
  translate(width/2, height/2);
  image(footL, 0, lever3);
  pop();
  
  //ellipse
  push();
  noStroke();
  fill(255);
  ellipse(width/2, height/2, 300, 300);
  pop();
  
  fill(255, 0);

   //ellipsefill1
  if (dist(mouseX, mouseY, width/2-170, height/2-125) < 50) {
    bubblestate1 = 1;
  }
  
  if (bubblestate1 == 1) {
    fill1a = 255;
    fill1b = 51;
    fill1c = 0;
  }
  
  //ellipsefill2
  if (dist(mouseX, mouseY, width/2+190, height/2+70) < 50) {
    bubblestate2 = 1;
  }
  if (bubblestate2 == 1) {
    fill2a = 0;
    fill2b = 153;
    fill2c = 255;
  }
  
  //ellipsefill3
  if (dist(mouseX, mouseY, width/2-185, height/2+70) < 50) {
    bubblestate3 = 1;
  }
  if (bubblestate3 == 1) {
    fill3a = 255;
    fill3b = 255;
    fill3c = 0;
  }
  
  //ellipsefill4
  if (dist(mouseX, mouseY, width/2+180, height/2-135) < 50) {
    bubblestate4 = 1;
  }
  if (bubblestate4 == 1) {
    fill4a = 51;
    fill4b = 204;
    fill4c = 51;
  }
  
  //ellipses
  push();
  translate(width/2, height/2);
  stroke(1);
  
  push();
   rotate(lever);
  noStroke();
  fill(fill1a, fill1b, fill1c, 0);
  ellipse(-170, -125, 100, 100);
  pop();
  
  push();
  rotate(lever);
  noStroke();
  fill(fill2a, fill2b, fill2c, 0);
	ellipse(190, 70, 100, 100);
  pop();
  
  push();
  rotate(lever);
  noStroke();
  fill(fill3a, fill3b, fill3c, 0);
	ellipse(-185, 70, 100, 100);
  pop();
  
  push();
  rotate(lever);
  noStroke();
  fill(fill4a, fill4b, fill4c, 0);
	ellipse(180, -135, 100, 100);
  pop();
  pop();

  
  //lever
  if (bubblestate1==1 && bubblestate2==1 && bubblestate3==1 && bubblestate4==1) {
    lever = z1;
    lever2 = y1;
    lever3 = y2;
    cursor1 = 1;
  } else {
    lever = 0;
    lever2 = 0;
    lever3 = 0;
    cursor1 = 0;
  }
  
  //rhythm loop
   if (stateA == 1 && stateB == 1 && stateC == 1 && stateD == 1 && blink2==0) {
   	 loop5.loop();
     blink2=1;
   }
  
  //keyboardsound
  if (stateD == 1 && blynk==0) {
    loop3.loop();
    blynk=1; 
  }
  
  //cursor
 	if(cursor1 == 0 && dist(mouseX, mouseY, width/2-170, height/2-125) < 50 || cursor1 == 0 && dist(mouseX, mouseY, width/2+190, height/2+70) < 50 || cursor1 == 0 && dist(mouseX, mouseY, width/2-185, height/2+70) < 50 || cursor1 == 0 && dist(mouseX, mouseY, width/2+180, height/2-135) < 50) {
   cursor(HAND); 
  } else if (mouseX > 100 && mouseX < 400 && mouseY > 250 && mouseY < 350 || mouseX > 100 && mouseX < 300 && mouseY > height-100 && mouseY < height-30 || mouseX > width-350 && mouseX < width-100 && mouseY > height-100 && mouseY < height-30 || mouseX > width-400 && mouseX < width-50 && mouseY > 250 && mouseY < 350 || mouseX > 0 && mouseX < 60 && mouseY > height-60 && mouseY < height) {
   cursor(HAND);
  } else {
   cursor(ARROW);
  }
  
  if (volumestate) {
    masterVolume(0);
    image(mute, 10, height-60, 50, 50);
  } else {
    masterVolume(1);
    image(sound, 10, height-60, 50, 50);
  }
}

function mousePressed() {
 if (mouseX > 0 && mouseX < 100 && mouseY > height-100 && mouseY < height) {
    volumestate = !volumestate;
  }
}
