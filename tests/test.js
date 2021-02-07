const accountTypeChecker = require('../index');
const mocks = require('./mocks');

describe('Check accountTypeChecker function', () => {
  it('Should not mutate array', () => {
    const copyOfHistory = [...mocks.fixedAccount];
    accountTypeChecker(copyOfHistory);
    expect(copyOfHistory).toEqual(mocks.fixedAccount);
  });
  it('Should return A for variable accounts', () => {
    expect(accountTypeChecker(mocks.variableAccount)).toBe('A');
  });
  it('Should return B for fixed accounts', () => {
    expect(accountTypeChecker(mocks.fixedAccount)).toBe('B');
  });
  it('Should work if account goes negative', () => {
    expect(accountTypeChecker(mocks.negativeFixedAccount)).toBe('B');
  });
  it('Should work for decimals', () => {
    expect.assertions(2);
    expect(accountTypeChecker(mocks.decimalBalanceFixed)).toBe('B');
    expect(accountTypeChecker(mocks.decimalBalanceVariable)).toBe('A');
  });
});
