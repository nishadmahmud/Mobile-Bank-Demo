document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const ammount = getInputValueByID('chasout-ammount');
    let pin = getInputValueByID('chasout-pin');
    const account = document.getElementById('account-number').value;
    pin = parseInt(pin);

    let balance = document.getElementById('Balance').innerText;
    balance = parseFloat(balance);

    
    if(account.length===11.0){
        if(ammount && pin == 1234){
            const newBalance = balance - ammount;
            console.log(newBalance);
            document.getElementById('Balance').innerText = newBalance;
        }
        else alert('Wrong PIN');
    }
    else alert("Account number is not right")
    
        
});