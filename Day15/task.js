let car=[
    {id:202,name1:"xxx",age:20},
    {id:203,name1:"yyy",age:20}
];
let name2=car.map(n=>n.name1);
console.log(...name2);
document.getElementById("para").innerHTML=name2;