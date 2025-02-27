document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    let ammount = document.getElementById('ammount').value;
    ammount = parseFloat(ammount);
    let pin = document.getElementById('pin').value;
    pin = parseInt(pin);

    let balance = document.getElementById('Balance').innerText;
    balance = parseFloat(balance);

    if(ammount && pin == 1234){
        const newBalance = ammount + balance;
        console.log(newBalance);
        document.getElementById('Balance').innerText = newBalance;
    }
    else alert('Wrong PIN');
        
});