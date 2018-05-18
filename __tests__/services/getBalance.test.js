const getBalance = require('../../services/getBalance');
var nock = require('nock');


describe('test get balance', () => {

  process.env.PROVIDER_ENDPOINT = "https://api.blockcypher.com/v1/eth/main/addrs"
  nock('https://api.blockcypher.com')
                .get(`/v1/eth/main/addrs/738d145faabb1e00cf5a017588a9c0f998318012/balance`)
                .reply(200, {
                  "address": "738d145faabb1e00cf5a017588a9c0f998318012",
                  "total_received": 9762206505909057760,
                  "total_sent": 9742951942909057760,
                  "balance": 19254563000000000,
                  "unconfirmed_balance": 0,
                  "final_balance": 19254563000000000,
                  "n_tx": 704,
                  "unconfirmed_n_tx": 0,
                  "final_n_tx": 704,
                  "nonce": 414,
                  "pool_nonce": 414
                });

  nock('https://api.blockcypher.com')
                .get(`/v1/eth/main/addrs/invalid/balance`)
                .reply(500, {"error": "Address 738d145faabb1e00cf5a017588a9c0f99831801x should be 40 is not hex encoded."}
              );              

  it('get balance of an valid ETH address', () => {
    expect.assertions(1);
    return getBalance("738d145faabb1e00cf5a017588a9c0f998318012").then(b => expect(b).toEqual(0.019254563))
  });

  it('get balance of an invalid ETH address', () => {
    expect.assertions(1);
    return getBalance("invalid").then(b => expect(b).toEqual(NaN))
  });

})