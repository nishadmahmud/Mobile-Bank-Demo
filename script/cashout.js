document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const ammount = getInputValueByID('chasout-ammount');
    const pin = getInputValueByID('chasout-pin');
    const account = getInputValueByID('account-number');
    pin = parseInt(pin);

    let balance = document.getElementById('Balance').innerText;
    balance = parseFloat(balance);

    
    if(account.lenght===11){
        if(ammount && pin == 1234){
            const newBalance = balance - ammount;
            console.log(newBalance);
            document.getElementById('Balance').innerText = newBalance;
        }
        else alert('Wrong PIN');
    }
    else alert("Account number is not right")
    
        
});