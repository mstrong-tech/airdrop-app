"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrustedAirdrop__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
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
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "receipient",
                type: "address",
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
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes32[]",
                name: "ids",
                type: "bytes32[]",
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
const _bytecode = "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c61125e61004b60003960008181610165015281816101ae015281816102370152610277015261125e6000f3fe60806040526004361061006b5760003560e01c80633659cfe6146100705780634f1ef28614610092578063715018a6146100a55780638129fc1c146100ba5780638da5cb5b146100cf57806396c144f0146100fa5780639bc579b11461011a578063f2fde38b1461013a575b600080fd5b34801561007c57600080fd5b5061009061008b366004610d9c565b61015a565b005b6100906100a0366004610db9565b61022c565b3480156100b157600080fd5b506100906102e6565b3480156100c657600080fd5b50610090610321565b3480156100db57600080fd5b506100e461039c565b6040516100f19190610f96565b60405180910390f35b34801561010657600080fd5b50610090610115366004610e82565b6103ab565b34801561012657600080fd5b50610090610135366004610eb2565b6105bd565b34801561014657600080fd5b50610090610155366004610d9c565b61077c565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156101ac5760405162461bcd60e51b81526004016101a390610fdd565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166101de610819565b6001600160a01b0316146102045760405162461bcd60e51b81526004016101a390611017565b61020d81610835565b6040805160008082526020820190925261022991839190610864565b50565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156102755760405162461bcd60e51b81526004016101a390610fdd565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166102a7610819565b6001600160a01b0316146102cd5760405162461bcd60e51b81526004016101a390611017565b6102d682610835565b6102e282826001610864565b5050565b336102ef61039c565b6001600160a01b0316146103155760405162461bcd60e51b81526004016101a39061109f565b61031f60006109a4565b565b600054610100900460ff168061033a575060005460ff16155b6103565760405162461bcd60e51b81526004016101a390611051565b600054610100900460ff16158015610378576000805461ffff19166101011790555b6103806109f6565b610388610a5d565b8015610229576000805461ff001916905550565b6097546001600160a01b031690565b336103b461039c565b6001600160a01b0316146103da5760405162461bcd60e51b81526004016101a39061109f565b600082815260c960209081526040918290208251608081018452815460ff811615158083526001600160a01b036101009092048216948301949094526001830154169381019390935260020154606083015261046d5760405162461bcd60e51b8152602060048201526012602482015271111c9bdc08191bd95cdb89dd08195e1a5cdd60721b60448201526064016101a3565b60208101516001600160a01b0316156104c45760405162461bcd60e51b8152602060048201526019602482015278131a5b9ad91c9bdc081dd85cc8185b1c9958591e481d5cd959603a1b60448201526064016101a3565b6001600160a01b038281166020838101828152600087815260c99092526040918290208551815492516001600160a81b0319909316901515610100600160a81b0319161761010092861692909202919091178155818501516001820180546001600160a01b0319169190951690811790945560608501516002909101819055905163a9059cbb60e01b81526004810192909252602482015263a9059cbb90604401602060405180830381600087803b15801561057f57600080fd5b505af1158015610593573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b79190610e60565b50505050565b336105c661039c565b6001600160a01b0316146105ec5760405162461bcd60e51b81526004016101a39061109f565b81516001600160a01b0382166323b872dd33306106098886611104565b6040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381600087803b15801561065857600080fd5b505af115801561066c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106909190610e60565b5060005b8181101561077557604051806080016040528060011515815260200160006001600160a01b03168152602001846001600160a01b031681526020018681525060c960008684815181106106e9576106e9611180565b602090810291909101810151825281810192909252604090810160002083518154938501516001600160a81b0319909416901515610100600160a81b031916176101006001600160a01b0394851602178155908301516001820180546001600160a01b03191691909316179091556060909101516002909101558061076d8161114f565b915050610694565b5050505050565b3361078561039c565b6001600160a01b0316146107ab5760405162461bcd60e51b81526004016101a39061109f565b6001600160a01b0381166108105760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101a3565b610229816109a4565b6000805160206111e2833981519152546001600160a01b031690565b3361083e61039c565b6001600160a01b0316146102295760405162461bcd60e51b81526004016101a39061109f565b600061086e610819565b905061087984610ac4565b6000835111806108865750815b15610897576108958484610b57565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff1661077557805460ff191660011781556040516109129086906108e3908590602401610f96565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052610b57565b50805460ff19168155610923610819565b6001600160a01b0316826001600160a01b03161461099b5760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b60648201526084016101a3565b61077585610c42565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680610a0f575060005460ff16155b610a2b5760405162461bcd60e51b81526004016101a390611051565b600054610100900460ff16158015610a4d576000805461ffff19166101011790555b610a55610c82565b610388610c82565b600054610100900460ff1680610a76575060005460ff16155b610a925760405162461bcd60e51b81526004016101a390611051565b600054610100900460ff16158015610ab4576000805461ffff19166101011790555b610abc610c82565b610388610cec565b803b610b285760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016101a3565b6000805160206111e283398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b610bb65760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101a3565b600080846001600160a01b031684604051610bd19190610f7a565b600060405180830381855af49150503d8060008114610c0c576040519150601f19603f3d011682016040523d82523d6000602084013e610c11565b606091505b5091509150610c39828260405180606001604052806027815260200161120260279139610d4c565b95945050505050565b610c4b81610ac4565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1680610c9b575060005460ff16155b610cb75760405162461bcd60e51b81526004016101a390611051565b600054610100900460ff16158015610388576000805461ffff19166101011790558015610229576000805461ff001916905550565b600054610100900460ff1680610d05575060005460ff16155b610d215760405162461bcd60e51b81526004016101a390611051565b600054610100900460ff16158015610d43576000805461ffff19166101011790555b610388336109a4565b60608315610d5b575081610d85565b825115610d6b5782518084602001fd5b8160405162461bcd60e51b81526004016101a39190610faa565b9392505050565b8035610d97816111ac565b919050565b600060208284031215610dae57600080fd5b8135610d85816111ac565b60008060408385031215610dcc57600080fd5b8235610dd7816111ac565b91506020838101356001600160401b0380821115610df457600080fd5b818601915086601f830112610e0857600080fd5b813581811115610e1a57610e1a611196565b610e2c601f8201601f191685016110d4565b91508082528784828501011115610e4257600080fd5b80848401858401376000848284010152508093505050509250929050565b600060208284031215610e7257600080fd5b81518015158114610d8557600080fd5b60008060408385031215610e9557600080fd5b823591506020830135610ea7816111ac565b809150509250929050565b600080600060608486031215610ec757600080fd5b833592506020808501356001600160401b0380821115610ee657600080fd5b818701915087601f830112610efa57600080fd5b813581811115610f0c57610f0c611196565b8060051b9150610f1d8483016110d4565b8181528481019084860184860187018c1015610f3857600080fd5b600095505b83861015610f5b578035835260019590950194918601918601610f3d565b50809750505050505050610f7160408501610d8c565b90509250925092565b60008251610f8c818460208701611123565b9190910192915050565b6001600160a01b0391909116815260200190565b6020815260008251806020840152610fc9816040850160208701611123565b601f01601f19169190910160400192915050565b6020808252602c908201526000805160206111c283398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201526000805160206111c283398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b604051601f8201601f191681016001600160401b03811182821017156110fc576110fc611196565b604052919050565b600081600019048311821515161561111e5761111e61116a565b500290565b60005b8381101561113e578181015183820152602001611126565b838111156105b75750506000910152565b60006000198214156111635761116361116a565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461022957600080fdfe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220ea0b3480f9e3d5e2f8effd738a8258ef125c819c5731c574ecbe1f88fb49c17464736f6c63430008070033";
const isSuperArgs = (xs) => xs.length > 1;
class TrustedAirdrop__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TrustedAirdrop__factory = TrustedAirdrop__factory;
TrustedAirdrop__factory.bytecode = _bytecode;
TrustedAirdrop__factory.abi = _abi;
