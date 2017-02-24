circle1 = {
  x:20,
  y:240,
  w:50,
  h:50
};

circle2 = {
  x:20,
  y:320,
  w:80,
  h:80
};
circle3 = {
  x:320,
  y:30,
  w:40,
  h:40
};
circle4 = {
  x:350,
  y:30,
  w:70,
  h:70
};
function setup() {
  createCanvas(640,480);
    background(212,123,32);
}

function draw() {
  background(212,123,32);
  fill(23,41,123)
   if(circle1.x>320) {
   fill(219,12,21)
     
   }
  ellipse(circle1.x,circle1.y,circle1.w, circle1.h)
  fill(212,21,211)
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  if (circle2.x>320) {
   fill(r,g,b)
  }
  ellipse(circle2.x,circle2.y,circle2.w,circle2.h)
  fill(12,80,80);

  if (circle3.y>240) {
    circle3.w=random(20,100)
    circle3.h=random(20,100)
  }
  ellipse(circle3.x,circle3.y,circle3.w,circle3.h)
  fill(172,129,109);
  // if (circle4.y>240) {
  // circle4=rect(circle4.x,circle4.y,circle4.w,circle4.h)
   //circle4.y=circle4.y+2
  //}
  ellipse(circle4.x,circle4.y,circle4.w,circle4.h)

  circle1.x=circle1.x+1;
  circle2.x=circle2.x+2;
  circle3.y=circle3.y+1;
  circle4.y=circle4.y+2;
  
}
 
