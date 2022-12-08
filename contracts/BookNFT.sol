// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// import "@klaytn/contracts/KIP/token/KIP37/KIP37.sol";
// import "@klaytn/contracts/KIP/token/KIP37/extensions/KIP37URIStorage.sol";
import "@klaytn/contracts/KIP/token/KIP37/extensions/KIP37Burnable.sol";
import "@klaytn/contracts/access/Ownable.sol";
import "@klaytn/contracts/utils/Strings.sol";

contract BookNFT is KIP37Burnable, Ownable {
       using Strings for uint256;
    constructor() KIP37("https://raw.githubusercontent.com/hyunkicho/deployKIP37/main/metadata/") {
        mint(msg.sender,0,2,"");
        mint(msg.sender,1,1,"");
        // mint(msg.sender,2,2,"");
        // mint(msg.sender,3,3,"");
    }
    function supportsInterface(bytes4 interfaceId) public view virtual override(KIP37Burnable) returns (bool) {
        return interfaceId == type(IKIP37Burnable).interfaceId || super.supportsInterface(interfaceId);
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

    function uri(uint256 _tokenid) public override(KIP37) pure returns (string memory) {
        return string(
            abi.encodePacked(
                uri(_tokenid),
                Strings.toString(_tokenid)
            )
        );
    }
}