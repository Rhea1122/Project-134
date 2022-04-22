sound = "";
status_game = "";
objects =  [];

function preload()
{
  sound = loadSound("alarm.mp3");
}
function setup()
{
  canvas = createCanvas(500,400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}
function modelLoaded()
{
  console.log("Model Loaded");
  status_game = true;
}
function gotResult(error,results)
{
    if (error)
    {
      console.error(error);
    }
    else
    {
      console.log(results);
      objects = results;
      document.getElementById("Detecting Objects");
    }
}
function draw()
{
    image(video,0,0,500,400);
    objectDetector.detect(video,gotResult);
    for (var i = 0; i < objects.length ; i++)
    {
      document.getElementById("status").innerHTML = "Status : Objects Detected";
    if (objects[i].label == "person")
    {
      document.getElementById("objects").innerHTML = "Baby Found";
      sound.stop();
    }
    else
    {
      document.getElementById("objects").innerHTML = "Baby Not Found";
      sound.play();
    }
    }
    if(objects[i].length < 0)
    {
      document.getElementById("objects").innerHTML = "Baby Not Found";
      sound.play();
    }
}
  
