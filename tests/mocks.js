const mocks = {
  fixedAccount: [
    {
      monthNumber: 0,
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1,
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 200 },
      },
    },
  ],
  variableAccount: [
    {
      monthNumber: 0,
      account: {
        balance: { amount: 80 },
      },
    },
    {
      monthNumber: 1,
      account: {
        balance: { amount: 120 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 260 },
      },
    },
  ],
  negativeFixedAccount: [
    {
      monthNumber: 0,
      account: {
        balance: { amount: -150 },
      },
    },
    {
      monthNumber: 1,
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 150 },
      },
    },
  ],
  decimalBalanceFixed: [
    {
      monthNumber: 0,
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1,
      account: {
        balance: { amount: 33.33 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 66.66 },
      },
    },
  ],
  decimalBalanceVariable: [
    {
      monthNumber: 0,
      account: {
        balance: { amount: 12.26 },
      },
    },
    {
      monthNumber: 1,
      account: {
        balance: { amount: 33.89 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 69.72 },
      },
    },
  ],
};

module.exports = mocks;
