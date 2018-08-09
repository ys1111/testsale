const YsCoinCrowdsale = artifacts.require('../contracts/YsCoinCrowdsale.sol');
const YsCoin = artifacts.require('../contracts/YsCoin.sol');

module.exports = async function(deployer, network, accounts) {
  let openingTime;
  let currentTime; 
  
  web3.eth.getBlock('latest', ((error, result) => { 
     if (!error) {
       currentTime = result.timestamp
       return openingTime = result.timestamp + 120
     } else {
       console.error(error)
     }
   } )); //two secs in the future
  
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[1] || '0xaae900BAe6d741b3cD4aD9a0b07A21413420Ce0c';
  return deployer
      .then(() => {
          return deployer.deploy(YsCoin); 
      })
      .then(async() => {
          const closingTime = await openingTime + 86400 * 20;
          await console.log(openingTime, closingTime, YsCoin.address, rate, wallet)
          await console.log(currentTime)
          return deployer.deploy(
            YsCoinCrowdsale,
            await openingTime,
            await closingTime,
            rate,
            wallet,
            YsCoin.address
          );
      });
};
