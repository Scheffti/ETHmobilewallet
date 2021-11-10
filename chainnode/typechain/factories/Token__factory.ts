/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Token } from "../Token";

export class Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280601181526020017f4e6164657220446162697420546f6b656e0000000000000000000000000000008152506000908051906020019061004f92919061013e565b506040518060400160405280600381526020017f4e445400000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061013e565b506402540be3ff6002553480156100b157600080fd5b50600254600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610242565b82805461014a906101e1565b90600052602060002090601f01602090048101928261016c57600085556101b3565b82601f1061018557805160ff19168380011785556101b3565b828001600101855582156101b3579182015b828111156101b2578251825591602001919060010190610197565b5b5090506101c091906101c4565b5090565b5b808211156101dd5760008160009055506001016101c5565b5090565b600060028204905060018216806101f957607f821691505b6020821081141561020d5761020c610213565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6107b2806102516000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd1461008557806370a08231146100a35780638da5cb5b146100d357806395d89b41146100f1578063a9059cbb1461010f575b600080fd5b61006f61012b565b60405161007c9190610512565b60405180910390f35b61008d6101b9565b60405161009a9190610554565b60405180910390f35b6100bd60048036038101906100b89190610418565b6101bf565b6040516100ca9190610554565b60405180910390f35b6100db610208565b6040516100e891906104f7565b60405180910390f35b6100f961022e565b6040516101069190610512565b60405180910390f35b61012960048036038101906101249190610441565b6102bc565b005b6000805461013890610684565b80601f016020809104026020016040519081016040528092919081815260200182805461016490610684565b80156101b15780601f10610186576101008083540402835291602001916101b1565b820191906000526020600020905b81548152906001019060200180831161019457829003601f168201915b505050505081565b60025481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001805461023b90610684565b80601f016020809104026020016040519081016040528092919081815260200182805461026790610684565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b505050505081565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561033e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033590610534565b60405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461038d91906105e1565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103e3919061058b565b925050819055505050565b6000813590506103fd8161074e565b92915050565b60008135905061041281610765565b92915050565b60006020828403121561042a57600080fd5b6000610438848285016103ee565b91505092915050565b6000806040838503121561045457600080fd5b6000610462858286016103ee565b925050602061047385828601610403565b9150509250929050565b61048681610615565b82525050565b60006104978261056f565b6104a1818561057a565b93506104b1818560208601610651565b6104ba81610714565b840191505092915050565b60006104d260118361057a565b91506104dd82610725565b602082019050919050565b6104f181610647565b82525050565b600060208201905061050c600083018461047d565b92915050565b6000602082019050818103600083015261052c818461048c565b905092915050565b6000602082019050818103600083015261054d816104c5565b9050919050565b600060208201905061056960008301846104e8565b92915050565b600081519050919050565b600082825260208201905092915050565b600061059682610647565b91506105a183610647565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156105d6576105d56106b6565b5b828201905092915050565b60006105ec82610647565b91506105f783610647565b92508282101561060a576106096106b6565b5b828203905092915050565b600061062082610627565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561066f578082015181840152602081019050610654565b8381111561067e576000848401525b50505050565b6000600282049050600182168061069c57607f821691505b602082108114156106b0576106af6106e5565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b61075781610615565b811461076257600080fd5b50565b61076e81610647565b811461077957600080fd5b5056fea2646970667358221220dedbdb298135b4fd04dda08d58b4f4850113765065bd671969e506cb601ca63a64736f6c63430008030033";
