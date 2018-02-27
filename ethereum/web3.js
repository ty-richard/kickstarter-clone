import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//we are in the browser and metamask is running.
web3 = new Web3(window.web3.currentProvider);
} else {
//we are in the server or the user isn't runnig metamask
const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/d9lU87cRefdk0vQZN0go'
);
web3 = new Web3(provider);
}

export default web3;
