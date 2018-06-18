const YsCoin = artifacts.require('../contracts/YsCoin.sol');

contract('check to exist YsCoin', async ( accounts ) => {
  
  it("should put 10000 YsCoin in the first", async () => {
    await YsCoin.deployed().then(instance => {yscoin = instance})
    const ys = await yscoin.balanceOf.call(accounts[0])
    // await console.log(ys.balanceOf.call(accounts[0]))
    // let balance = await instance.getBalance.call(accounts[0]);
    // cosnole.log(balance)
     assert.equal(ys.valueOf(), 0);
  }) 
})