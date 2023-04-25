Webcam.set({
    width:300 , height:300, image_format:'png', png_quality: 90
});
camera= document.getElementById('camera');
Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById('result').innerHTML="<img id='pic' src="+data_uri+">"
    });
}

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0_bSqGmTZ/model.json", modelloaded)

function speak(){
    var synth= window.speechSynthesis;
    var speakdata= "The prediction is "+ prediction;
    var Utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(Utterthis);

}

function get_gesture(){
    img= document.getElementById("pic");
    classifier.classify(img, gotResults);
}


function gotResults(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById('emoji_name1').innerHTML= results[0].label;
    prediction= results[0].label;
    speak();}
    if(results[0].label== "Amazing Hand Sign"){
        document.getElementById("emoji").innerHTML="&#128076;";
    }

    if(results[0].label== "Best Hand Sign"){
        document.getElementById("emoji").innerHTML="&#128077;";
    }

    if(results[0].label== "Victory Hand Sign"){
        document.getElementById("emoji").innerHTML="&#9996;";
    }

}

function modelloaded(){
    console.log('model has been loaded')
}
