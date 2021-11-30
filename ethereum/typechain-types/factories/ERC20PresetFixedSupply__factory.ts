/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20PresetFixedSupply,
  ERC20PresetFixedSupplyInterface,
} from "../ERC20PresetFixedSupply";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000eed38038062000eed8339810160408190526200003491620002c7565b8351849084906200004d9060039060208501906200016a565b508051620000639060049060208401906200016a565b5050506200007881836200008260201b60201c565b50505050620003d6565b6001600160a01b038216620000dd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f191906200035c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001209084906200035c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001789062000383565b90600052602060002090601f0160209004810192826200019c5760008555620001e7565b82601f10620001b757805160ff1916838001178555620001e7565b82800160010185558215620001e7579182015b82811115620001e7578251825591602001919060010190620001ca565b50620001f5929150620001f9565b5090565b5b80821115620001f55760008155600101620001fa565b600082601f8301126200022257600080fd5b81516001600160401b03808211156200023f576200023f620003c0565b604051601f8301601f19908116603f011681019082821181831017156200026a576200026a620003c0565b816040528381526020925086838588010111156200028757600080fd5b600091505b83821015620002ab57858201830151818301840152908201906200028c565b83821115620002bd5760008385830101525b9695505050505050565b60008060008060808587031215620002de57600080fd5b84516001600160401b0380821115620002f657600080fd5b620003048883890162000210565b955060208701519150808211156200031b57600080fd5b506200032a8782880162000210565b60408701516060880151919550935090506001600160a01b03811681146200035157600080fd5b939692955090935050565b600082198211156200037e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200039857607f821691505b60208210811415620003ba57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610b0780620003e66000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806306fdde03146100b4578063095ea7b3146100d257806318160ddd146100f557806323b872dd14610107578063313ce5671461011a578063395093511461012957806342966c681461013c57806370a082311461015157806379cc67901461017a57806395d89b411461018d578063a457c2d714610195578063a9059cbb146101a8578063dd62ed3e146101bb575b600080fd5b6100bc6101f4565b6040516100c991906109dc565b60405180910390f35b6100e56100e0366004610999565b610286565b60405190151581526020016100c9565b6002545b6040519081526020016100c9565b6100e561011536600461095d565b61029c565b604051601281526020016100c9565b6100e5610137366004610999565b61034b565b61014f61014a3660046109c3565b610387565b005b6100f961015f366004610908565b6001600160a01b031660009081526020819052604090205490565b61014f610188366004610999565b610394565b6100bc61041a565b6100e56101a3366004610999565b610429565b6100e56101b6366004610999565b6104c2565b6100f96101c936600461092a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020390610a60565b80601f016020809104026020016040519081016040528092919081815260200182805461022f90610a60565b801561027c5780601f106102515761010080835404028352916020019161027c565b820191906000526020600020905b81548152906001019060200180831161025f57829003601f168201915b5050505050905090565b60006102933384846104cf565b50600192915050565b60006102a98484846105f3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103335760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034085338584036104cf565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610293918590610382908690610a31565b6104cf565b61039133826107b0565b50565b60006103a083336101c9565b9050818110156103fe5760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b606482015260840161032a565b61040b83338484036104cf565b61041583836107b0565b505050565b60606004805461020390610a60565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104ab5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161032a565b6104b833858584036104cf565b5060019392505050565b60006102933384846105f3565b6001600160a01b0383166105315760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032a565b6001600160a01b0382166105925760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106575760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032a565b6001600160a01b0382166106b95760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032a565b6001600160a01b038316600090815260208190526040902054818110156107315760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032a565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610768908490610a31565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610ab2833981519152846040516107a291815260200190565b60405180910390a350505050565b6001600160a01b0382166108105760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032a565b6001600160a01b038216600090815260208190526040902054818110156108845760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032a565b6001600160a01b03831660009081526020819052604081208383039055600280548492906108b3908490610a49565b90915550506040518281526000906001600160a01b03851690600080516020610ab28339815191529060200160405180910390a3505050565b80356001600160a01b038116811461090357600080fd5b919050565b60006020828403121561091a57600080fd5b610923826108ec565b9392505050565b6000806040838503121561093d57600080fd5b610946836108ec565b9150610954602084016108ec565b90509250929050565b60008060006060848603121561097257600080fd5b61097b846108ec565b9250610989602085016108ec565b9150604084013590509250925092565b600080604083850312156109ac57600080fd5b6109b5836108ec565b946020939093013593505050565b6000602082840312156109d557600080fd5b5035919050565b600060208083528351808285015260005b81811015610a09578581018301518582016040015282016109ed565b81811115610a1b576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610a4457610a44610a9b565b500190565b600082821015610a5b57610a5b610a9b565b500390565b600181811c90821680610a7457607f821691505b60208210811415610a9557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212201b9fdff78c44e332e7f448d0942f47c3639eb89c0627a95813dc0e0fc397a57164736f6c63430008070033";

type ERC20PresetFixedSupplyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20PresetFixedSupplyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20PresetFixedSupply__factory extends ContractFactory {
  constructor(...args: ERC20PresetFixedSupplyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20PresetFixedSupply> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      owner,
      overrides || {}
    ) as Promise<ERC20PresetFixedSupply>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      owner,
      overrides || {}
    );
  }
  attach(address: string): ERC20PresetFixedSupply {
    return super.attach(address) as ERC20PresetFixedSupply;
  }
  connect(signer: Signer): ERC20PresetFixedSupply__factory {
    return super.connect(signer) as ERC20PresetFixedSupply__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PresetFixedSupplyInterface {
    return new utils.Interface(_abi) as ERC20PresetFixedSupplyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PresetFixedSupply {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20PresetFixedSupply;
  }
}
