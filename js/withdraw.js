document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = inputFiledValueById('withdraw-field');
    const previusWithdrawTotal = getElementValueById('withdraw-total');
    const currentWitdrawTotal =previusWithdrawTotal + newWithdrawAmount;
    setElementValueById('withdraw-total', currentWitdrawTotal);
    const previusBalanceTotal = getElementValueById('balance-total');
    const currentBalanceTotal =previusBalanceTotal - newWithdrawAmount;
    setElementValueById('balance-total', currentBalanceTotal);
})