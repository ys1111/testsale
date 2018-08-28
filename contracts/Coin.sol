pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract Coin is MintableToken {
  // 好きな名前をつけてください
  string public name = "YOUR_COIN";
  // 好きなシンボルをつけてください
  string public symbol = "YRC";
  uint8 public decimals = 18;
}
