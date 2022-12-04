// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
// import "@klaytn/contracts/KIP/token/KIP37/KIP37.sol";
import "@klaytn/contracts/KIP/token/KIP37/extensions/KIP37Burnable.sol";
import "@klaytn/contracts/access/Ownable.sol";

contract BookNFT is KIP37Burnable, Ownable {
    constructor() KIP37("https://raw.githubusercontent.com/hyunkicho/deployKIP37/main/metadata/") {
        mint(msg.sender,0,2,"");
        mint(msg.sender,1,1,"");
        mint(msg.sender,2,2,"");
        mint(msg.sender,3,3,"");
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
}