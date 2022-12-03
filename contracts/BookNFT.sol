// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// import "@klaytn/contracts/KIP/token/KIP37/KIP37.sol";
import "@klaytn/contracts/KIP/token/KIP37/extensions/KIP37Mintable.sol";
import "@klaytn/contracts/KIP/token/KIP37/extensions/KIP37Burnable.sol";
import "@klaytn/contracts/utils/Strings.sol";

contract BookNFT is KIP37Mintable, KIP37Burnable {
    constructor() KIP37("uri") {
        create(0,1000,"");
        mint(0,msg.sender,2);
        mint(1,msg.sender,3);
    }


}