document.getElementById('add-money-btn').addEventListener('click',function(){
    
    //get bank account

    const bankAccount = getValueFromInput('add-money-bank');
    if(bankAccount === 'Select Bank'){
        alert('Select a Bank');
        return;
    }

    //get account number

    const accountNumber = getValueFromInput('add-money-number');
    if(accountNumber.length !==11){
        alert('Invalid Account Number');
        return;
    }


    //get amount

    const amount = getValueFromInput('add-money-amount');


    //get the origianl balance
    const currentBalance = document.getElementById('balance');
    const Balance = currentBalance.innerText;

    const newBalance = Number(Balance) + Number(amount);
    

    //get the pin

    const pin = getValueFromInput('add-money-pin');
    if(pin === '9767'){
        alert(`Add Money Successfull from ${bankAccount} at ${new Date()}`);
        currentBalance.innerText = newBalance;
    }else{
        alert('Invalid Pin');
        return;
    }

})