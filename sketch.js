var hr;
var mn;
var sc;
var alarm;
var hrIN,mnIN, sIN;
var form1;
var tick, ala;
var int1,int2;

function preload(){
  tick = loadSound("tick.mp3");
  //ala = loadSound("alarm.mp3");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  int1 = createInput('00');
  int2 = createInput('00');
  
 
}

function draw() {
background(0);  
tick.play(true);

hr = hour();
mn = minute();
sc = second();

int1.position(70 , 70);
    
int2.position(70 , 130);
fill("white");
strokeWeight(1);
stroke("Aqua");
textSize(47)
text(int1.value()+":"+int2.value(),82,300);

if(int2.value() === minute()){
 
 
  text("Hi",115,50);
}
fill("white");
textSize(20)
text("Hour",23,88);
text("Min",30,147);
textSize(30);
text("Alarm",115,50);
text("Current Alarm",40,250);
textSize(50);
text(hr+":"+mn+":"+sc,575,225);


translate(400, 200);


strokeWeight(5);
stroke("Lime");
noFill();
rotate(-90);
var scAngle = map(sc, 0, 60, 0, 360);
arc(0, 0, 300, 300, 0, scAngle);

push();
rotate(scAngle);
line(0, 0, 110, 0);
pop();

stroke("Pink");
var mnAngle = map(mn, 0, 60, 0, 360);
arc(0, 0, 280, 280, 0, mnAngle);

push();
rotate(mnAngle);
line(0, 0, 90, 0);
pop();

stroke("purple");
var hrAngle = map(hr%12, 0, 12, 0, 360);
arc(0, 0, 260, 260, 0, hrAngle);

push();
rotate(hrAngle);
line(0, 0, 60, 0);

pop();



  

}