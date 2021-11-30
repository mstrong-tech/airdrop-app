/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Airdrop, AirdropInterface } from "../Airdrop";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "claimWithAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "publicKeys",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
    ],
    name: "createDrops",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
    ],
    name: "linkStatus",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "exist",
            type: "bool",
          },
          {
            internalType: "address",
            name: "claimed",
            type: "address",
          },
          {
            internalType: "contract IERC20Upgradeable",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Airdrop.DropDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "recoverAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c61157761004b60003960008181610299015281816102e20152818161036b01526103ab01526115776000f3fe60806040526004361061008c5760003560e01c80632716b9df146100915780633659cfe61461016d5780634f1ef2861461018f5780635f27b8ae146101a25780636d29126d146101c2578063715018a6146101e25780638129fc1c146101f75780638da5cb5b1461020c578063aac6c6cd1461022e578063b010c5951461024e578063f2fde38b1461026e575b600080fd5b34801561009d57600080fd5b506101256100ac36600461103e565b60408051608080820183526000808352602080840182905283850182905260609384018290526001600160a01b03958616825260c981529084902084519283018552805460ff81161515845261010090048616918301919091526001810154909416928101929092526002909201549181019190915290565b604080518251151581526020808401516001600160a01b0390811691830191909152838301511691810191909152606091820151918101919091526080015b60405180910390f35b34801561017957600080fd5b5061018d61018836600461103e565b61028e565b005b61018d61019d36600461105b565b610360565b3480156101ae57600080fd5b5061018d6101bd366004611146565b61041a565b3480156101ce57600080fd5b5061018d6101dd366004611102565b6105f1565b3480156101ee57600080fd5b5061018d6107f8565b34801561020357600080fd5b5061018d610833565b34801561021857600080fd5b506102216108ae565b604051610164919061128f565b34801561023a57600080fd5b5061018d610249366004611240565b6108bd565b34801561025a57600080fd5b50610221610269366004611102565b6108ce565b34801561027a57600080fd5b5061018d61028936600461103e565b610994565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156102e05760405162461bcd60e51b81526004016102d7906112d6565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610312610a31565b6001600160a01b0316146103385760405162461bcd60e51b81526004016102d790611310565b61034181610a4d565b6040805160008082526020820190925261035d91839190610a7c565b50565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156103a95760405162461bcd60e51b81526004016102d7906112d6565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166103db610a31565b6001600160a01b0316146104015760405162461bcd60e51b81526004016102d790611310565b61040a82610a4d565b61041682826001610a7c565b5050565b82518251811461042957600080fd5b6000805b828110156105525784818151811061044757610447611499565b60200260200101518261045a9190611420565b9150600086828151811061047057610470611499565b60200260200101519050604051806080016040528060011515815260200160006001600160a01b03168152602001866001600160a01b031681526020018784815181106104bf576104bf611499565b6020908102919091018101519091526001600160a01b03928316600090815260c9825260409081902083518154938501516001600160a81b0319909416901515610100600160a81b03191617610100938616939093029290921782558201516001820180546001600160a01b0319169190941617909255606001516002909101558061054a81611468565b91505061042d565b506001600160a01b0383166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015230602482015260448101849052606401602060405180830381600087803b1580156105b157600080fd5b505af11580156105c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e9919061121e565b505050505050565b60006105ff858585856108ce565b6001600160a01b03808216600090815260c960209081526040918290208251608081018452815460ff811615158083526101009091048616938201939093526001820154909416928401929092526002909101546060830152919250906106a05760405162461bcd60e51b8152602060048201526015602482015274105a5c991c9bdc08191bd95cdb89dd08195e1a5cdd605a1b60448201526064016102d7565b60208101516001600160a01b0316156106f95760405162461bcd60e51b815260206004820152601b60248201527a105a5c991c9bdc081dd85cc8185b1c9958591e4818db185a5b5959602a1b60448201526064016102d7565b6001600160a01b038681166020838101828152858416600090815260c99092526040918290208551815492516001600160a81b0319909316901515610100600160a81b0319161761010092861692909202919091178155818501516001820180546001600160a01b0319169190951690811790945560608501516002909101819055905163a9059cbb60e01b81526004810192909252602482015263a9059cbb90604401602060405180830381600087803b1580156107b757600080fd5b505af11580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef919061121e565b50505050505050565b336108016108ae565b6001600160a01b0316146108275760405162461bcd60e51b81526004016102d790611398565b6108316000610bc3565b565b600054610100900460ff168061084c575060005460ff16155b6108685760405162461bcd60e51b81526004016102d79061134a565b600054610100900460ff1615801561088a576000805461ffff19166101011790555b610892610c15565b61089a610c7c565b801561035d576000805461ff001916905550565b6097546001600160a01b031690565b6108c9338484846105f1565b505050565b6040517b019457468657265756d205369676e6564204d6573736167653a0a32360241b60208201526001600160601b0319606086901b16603c820152600090819060500160408051601f1981840301815282825280516020808301919091206000855290840180845281905260ff891692840192909252606083018790526080830186905292509060019060a0016020604051602081039080840390855afa15801561097e573d6000803e3d6000fd5b5050604051601f19015198975050505050505050565b3361099d6108ae565b6001600160a01b0316146109c35760405162461bcd60e51b81526004016102d790611398565b6001600160a01b038116610a285760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102d7565b61035d81610bc3565b6000805160206114fb833981519152546001600160a01b031690565b33610a566108ae565b6001600160a01b03161461035d5760405162461bcd60e51b81526004016102d790611398565b6000610a86610a31565b9050610a9184610ce3565b600083511180610a9e5750815b15610aaf57610aad8484610d76565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16610bbc57805460ff19166001178155604051610b2a908690610afb90859060240161128f565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052610d76565b50805460ff19168155610b3b610a31565b6001600160a01b0316826001600160a01b031614610bb35760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b60648201526084016102d7565b610bbc85610e61565b5050505050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680610c2e575060005460ff16155b610c4a5760405162461bcd60e51b81526004016102d79061134a565b600054610100900460ff16158015610c6c576000805461ffff19166101011790555b610c74610ea1565b61089a610ea1565b600054610100900460ff1680610c95575060005460ff16155b610cb15760405162461bcd60e51b81526004016102d79061134a565b600054610100900460ff16158015610cd3576000805461ffff19166101011790555b610cdb610ea1565b61089a610f0b565b803b610d475760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016102d7565b6000805160206114fb83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b610dd55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016102d7565b600080846001600160a01b031684604051610df09190611273565b600060405180830381855af49150503d8060008114610e2b576040519150601f19603f3d011682016040523d82523d6000602084013e610e30565b606091505b5091509150610e58828260405180606001604052806027815260200161151b60279139610f6b565b95945050505050565b610e6a81610ce3565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1680610eba575060005460ff16155b610ed65760405162461bcd60e51b81526004016102d79061134a565b600054610100900460ff1615801561089a576000805461ffff1916610101179055801561035d576000805461ff001916905550565b600054610100900460ff1680610f24575060005460ff16155b610f405760405162461bcd60e51b81526004016102d79061134a565b600054610100900460ff16158015610f62576000805461ffff19166101011790555b61089a33610bc3565b60608315610f7a575081610fa4565b825115610f8a5782518084602001fd5b8160405162461bcd60e51b81526004016102d791906112a3565b9392505050565b600082601f830112610fbc57600080fd5b81356020610fd1610fcc836113fd565b6113cd565b80838252828201915082860187848660051b8901011115610ff157600080fd5b60005b8581101561101057813584529284019290840190600101610ff4565b5090979650505050505050565b8035611028816114c5565b919050565b803560ff8116811461102857600080fd5b60006020828403121561105057600080fd5b8135610fa4816114c5565b6000806040838503121561106e57600080fd5b8235611079816114c5565b91506020838101356001600160401b038082111561109657600080fd5b818601915086601f8301126110aa57600080fd5b8135818111156110bc576110bc6114af565b6110ce601f8201601f191685016113cd565b915080825287848285010111156110e457600080fd5b80848401858401376000848284010152508093505050509250929050565b6000806000806080858703121561111857600080fd5b8435611123816114c5565b93506111316020860161102d565b93969395505050506040820135916060013590565b60008060006060848603121561115b57600080fd5b83356001600160401b038082111561117257600080fd5b818601915086601f83011261118657600080fd5b81356020611196610fcc836113fd565b8083825282820191508286018b848660051b89010111156111b657600080fd5b600096505b848710156111e25780356111ce816114c5565b8352600196909601959183019183016111bb565b50975050870135925050808211156111f957600080fd5b5061120686828701610fab565b9250506112156040850161101d565b90509250925092565b60006020828403121561123057600080fd5b81518015158114610fa457600080fd5b60008060006060848603121561125557600080fd5b61125e8461102d565b95602085013595506040909401359392505050565b60008251611285818460208701611438565b9190910192915050565b6001600160a01b0391909116815260200190565b60208152600082518060208401526112c2816040850160208701611438565b601f01601f19169190910160400192915050565b6020808252602c908201526000805160206114db83398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201526000805160206114db83398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b604051601f8201601f191681016001600160401b03811182821017156113f5576113f56114af565b604052919050565b60006001600160401b03821115611416576114166114af565b5060051b60200190565b6000821982111561143357611433611483565b500190565b60005b8381101561145357818101518382015260200161143b565b83811115611462576000848401525b50505050565b600060001982141561147c5761147c611483565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461035d57600080fdfe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a267c3e57993d49230c0d813551e7ec00ef62e4c4eeca5af86338d222d7d045064736f6c63430008070033";

type AirdropConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AirdropConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Airdrop__factory extends ContractFactory {
  constructor(...args: AirdropConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Airdrop> {
    return super.deploy(overrides || {}) as Promise<Airdrop>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Airdrop {
    return super.attach(address) as Airdrop;
  }
  connect(signer: Signer): Airdrop__factory {
    return super.connect(signer) as Airdrop__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AirdropInterface {
    return new utils.Interface(_abi) as AirdropInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Airdrop {
    return new Contract(address, _abi, signerOrProvider) as Airdrop;
  }
}
