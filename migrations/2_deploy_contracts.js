const YsCoinCrowdsale = artifacts.require('../contracts/YsCoinCrowdsale.sol');
const YsCoin = artifacts.require('../contracts/YsCoin.sol');

module.exports = function(deployer, network, accounts) {
  const openingTime = web3.eth.getBlock('latest').timestamp + 2; //two secs in the future
  const closingTime = openingTime + 86400 * 20;
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[1];

  return deployer
      .then(() => {
          return deployer.deploy(YsCoin); 
      })
      .then(() => {
          return deployer.deploy(
            YsCoinCrowdsale,
            openingTime,
            closingTime,
            rate,
            wallet,
            YsCoin.address
          );
      });
};
