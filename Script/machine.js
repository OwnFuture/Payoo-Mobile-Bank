function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

//machine id> hide id > show id

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');

    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}