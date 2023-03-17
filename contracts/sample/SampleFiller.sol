// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../core/ILimitOrderFiller.sol";
import "../core/OrderSCW.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimpleFiller is IFiller{

    function fillOrder(address _orderer, uint _orderId, uint _amount) public {
        OrderSCW(_orderer).fillLimitOrder(_orderId, address(this), _amount, "0x");
    }
    function executeOperation(uint256 _orderId, address tokenIn, uint _amountIn, bytes memory _params) override external {
        IERC20(tokenIn).transfer(msg.sender, _amountIn);
    }
}