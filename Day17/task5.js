let products=[
    {id:1, name:"Laptop", category:'Electroics',price:400,stock:5},
    {id:2, name:"Sugar", category:'Grocery',price:40,stock:45},
    {id:3, name:"Mouse", category:'Electroics',price:100,stock:7},
    {id:4, name:"Shirt", category:'Clothes',price:200,stock:5},
    {id:5, name:"Keyboard", category:'Electroics',price:150,stock:8},
    {id:6, name:"4K TV", category:'Electroics',price:5000,stock:2},
    {id:7, name:"Pant", category:'Clothes',price:170,stock:10},
    {id:8, name:"Oil", category:'Grocery',price:180,stock:50},
    {id:9, name:"Monitor 4K", category:'Electroics',price:4000,stock:15},
    {id:10, name:"Adaptor", category:'Electroics',price:140,stock:0}
];
console.log(...products);

let ele=products.filter(n=>n.category==="Electroics" && n.stock>0).map(na=> {
    return {ProductName: na.name, displayPrice: na.price};
});

console.log(...ele);

let total=ele.reduce((acc,t)=>acc+t.displayPrice,0);
console.log("Total Price:$"+total);