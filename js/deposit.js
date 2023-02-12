// 1st step 
document.getElementById('deposit-btn').addEventListener('click', function(){
    
     // step 2
    const depositInputFiled = document.getElementById('deposit-field');
    const newDepositAmountString = depositInputFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    
    // step 3
    depositInputFiled.value = '';

    
    // step 4 
    const depositTotalElement = document.getElementById('deposit-total');
    const previusDepositTotalAmountString = depositTotalElement.innerText;
    const previusDepositTotalAmount = parseFloat(previusDepositTotalAmountString);


    // step 5 
    const newDepositTotal = previusDepositTotalAmount + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;


    // step 6 
    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalAmountString = balanceTotalElement.innerText;
    const previusBalanceTotalAmount = parseFloat(previusBalanceTotalAmountString);


    // step 7
    const newBalanceTotal = previusBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;


});