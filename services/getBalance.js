var express = require('express');
var fetch = require('node-fetch');

const PROVIDER_ENDPOINT = process.env.PROVIDER_ENDPOINT || "https://api.blockcypher.com/v1/eth/main/addrs";

async function getBalance(addr) {
    const response = await fetch(`${PROVIDER_ENDPOINT}/${addr}/balance`);
    const json = await response.json();
    const ethers = json.balance / Math.pow(10, 18)
    return ethers
  }
  
module.exports = getBalance;