const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'black time weapon dash wing agree state first vintage super mother print', 'https://rinkeby.infura.io/d9lU87cRefdk0vQZN0go'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('This should be account', accounts[0])
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data: compiledFactory.bytecode })
  .send({ gas: '1000000', from: accounts[0] });

  console.log('contract address is ', result.options.address);
};

deploy();
