var SpeechRecognition= window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textbox=document.getElementById("textbox");
function start(){
textbox.innerHTML="";
recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    textbox.innerHTML=content;
    speak();
}
camera=document.getElementById("camera");
function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
   
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
