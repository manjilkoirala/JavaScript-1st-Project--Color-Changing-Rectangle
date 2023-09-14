var mouse=document.getElementById("center");

mouse.addEventListener('mousemove',(details)=>{
    var rectLocation=mouse.getBoundingClientRect();
   let insideRect= details.clientX-rectLocation.left;
   if(insideRect<rectLocation.width/2){
    let redColor=gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRect)
    mouse.style.backgroundColor=`rgb(${redColor},0,0)`
   }else{
    let blueColor=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRect)
    mouse.style.backgroundColor=`rgb(0,0,${blueColor})`
   }
   mouse.onmouseout=function(){mouseOut()}
   function mouseOut(){
    mouse.style.backgroundColor='white'
   }
})


