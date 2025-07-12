
//even or odd without arrow function
/*let num=function(n){
    return (n%2===0)?"Even":"Odd";
}
n=prompt("Enter the Number:");
alert("The number is "+num(n));*/

//even or odd with arrow function

/*let num=(n)=>{
    return (n%2===0)?"Even":"Odd";
}
n=prompt("Enter the Number:");
alert("The number is "+num(n));*/

// Factorial program
/*let result=1
let fact=(n)=>{
    return (n===0 || n===1)?1:n*fact(n-1);
    if(n===0 || n===1){
        
        return 1;
    }
    else{
        return n*fact(n-1);
        
    }
}
let n=Number(prompt("Enter the Number:"));
alert("The Factorical of the Number is "+fact(n));*/

/*let num=(n)=>{
    if(n%3===0 && n%5===0){
        return "FizzBuzz";
    }else if(n%3===0){
        return "Fizz";
    }else if(n%5===0){
        return "Buzz";
    }else{
        return n;
    }
}
n=prompt("Enter the Number:");
alert(num(n));*/

/*const items=document.getElementsByClassName("text");
for(let i=0;i<items.length;i++){
    items[i].style.color="blue";
}*/
let fun=()=>{
const paras=document.getElementsByTagName("p");
paras[0].innerHTML="Changed!";
}

const element=document.querySelector(".intro");
element.style.fontWeight="bold";