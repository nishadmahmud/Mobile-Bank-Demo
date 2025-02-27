handleToggle('add-money','block');
handleToggle('cash-out','none');
handleToggle('transaction','none');

document.getElementById('addMoney').addEventListener('click', function(event){
    handleToggle('add-money','block');
    handleToggle('transaction','none');
    handleToggle('cash-out','none');
})

document.getElementById('cashout').addEventListener('click', function(event){
    handleToggle('add-money','none');
    handleToggle('cash-out','block'); 
    handleToggle('transaction','none');  
})
document.getElementById('transactions').addEventListener('click', function(event){
    handleToggle('add-money','none');
    handleToggle('cash-out','none'); 
    handleToggle('transaction','block');  
})

function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}