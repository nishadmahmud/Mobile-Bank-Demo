document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const ammount = getInputValueByID('ammount');
    const account = getInputValueByID('account-number');
    const pin = getInputValueByID('pin');

    let balance = document.getElementById('Balance').innerText;
    balance = parseFloat(balance);


    if(account.lenght===1){
        if(ammount && pin == 1234){
            const newBalance = ammount + balance;
            console.log(newBalance);
            document.getElementById('Balance').innerText = newBalance;
        }
        else alert('Wrong PIN');
    }
    else alert('Wrong Account Number');
    
        
});