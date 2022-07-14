https://teachablemachine.withgoogle.com/models/mYnxj0b4f/

var prediction = "victory";

webcam.set({
height: 300,
width: 350,
image_format: png,
png_quality: 90

})

camera = document.getElementById("camera");

webcam.attach("#camera");
  
function take_snapshot(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id="image_capture" src="'+data_uri+'"/> '

});
}

console.log("The ml5 Version is:", ml5.version);

classifier = ml5.imgClassifier('https://teachablemachine.withgoogle.com/models/mYnxj0b4f/model.json', moddelloaded);

function moddelloaded(){
    console.log("Your Model is Loaded, F I N E  S I R.");
    speak()
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "Your Prediction is"+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

