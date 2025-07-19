
let balance=0;

function operation(){
    return {
        deposit:amount=>balance+=amount,
        withdraw:amount=>balance-=amount,
        checkbalance:()=>balance
        };
    };

    let op=operation();

    document.getElementById("deposit").addEventListener("click",
    function deposit(){
        de=Number(prompt("Enter the amount to deposit:"))
        op.deposit(de);
        document.getElementById("para").innerHTML="Deposited:"+de;
    }
);

document.getElementById("withdraw").addEventListener("click",
    function withdraw(){
        let wd=Number(prompt("Enter the amount to Withdraw:"));
        if(wd>balance){
            document.getElementById("para").innerHTML="Insufficent Balance";
        }else{
        op.withdraw(wd);
         document.getElementById("para").innerHTML="Withdraw:"+wd;   
        }
    }
    
);

document.getElementById("check-balance").addEventListener("click",
    function balance(){
        document.getElementById("para").innerHTML="Current Balance is:"+op.checkbalance();
    }
);