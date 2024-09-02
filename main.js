const camera=document.getElementById("camera");
const showBtn=document.getElementById("show-camera");
async function showCamera() {
    await navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
        camera.srcObject=stream;
})
.catch(error=>{console.error("There is an error accessing the camera.")})
}
showBtn.addEventListener("click",()=>showCamera());