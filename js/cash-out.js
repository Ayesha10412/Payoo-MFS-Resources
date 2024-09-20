document.getElementById('withdraw-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const accountNum=document.getElementById('agent-num').value;
    
    const withdrawMoney=document.getElementById('withdraw-money-amount').value;
    const availableAmount=parseFloat(withdrawMoney);

    if(isNaN(withdrawMoney)){
        alert('Failed to cash out');
        return;
    }

    const addPin=document.getElementById('cash-out-pin').value;
    if(addPin==='1234' && accountNum==='12345678'){
        const presentAmount=document.getElementById('present-amount');
       const amount= parseFloat(presentAmount.innerText);

if(amount<availableAmount){
    alert('You do not have sufficient balance');
    return;
}

        const newBalance =(amount - availableAmount);
        console.log(newBalance);
    document.getElementById('present-amount').innerText=newBalance;

    // add to transactions history
    const div= document.createElement('div');
    div.classList.add('bg-red-500');
    div.innerHTML=`
    <h4 class=text-2xl font-bold text-black mt-2>Cash Out</h4>
    <p>${withdrawMoney} withdraw. New Balance ${newBalance};
    
    `;
    document.getElementById('transaction-form').appendChild(div);
    
    }
    else{
        alert ('Invalid Information');
    }
    });
    
    // document.getElementById('cash-out-btn').addEventListener('click', function(){
    //     window.location.href=('./cash-out.html');
    // })