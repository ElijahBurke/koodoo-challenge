const accountTypeChecker = (accountBalanceHistory) => (checkIfFixed(accountBalanceHistory) ? 'B' : 'A');

function getBalance(month) {
  return month.account.balance.amount;
}

function getAverageChange(accountBalanceHistory) {
  return (
    getBalance(accountBalanceHistory[accountBalanceHistory.length - 1])
  - getBalance(accountBalanceHistory[0])
  )
  / (accountBalanceHistory.length - 1);
}

function checkMonth(start, average) {
  return function (month) {
    return getBalance(month) === month.monthNumber * average + start;
  };
}

function checkIfFixed(accountBalanceHistory) {
  const average = getAverageChange(accountBalanceHistory);
  const start = getBalance(accountBalanceHistory[0]);
  const checkMonthWithStartAndAverage = checkMonth(start, average);
  return accountBalanceHistory.every(checkMonthWithStartAndAverage)
}

module.exports = accountTypeChecker;
