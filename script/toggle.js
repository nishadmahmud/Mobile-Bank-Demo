document.getElementById('add-money').style.display = 'none'; 
document.getElementById('cash-out').style.display = 'block';

document.getElementById('addMoney').addEventListener('click', function(event){
    document.getElementById('add-money').style.display = 'block';
    document.getElementById('cash-out').style.display = 'none';
})

document.getElementById('cashout').addEventListener('click', function(event){
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'block';
})