function setupUpload(inputId,imgId){

    const input=document.getElementById(inputId);

    input.addEventListener("change",function(){

        const file=this.files[0];

        if(!file) return;

        const reader=new FileReader();

        reader.onload=function(e){

            const img=document.getElementById(imgId);

            img.src=e.target.result;

            img.style.display="block";

            img.nextElementSibling.style.display="none";
        }

        reader.readAsDataURL(file);

    });

}

setupUpload("beforeInput","beforeImg");
setupUpload("afterInput","afterImg");

function downloadResult(){

    html2canvas(document.getElementById("capture"),{
        scale:2
    }).then(canvas=>{

        const link=document.createElement("a");

        link.download="Fuzion-Before-After.png";

        link.href=canvas.toDataURL("image/png");

        link.click();

    });

}
