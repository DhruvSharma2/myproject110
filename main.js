mustacheX = 0;
mustacheY = 0;

function preload()
{
   clown_mustache = loadImage('https://i.postimg.cc/sshfQbg3/m.png')
}
function setup()
{
 canvas = createCanvas(300,300);
 canvas.position(280,270);
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 poseNet = ml5.poseNet(video,modalLoaded);
 poseNet.on('pose',gotPoses);
}

//classifier=ml5.imageClassifier('MobileNet',modalLoaded);

function modalLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("mustache x= "+mustacheX);
        console.log("mustache y= "+mustacheY);
    }
}

function draw(){
   //image(video,0,0,300,300); 
   fill(255,0,0);
   stroke(255,0,0);
   image(clown_mustache,mustacheX+10,mustacheY+10,30,30);
}
function take_snapshot()
{
    save('myfilter.png')
}
