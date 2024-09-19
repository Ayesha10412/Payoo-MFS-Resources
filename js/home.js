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

}
else{
    alert ('Invalid Information');
}
})

document.getElementById('cash-out-btn').addEventListener('click', function(){
    window.location.href=('./cash-out.html');
})