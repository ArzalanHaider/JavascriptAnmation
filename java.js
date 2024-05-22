let magneto = document.querySelector(".magneto")
let magnetoText = magneto.querySelector(".text")
let debuge = document.querySelector("#debugger")

let activeMagneto = (event) => {
    console.log(event);
    
}
let resetMagneto = (event) => {
    
}
magneto.addEventListener("mousemove",(e)=>{
    let boundBox = magneto.getBoundingClientRect();
    debuge.innerHTML = "clientX: " + e.clientX +
    "<br/> boxLeft: " + Math.ceil(boundBox.left) +
    "<br/> CursorInsideButton: " + Math.ceil(e.clientX - boundBox.left)+
    "<br/> relativeToWidth: " + (Math.ceil(e.clientX - boundBox.left)/magneto.offsetWidth).toFixed(2) +
    "<br/> relativeToWidthleft: " + (Math.ceil(e.clientX - boundBox.left)/magneto.offsetWidth-0.5).toFixed(2) +
    "<br/> relativeToWidthTop: " + (Math.ceil(e.clientY - boundBox.top)/magneto.offsetHeight-0.5).toFixed(2);
    let newX = (Math.ceil(e.clientX - boundBox.left)/magneto.offsetWidth)-0.5;
    let newY =(Math.ceil(e.clientY - boundBox.top)/magneto.offsetHeight)-0.5;
    gsap.to(magneto,{
        duration:1,
        x:newX * 20,
        y:newY * 20,
        ease:Power4.easeOut
    })

    gsap.to(magnetoText,{
        duration:1,
        x:newX * 40,
        y:newY * 40,
        ease:Power4.easeOut
    })
    
    
})
magneto.addEventListener("mouseleave",()=>{
    gsap.to(magneto,{
        duration:1,
        x : 0,
        y : 0,
        ease: Elastic.easeOut
    })

    gsap.to(magnetoText,{
        duration:1,
        x : 0,
        y : 0,
        ease: Elastic.easeOut
    })
})