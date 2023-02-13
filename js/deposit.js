
document.getElementById('deposit-btn').addEventListener('click', function(){

    const newDepositAmount = inputFiledValueById('deposit-field');
    const previusDepositTotal = getElementValueById('deposit-total');
    const newDepositTotal = previusDepositTotal + newDepositAmount;
    setElementValueById('deposit-total', newDepositTotal);
    
    const previusBalanceTotal = getElementValueById('balance-total');
    const currentBalanceTotal = previusBalanceTotal + newDepositTotal;
    setElementValueById('balance-total', currentBalanceTotal);
    console.log(previusBalanceTotal);
});