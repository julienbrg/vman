// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Vman is Ownable {
    
    string public cid;

    event Updated(
        uint indexed timestamp, 
        string indexed cid
        );

    constructor(string memory _cid) {
        update(_cid);
    }

    function update(string memory _cid) public onlyOwner {
        cid = _cid;
        emit Updated(block.timestamp, _cid); 
    }
}
