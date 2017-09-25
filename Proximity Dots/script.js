var points = [];
var ind = 0;
var winx = window.innerWidth;
var winy = window.innerHeight;
var dotsx = 7;
var dotsy = 9;
var scalx = winx/dotsx;
var scaly = winy/dotsy;
var maxsize = 60;
var mindist = winx * 0.4;
var on = false;

function setup() {
    createCanvas(winx, winy);
    background(0);
    stroke(255);
    fill(255);
    for (i=0; i<dotsx; i++) {
       for (j=0; j<dotsy; j++) {
       if (i>0 && j>0 && i!=winx && j!=winy) {
       points[ind] = {x: i*scalx, y: j*scaly, distp: 1};
       ellipse(i*scalx, j*scaly, 1, 1);
       ++ind;
       }
       }
    }
    ind = 0;
    }

function draw() {
    background(0);
    strokeWeight(0);
    fill(255);
    stroke(255);
    
    if (on) {
    for (i=0; i<dotsx; i++) {
       for (j=0; j<dotsy; j++) {
       if (i>0 && j>0 && i!=winx && j!=winy) {
       points[ind] = 
       {x: i*scalx, 
       y: j*scaly, 
       distp: dist(mouseX, mouseY, points[ind].x || 1, points[ind].y || 1)
       };
       fill(points[ind].distp < mindist ? map(points[ind].distp, mindist, 0, 0, 225) : 1);
       ellipse(i*scalx, j*scaly, points[ind].distp < mindist ? map(points[ind].distp, mindist, 0, 0, maxsize) : 1, points[ind].distp < mindist ? map(points[ind].distp, mindist, 0, 0, maxsize) : 1);
       ++ind;
       }
       }
    }
    !on;
    ind = 0;
    } else if (!on) {
       for (i=0; i<dotsx; i++) {
       for (j=0; j<dotsy; j++) {
       if (i>0 && j>0 && i!=winx && j!=winy) {
       points[ind] = {x: i*scalx, y: j*scaly, distp: 1};
       ellipse(i*scalx, j*scaly, 1, 1);
       ++ind;
       }
       }
    }
    ind = 0;
    }
    }
    
function mousePressed() {
  on = true;
  $(function () {
      $("#instruct").animate({top : "-20vh", opacity : "0"}, 800);
  });
}
    
function mouseDragged() {
  on = true;
}

function mouseReleased() {
  on = false; 
}