document.getElementById('withdraw-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const agentNum=document.getElementById('agent-num').value;
    
    const withdrawMoney=document.getElementById('withdraw-money-amount').value;
    const withdrawAmount=parseFloat(withdrawMoney);
    const cashOutPin=document.getElementById('cash-out-pin').value;
    if(cashOutPin==='1234' && agentNum==='12345678'){
        const presentAmount=document.getElementById('present-amount');
       const amount= parseFloat(presentAmount.innerText);
        const newBalance =(amount - withdrawAmount);
        console.log(newBalance);
    document.getElementById('present-amount').innerText=newBalance;
    
    }
    else{
        alert ('Invalid Information');
    }
    })
    
    // document.getElementById('cash-out-btn').addEventListener('click', function(){
    //     window.location.href=('./cash-out.html');
    // })