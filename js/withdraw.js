// Step 1. add event handler with the withdraw button.
// Step 2: get the withdraw amount from the withdraw input field.
// step 2.5: also make sure to convert the input into a number by using parse float.
// step 3: get the previous withdraw total
// Step 4: calculate total withdraw amount
// step 5: get the previous balance total
// step 6: calculate new balance total
// set the new balance total
// step 7: clear the input field

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");

  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a number");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");

  const previousWithdrawTotalString = withdrawTotalElement.innerText;

  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap er bank e etoo taka nai 😒");
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const newbalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newbalanceTotal;
});
