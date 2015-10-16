#!/usr/bin/env node

var web3 = require("../index.js");

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var balance = web3.fromWei(web3.eth.getBalance(coinbase), "ether");
console.log(balance.toString(10));

var privateKey = web3.personal.getAccountPrivateKey(coinbase, "mypass");
console.log(privateKey);

console.log("Trying to unlock remotely ... ")
console.log(web3.personal.unlockAccount(coinbase, "mypass"));

console.log("Creating new account with passphrase test...")
console.log(web3.personal.newAccount("test"));

