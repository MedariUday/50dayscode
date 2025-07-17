const numbers=[1,2,3,4];
const add=numbers.map(num=>num+2);
console.log(add);
console.log(numbers);

const even=numbers.filter(num=>num%2===0);
console.log(even);
console.log(numbers);

const sum=numbers.reduce((acc,num)=>acc+num,0);
console.log(sum);

const arrayOfArray=[[1,2],[3,4],[5,6]];
const array=arrayOfArray.reduce((acc1,num)=>acc1.concat(num));
console.log(array);

//object in an array
let books=[
    {title:"js basics",price:300},
    {title:"advanced js",price:500}
];
console.log(books[1].title);