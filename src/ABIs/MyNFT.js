export default {
  "address": "0xCb021a33DCC0c2999E39dA0C674B1A8516a0D3da",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transfers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "transactionHash": "0x5dc648055cb8b91f7c3e1c7fd71aa148ec487542ca273eab2c4b81a2ff7c5f88",
  "receipt": {
    "to": null,
    "from": "0x67BE2C36e75B7439ffc2DCb99dBdF4fbB2455930",
    "contractAddress": "0xCb021a33DCC0c2999E39dA0C674B1A8516a0D3da",
    "transactionIndex": 12,
    "gasUsed": "863266",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x8cdae174b3c58ec5f033704c37f09a5596c34c6feecce03c2517b8f5025cd0a6",
    "transactionHash": "0x5dc648055cb8b91f7c3e1c7fd71aa148ec487542ca273eab2c4b81a2ff7c5f88",
    "logs": [],
    "blockNumber": 28185929,
    "cumulativeGasUsed": "3343336",
    "status": 1,
    "byzantium": true
  },
  "args": [],
  "numDeployments": 1,
  "solcInputHash": "bf7ce797501d87ef01cd5e1187a652c6",
  "metadata": "{\"compiler\":{\"version\":\"0.8.13+commit.abaa5c0e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transfers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/SBT.sol\":\"MyNFT\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"contracts/SBT.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.13;\\n\\ninterface IERC165 {\\n    function supportsInterface(bytes4 interfaceID) external view returns (bool);\\n}\\n\\ninterface IERC721 is IERC165 {\\n    function balanceOf(address owner) external view returns (uint balance);\\n\\n    function ownerOf(uint tokenId) external view returns (address owner);\\n\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint tokenId\\n    ) external;\\n\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint tokenId,\\n        bytes calldata data\\n    ) external;\\n\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint tokenId\\n    ) external;\\n\\n    function approve(address to, uint tokenId) external;\\n\\n    function getApproved(uint tokenId) external view returns (address operator);\\n\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    function isApprovedForAll(address owner, address operator)\\n        external\\n        view\\n        returns (bool);\\n}\\n\\ninterface IERC721Receiver {\\n    function onERC721Received(\\n        address operator,\\n        address from,\\n        uint tokenId,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n\\ncontract ERC721 is IERC721 {\\n    event Transfer(address indexed from, address indexed to, uint indexed id);\\n    event Approval(address indexed owner, address indexed spender, uint indexed id);\\n    event ApprovalForAll(\\n        address indexed owner,\\n        address indexed operator,\\n        bool approved\\n    );\\n\\n    // Mapping from token ID to owner address\\n    mapping(uint => address) internal _ownerOf;\\n\\n    // Mapping owner address to token count\\n    mapping(address => uint) internal _balanceOf;\\n\\n    // Mapping from token ID to approved address\\n    mapping(uint => address) internal _approvals;\\n\\n    // Mapping from owner to operator approvals\\n    mapping(address => mapping(address => bool)) public isApprovedForAll;\\n\\n    //Mappping transfer Numbers\\n    mapping(uint => uint) public transfers;\\n\\n    function supportsInterface(bytes4 interfaceId) external pure returns (bool) {\\n        return\\n            interfaceId == type(IERC721).interfaceId ||\\n            interfaceId == type(IERC165).interfaceId;\\n    }\\n\\n    function ownerOf(uint id) external view returns (address owner) {\\n        owner = _ownerOf[id];\\n        require(owner != address(0), \\\"token doesn't exist\\\");\\n    }\\n\\n    function balanceOf(address owner) external view returns (uint) {\\n        require(owner != address(0), \\\"owner = zero address\\\");\\n        return _balanceOf[owner];\\n    }\\n\\n    function setApprovalForAll(address operator, bool approved) external {\\n        isApprovedForAll[msg.sender][operator] = approved;\\n        emit ApprovalForAll(msg.sender, operator, approved);\\n    }\\n\\n    function approve(address spender, uint id) external {\\n        address owner = _ownerOf[id];\\n        require(\\n            msg.sender == owner || isApprovedForAll[owner][msg.sender],\\n            \\\"not authorized\\\"\\n        );\\n\\n        _approvals[id] = spender;\\n\\n        emit Approval(owner, spender, id);\\n    }\\n\\n    function getApproved(uint id) external view returns (address) {\\n        require(_ownerOf[id] != address(0), \\\"token doesn't exist\\\");\\n        return _approvals[id];\\n    }\\n\\n    function _isApprovedOrOwner(\\n        address owner,\\n        address spender,\\n        uint id\\n    ) internal view returns (bool) {\\n        return (spender == owner ||\\n            isApprovedForAll[owner][spender] ||\\n            spender == _approvals[id]);\\n    }\\n\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint id\\n    ) public {\\n        require(from == _ownerOf[id], \\\"from != owner\\\");\\n        require(to != address(0), \\\"transfer to zero address\\\");\\n        require(transfers[id]==0);\\n        require(_isApprovedOrOwner(from, msg.sender, id), \\\"not authorized\\\");\\n\\n        _balanceOf[from]--;\\n        _balanceOf[to]++;\\n        _ownerOf[id] = to;\\n        transfers[id]=1;\\n        delete _approvals[id];\\n\\n        emit Transfer(from, to, id);\\n    }\\n\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint id\\n    ) external {\\n        transferFrom(from, to, id);\\n\\n        require(\\n            to.code.length == 0 ||\\n                IERC721Receiver(to).onERC721Received(msg.sender, from, id, \\\"\\\") ==\\n                IERC721Receiver.onERC721Received.selector,\\n            \\\"unsafe recipient\\\"\\n        );\\n    }\\n\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint id,\\n        bytes calldata data\\n    ) external {\\n        transferFrom(from, to, id);\\n\\n        require(\\n            to.code.length == 0 ||\\n                IERC721Receiver(to).onERC721Received(msg.sender, from, id, data) ==\\n                IERC721Receiver.onERC721Received.selector,\\n            \\\"unsafe recipient\\\"\\n        );\\n    }\\n\\n    function _mint(address to, uint id) internal {\\n        require(to != address(0), \\\"mint to zero address\\\");\\n        require(_ownerOf[id] == address(0), \\\"already minted\\\");\\n        transfers[id]=0;\\n        _balanceOf[to]++;\\n        _ownerOf[id] = to;\\n\\n        emit Transfer(address(0), to, id);\\n    }\\n\\n    function _burn(uint id) internal {\\n        address owner = _ownerOf[id];\\n        require(owner != address(0), \\\"not minted\\\");\\n\\n        _balanceOf[owner] -= 1;\\n\\n        delete _ownerOf[id];\\n        delete _approvals[id];\\n\\n        emit Transfer(owner, address(0), id);\\n    }\\n}\\n\\ncontract MyNFT is ERC721 {\\n    function mint(uint id) external {\\n        _mint(msg.sender, id);\\n    }\\n\\n    function burn(uint id) external {\\n        require(msg.sender == _ownerOf[id], \\\"not owner\\\");\\n        _burn(id);\\n    }\\n}\\n\",\"keccak256\":\"0xbe0364eb444868a8469743e5f8395b79124e135b8f1af664a1fa6232aee7a2f5\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610ea7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a0712d6811610066578063a0712d68146101c9578063a22cb465146101dc578063b88d4fde146101ef578063e985e9c51461020257600080fd5b80636352211e1461017557806370a08231146101885780639377d711146101a957600080fd5b806301ffc9a7146100d4578063081812fc146100fc578063095ea7b31461012757806323b872dd1461013c57806342842e0e1461014f57806342966c6814610162575b600080fd5b6100e76100e2366004610bc4565b610230565b60405190151581526020015b60405180910390f35b61010f61010a366004610be8565b610267565b6040516001600160a01b0390911681526020016100f3565b61013a610135366004610c18565b6102e2565b005b61013a61014a366004610c42565b6103c4565b61013a61015d366004610c42565b61059e565b61013a610170366004610be8565b610696565b61010f610183366004610be8565b6106f4565b61019b610196366004610c7e565b610754565b6040519081526020016100f3565b61019b6101b7366004610be8565b60046020526000908152604090205481565b61013a6101d7366004610be8565b6107bf565b61013a6101ea366004610c99565b6107c9565b61013a6101fd366004610cd5565b610835565b6100e7610210366004610d70565b600360209081526000928352604080842090915290825290205460ff1681565b60006001600160e01b031982166380ac58cd60e01b148061026157506001600160e01b031982166301ffc9a760e01b145b92915050565b6000818152602081905260408120546001600160a01b03166102c65760405162461bcd60e51b81526020600482015260136024820152721d1bdad95b88191bd95cdb89dd08195e1a5cdd606a1b60448201526064015b60405180910390fd5b506000908152600260205260409020546001600160a01b031690565b6000818152602081905260409020546001600160a01b03163381148061032b57506001600160a01b038116600090815260036020908152604080832033845290915290205460ff165b6103685760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08185d5d1a1bdc9a5e995960921b60448201526064016102bd565b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000818152602081905260409020546001600160a01b0384811691161461041d5760405162461bcd60e51b815260206004820152600d60248201526c333937b690109e9037bbb732b960991b60448201526064016102bd565b6001600160a01b0382166104735760405162461bcd60e51b815260206004820152601860248201527f7472616e7366657220746f207a65726f2061646472657373000000000000000060448201526064016102bd565b6000818152600460205260409020541561048c57600080fd5b61049783338361091d565b6104d45760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08185d5d1a1bdc9a5e995960921b60448201526064016102bd565b6001600160a01b03831660009081526001602052604081208054916104f883610db9565b90915550506001600160a01b038216600090815260016020526040812080549161052183610dd0565b909155505060008181526020818152604080832080546001600160a01b038088166001600160a01b0319928316811790935560048552838620600190556002909452828520805490911690559051849391928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6105a98383836103c4565b6001600160a01b0382163b15806106525750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a4016020604051808303816000875af1158015610622573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106469190610de9565b6001600160e01b031916145b6106915760405162461bcd60e51b815260206004820152601060248201526f1d5b9cd85999481c9958da5c1a595b9d60821b60448201526064016102bd565b505050565b6000818152602081905260409020546001600160a01b031633146106e85760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b60448201526064016102bd565b6106f181610990565b50565b6000818152602081905260409020546001600160a01b03168061074f5760405162461bcd60e51b81526020600482015260136024820152721d1bdad95b88191bd95cdb89dd08195e1a5cdd606a1b60448201526064016102bd565b919050565b60006001600160a01b0382166107a35760405162461bcd60e51b81526020600482015260146024820152736f776e6572203d207a65726f206164647265737360601b60448201526064016102bd565b506001600160a01b031660009081526001602052604090205490565b6106f13382610a7a565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108408585856103c4565b6001600160a01b0384163b15806108d75750604051630a85bd0160e11b808252906001600160a01b0386169063150b7a02906108889033908a90899089908990600401610e06565b6020604051808303816000875af11580156108a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cb9190610de9565b6001600160e01b031916145b6109165760405162461bcd60e51b815260206004820152601060248201526f1d5b9cd85999481c9958da5c1a595b9d60821b60448201526064016102bd565b5050505050565b6000836001600160a01b0316836001600160a01b0316148061096457506001600160a01b0380851660009081526003602090815260408083209387168352929052205460ff165b8061098857506000828152600260205260409020546001600160a01b038481169116145b949350505050565b6000818152602081905260409020546001600160a01b0316806109e25760405162461bcd60e51b815260206004820152600a6024820152691b9bdd081b5a5b9d195960b21b60448201526064016102bd565b6001600160a01b03811660009081526001602081905260408220805491929091610a0d908490610e5a565b909155505060008281526020818152604080832080546001600160a01b031990811690915560029092528083208054909216909155518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b038216610ac75760405162461bcd60e51b81526020600482015260146024820152736d696e7420746f207a65726f206164647265737360601b60448201526064016102bd565b6000818152602081905260409020546001600160a01b031615610b1d5760405162461bcd60e51b815260206004820152600e60248201526d185b1c9958591e481b5a5b9d195960921b60448201526064016102bd565b60008181526004602090815260408083208390556001600160a01b038516835260019091528120805491610b5083610dd0565b909155505060008181526020819052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b0319811681146106f157600080fd5b600060208284031215610bd657600080fd5b8135610be181610bae565b9392505050565b600060208284031215610bfa57600080fd5b5035919050565b80356001600160a01b038116811461074f57600080fd5b60008060408385031215610c2b57600080fd5b610c3483610c01565b946020939093013593505050565b600080600060608486031215610c5757600080fd5b610c6084610c01565b9250610c6e60208501610c01565b9150604084013590509250925092565b600060208284031215610c9057600080fd5b610be182610c01565b60008060408385031215610cac57600080fd5b610cb583610c01565b915060208301358015158114610cca57600080fd5b809150509250929050565b600080600080600060808688031215610ced57600080fd5b610cf686610c01565b9450610d0460208701610c01565b935060408601359250606086013567ffffffffffffffff80821115610d2857600080fd5b818801915088601f830112610d3c57600080fd5b813581811115610d4b57600080fd5b896020828501011115610d5d57600080fd5b9699959850939650602001949392505050565b60008060408385031215610d8357600080fd5b610d8c83610c01565b9150610d9a60208401610c01565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600081610dc857610dc8610da3565b506000190190565b600060018201610de257610de2610da3565b5060010190565b600060208284031215610dfb57600080fd5b8151610be181610bae565b6001600160a01b038681168252851660208201526040810184905260806060820181905281018290526000828460a0840137600060a0848401015260a0601f19601f85011683010190509695505050505050565b600082821015610e6c57610e6c610da3565b50039056fea264697066735822122097e5508284461eff251d3a7a5319885eaded2253d1256a342da4e11e3373d83864736f6c634300080d0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a0712d6811610066578063a0712d68146101c9578063a22cb465146101dc578063b88d4fde146101ef578063e985e9c51461020257600080fd5b80636352211e1461017557806370a08231146101885780639377d711146101a957600080fd5b806301ffc9a7146100d4578063081812fc146100fc578063095ea7b31461012757806323b872dd1461013c57806342842e0e1461014f57806342966c6814610162575b600080fd5b6100e76100e2366004610bc4565b610230565b60405190151581526020015b60405180910390f35b61010f61010a366004610be8565b610267565b6040516001600160a01b0390911681526020016100f3565b61013a610135366004610c18565b6102e2565b005b61013a61014a366004610c42565b6103c4565b61013a61015d366004610c42565b61059e565b61013a610170366004610be8565b610696565b61010f610183366004610be8565b6106f4565b61019b610196366004610c7e565b610754565b6040519081526020016100f3565b61019b6101b7366004610be8565b60046020526000908152604090205481565b61013a6101d7366004610be8565b6107bf565b61013a6101ea366004610c99565b6107c9565b61013a6101fd366004610cd5565b610835565b6100e7610210366004610d70565b600360209081526000928352604080842090915290825290205460ff1681565b60006001600160e01b031982166380ac58cd60e01b148061026157506001600160e01b031982166301ffc9a760e01b145b92915050565b6000818152602081905260408120546001600160a01b03166102c65760405162461bcd60e51b81526020600482015260136024820152721d1bdad95b88191bd95cdb89dd08195e1a5cdd606a1b60448201526064015b60405180910390fd5b506000908152600260205260409020546001600160a01b031690565b6000818152602081905260409020546001600160a01b03163381148061032b57506001600160a01b038116600090815260036020908152604080832033845290915290205460ff165b6103685760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08185d5d1a1bdc9a5e995960921b60448201526064016102bd565b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000818152602081905260409020546001600160a01b0384811691161461041d5760405162461bcd60e51b815260206004820152600d60248201526c333937b690109e9037bbb732b960991b60448201526064016102bd565b6001600160a01b0382166104735760405162461bcd60e51b815260206004820152601860248201527f7472616e7366657220746f207a65726f2061646472657373000000000000000060448201526064016102bd565b6000818152600460205260409020541561048c57600080fd5b61049783338361091d565b6104d45760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08185d5d1a1bdc9a5e995960921b60448201526064016102bd565b6001600160a01b03831660009081526001602052604081208054916104f883610db9565b90915550506001600160a01b038216600090815260016020526040812080549161052183610dd0565b909155505060008181526020818152604080832080546001600160a01b038088166001600160a01b0319928316811790935560048552838620600190556002909452828520805490911690559051849391928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6105a98383836103c4565b6001600160a01b0382163b15806106525750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a4016020604051808303816000875af1158015610622573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106469190610de9565b6001600160e01b031916145b6106915760405162461bcd60e51b815260206004820152601060248201526f1d5b9cd85999481c9958da5c1a595b9d60821b60448201526064016102bd565b505050565b6000818152602081905260409020546001600160a01b031633146106e85760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b60448201526064016102bd565b6106f181610990565b50565b6000818152602081905260409020546001600160a01b03168061074f5760405162461bcd60e51b81526020600482015260136024820152721d1bdad95b88191bd95cdb89dd08195e1a5cdd606a1b60448201526064016102bd565b919050565b60006001600160a01b0382166107a35760405162461bcd60e51b81526020600482015260146024820152736f776e6572203d207a65726f206164647265737360601b60448201526064016102bd565b506001600160a01b031660009081526001602052604090205490565b6106f13382610a7a565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108408585856103c4565b6001600160a01b0384163b15806108d75750604051630a85bd0160e11b808252906001600160a01b0386169063150b7a02906108889033908a90899089908990600401610e06565b6020604051808303816000875af11580156108a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cb9190610de9565b6001600160e01b031916145b6109165760405162461bcd60e51b815260206004820152601060248201526f1d5b9cd85999481c9958da5c1a595b9d60821b60448201526064016102bd565b5050505050565b6000836001600160a01b0316836001600160a01b0316148061096457506001600160a01b0380851660009081526003602090815260408083209387168352929052205460ff165b8061098857506000828152600260205260409020546001600160a01b038481169116145b949350505050565b6000818152602081905260409020546001600160a01b0316806109e25760405162461bcd60e51b815260206004820152600a6024820152691b9bdd081b5a5b9d195960b21b60448201526064016102bd565b6001600160a01b03811660009081526001602081905260408220805491929091610a0d908490610e5a565b909155505060008281526020818152604080832080546001600160a01b031990811690915560029092528083208054909216909155518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b038216610ac75760405162461bcd60e51b81526020600482015260146024820152736d696e7420746f207a65726f206164647265737360601b60448201526064016102bd565b6000818152602081905260409020546001600160a01b031615610b1d5760405162461bcd60e51b815260206004820152600e60248201526d185b1c9958591e481b5a5b9d195960921b60448201526064016102bd565b60008181526004602090815260408083208390556001600160a01b038516835260019091528120805491610b5083610dd0565b909155505060008181526020819052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b0319811681146106f157600080fd5b600060208284031215610bd657600080fd5b8135610be181610bae565b9392505050565b600060208284031215610bfa57600080fd5b5035919050565b80356001600160a01b038116811461074f57600080fd5b60008060408385031215610c2b57600080fd5b610c3483610c01565b946020939093013593505050565b600080600060608486031215610c5757600080fd5b610c6084610c01565b9250610c6e60208501610c01565b9150604084013590509250925092565b600060208284031215610c9057600080fd5b610be182610c01565b60008060408385031215610cac57600080fd5b610cb583610c01565b915060208301358015158114610cca57600080fd5b809150509250929050565b600080600080600060808688031215610ced57600080fd5b610cf686610c01565b9450610d0460208701610c01565b935060408601359250606086013567ffffffffffffffff80821115610d2857600080fd5b818801915088601f830112610d3c57600080fd5b813581811115610d4b57600080fd5b896020828501011115610d5d57600080fd5b9699959850939650602001949392505050565b60008060408385031215610d8357600080fd5b610d8c83610c01565b9150610d9a60208401610c01565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600081610dc857610dc8610da3565b506000190190565b600060018201610de257610de2610da3565b5060010190565b600060208284031215610dfb57600080fd5b8151610be181610bae565b6001600160a01b038681168252851660208201526040810184905260806060820181905281018290526000828460a0840137600060a0848401015260a0601f19601f85011683010190509695505050505050565b600082821015610e6c57610e6c610da3565b50039056fea264697066735822122097e5508284461eff251d3a7a5319885eaded2253d1256a342da4e11e3373d83864736f6c634300080d0033",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 1826,
        "contract": "contracts/SBT.sol:MyNFT",
        "label": "_ownerOf",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 1830,
        "contract": "contracts/SBT.sol:MyNFT",
        "label": "_balanceOf",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 1834,
        "contract": "contracts/SBT.sol:MyNFT",
        "label": "_approvals",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 1840,
        "contract": "contracts/SBT.sol:MyNFT",
        "label": "isApprovedForAll",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
      },
      {
        "astId": 1844,
        "contract": "contracts/SBT.sol:MyNFT",
        "label": "transfers",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_uint256,t_uint256)"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_bool))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => bool))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_bool)"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_uint256,t_address)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => address)",
        "numberOfBytes": "32",
        "value": "t_address"
      },
      "t_mapping(t_uint256,t_uint256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}