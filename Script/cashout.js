document.getElementById('cashout-btn').addEventListener('click',function(){
    //get the agent number

    const agentNumber = getValueFromInput('input-agent-number');
    if(agentNumber.length!==11){
        alert('Invalid Agent Number');
        return;
    }

    //get the cashout amount

    const cashoutAmount = getValueFromInput('input-cashout-amount');
    

    //get the current balance

    const currentBalance = document.getElementById('balance');
    const Balance = currentBalance.innerText;
    
    //calculate new balance

    const newBalance = Number(Balance) - cashoutAmount;
    if(newBalance<0){
        alert("Invalid amount");
        return;
    }

    //get the pin

    const cashoutPin = getValueFromInput('input-cashout-pin');
    
    if(cashoutPin === '9767'){
        alert('Cashout Succesfull');
        currentBalance.innerText = newBalance;
    }else{
        alert('Invalid PIN');
    }
})