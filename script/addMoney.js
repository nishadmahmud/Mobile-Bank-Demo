document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const ammount = getInputValueByID('ammount');
    const account = document.getElementById('account-number').value;
    const pin = getInputValueByID('pin');

    let balance = getInnerTextByID('Balance');

    const container = document.getElementById('transaction-container');
    const selectedBank = document.getElementById('allBank').value;

    if(ammount<0){
        alert("Ammount can't be negative");
        return;
    }

    if(account.length===11){
        if(ammount && pin == 1234){
            const newBalance = ammount + balance;
            console.log(newBalance);
            setInnerText('Balance',newBalance);

            const div = document.createElement("div");
            div.classList.add("bg-sleet-200")
            // div.classList("p-3");
            div.innerHTML = `
            <h1 class = "text-bold text-xl"> Added Money From ${selectedBank}</h1>
            <h3 class = "text-base text-bold">Ammount : $ ${ammount} </h3>
            <p>Account Number : ${account} </p>
            `
            container.appendChild(div);
        }
        else alert('Wrong PIN');
    }
    else alert('Wrong Account Number');
});