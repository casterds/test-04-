export default {
  "address": "0x4Dfe0A3EA94a590CD7303BF97AbaAE55DB280314",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "addFund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "addLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_position",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "member",
          "type": "address"
        }
      ],
      "name": "addMember",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
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
          "name": "_poolid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "calculateShares",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recepient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timeframe",
          "type": "uint256"
        }
      ],
      "name": "createStream",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeframe",
              "type": "uint256"
            }
          ],
          "internalType": "struct Vault.Stream",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCount",
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
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getFund",
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
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getOrgCount",
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
          "name": "_streamid",
          "type": "uint256"
        }
      ],
      "name": "getOutgoing",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "_streamid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "internalType": "struct Vault.Outgoing",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOutgoingCount",
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
          "name": "_streamid",
          "type": "uint256"
        }
      ],
      "name": "getStream",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeframe",
              "type": "uint256"
            }
          ],
          "internalType": "struct Vault.Stream",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_streamid",
          "type": "uint256"
        }
      ],
      "name": "getStreamBalance",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "memberDetails",
      "outputs": [
        {
          "internalType": "address",
          "name": "memberaddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "position",
          "type": "string"
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
        }
      ],
      "name": "members",
      "outputs": [
        {
          "internalType": "address",
          "name": "memberaddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "position",
          "type": "string"
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
        }
      ],
      "name": "orgbalance",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "orgcount",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "orgdetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
      "name": "outgoings",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_streamid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_streamid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "partWithdrawFromStream",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "poolshare",
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
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "registerDAO",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_streamid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        }
      ],
      "name": "sendFromStream",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "showMember",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "memberaddr",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "admin",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "position",
              "type": "string"
            }
          ],
          "internalType": "struct Vault.Member[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
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
      "name": "streampools",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "rate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalBalance",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
      "name": "streams",
      "outputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timeframe",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
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
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "updateBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_streamid",
          "type": "uint256"
        }
      ],
      "name": "withdrawFromStream",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawFund",
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
      "name": "withdrawamt",
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
  "transactionHash": "0x2ac79dd583a65f408c618f4e92f525d997da52c308429c3e52b68fe63070aad5",
  "receipt": {
    "to": null,
    "from": "0x67BE2C36e75B7439ffc2DCb99dBdF4fbB2455930",
    "contractAddress": "0x4Dfe0A3EA94a590CD7303BF97AbaAE55DB280314",
    "transactionIndex": 5,
    "gasUsed": "1820354",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x2f384680ced01f983d377ea7831d17fdd3d2ea14e7d8f292c023d06646e798ea",
    "transactionHash": "0x2ac79dd583a65f408c618f4e92f525d997da52c308429c3e52b68fe63070aad5",
    "logs": [],
    "blockNumber": 28185912,
    "cumulativeGasUsed": "2794055",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "0xf77952921F542B743832823F1d8268e118d1FD97"
  ],
  "numDeployments": 1,
  "solcInputHash": "bf7ce797501d87ef01cd5e1187a652c6",
  "metadata": "{\"compiler\":{\"version\":\"0.8.13+commit.abaa5c0e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"addFund\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"addLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_position\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"member\",\"type\":\"address\"}],\"name\":\"addMember\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_poolid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"calculateShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recepient\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeframe\",\"type\":\"uint256\"}],\"name\":\"createStream\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeframe\",\"type\":\"uint256\"}],\"internalType\":\"struct Vault.Stream\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"getFund\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"getOrgCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_streamid\",\"type\":\"uint256\"}],\"name\":\"getOutgoing\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"_streamid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"internalType\":\"struct Vault.Outgoing\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOutgoingCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_streamid\",\"type\":\"uint256\"}],\"name\":\"getStream\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeframe\",\"type\":\"uint256\"}],\"internalType\":\"struct Vault.Stream\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_streamid\",\"type\":\"uint256\"}],\"name\":\"getStreamBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"memberDetails\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"memberaddr\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"position\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"members\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"memberaddr\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"position\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"orgbalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"orgcount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"orgdetails\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"outgoings\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_streamid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_streamid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"partWithdrawFromStream\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"poolshare\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"registerDAO\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"removeLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_streamid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"}],\"name\":\"sendFromStream\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"showMember\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"memberaddr\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"position\",\"type\":\"string\"}],\"internalType\":\"struct Vault.Member[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"streampools\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalBalance\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"streams\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeframe\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"updateBalance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_streamid\",\"type\":\"uint256\"}],\"name\":\"withdrawFromStream\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdrawFund\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"withdrawamt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/ERCStream.sol\":\"Vault\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"contracts/ERCStream.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.13;\\n\\ncontract Vault {\\n    IERC20 public immutable token;\\n\\n    uint public totalSupply;\\n    uint256 timepass;\\n    uint256 poolid;\\n    mapping(address => uint) public balanceOf;\\n\\n    constructor(address _token) {\\n        token = IERC20(_token);\\n    }\\n\\n    uint256 streamid=0;\\n    uint256 outgoingid=0;\\n\\n    struct Stream {\\n        address sender;\\n        address recipient;\\n        address tokenAddress;\\n        uint256 amount;\\n        uint256 rate;\\n        uint256 timeframe;\\n    }\\n\\n    struct OrgDetail{\\n        string name;\\n        address admin;\\n    }\\n\\n    struct Member{\\n        address memberaddr;\\n        address admin;\\n        string position;\\n    }\\n\\n    struct Outgoing{\\n        uint _streamid;\\n        uint amount;\\n        address recipient;\\n        address sender;\\n    }\\n\\n    struct StreamPool{\\n        uint256 rate;\\n        uint256 totalBalance;\\n        address tokenAddress;\\n    }\\n\\n    mapping(uint256 => Stream) public streams;\\n    mapping(address => OrgDetail) public orgdetails;\\n    mapping(address => uint256) public orgbalance;\\n    mapping(address => uint256) public orgcount;\\n    mapping(address => Member) public members;\\n    mapping(uint256 => uint256) public withdrawamt;\\n    mapping(uint256 => Outgoing)public outgoings;\\n\\n    //Mapping for Liquidity Pool\\n    mapping(uint256 => StreamPool)public streampools;\\n    mapping(address=>uint256)public poolshare;\\n\\n    Member[] public memberDetails;\\n\\n    function addFund(uint _amount)public{\\n        _amount*=1e18;\\n        token.transferFrom(msg.sender,address(this),_amount);\\n        totalSupply+=_amount;\\n        balanceOf[msg.sender]+=_amount;\\n        orgbalance[msg.sender]+=_amount;\\n    }\\n\\n    function withdrawFund(uint _amount)public{\\n        _amount*=1e18;\\n        totalSupply-=_amount;\\n        balanceOf[msg.sender]-=_amount;\\n        token.transfer(msg.sender,_amount);\\n    }\\n\\n    function addMember(string memory _position, address member)public{\\n        members[msg.sender].memberaddr=member;\\n        members[msg.sender].position=_position;\\n        members[msg.sender].admin = msg.sender;\\n        memberDetails.push(members[msg.sender]);\\n    }\\n\\n    function registerDAO(string memory _name)public {\\n        orgdetails[msg.sender]=OrgDetail(_name,msg.sender);\\n    }\\n\\n    function createStream(address sender, address recepient, address tokenAddress, uint256 amount, uint256 timeframe) public returns(Stream memory){\\n        streamid++;\\n        require(sender != recepient, 'You cant stream to yourself');\\n        require(balanceOf[msg.sender] != 0, 'Balance cant be zero');\\n        require(balanceOf[msg.sender] >= amount, 'Vault balance must be reateer than the streaming amount');\\n        uint256 rate = (amount * 1e18 )/2629743;\\n        streams[streamid]=Stream(sender,recepient,tokenAddress,amount,rate,timeframe);\\n        orgcount[msg.sender]++;\\n        return streams[streamid];\\n    }\\n\\n    function getStreamBalance(uint256 _streamid)public view returns(uint256){\\n        uint256 rate = streams[_streamid].rate;\\n        uint256 starttime = streams[_streamid].timeframe;\\n        uint256 currenttime = block.timestamp;\\n        uint256 timepassed = currenttime - starttime;\\n        uint256 withdrawal = withdrawamt[_streamid];\\n        uint256 balance = (timepassed * rate)-withdrawal;\\n        return balance;\\n    }\\n\\n    function withdrawFromStream(uint _streamid)public{\\n        require(msg.sender == streams[_streamid].recipient, 'Only recipient can call the withdraw');\\n        uint256 rate = streams[_streamid].rate;\\n        uint256 starttime = streams[_streamid].timeframe;\\n        uint256 timepass = block.timestamp - starttime;\\n        token.transfer(msg.sender, rate*timepass);\\n        totalSupply-=(rate*timepass);\\n        streams[_streamid].timeframe = block.timestamp;\\n        orgbalance[streams[_streamid].sender]-=rate * timepass;\\n    }\\n\\n    function partWithdrawFromStream(uint _streamid,uint _amount)public{\\n        require(msg.sender == streams[_streamid].recipient, 'Only recipient can call the withdraw');\\n        token.transfer(msg.sender, _amount);\\n        totalSupply-=_amount;\\n        orgbalance[streams[_streamid].sender]-=_amount;\\n        withdrawamt[_streamid]+=_amount;\\n    }\\n\\n     function sendFromStream(uint _streamid,uint _amount, address _recipient)public{\\n        require(msg.sender == streams[_streamid].recipient, 'Only recipient can call the withdraw');\\n        ++outgoingid;\\n        token.transfer(_recipient, _amount);\\n        totalSupply-=_amount;\\n        orgbalance[streams[_streamid].sender]-=_amount;\\n        withdrawamt[_streamid]+=_amount;\\n        outgoings[outgoingid]=Outgoing(_streamid,_amount,_recipient,msg.sender);\\n    }\\n\\n    //Functions for Stream Lending Pool\\n    //Currently Supporting DAI tokens only\\n\\n    function addLiquidity(uint256 _id, uint256 _amount) public {\\n        require(_amount != 0,\\\"Amount cannot be zero\\\");\\n        require(_id <= poolid,\\\"Pool should Exist\\\");\\n        //Update Balance \\n        updateBalance(_id);\\n        //Increase Balance of the Pool\\n        streampools[_id].totalBalance+=_amount;\\n        //transfer funds from msg.sender to the contract\\n        token.transferFrom(msg.sender,address(this),_amount);\\n        //Mint shares for the liquidity provider\\n        calculateShares(_id,_amount);\\n    }\\n\\n    //Remove Liquidity Fucntion \\n    function removeLiquidity(uint256 _id) public {\\n        //update Balance of pool\\n        updateBalance(_id);\\n        uint256 share = poolshare[msg.sender];\\n        //Calculating amount from shares of the LP\\n        uint256 amount = (share * streampools[_id].totalBalance)/100;\\n        //Transferring tokens from pool to LP\\n        token.transfer(msg.sender,amount);\\n        //Update shares of the LP\\n        calculateShares(_id,amount);\\n        //update total balance of loan pool\\n        streampools[_id].totalBalance-=amount;\\n    }\\n\\n    //Share calculating function for the LP\\n    function calculateShares(uint _poolid, uint256 _amount)public{\\n        require(_amount !=0,\\\"Amount cannot be zero\\\");\\n        uint256 shares =(_amount * 100/streampools[_poolid].totalBalance);\\n        poolshare[msg.sender]=shares;\\n    }\\n\\n    //Update fucntion for updating the total balance of the pool\\n    function updateBalance(uint256 _id) public {\\n        //Interest will be calculated from repayment Stream\\n        uint256 interest = 0;\\n        uint256 updatedBalance = interest + streampools[_id].totalBalance;\\n        streampools[_id].totalBalance+=updatedBalance;\\n    }\\n\\n\\n    //View Functions for both Stream and StreamPool\\n\\n    function getStream(uint256 _streamid)public view returns(Stream memory){\\n        return streams[_streamid];\\n    }   \\n\\n    function getOutgoing(uint256 _streamid)public view returns(Outgoing memory){\\n        return outgoings[_streamid];\\n    }\\n\\n    function getCount() public view returns(uint256){\\n        return streamid;\\n    }\\n\\n    function getOutgoingCount() public view returns(uint256){\\n        return outgoingid;\\n    }\\n\\n    function getFund(address _owner)public view returns(uint256){\\n        return orgbalance[_owner];\\n    }\\n\\n    function getOrgCount(address _owner)public view returns(uint256){\\n        return orgcount[_owner];\\n    }\\n\\n    function getName()public view returns(string memory){\\n        return orgdetails[msg.sender].name;\\n    }\\n\\n    function showMember()public view returns(Member[] memory){\\n        return memberDetails;\\n    }\\n    \\n}\\n\\n interface IERC20 {\\n    function totalSupply() external view returns (uint);\\n\\n    function balanceOf(address account) external view returns (uint);\\n\\n    function transfer(address recipient, uint amount) external returns (bool);\\n\\n    function allowance(address owner, address spender) external view returns (uint);\\n\\n    function approve(address spender, uint amount) external returns (bool);\\n\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint amount\\n    ) external returns (bool);\\n\\n    event Transfer(address indexed from, address indexed to, uint amount);\\n    event Approval(address indexed owner, address indexed spender, uint amount);\\n}\",\"keccak256\":\"0x68fce488a457df8ce66e679c8ef461593d57b76b290b45b76d49b5fae9d7194b\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60a06040526000600455600060055534801561001a57600080fd5b506040516120a83803806120a88339810160408190526100399161004a565b6001600160a01b031660805261007a565b60006020828403121561005c57600080fd5b81516001600160a01b038116811461007357600080fd5b9392505050565b608051611fe26100c6600039600081816107260152818161088201528181610ae701528181610c3101528181610ffa015281816111ba0152818161134401526114df0152611fe26000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c80639467487e1161011a578063c575f82b116100ad578063e92d62ba1161007c578063e92d62ba146106d3578063eebced3b146106db578063f5a57c08146106ee578063f87748e21461070e578063fc0c546a1461072157600080fd5b8063c575f82b1461060e578063cfb4a3141461067f578063d6da7acc1461069f578063df54a054146106b257600080fd5b8063a87d942c116100e9578063a87d942c146105b7578063b3c740e8146105bf578063b42c1d40146105d2578063ba7b37d4146105fb57600080fd5b80639467487e1461056b578063978cd3101461057e5780639c8f9f23146105915780639cd441da146105a457600080fd5b80631b5a2ef01161019d57806364d60d911161016c57806364d60d91146103e65780636f93668c1461047557806370a08231146104d157806374afc4db146104f1578063894e9a0d1461050457600080fd5b80631b5a2ef0146102f1578063346c96e9146103ad5780633a597f48146103c057806345e39705146103d357600080fd5b806316eab11a116101d957806316eab11a1461029557806317d7de7c146102be57806317fce939146102d357806318160ddd146102e857600080fd5b8063019436a81461020b57806308ae4b0c1461023e5780630cee1725146102605780631207b36814610275575b600080fd5b61022b610219366004611b0e565b600e6020526000908152604090205481565b6040519081526020015b60405180910390f35b61025161024c366004611b0e565b610760565b60405161023593929190611b7d565b61027361026e366004611bb2565b610818565b005b61022b610283366004611b0e565b60096020526000908152604090205481565b61022b6102a3366004611b0e565b6001600160a01b031660009081526009602052604090205490565b6102c66108fb565b6040516102359190611bcb565b6102db61099c565b6040516102359190611bde565b61022b60005481565b61036d6102ff366004611bb2565b6040805160808082018352600080835260208084018290528385018290526060938401829052948152600c8552839020835191820184528054825260018101549482019490945260028401546001600160a01b03908116938201939093526003909301549091169082015290565b604080518251815260208084015190820152828201516001600160a01b039081169282019290925260609283015190911691810191909152608001610235565b6102736103bb366004611bb2565b610ab0565b6102736103ce366004611bb2565b610bbe565b6102736103e1366004611d0c565b610d4e565b6104376103f4366004611bb2565b6006602052600090815260409020805460018201546002830154600384015460048501546005909501546001600160a01b03948516959385169490921692909186565b604080516001600160a01b039788168152958716602087015293909516928401929092526060830152608082015260a081019190915260c001610235565b6104ad610483366004611bb2565b600d602052600090815260409020805460018201546002909201549091906001600160a01b031683565b6040805193845260208401929092526001600160a01b031690820152606001610235565b61022b6104df366004611b0e565b60036020526000908152604090205481565b6102516104ff366004611bb2565b610e76565b610517610512366004611bb2565b610ebf565b6040805182516001600160a01b039081168252602080850151821690830152838301511691810191909152606080830151908201526080808301519082015260a0918201519181019190915260c001610235565b61022b610579366004611bb2565b610f30565b61027361058c366004611d5a565b610f88565b61027361059f366004611bb2565b611157565b6102736105b2366004611d8f565b611265565b60045461022b565b6102736105cd366004611d8f565b6113c0565b61022b6105e0366004611b0e565b6001600160a01b031660009081526008602052604090205490565b610273610609366004611bb2565b611444565b61065061061c366004611bb2565b600c602052600090815260409020805460018201546002830154600390930154919290916001600160a01b03918216911684565b6040805194855260208501939093526001600160a01b0391821692840192909252166060820152608001610235565b61022b61068d366004611b0e565b60086020526000908152604090205481565b6102736106ad366004611d8f565b61148a565b6106c56106c0366004611b0e565b6115cb565b604051610235929190611db1565b60055461022b565b6105176106e9366004611ddb565b611678565b61022b6106fc366004611bb2565b600b6020526000908152604090205481565b61027361071c366004611e30565b61192a565b6107487f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610235565b600a602052600090815260409020805460018201546002830180546001600160a01b0393841694929093169261079590611e6d565b80601f01602080910402602001604051908101604052809291908181526020018280546107c190611e6d565b801561080e5780601f106107e35761010080835404028352916020019161080e565b820191906000526020600020905b8154815290600101906020018083116107f157829003601f168201915b5050505050905083565b61082a670de0b6b3a764000082611ebd565b90508060008082825461083d9190611edc565b90915550503360009081526003602052604081208054839290610861908490611edc565b909155505060405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af11580156108d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f79190611ef3565b5050565b33600090815260076020526040902080546060919061091990611e6d565b80601f016020809104026020016040519081016040528092919081815260200182805461094590611e6d565b80156109925780601f1061096757610100808354040283529160200191610992565b820191906000526020600020905b81548152906001019060200180831161097557829003601f168201915b5050505050905090565b6060600f805480602002602001604051908101604052809291908181526020016000905b82821015610aa7576000848152602090819020604080516060810182526003860290920180546001600160a01b0390811684526001820154169383019390935260028301805492939291840191610a1690611e6d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4290611e6d565b8015610a8f5780601f10610a6457610100808354040283529160200191610a8f565b820191906000526020600020905b815481529060010190602001808311610a7257829003601f168201915b505050505081525050815260200190600101906109c0565b50505050905090565b610ac2670de0b6b3a764000082611ebd565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610b38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5c9190611ef3565b5080600080828254610b6e9190611f15565b90915550503360009081526003602052604081208054839290610b92908490611f15565b90915550503360009081526008602052604081208054839290610bb6908490611f15565b909155505050565b6000818152600660205260409020600101546001600160a01b03163314610c005760405162461bcd60e51b8152600401610bf790611f2d565b60405180910390fd5b600081815260066020526040812060048101546005909101549091610c258242611edc565b90506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb33610c618487611ebd565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610cac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd09190611ef3565b50610cdb8184611ebd565b600080828254610ceb9190611edc565b9091555050600084815260066020526040902042600590910155610d0f8184611ebd565b6000858152600660209081526040808320546001600160a01b03168352600890915281208054909190610d43908490611edc565b909155505050505050565b336000908152600a6020908152604090912080546001600160a01b0319166001600160a01b0384161781558351610d8d9260029092019185019061198d565b50336000818152600a60205260408120600180820180546001600160a01b03199081169095178155600f80549283018155909352815460039091027f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8028101805486166001600160a01b0393841617815593547f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8038201805490961692169190911790935560028101805491937f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8040191610e6490611e6d565b610e6f929190611a11565b5050505050565b600f8181548110610e8657600080fd5b60009182526020909120600390910201805460018201546002830180546001600160a01b03938416955092909116929161079590611e6d565b610ec7611a8c565b50600090815260066020908152604091829020825160c08101845281546001600160a01b0390811682526001830154811693820193909352600282015490921692820192909252600382015460608201526004820154608082015260059091015460a082015290565b600081815260066020526040812060048101546005909101544283610f558383611edc565b6000878152600b602052604081205491925081610f728785611ebd565b610f7c9190611edc565b98975050505050505050565b6000838152600660205260409020600101546001600160a01b03163314610fc15760405162461bcd60e51b8152600401610bf790611f2d565b600560008154610fd090611f71565b9091555060405163a9059cbb60e01b81526001600160a01b038281166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015611043573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110679190611ef3565b50816000808282546110799190611edc565b90915550506000838152600660209081526040808320546001600160a01b031683526008909152812080548492906110b2908490611edc565b90915550506000838152600b6020526040812080548492906110d5908490611f15565b90915550506040805160808101825293845260208085019384526001600160a01b0392831685830190815233606087019081526005546000908152600c90935292909120945185559251600185015591516002840180549183166001600160a01b03199283161790559151600390930180549390911692909116919091179055565b61116081611444565b336000908152600e6020908152604080832054848452600d9092528220600101549091906064906111919084611ebd565b61119b9190611f8a565b60405163a9059cbb60e01b8152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af115801561120b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122f9190611ef3565b5061123a83826113c0565b6000838152600d60205260408120600101805483929061125b908490611edc565b9091555050505050565b806000036112ad5760405162461bcd60e51b8152602060048201526015602482015274416d6f756e742063616e6e6f74206265207a65726f60581b6044820152606401610bf7565b6002548211156112f35760405162461bcd60e51b8152602060048201526011602482015270141bdbdb081cda1bdd5b1908115e1a5cdd607a1b6044820152606401610bf7565b6112fc82611444565b6000828152600d60205260408120600101805483929061131d908490611f15565b90915550506040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611395573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b99190611ef3565b506108f782825b806000036114085760405162461bcd60e51b8152602060048201526015602482015274416d6f756e742063616e6e6f74206265207a65726f60581b6044820152606401610bf7565b6000828152600d6020526040812060010154611425836064611ebd565b61142f9190611f8a565b336000908152600e6020526040902055505050565b6000818152600d602052604081206001015481906114629082611f15565b905080600d6000858152602001908152602001600020600101600082825461125b9190611f15565b6000828152600660205260409020600101546001600160a01b031633146114c35760405162461bcd60e51b8152600401610bf790611f2d565b60405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015611530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115549190611ef3565b50806000808282546115669190611edc565b90915550506000828152600660209081526040808320546001600160a01b0316835260089091528120805483929061159f908490611edc565b90915550506000828152600b6020526040812080548392906115c2908490611f15565b90915550505050565b6007602052600090815260409020805481906115e690611e6d565b80601f016020809104026020016040519081016040528092919081815260200182805461161290611e6d565b801561165f5780601f106116345761010080835404028352916020019161165f565b820191906000526020600020905b81548152906001019060200180831161164257829003601f168201915b505050600190930154919250506001600160a01b031682565b611680611a8c565b6004805490600061169083611f71565b9190505550846001600160a01b0316866001600160a01b0316036116f65760405162461bcd60e51b815260206004820152601b60248201527f596f752063616e742073747265616d20746f20796f757273656c6600000000006044820152606401610bf7565b33600090815260036020526040812054900361174b5760405162461bcd60e51b815260206004820152601460248201527342616c616e63652063616e74206265207a65726f60601b6044820152606401610bf7565b336000908152600360205260409020548311156117d05760405162461bcd60e51b815260206004820152603760248201527f5661756c742062616c616e6365206d757374206265207265617465657220746860448201527f616e207468652073747265616d696e6720616d6f756e740000000000000000006064820152608401610bf7565b60006228206f6117e885670de0b6b3a7640000611ebd565b6117f29190611f8a565b6040805160c0810182526001600160a01b03808b16825289811660208084019182528a8316848601908152606085018b81526080860188815260a087018c8152600480546000908152600687528a812099518a54908a166001600160a01b0319918216178b55975160018b018054918b16918a16919091179055945160028a018054919099169716969096179096559051600387015551928501929092559151600590930192909255338252600990529081208054929350906118b483611f71565b909155505060048054600090815260066020908152604091829020825160c08101845281546001600160a01b0390811682526001830154811693820193909352600282015490921692820192909252600382015460608201529181015460808301526005015460a0820152979650505050505050565b6040805180820182528281523360208083018290526000918252600781529290208151805192939192611960928492019061198d565b5060209190910151600190910180546001600160a01b0319166001600160a01b0390921691909117905550565b82805461199990611e6d565b90600052602060002090601f0160209004810192826119bb5760008555611a01565b82601f106119d457805160ff1916838001178555611a01565b82800160010185558215611a01579182015b82811115611a015782518255916020019190600101906119e6565b50611a0d929150611add565b5090565b828054611a1d90611e6d565b90600052602060002090601f016020900481019282611a3f5760008555611a01565b82601f10611a505780548555611a01565b82800160010185558215611a0157600052602060002091601f016020900482015b82811115611a01578254825591600101919060010190611a71565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b5b80821115611a0d5760008155600101611ade565b80356001600160a01b0381168114611b0957600080fd5b919050565b600060208284031215611b2057600080fd5b611b2982611af2565b9392505050565b6000815180845260005b81811015611b5657602081850181015186830182015201611b3a565b81811115611b68576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03848116825283166020820152606060408201819052600090611ba990830184611b30565b95945050505050565b600060208284031215611bc457600080fd5b5035919050565b602081526000611b296020830184611b30565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015611c5b57888303603f19018552815180516001600160a01b0390811685528882015116888501528601516060878501819052611c4781860183611b30565b968901969450505090860190600101611c05565b509098975050505050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611c9057600080fd5b813567ffffffffffffffff80821115611cab57611cab611c69565b604051601f8301601f19908116603f01168101908282118183101715611cd357611cd3611c69565b81604052838152866020858801011115611cec57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611d1f57600080fd5b823567ffffffffffffffff811115611d3657600080fd5b611d4285828601611c7f565b925050611d5160208401611af2565b90509250929050565b600080600060608486031215611d6f57600080fd5b8335925060208401359150611d8660408501611af2565b90509250925092565b60008060408385031215611da257600080fd5b50508035926020909101359150565b604081526000611dc46040830185611b30565b905060018060a01b03831660208301529392505050565b600080600080600060a08688031215611df357600080fd5b611dfc86611af2565b9450611e0a60208701611af2565b9350611e1860408701611af2565b94979396509394606081013594506080013592915050565b600060208284031215611e4257600080fd5b813567ffffffffffffffff811115611e5957600080fd5b611e6584828501611c7f565b949350505050565b600181811c90821680611e8157607f821691505b602082108103611ea157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611ed757611ed7611ea7565b500290565b600082821015611eee57611eee611ea7565b500390565b600060208284031215611f0557600080fd5b81518015158114611b2957600080fd5b60008219821115611f2857611f28611ea7565b500190565b60208082526024908201527f4f6e6c7920726563697069656e742063616e2063616c6c2074686520776974686040820152636472617760e01b606082015260800190565b600060018201611f8357611f83611ea7565b5060010190565b600082611fa757634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206d97b4453ca4056806815fcbbc1cd40ec221499dbd5f4e7d33a12391ae93f30a64736f6c634300080d0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106102065760003560e01c80639467487e1161011a578063c575f82b116100ad578063e92d62ba1161007c578063e92d62ba146106d3578063eebced3b146106db578063f5a57c08146106ee578063f87748e21461070e578063fc0c546a1461072157600080fd5b8063c575f82b1461060e578063cfb4a3141461067f578063d6da7acc1461069f578063df54a054146106b257600080fd5b8063a87d942c116100e9578063a87d942c146105b7578063b3c740e8146105bf578063b42c1d40146105d2578063ba7b37d4146105fb57600080fd5b80639467487e1461056b578063978cd3101461057e5780639c8f9f23146105915780639cd441da146105a457600080fd5b80631b5a2ef01161019d57806364d60d911161016c57806364d60d91146103e65780636f93668c1461047557806370a08231146104d157806374afc4db146104f1578063894e9a0d1461050457600080fd5b80631b5a2ef0146102f1578063346c96e9146103ad5780633a597f48146103c057806345e39705146103d357600080fd5b806316eab11a116101d957806316eab11a1461029557806317d7de7c146102be57806317fce939146102d357806318160ddd146102e857600080fd5b8063019436a81461020b57806308ae4b0c1461023e5780630cee1725146102605780631207b36814610275575b600080fd5b61022b610219366004611b0e565b600e6020526000908152604090205481565b6040519081526020015b60405180910390f35b61025161024c366004611b0e565b610760565b60405161023593929190611b7d565b61027361026e366004611bb2565b610818565b005b61022b610283366004611b0e565b60096020526000908152604090205481565b61022b6102a3366004611b0e565b6001600160a01b031660009081526009602052604090205490565b6102c66108fb565b6040516102359190611bcb565b6102db61099c565b6040516102359190611bde565b61022b60005481565b61036d6102ff366004611bb2565b6040805160808082018352600080835260208084018290528385018290526060938401829052948152600c8552839020835191820184528054825260018101549482019490945260028401546001600160a01b03908116938201939093526003909301549091169082015290565b604080518251815260208084015190820152828201516001600160a01b039081169282019290925260609283015190911691810191909152608001610235565b6102736103bb366004611bb2565b610ab0565b6102736103ce366004611bb2565b610bbe565b6102736103e1366004611d0c565b610d4e565b6104376103f4366004611bb2565b6006602052600090815260409020805460018201546002830154600384015460048501546005909501546001600160a01b03948516959385169490921692909186565b604080516001600160a01b039788168152958716602087015293909516928401929092526060830152608082015260a081019190915260c001610235565b6104ad610483366004611bb2565b600d602052600090815260409020805460018201546002909201549091906001600160a01b031683565b6040805193845260208401929092526001600160a01b031690820152606001610235565b61022b6104df366004611b0e565b60036020526000908152604090205481565b6102516104ff366004611bb2565b610e76565b610517610512366004611bb2565b610ebf565b6040805182516001600160a01b039081168252602080850151821690830152838301511691810191909152606080830151908201526080808301519082015260a0918201519181019190915260c001610235565b61022b610579366004611bb2565b610f30565b61027361058c366004611d5a565b610f88565b61027361059f366004611bb2565b611157565b6102736105b2366004611d8f565b611265565b60045461022b565b6102736105cd366004611d8f565b6113c0565b61022b6105e0366004611b0e565b6001600160a01b031660009081526008602052604090205490565b610273610609366004611bb2565b611444565b61065061061c366004611bb2565b600c602052600090815260409020805460018201546002830154600390930154919290916001600160a01b03918216911684565b6040805194855260208501939093526001600160a01b0391821692840192909252166060820152608001610235565b61022b61068d366004611b0e565b60086020526000908152604090205481565b6102736106ad366004611d8f565b61148a565b6106c56106c0366004611b0e565b6115cb565b604051610235929190611db1565b60055461022b565b6105176106e9366004611ddb565b611678565b61022b6106fc366004611bb2565b600b6020526000908152604090205481565b61027361071c366004611e30565b61192a565b6107487f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610235565b600a602052600090815260409020805460018201546002830180546001600160a01b0393841694929093169261079590611e6d565b80601f01602080910402602001604051908101604052809291908181526020018280546107c190611e6d565b801561080e5780601f106107e35761010080835404028352916020019161080e565b820191906000526020600020905b8154815290600101906020018083116107f157829003601f168201915b5050505050905083565b61082a670de0b6b3a764000082611ebd565b90508060008082825461083d9190611edc565b90915550503360009081526003602052604081208054839290610861908490611edc565b909155505060405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af11580156108d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f79190611ef3565b5050565b33600090815260076020526040902080546060919061091990611e6d565b80601f016020809104026020016040519081016040528092919081815260200182805461094590611e6d565b80156109925780601f1061096757610100808354040283529160200191610992565b820191906000526020600020905b81548152906001019060200180831161097557829003601f168201915b5050505050905090565b6060600f805480602002602001604051908101604052809291908181526020016000905b82821015610aa7576000848152602090819020604080516060810182526003860290920180546001600160a01b0390811684526001820154169383019390935260028301805492939291840191610a1690611e6d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4290611e6d565b8015610a8f5780601f10610a6457610100808354040283529160200191610a8f565b820191906000526020600020905b815481529060010190602001808311610a7257829003601f168201915b505050505081525050815260200190600101906109c0565b50505050905090565b610ac2670de0b6b3a764000082611ebd565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610b38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5c9190611ef3565b5080600080828254610b6e9190611f15565b90915550503360009081526003602052604081208054839290610b92908490611f15565b90915550503360009081526008602052604081208054839290610bb6908490611f15565b909155505050565b6000818152600660205260409020600101546001600160a01b03163314610c005760405162461bcd60e51b8152600401610bf790611f2d565b60405180910390fd5b600081815260066020526040812060048101546005909101549091610c258242611edc565b90506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb33610c618487611ebd565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610cac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd09190611ef3565b50610cdb8184611ebd565b600080828254610ceb9190611edc565b9091555050600084815260066020526040902042600590910155610d0f8184611ebd565b6000858152600660209081526040808320546001600160a01b03168352600890915281208054909190610d43908490611edc565b909155505050505050565b336000908152600a6020908152604090912080546001600160a01b0319166001600160a01b0384161781558351610d8d9260029092019185019061198d565b50336000818152600a60205260408120600180820180546001600160a01b03199081169095178155600f80549283018155909352815460039091027f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8028101805486166001600160a01b0393841617815593547f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8038201805490961692169190911790935560028101805491937f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8040191610e6490611e6d565b610e6f929190611a11565b5050505050565b600f8181548110610e8657600080fd5b60009182526020909120600390910201805460018201546002830180546001600160a01b03938416955092909116929161079590611e6d565b610ec7611a8c565b50600090815260066020908152604091829020825160c08101845281546001600160a01b0390811682526001830154811693820193909352600282015490921692820192909252600382015460608201526004820154608082015260059091015460a082015290565b600081815260066020526040812060048101546005909101544283610f558383611edc565b6000878152600b602052604081205491925081610f728785611ebd565b610f7c9190611edc565b98975050505050505050565b6000838152600660205260409020600101546001600160a01b03163314610fc15760405162461bcd60e51b8152600401610bf790611f2d565b600560008154610fd090611f71565b9091555060405163a9059cbb60e01b81526001600160a01b038281166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015611043573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110679190611ef3565b50816000808282546110799190611edc565b90915550506000838152600660209081526040808320546001600160a01b031683526008909152812080548492906110b2908490611edc565b90915550506000838152600b6020526040812080548492906110d5908490611f15565b90915550506040805160808101825293845260208085019384526001600160a01b0392831685830190815233606087019081526005546000908152600c90935292909120945185559251600185015591516002840180549183166001600160a01b03199283161790559151600390930180549390911692909116919091179055565b61116081611444565b336000908152600e6020908152604080832054848452600d9092528220600101549091906064906111919084611ebd565b61119b9190611f8a565b60405163a9059cbb60e01b8152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af115801561120b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122f9190611ef3565b5061123a83826113c0565b6000838152600d60205260408120600101805483929061125b908490611edc565b9091555050505050565b806000036112ad5760405162461bcd60e51b8152602060048201526015602482015274416d6f756e742063616e6e6f74206265207a65726f60581b6044820152606401610bf7565b6002548211156112f35760405162461bcd60e51b8152602060048201526011602482015270141bdbdb081cda1bdd5b1908115e1a5cdd607a1b6044820152606401610bf7565b6112fc82611444565b6000828152600d60205260408120600101805483929061131d908490611f15565b90915550506040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611395573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b99190611ef3565b506108f782825b806000036114085760405162461bcd60e51b8152602060048201526015602482015274416d6f756e742063616e6e6f74206265207a65726f60581b6044820152606401610bf7565b6000828152600d6020526040812060010154611425836064611ebd565b61142f9190611f8a565b336000908152600e6020526040902055505050565b6000818152600d602052604081206001015481906114629082611f15565b905080600d6000858152602001908152602001600020600101600082825461125b9190611f15565b6000828152600660205260409020600101546001600160a01b031633146114c35760405162461bcd60e51b8152600401610bf790611f2d565b60405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015611530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115549190611ef3565b50806000808282546115669190611edc565b90915550506000828152600660209081526040808320546001600160a01b0316835260089091528120805483929061159f908490611edc565b90915550506000828152600b6020526040812080548392906115c2908490611f15565b90915550505050565b6007602052600090815260409020805481906115e690611e6d565b80601f016020809104026020016040519081016040528092919081815260200182805461161290611e6d565b801561165f5780601f106116345761010080835404028352916020019161165f565b820191906000526020600020905b81548152906001019060200180831161164257829003601f168201915b505050600190930154919250506001600160a01b031682565b611680611a8c565b6004805490600061169083611f71565b9190505550846001600160a01b0316866001600160a01b0316036116f65760405162461bcd60e51b815260206004820152601b60248201527f596f752063616e742073747265616d20746f20796f757273656c6600000000006044820152606401610bf7565b33600090815260036020526040812054900361174b5760405162461bcd60e51b815260206004820152601460248201527342616c616e63652063616e74206265207a65726f60601b6044820152606401610bf7565b336000908152600360205260409020548311156117d05760405162461bcd60e51b815260206004820152603760248201527f5661756c742062616c616e6365206d757374206265207265617465657220746860448201527f616e207468652073747265616d696e6720616d6f756e740000000000000000006064820152608401610bf7565b60006228206f6117e885670de0b6b3a7640000611ebd565b6117f29190611f8a565b6040805160c0810182526001600160a01b03808b16825289811660208084019182528a8316848601908152606085018b81526080860188815260a087018c8152600480546000908152600687528a812099518a54908a166001600160a01b0319918216178b55975160018b018054918b16918a16919091179055945160028a018054919099169716969096179096559051600387015551928501929092559151600590930192909255338252600990529081208054929350906118b483611f71565b909155505060048054600090815260066020908152604091829020825160c08101845281546001600160a01b0390811682526001830154811693820193909352600282015490921692820192909252600382015460608201529181015460808301526005015460a0820152979650505050505050565b6040805180820182528281523360208083018290526000918252600781529290208151805192939192611960928492019061198d565b5060209190910151600190910180546001600160a01b0319166001600160a01b0390921691909117905550565b82805461199990611e6d565b90600052602060002090601f0160209004810192826119bb5760008555611a01565b82601f106119d457805160ff1916838001178555611a01565b82800160010185558215611a01579182015b82811115611a015782518255916020019190600101906119e6565b50611a0d929150611add565b5090565b828054611a1d90611e6d565b90600052602060002090601f016020900481019282611a3f5760008555611a01565b82601f10611a505780548555611a01565b82800160010185558215611a0157600052602060002091601f016020900482015b82811115611a01578254825591600101919060010190611a71565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b5b80821115611a0d5760008155600101611ade565b80356001600160a01b0381168114611b0957600080fd5b919050565b600060208284031215611b2057600080fd5b611b2982611af2565b9392505050565b6000815180845260005b81811015611b5657602081850181015186830182015201611b3a565b81811115611b68576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03848116825283166020820152606060408201819052600090611ba990830184611b30565b95945050505050565b600060208284031215611bc457600080fd5b5035919050565b602081526000611b296020830184611b30565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015611c5b57888303603f19018552815180516001600160a01b0390811685528882015116888501528601516060878501819052611c4781860183611b30565b968901969450505090860190600101611c05565b509098975050505050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611c9057600080fd5b813567ffffffffffffffff80821115611cab57611cab611c69565b604051601f8301601f19908116603f01168101908282118183101715611cd357611cd3611c69565b81604052838152866020858801011115611cec57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611d1f57600080fd5b823567ffffffffffffffff811115611d3657600080fd5b611d4285828601611c7f565b925050611d5160208401611af2565b90509250929050565b600080600060608486031215611d6f57600080fd5b8335925060208401359150611d8660408501611af2565b90509250925092565b60008060408385031215611da257600080fd5b50508035926020909101359150565b604081526000611dc46040830185611b30565b905060018060a01b03831660208301529392505050565b600080600080600060a08688031215611df357600080fd5b611dfc86611af2565b9450611e0a60208701611af2565b9350611e1860408701611af2565b94979396509394606081013594506080013592915050565b600060208284031215611e4257600080fd5b813567ffffffffffffffff811115611e5957600080fd5b611e6584828501611c7f565b949350505050565b600181811c90821680611e8157607f821691505b602082108103611ea157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611ed757611ed7611ea7565b500290565b600082821015611eee57611eee611ea7565b500390565b600060208284031215611f0557600080fd5b81518015158114611b2957600080fd5b60008219821115611f2857611f28611ea7565b500190565b60208082526024908201527f4f6e6c7920726563697069656e742063616e2063616c6c2074686520776974686040820152636472617760e01b606082015260800190565b600060018201611f8357611f83611ea7565b5060010190565b600082611fa757634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206d97b4453ca4056806815fcbbc1cd40ec221499dbd5f4e7d33a12391ae93f30a64736f6c634300080d0033",
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
        "astId": 718,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "totalSupply",
        "offset": 0,
        "slot": "0",
        "type": "t_uint256"
      },
      {
        "astId": 720,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "timepass",
        "offset": 0,
        "slot": "1",
        "type": "t_uint256"
      },
      {
        "astId": 722,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "poolid",
        "offset": 0,
        "slot": "2",
        "type": "t_uint256"
      },
      {
        "astId": 726,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "balanceOf",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 741,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "streamid",
        "offset": 0,
        "slot": "4",
        "type": "t_uint256"
      },
      {
        "astId": 744,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "outgoingid",
        "offset": 0,
        "slot": "5",
        "type": "t_uint256"
      },
      {
        "astId": 790,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "streams",
        "offset": 0,
        "slot": "6",
        "type": "t_mapping(t_uint256,t_struct(Stream)757_storage)"
      },
      {
        "astId": 795,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "orgdetails",
        "offset": 0,
        "slot": "7",
        "type": "t_mapping(t_address,t_struct(OrgDetail)762_storage)"
      },
      {
        "astId": 799,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "orgbalance",
        "offset": 0,
        "slot": "8",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 803,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "orgcount",
        "offset": 0,
        "slot": "9",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 808,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "members",
        "offset": 0,
        "slot": "10",
        "type": "t_mapping(t_address,t_struct(Member)769_storage)"
      },
      {
        "astId": 812,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "withdrawamt",
        "offset": 0,
        "slot": "11",
        "type": "t_mapping(t_uint256,t_uint256)"
      },
      {
        "astId": 817,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "outgoings",
        "offset": 0,
        "slot": "12",
        "type": "t_mapping(t_uint256,t_struct(Outgoing)778_storage)"
      },
      {
        "astId": 822,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "streampools",
        "offset": 0,
        "slot": "13",
        "type": "t_mapping(t_uint256,t_struct(StreamPool)785_storage)"
      },
      {
        "astId": 826,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "poolshare",
        "offset": 0,
        "slot": "14",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 830,
        "contract": "contracts/ERCStream.sol:Vault",
        "label": "memberDetails",
        "offset": 0,
        "slot": "15",
        "type": "t_array(t_struct(Member)769_storage)dyn_storage"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_struct(Member)769_storage)dyn_storage": {
        "base": "t_struct(Member)769_storage",
        "encoding": "dynamic_array",
        "label": "struct Vault.Member[]",
        "numberOfBytes": "32"
      },
      "t_mapping(t_address,t_struct(Member)769_storage)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => struct Vault.Member)",
        "numberOfBytes": "32",
        "value": "t_struct(Member)769_storage"
      },
      "t_mapping(t_address,t_struct(OrgDetail)762_storage)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => struct Vault.OrgDetail)",
        "numberOfBytes": "32",
        "value": "t_struct(OrgDetail)762_storage"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_uint256,t_struct(Outgoing)778_storage)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => struct Vault.Outgoing)",
        "numberOfBytes": "32",
        "value": "t_struct(Outgoing)778_storage"
      },
      "t_mapping(t_uint256,t_struct(Stream)757_storage)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => struct Vault.Stream)",
        "numberOfBytes": "32",
        "value": "t_struct(Stream)757_storage"
      },
      "t_mapping(t_uint256,t_struct(StreamPool)785_storage)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => struct Vault.StreamPool)",
        "numberOfBytes": "32",
        "value": "t_struct(StreamPool)785_storage"
      },
      "t_mapping(t_uint256,t_uint256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_struct(Member)769_storage": {
        "encoding": "inplace",
        "label": "struct Vault.Member",
        "members": [
          {
            "astId": 764,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "memberaddr",
            "offset": 0,
            "slot": "0",
            "type": "t_address"
          },
          {
            "astId": 766,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "admin",
            "offset": 0,
            "slot": "1",
            "type": "t_address"
          },
          {
            "astId": 768,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "position",
            "offset": 0,
            "slot": "2",
            "type": "t_string_storage"
          }
        ],
        "numberOfBytes": "96"
      },
      "t_struct(OrgDetail)762_storage": {
        "encoding": "inplace",
        "label": "struct Vault.OrgDetail",
        "members": [
          {
            "astId": 759,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "name",
            "offset": 0,
            "slot": "0",
            "type": "t_string_storage"
          },
          {
            "astId": 761,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "admin",
            "offset": 0,
            "slot": "1",
            "type": "t_address"
          }
        ],
        "numberOfBytes": "64"
      },
      "t_struct(Outgoing)778_storage": {
        "encoding": "inplace",
        "label": "struct Vault.Outgoing",
        "members": [
          {
            "astId": 771,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "_streamid",
            "offset": 0,
            "slot": "0",
            "type": "t_uint256"
          },
          {
            "astId": 773,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "amount",
            "offset": 0,
            "slot": "1",
            "type": "t_uint256"
          },
          {
            "astId": 775,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "recipient",
            "offset": 0,
            "slot": "2",
            "type": "t_address"
          },
          {
            "astId": 777,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "sender",
            "offset": 0,
            "slot": "3",
            "type": "t_address"
          }
        ],
        "numberOfBytes": "128"
      },
      "t_struct(Stream)757_storage": {
        "encoding": "inplace",
        "label": "struct Vault.Stream",
        "members": [
          {
            "astId": 746,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "sender",
            "offset": 0,
            "slot": "0",
            "type": "t_address"
          },
          {
            "astId": 748,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "recipient",
            "offset": 0,
            "slot": "1",
            "type": "t_address"
          },
          {
            "astId": 750,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "tokenAddress",
            "offset": 0,
            "slot": "2",
            "type": "t_address"
          },
          {
            "astId": 752,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "amount",
            "offset": 0,
            "slot": "3",
            "type": "t_uint256"
          },
          {
            "astId": 754,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "rate",
            "offset": 0,
            "slot": "4",
            "type": "t_uint256"
          },
          {
            "astId": 756,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "timeframe",
            "offset": 0,
            "slot": "5",
            "type": "t_uint256"
          }
        ],
        "numberOfBytes": "192"
      },
      "t_struct(StreamPool)785_storage": {
        "encoding": "inplace",
        "label": "struct Vault.StreamPool",
        "members": [
          {
            "astId": 780,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "rate",
            "offset": 0,
            "slot": "0",
            "type": "t_uint256"
          },
          {
            "astId": 782,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "totalBalance",
            "offset": 0,
            "slot": "1",
            "type": "t_uint256"
          },
          {
            "astId": 784,
            "contract": "contracts/ERCStream.sol:Vault",
            "label": "tokenAddress",
            "offset": 0,
            "slot": "2",
            "type": "t_address"
          }
        ],
        "numberOfBytes": "96"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}