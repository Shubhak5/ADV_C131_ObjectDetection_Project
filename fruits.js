img = "";
model_status = "";

function preload() {
    img = loadImage('fruit_basket.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(350, 140);

    //setup cocossd model
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Status:Detecting Objects...";

}

function draw() {
    image(img, 0, 0, 640, 420);

    //add label near dog
    fill('#FF0000');
    text('fruits', 45, 75);

    noFill();
    stroke("#FF0000");
    rect(30, 60, 350, 350);
}

function modelLoaded() {
    console.log("Cocossd Model is Initialized");
    model_status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}