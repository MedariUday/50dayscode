const names=[
    {firstName:"Medari",lastName:"Uday"},
    {firstName:"Medari",lastName:"Veeresh"}
];
//document.getElementById("para").innerHTML="First Name:"+names.firstName+" Last Name:"+names.lastName+" Full Name:"+names.firstName+names.lastName;;

//let fn=names.map(FN=>"First Name:"+FN.firstName+" <br> Last Name:"+FN.lastName+"<br> Full Name:"+FN.firstName+FN.lastName);
//fn[1]=names.map(LN=>LN.lastName);
//document.getElementById("para").innerHTML=fn;

let FullName=names.map(n=> `First Name:${n.firstName} <br> Last Name:${n.lastName}<br> Full Name:${n.firstName} ${n.lastName}<br><br>`);
document.getElementById("para").innerHTML=FullName;
let set=names.map(na=>{
    return {...na,FullName: `${na.firstName} ${na.lastName}`};
});
console.log(set);