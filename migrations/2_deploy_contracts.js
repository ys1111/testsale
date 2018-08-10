// あなたのコントラクトファイル名に書き換えてください
const CoinCrowdsale = artifacts.require('../contracts/CoinCrowdsale.sol');

// あなたのコントラクトファイル名に書き換えてください
const Coin = artifacts.require('../contracts/Coin.sol');

module.exports = async function(deployer, network, accounts) {
  let openingTime;
  let currentTime; 
  
  web3.eth.getBlock('latest', ((error, result) => { 
     if (!error) {
       currentTime = result.timestamp
       // 今の時間から120秒あとにスタートさせます
       return openingTime = result.timestamp + 120
     } else {
       console.error(error)
     }
   } ));
  
  const rate = new web3.BigNumber(1000);

  // もしtestnet, mainnetにデプロイするときはあなたのアドレスを入力してください
  const wallet = accounts[1] || 'YOUR_ETH_ADDRESS';
  
  return deployer
      .then(() => {
          return deployer.deploy(Coin); 
      })
      .then(async() => {
          const closingTime = await openingTime + 86400 * 20;
          await console.log(openingTime, closingTime, Coin.address, rate, wallet)
          await console.log(currentTime)
          return deployer.deploy(
            CoinCrowdsale,
            await openingTime,
            await closingTime,
            rate,
            wallet,
            Coin.address
          );
      });
};
