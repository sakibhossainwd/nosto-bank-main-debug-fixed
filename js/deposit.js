// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
  */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // if(newDepositAmount === ''){
  //   alert('please enter valid number');
  //   return;
  // }
  /* 
    1. get previous deposit total by id
  */
  const previousDepositTotal = getTextElementValueById("deposit-total");
  console.log('pre d total', previousDepositTotal);
  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  console.log('new d', newDepositTotal);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  // console.log(previousBalanceTotal)
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  console.log('new B', newBalanceTotal);
  setTextElementValueById("balance-total", newBalanceTotal);
});
