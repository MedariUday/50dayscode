alert("welcome");
let name=prompt("Enter your name:");
console.log("Hello",name);
console.log(typeof name);
let age=prompt("Enter your age:");
console.log("Age:",age)


let a=10;
let b=15;
console.log(a+b); //arithmetic operator
console.log(a-b);//arithmetic operator
console.log(a*b);//arithmetic operator
console.log(5=='5');//comparision operator
console.log(5==='5');//comparision operator
console.log((a<b) && (a>b));//logical operator
console.log((a<b) || (a>b));//logical operator

let status=(age>=18)?"Adult":"Minor";//ternary operator
console.log(status);

if(age>18){
    console.log("Eligible to Vote")
}
else{
    console.log("Not Eligible to Vote")
}

let marks=prompt("Enter your Marks:");
if(marks>90){
    console.log("Grade A")
}
else if(marks>08){
    console.log("Grade B")
}
else if(marks>70){
    console.log("Grade C")
}
else if(marks>60){
    console.log("Grade D")
}
else if(marks>50){
    console.log("Grade E")
}
else{
    console.log("Grade F")
}


