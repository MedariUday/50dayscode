let fun=()=>{
    const c=document.getElementById("h1");
    c.style.color="blue";

    const para=document.getElementsByClassName("text");
    for(let i=0;i<para.length;i++){
    para[i].style.fontWeight="bold";
    }

    const p=document.querySelector(".para");
    p.style.color="red";

    
    document.body.style.backgroundColor="lightyellow";

} 