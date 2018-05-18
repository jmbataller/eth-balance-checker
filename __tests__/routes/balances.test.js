const balances = require('../../routes/balances');
const getBalance = balances.getBalance

it('get balance of an valid ETH address', () => {
  process.env.PROVIDER_ENDPOINT = "https://api.blockcypher.com/v1/eth/main/addrs"
  expect.assertions(1);
  return getBalance("738d145faabb1e00cf5a017588a9c0f998318012").then(b => expect(b).toEqual(0.019254563))
});

it('get balance of an invalid ETH address', () => {
  process.env.PROVIDER_ENDPOINT = "https://api.blockcypher.com/v1/eth/main/addrs"
  expect.assertions(1);
  return getBalance("invalid").then(b => expect(b).toEqual(NaN))
});