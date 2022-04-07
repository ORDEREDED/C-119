function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function setup(){
var canvas=createCanvas(380,380);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function draw(){
strokeWeight(7);
stroke(0);
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function classifyCanvas(){
classifier.classify(canvas,gotresult);
}