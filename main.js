Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">'
    })
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9qvpCPlUA/',modelLoaded);

function modelLoaded()
{
    console.log('model has been loaded');
}
function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
   if(error){
    console.error(error);
   }
   else{
     console.log(results);
     document.getElementById("member").innerHTML=results[0].label;
     document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)*100+"%";
   }
}


