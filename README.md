# Fuzion-before-after
Fuzion-before-after
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fuzion Hair Care - Before & After</title>

<link rel="stylesheet" href="style.css">

<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

</head>
<body>

<div class="container" id="captureArea">

    <div class="logo-section">
        <h1>FUZION</h1>
        <h2>HAIR CARE</h2>
    </div>

    <div class="photo-section">

        <label class="upload-box">
            <input type="file" accept="image/*" id="beforeInput">
            <img id="beforePreview">
            <div class="placeholder" id="beforeText">
                BEFORE<br><br>
                Click To Upload
            </div>
        </label>

        <label class="upload-box">
            <input type="file" accept="image/*" id="afterInput">
            <img id="afterPreview">
            <div class="placeholder" id="afterText">
                AFTER<br><br>
                Click To Upload
            </div>
        </label>

    </div>

    <div class="footer">

        <div class="features">
            <span>NO HARSH CHEMICALS</span>
            <span>PARABEN FREE</span>
            <span>100% NATURAL & VEGAN</span>
        </div>

        <div class="contact">
            <p>📞 601168676613</p>
            <p>Facebook @fuzionhaircare</p>
            <p>Instagram @fuzion_haircare</p>
        </div>

    </div>

</div>

<div class="button-area">
    <button onclick="downloadImage()">
        Download Before & After
    </button>
</div>

<script src="script.js"></script>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f8f2ef;
padding:30px;
}

.container{
max-width:1200px;
margin:auto;
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 5px 20px rgba(0,0,0,.1);
}

.logo-section{
text-align:center;
margin-bottom:40px;
}

.logo-section h1{
font-size:72px;
color:#8f1414;
letter-spacing:5px;
}

.logo-section h2{
font-size:20px;
letter-spacing:8px;
color:#8f1414;
}

.photo-section{
display:flex;
gap:30px;
justify-content:center;
}

.upload-box{
width:500px;
height:700px;
border:2px solid #a04b4b;
border-radius:30px;
cursor:pointer;
overflow:hidden;
position:relative;
background:white;
}

.upload-box input{
display:none;
}

.upload-box img{
width:100%;
height:100%;
object-fit:cover;
display:none;
}

.placeholder{
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
text-align:center;
font-size:28px;
color:#999;
}

.footer{
margin-top:40px;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
}

.features{
display:flex;
gap:20px;
flex-wrap:wrap;
font-weight:bold;
}

.contact{
text-align:right;
line-height:1.8;
}

.button-area{
text-align:center;
margin-top:30px;
}

button{
background:#8f1414;
color:white;
padding:15px 30px;
border:none;
border-radius:10px;
cursor:pointer;
font-size:18px;
}

button:hover{
opacity:0.9;
}

@media(max-width:900px){

.photo-section{
flex-direction:column;
align-items:center;
}

.upload-box{
width:95%;
height:500px;
}

.logo-section h1{
font-size:50px;
}

}
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

</body>
</html>
