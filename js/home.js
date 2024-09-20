document.getElementById('add-money').addEventListener('click', function(event){
event.preventDefault();

const accountNum=document.getElementById('account-num').value;

const addMoney=document.getElementById('add-money-amount').value;
const availableAmount=parseFloat(addMoney);
const addPin=document.getElementById('add-money-pin').value;
if(addPin==='1234' && accountNum==='12345678'){
    const presentAmount=document.getElementById('present-amount');
   const amount= parseFloat(presentAmount.innerText);
    const newBalance =(amount + availableAmount);
    console.log(newBalance);
document.getElementById('present-amount').innerText=newBalance;


// add to transactions history
const p=document.createElement('p');
p.innerText=`Added: ${addMoney} Tk. Balance: ${newBalance}`;
console.log(p);
// should be a common function
document.getElementById('transaction-form').appendChild(p);

}
else{
    alert ('Invalid Information');
}
})

// document.getElementById('cash-out-btn').addEventListener('click', function(){
//     window.location.href=('./cash-out.html');
// })