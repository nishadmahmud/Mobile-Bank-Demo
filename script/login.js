document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;
    let pin = document.getElementById('pin').value;
    pin = parseInt(pin);
    if(accountNumber.length === 11){
        if(pin===1234)
            window.location.href = "./main.html";
        else alert('Wrong PIN');
    }
    else console.log("Need valid Account Number");
    
    // console.log(pin);
});