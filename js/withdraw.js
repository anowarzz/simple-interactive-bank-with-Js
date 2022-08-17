// Step 1. add event handler with the withdraw button.
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step 2: get the withdraw amount from the withdraw input field.
  // step 2.5: also make sure to convert the input into a number by using parse float.

  const withdrawField = document.getElementById("withdraw-field");

  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step 3: get the previous withdraw total

  const withdrawTotalElement = document.getElementById("withdraw-total");

  const previousWithdrawTotalString = withdrawTotalElement.innerText;

  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // Step 4: calculate total withdraw amount

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 5: get the previous balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step 6: calculate new balance total
  // set the new balance total
  const newbalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newbalanceTotal;

  // step 7: clear the input field
  withdrawField.value = "";
});
