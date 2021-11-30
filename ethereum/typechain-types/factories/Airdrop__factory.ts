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
    stateMutability: "view",
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
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c61147f61004b6000396000818161026e015281816102b7015281816103400152610380015261147f6000f3fe6080604052600436106100815760003560e01c80632716b9df146100865780633659cfe6146101625780634f1ef286146101845780635f27b8ae14610197578063715018a6146101b75780638129fc1c146101cc5780638da5cb5b146101e1578063a3fb22c514610203578063aac6c6cd14610223578063f2fde38b14610243575b600080fd5b34801561009257600080fd5b5061011a6100a1366004610f82565b60408051608080820183526000808352602080840182905283850182905260609384018290526001600160a01b03958616825260c981529084902084519283018552805460ff81161515845261010090048616918301919091526001810154909416928101929092526002909201549181019190915290565b604080518251151581526020808401516001600160a01b0390811691830191909152838301511691810191909152606091820151918101919091526080015b60405180910390f35b34801561016e57600080fd5b5061018261017d366004610f82565b610263565b005b610182610192366004610f9f565b610335565b3480156101a357600080fd5b506101826101b2366004611046565b6103ef565b3480156101c357600080fd5b506101826105b7565b3480156101d857600080fd5b506101826105f2565b3480156101ed57600080fd5b506101f661066d565b6040516101599190611197565b34801561020f57600080fd5b506101f661021e366004611140565b61067c565b34801561022f57600080fd5b5061018261023e366004611140565b610741565b34801561024f57600080fd5b5061018261025e366004610f82565b6108f0565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156102b55760405162461bcd60e51b81526004016102ac906111de565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166102e761098d565b6001600160a01b03161461030d5760405162461bcd60e51b81526004016102ac90611218565b610316816109a9565b60408051600080825260208201909252610332918391906109d8565b50565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561037e5760405162461bcd60e51b81526004016102ac906111de565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166103b061098d565b6001600160a01b0316146103d65760405162461bcd60e51b81526004016102ac90611218565b6103df826109a9565b6103eb828260016109d8565b5050565b8251825181146103fe57600080fd5b6000805b828110156105275784818151811061041c5761041c6113a1565b60200260200101518261042f9190611328565b91506000868281518110610445576104456113a1565b60200260200101519050604051806080016040528060011515815260200160006001600160a01b03168152602001866001600160a01b03168152602001878481518110610494576104946113a1565b6020908102919091018101519091526001600160a01b03928316600090815260c9825260409081902083518154938501516001600160a81b0319909416901515610100600160a81b03191617610100938616939093029290921782558201516001820180546001600160a01b0319169190941617909255606001516002909101558061051f81611370565b915050610402565b506040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038416906323b872dd906064015b602060405180830381600087803b15801561057757600080fd5b505af115801561058b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105af919061111e565b505050505050565b336105c061066d565b6001600160a01b0316146105e65760405162461bcd60e51b81526004016102ac906112a0565b6105f06000610b1f565b565b600054610100900460ff168061060b575060005460ff16155b6106275760405162461bcd60e51b81526004016102ac90611252565b600054610100900460ff16158015610649576000805461ffff19166101011790555b610651610b71565b610659610bd8565b8015610332576000805461ff001916905550565b6097546001600160a01b031690565b6040517b019457468657265756d205369676e6564204d6573736167653a0a32360241b60208201526001600160601b03193360601b16603c820152600090819060500160408051601f1981840301815282825280516020808301919091206000855290840180845281905260ff891692840192909252606083018790526080830186905292509060019060a0016020604051602081039080840390855afa15801561072b573d6000803e3d6000fd5b50505060206040510351925050505b9392505050565b600061074e84848461067c565b6001600160a01b03808216600090815260c960209081526040918290208251608081018452815460ff811615158083526101009091048616938201939093526001820154909416928401929092526002909101546060830152919250906107ef5760405162461bcd60e51b8152602060048201526015602482015274105a5c991c9bdc08191bd95cdb89dd08195e1a5cdd605a1b60448201526064016102ac565b60208101516001600160a01b0316156108485760405162461bcd60e51b815260206004820152601b60248201527a105a5c991c9bdc081dd85cc8185b1c9958591e4818db185a5b5959602a1b60448201526064016102ac565b3360208281018281526001600160a01b03858116600090815260c99093526040928390208551815493516001600160a81b0319909416901515610100600160a81b0319161761010093831693909302929092178255828501516001830180546001600160a01b0319169190921690811790915560608501516002909201829055915163a9059cbb60e01b8152600481019390935260248301529063a9059cbb9060440161055d565b336108f961066d565b6001600160a01b03161461091f5760405162461bcd60e51b81526004016102ac906112a0565b6001600160a01b0381166109845760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102ac565b61033281610b1f565b600080516020611403833981519152546001600160a01b031690565b336109b261066d565b6001600160a01b0316146103325760405162461bcd60e51b81526004016102ac906112a0565b60006109e261098d565b90506109ed84610c3f565b6000835111806109fa5750815b15610a0b57610a098484610cd2565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16610b1857805460ff19166001178155604051610a86908690610a57908590602401611197565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052610cd2565b50805460ff19168155610a9761098d565b6001600160a01b0316826001600160a01b031614610b0f5760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b60648201526084016102ac565b610b1885610dbd565b5050505050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680610b8a575060005460ff16155b610ba65760405162461bcd60e51b81526004016102ac90611252565b600054610100900460ff16158015610bc8576000805461ffff19166101011790555b610bd0610dfd565b610659610dfd565b600054610100900460ff1680610bf1575060005460ff16155b610c0d5760405162461bcd60e51b81526004016102ac90611252565b600054610100900460ff16158015610c2f576000805461ffff19166101011790555b610c37610dfd565b610659610e67565b803b610ca35760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016102ac565b60008051602061140383398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b610d315760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016102ac565b600080846001600160a01b031684604051610d4c919061117b565b600060405180830381855af49150503d8060008114610d87576040519150601f19603f3d011682016040523d82523d6000602084013e610d8c565b606091505b5091509150610db4828260405180606001604052806027815260200161142360279139610ec7565b95945050505050565b610dc681610c3f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1680610e16575060005460ff16155b610e325760405162461bcd60e51b81526004016102ac90611252565b600054610100900460ff16158015610659576000805461ffff19166101011790558015610332576000805461ff001916905550565b600054610100900460ff1680610e80575060005460ff16155b610e9c5760405162461bcd60e51b81526004016102ac90611252565b600054610100900460ff16158015610ebe576000805461ffff19166101011790555b61065933610b1f565b60608315610ed657508161073a565b825115610ee65782518084602001fd5b8160405162461bcd60e51b81526004016102ac91906111ab565b600082601f830112610f1157600080fd5b81356020610f26610f2183611305565b6112d5565b80838252828201915082860187848660051b8901011115610f4657600080fd5b60005b85811015610f6557813584529284019290840190600101610f49565b5090979650505050505050565b8035610f7d816113cd565b919050565b600060208284031215610f9457600080fd5b813561073a816113cd565b60008060408385031215610fb257600080fd5b8235610fbd816113cd565b91506020838101356001600160401b0380821115610fda57600080fd5b818601915086601f830112610fee57600080fd5b813581811115611000576110006113b7565b611012601f8201601f191685016112d5565b9150808252878482850101111561102857600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060006060848603121561105b57600080fd5b83356001600160401b038082111561107257600080fd5b818601915086601f83011261108657600080fd5b81356020611096610f2183611305565b8083825282820191508286018b848660051b89010111156110b657600080fd5b600096505b848710156110e25780356110ce816113cd565b8352600196909601959183019183016110bb565b50975050870135925050808211156110f957600080fd5b5061110686828701610f00565b92505061111560408501610f72565b90509250925092565b60006020828403121561113057600080fd5b8151801515811461073a57600080fd5b60008060006060848603121561115557600080fd5b833560ff8116811461116657600080fd5b95602085013595506040909401359392505050565b6000825161118d818460208701611340565b9190910192915050565b6001600160a01b0391909116815260200190565b60208152600082518060208401526111ca816040850160208701611340565b601f01601f19169190910160400192915050565b6020808252602c908201526000805160206113e383398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201526000805160206113e383398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b604051601f8201601f191681016001600160401b03811182821017156112fd576112fd6113b7565b604052919050565b60006001600160401b0382111561131e5761131e6113b7565b5060051b60200190565b6000821982111561133b5761133b61138b565b500190565b60005b8381101561135b578181015183820152602001611343565b8381111561136a576000848401525b50505050565b60006000198214156113845761138461138b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461033257600080fdfe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206c31ee41dda6cc154d8738c0ecbd44aac8251b6b69fe42bc3e866b841b43ea4464736f6c63430008070033";

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
