const product=[
    {
        name:"laptop",
        price:500,
        category:"Electronic" 
    },
    {name:"Mobile",
        price:600,
        category:"Electronic"},
    {
        name:"Book",
        price:50,
        category:"Book"
    },
    {
        name:"Tata Car",
        price:4000,
        category:"Cars"
    }
];
let ele=product.filter(n=>n.category==="Electronic" && n.price>400).map(na=>`${na.name}(Price: ${na.price}  Category: ${na.category})`);

console.log(...ele);