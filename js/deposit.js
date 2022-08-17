// Step-1: Add event listener to the deposit butto
document.getElementById("btn-deposit").addEventListener("click", function () {
  // Step -2 get the deposite amount from the input field
  const depositField = document.getElementById("deposit-field");

  // for the input field use .value to get the value from inside the input field.

  const newdepositAmountString = depositField.value;
  const newdepositAmount = parseFloat(newdepositAmountString);

  // Step 3: Get the current deposit total.
  // for non-input(Eelement other than input, text area)  uset "innerText" to get the text.

  const depositTotalElement = document.getElementById("deposit-total");

  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step 4: add numbers to set the total  deposit

  const currentDepositTotal = previousDepositTotal + newdepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  // Step 5: get balance current total ;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // Step 6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newdepositAmount;

  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // Step **: clear the deposit field
  depositField.value = "";
});
