document.getElementById('withdraw-btn').addEventListener('click', function(){

    // 1st step 
    const withdrawInputFiled = document.getElementById('withdraw-field');

    // 2nd step 
    const newWithAmountString = withdrawInputFiled.value;
    const newWithAmount = parseFloat(newWithAmountString);

    // 3rd step 
    withdrawInputFiled.value = '';

    // 4th step 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalAmountString = withdrawTotalElement.innerText;
    const previusWithdrawTotalAmount = parseFloat(previusWithdrawTotalAmountString);
    
    // 5th step 
    const totalWithdrawAmount = previusWithdrawTotalAmount + newWithAmount;
    withdrawTotalElement.innerText = totalWithdrawAmount;

     // step 6 
     const balanceTotalElement = document.getElementById('balance-total');
     const previusBalanceTotalAmountString = balanceTotalElement.innerText;
     const previusBalanceTotalAmount = parseFloat(previusBalanceTotalAmountString);

    //  step 7 
    const newBalanceTotal = previusBalanceTotalAmount - totalWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});