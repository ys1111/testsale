pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract YsCoin is MintableToken {
  string public name = "YS COIN";
  string public symbol = "YSC";
  uint8 public decimals = 18;
}
