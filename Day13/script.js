document.getElementById("mybutton").addEventListener("click",
    function(){
        alert("Button was clicked!");
    }
);

document.getElementById("myelement").addEventListener("mouseover",
    function(){
        this.style.backgroundColor="Yellow";
    }
);
document.getElementById("myelement").addEventListener("mouseout",
    function(){
        this.style.backgroundColor="white";
    }
);
document.addEventListener("keydown",function(event){
    console.log("you pressed:"+event.key);
});
document.getElementById("keyup").addEventListener("keyup",function(event){
    console.log("You released :"+event.key);
});

document.getElementById("myinput").addEventListener("input",
    function(){
        console.log("Current input is:"+this.value);
    }
);

document.getElementById("myinput1").addEventListener("change",
    function(){
        alert("Input changed to:"+this.value);
    }
);

document.getElementById("myform").addEventListener("submit",function(event){
    event.preventDefault();
    alert("Form Submitted!");
})

document.getElementById("double").addEventListener("dblclick",
    function(){
        alert("double clicked detected !");
    }
);

document.getElementById("myinput2").addEventListener("focus",
    function(){
        this.style.backgroundColor="lightblue";
    }
);

document.getElementById("myinput2").addEventListener("blur",
    function(){
        this.style.backgroundColor="lightgreen";
    }
);