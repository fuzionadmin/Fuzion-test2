function previewImage(inputId, previewId, textId){

const input = document.getElementById(inputId);

input.addEventListener("change", function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

document.getElementById(previewId).src = e.target.result;
document.getElementById(previewId).style.display = "block";

document.getElementById(textId).style.display = "none";

}

reader.readAsDataURL(file);

}

});

}

previewImage(
"beforeInput",
"beforePreview",
"beforeText"
);

previewImage(
"afterInput",
"afterPreview",
"afterText"
);

function downloadImage(){

html2canvas(
document.getElementById("captureArea"),
{
scale:2
}
).then(canvas=>{

const link=document.createElement("a");

link.download=
"Fuzion-Before-After.png";

link.href=
canvas.toDataURL();

link.click();

});

}
