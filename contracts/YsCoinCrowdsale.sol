pragma solidity ^0.4.17;

import './YsCoin.sol';
import 'zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol';


contract YsCoinCrowdsale is TimedCrowdsale, MintedCrowdsale {
  function YsCoinCrowdsale
  (
      uint256 _openingTime,
      uint256 _closingTime,
      uint256 _rate,
      address _wallet,
      MintableToken _token
  )
  public
  Crowdsale(_rate, _wallet, _token)
  TimedCrowdsale(_openingTime, _closingTime){

  }
}