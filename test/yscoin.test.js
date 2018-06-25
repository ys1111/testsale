const YsCoin = artifacts.require('../contracts/YsCoin.sol');

contract('check to exist YsCoin', async ( accounts ) => {
  
  it("should put 10000 YsCoin in the first", async () => {
    const instance = await YsCoin.deployed()
    const balance = await instance.balanceOf.call(accounts[0])
    // await console.log(ys.balanceOf.call(accounts[0]))
    // let balance = await instance.getBalance.call(accounts[0]);
    // cosnole.log(balance)
     assert.equal(balance.valueOf(), 0);
  }) 

it("should call a function that depends on a linked library", async () => {
    let yscoin = await YsCoin.deployed();
    await console.log(yscoin.getBalance)
    let outCoinBalance = await yscoin.balanceOf.call(accounts[0]);
    // await console.log(outCoinBalance)
    let ysCoinBalance = outCoinBalance.toNumber();
    // await console.log(ysCoinBalance)
    // let outCoinBalanceEth = await yscoin.balanthOf.call(accounts[0]);
    // await console.log(outCoinBalanceEth)
    // let ysCoinEthBalance = outCoinBalanceEth.toNumber();
    // assert.equal(ysCoinEthBalance, 2 * ysCoinBalance);

  });

})

