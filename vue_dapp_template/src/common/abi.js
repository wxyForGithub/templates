 export const ABI = []; 

export const NORMAL_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'base',
    outputs: [
      {
        name: 'base',
        type: 'uint256',
      },
      // {
      //   internalType: 'string',
      //   name: '',
      //   type: 'string',
      // },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{
      internalType: 'uint8',
      name: '',
      type: 'uint8',
    }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{
      internalType: 'address',
      name: '_spender',
      type: 'address',
    }, {
      internalType: 'uint256',
      name: '_value',
      type: 'uint256',
    }],
    name: 'approve',
    outputs: [{
      internalType: 'bool',
      name: 'success',
      type: 'bool',
    }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }
]
