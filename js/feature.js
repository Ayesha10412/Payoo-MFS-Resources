
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');


});

document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');

});

document.getElementById('transfer-money-btn').addEventListener('click', function(){
    document.getElementById('transfer-money-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');

});

document.getElementById('transaction-btn').addEventListener('click', function(){
    document.getElementById('transfer-money-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.remove('hidden');

});