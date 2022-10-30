var leftWristX = 0;
var leftWristY = 0;

var rightWristX = 0;
var rightWristY = 0;

function preload() {
    harryPotterSong = loadSound("music.mp3");
    PeterPanSong = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500, 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("The model has loaded!")
}

function draw() {
    image(video, 0, 0, 500, 400)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log(leftWristX, leftWristY)
        console.log(rightWristX, rightWristY)

    }
}
