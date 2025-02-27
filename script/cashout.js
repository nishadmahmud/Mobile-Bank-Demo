document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const ammount = getInputValueByID('chasout-ammount');
    let pin = getInputValueByID('chasout-pin');
    const account = document.getElementById('account-number').value;
    pin = parseInt(pin);

    let balance = getInnerTextByID('Balance');
    const container = document.getElementById('transaction-container');

    if(ammount<0){
        alert("Ammount can't be negative");
        return;
    }
    else if(ammount>balance){
        alert("Ammount must be less than balance");
        return;
    }

    if(account.length===11){
        if(ammount && pin == 1234){
            const newBalance = balance - ammount;
            console.log(newBalance);
            setInnerText('Balance',newBalance);

            const div = document.createElement("div");
            div.classList.add("bg-sleet-200")
            // div.classList("p-3");
            div.innerHTML = `
            <h1 class = "text-bold text-xl"> Cashout Money</h1>
            <h3 class = "text-base text-bold">Ammount : $ ${ammount} </h3>
            <p>Account Number : ${account} </p>
            `
            container.appendChild(div);
        }
        else alert('Wrong PIN');
    }
    else alert("Account number is not right")
    
        
});