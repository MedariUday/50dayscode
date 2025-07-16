let count=0;
document.getElementById("bt1").addEventListener("click",function(){
    
    document.getElementById("bt2").innerHTML=count--;
});

document.getElementById("bt3").addEventListener("click",function(){
   
    document.getElementById("bt2").innerHTML=count++;
});

//Arrays
let fruits=['apple','banana','cherry'];
let numbers=[1,2,3,4,5];
let mixedData=['hello',123,true,{name:"uday"}];
console.log(fruits);
console.log(numbers);
console.log(mixedData);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(numbers.length);    

let colors=['red','orange','blue'];
console.log(colors);
colors[1]='green';
console.log(colors);

colors.push('yellow');
console.log(colors);
colors.pop();
console.log(colors);

let num=[3,4];
num.unshift(1,2);
console.log(num);

let days=['mon','tue','wed'];
let firstDay=days.shift();
console.log(days);
console.log(firstDay);

let groceries=['milk','breads','egg','milk'];
console.log(groceries.indexOf("milk"));

let list=['a','b','c','b'];
console.log(list.lastIndexOf('b'));

let items=["pen","pencil","paper"];
console.log(items.includes("paper"));
console.log(items.includes("eraser"));

let num1=[10,20,30,40,50];
console.log(num1);
console.log(num1.slice(2,5));