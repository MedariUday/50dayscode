/*let number=Number(prompt("Enter the number:"));
if(number>0){
    if(number%2===0){
        alert("The number is Positive and Even");
    }else{
        alert("The number is Positive and Odd");
    }
}else if(number<0){
    if(number%2===0){
        alert("The number is Negative and Even");
    }else{
        alert("The number is Negative and Odd");
    }
}
else{
alert("The number is Zero and Even");
}
let day=Number(prompt("Enter the Day:"));
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}
let name1=prompt("Enter your name:");
let age=Number(prompt("Enter your age"));
alert("Your name is "+name1+" and Your age is "+age);
switch (true) {
  case (age >= 13 && age <= 18):
    msg="Not Eligible To Vote";
    break;
  case (age >= 19 && age <= 64):
    msg="Eligible To Vote";
    
  case (age > 64):
    msg+=" and Older";
    break;
  default:
    msg="Invalid age";
}alert(name1+" is "+msg);*/


/*for(let i=1;i<=20;i++){
    if(i%2===0){
        console.log(i);    }
}


let sum=0;
for(let j=1;j<=100;j++){
    sum+=j;
}
console.log("Sum Of Numbers From 1 to 100 is:"+sum);

for(let k=1;k<=10;k++){
    console.log("5 X "+k+" = "+5*k);
}*/



/*for(let i=2;i<100;i++){
    let flag=0;
    for (let j=2;j<i;j++){
        if(i%j===0){
            flag=1;
            break;
        }
    }
    if(flag===0){
        console.log(i)
    }
}*/

let count=1;
while(count<=10){
    console.log("5 X "+count+" = "+5*count);
    count++;
}