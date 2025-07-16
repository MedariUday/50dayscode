document.getElementById("input").addEventListener("input",function(event){
    document.getElementById("para").innerHTML=event.target.value;
});

document.getElementById("para").addEventListener("dblclick",function(){
    this.style.backgroundColor="lightblue";
    alert("Double Clicked!");
})

document.getElementById("input").addEventListener("focus",function(){
    this.style.backgroundColor="lightgreen";
});

document.getElementById("input").addEventListener("blur",function(){
    this.style.backgroundColor="white";
});