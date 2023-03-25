import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "@account-abstraction/contracts/dist/types/common";

/**
 * A variaiton of the SimpleAccount factory from @account-abstraction/contracts, just designed it
 * for the LimitOrderAccount
 */
// import type { SimpleAccount, SimpleAccountInterface } from "../SimpleAccount";
import type {
  LimitOrderAccount,
  LimitOrderAccountInterface,
} from "./LimitOrderAccount";
// our args will be the exact same as the SimpleAccount constructor
type SimpleAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;
export declare class LimitOrderAccount__factory extends ContractFactory {
  constructor(...args: SimpleAccountConstructorParams);
  deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>;
    }
  ): Promise<LimitOrderAccount>;
  getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>;
    }
  ): TransactionRequest;
  attach(address: string): LimitOrderAccount;
  connect(signer: Signer): LimitOrderAccount__factory;
  static readonly bytecode =
    "0x60c0604052306080523480156200001557600080fd5b50604051620026c5380380620026c5833981016040819052620000389162000118565b6001600160a01b03811660a0526200004f62000056565b506200014a565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000116576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012b57600080fd5b81516001600160a01b03811681146200014357600080fd5b9392505050565b60805160a05161250f620001b6600039600081816103290152818161068e015281816107280152818161108e0152818161136701528181611624015261198c0152600081816104d60152818161055b015281816107d2015281816108570152610941015261250f6000f3fe6080604052600436106101125760003560e01c80638da5cb5b116100a5578063b0d691fe11610074578063c399ec8811610059578063c399ec881461036d578063c4d66de814610382578063de1b983b146103a257600080fd5b8063b0d691fe1461031a578063b61d27f61461034d57600080fd5b80638da5cb5b14610203578063a3e2b49514610242578063a5cdc8fc146102d7578063affed0e0146102f757600080fd5b80634d44560d116100e15780634d44560d1461019b5780634f1ef286146101bb57806352d1902d146101ce5780638aab7a0a146101e357600080fd5b806318dfb3c71461011e5780633659cfe6146101405780633a871cdd146101605780634a58db191461019357600080fd5b3661011957005b600080fd5b34801561012a57600080fd5b5061013e610139366004611f2d565b6103c2565b005b34801561014c57600080fd5b5061013e61015b366004611fae565b6104cc565b34801561016c57600080fd5b5061018061017b366004611fcb565b610647565b6040519081526020015b60405180910390f35b61013e61068c565b3480156101a757600080fd5b5061013e6101b636600461201f565b61071e565b61013e6101c93660046120ee565b6107c8565b3480156101da57600080fd5b50610180610934565b3480156101ef57600080fd5b5061013e6101fe36600461213e565b6109f9565b34801561020f57600080fd5b5060975461022a90600160601b90046001600160a01b031681565b6040516001600160a01b03909116815260200161018a565b34801561024e57600080fd5b5061029f61025d3660046121a1565b6099602052600090815260409020805460018201546002830154600384015460048501546005909501546001600160a01b039485169593909416939192909186565b604080516001600160a01b039788168152969095166020870152938501929092526060840152608083015260a082015260c00161018a565b3480156102e357600080fd5b5061013e6102f23660046121a1565b610fa4565b34801561030357600080fd5b506097546bffffffffffffffffffffffff16610180565b34801561032657600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061022a565b34801561035957600080fd5b5061013e6103683660046121ba565b611041565b34801561037957600080fd5b5061018061108a565b34801561038e57600080fd5b5061013e61039d366004611fae565b61111c565b3480156103ae57600080fd5b5061013e6103bd366004612243565b61123d565b6103ca61135c565b82811461041e5760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156104c5576104b385858381811061043e5761043e612294565b90506020020160208101906104539190611fae565b600085858581811061046757610467612294565b905060200281019061047991906122aa565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113fc92505050565b806104bd81612307565b915050610421565b5050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036105595760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610415565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166105b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b03161461061f5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610415565b6106288161146c565b6040805160008082526020820190925261064491839190611474565b50565b6000610651611619565b61065b8484611691565b905061066a60408501856122aa565b905060000361067c5761067c8461176d565b6106858261181c565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b15801561070a57600080fd5b505af11580156104c5573d6000803e3d6000fd5b610726611869565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c28780000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156107ac57600080fd5b505af11580156107c0573d6000803e3d6000fd5b505050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036108555760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610415565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108b07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b03161461091b5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610415565b6109248261146c565b61093082826001611474565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109d45760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610415565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610a016118d4565b600084815260996020526040902060028101544210610a625760405162461bcd60e51b815260206004820152601260248201527f6f72646572206973206e6f742076616c696400000000000000000000000000006044820152606401610415565b8281600401548260030154610a779190612320565b1015610ac55760405162461bcd60e51b815260206004820152601560248201527f5f66696c6c416d6f756e7420746f6f206c6172676500000000000000000000006044820152606401610415565b80546000906001600160a01b0316610ade575047610b4c565b81546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610b25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b499190612333565b90505b83811015610b9c5760405162461bcd60e51b815260206004820152601a60248201527f696e73756666696369656e74206163636f756e742066756e64730000000000006044820152606401610415565b60018201546000906001600160a01b0316610bb8575047610c29565b60018301546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610c02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c269190612333565b90505b6000610c50633b9aca00610c4a86600501548961192d90919063ffffffff16565b90611939565b905085846004016000828254610c66919061234c565b90915550506003840154600485015410610c8257600060028501555b83546001600160a01b0316610cef57600080886001600160a01b03168860405160006040518083038185875af1925050503d8060008114610cdf576040519150601f19603f3d011682016040523d82523d6000602084013e610ce4565b606091505b50610d809350505050565b83546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038981166004830152602482018990529091169063a9059cbb906044016020604051808303816000875af1158015610d5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7e919061235f565b505b60018401546040517f26a18b610000000000000000000000000000000000000000000000000000000081526001600160a01b03808a16926326a18b6192610dd1928d92169086908b906004016123d1565b600060405180830381600087803b158015610deb57600080fd5b505af1158015610dff573d6000803e3d6000fd5b5050506001850154600091506001600160a01b0316610e1f575047610e90565b60018501546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610e69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8d9190612333565b90505b610e9a8383611945565b811015610ee95760405162461bcd60e51b815260206004820152601d60248201527f696e73756666696369656e7420746f6b656e496e2072656365697665640000006044820152606401610415565b84600201548560010160009054906101000a90046001600160a01b03166001600160a01b03168660000160009054906101000a90046001600160a01b03166001600160a01b03167f47eb7f4dd8db9e8af1b6739135896f2a1b7687c89fbc923a4061efbe67fbecf78c89600301548a600401548b60050154604051610f87949392919093845260208401929092526040830152606082015260800190565b60405180910390a45050505050610f9e6001606555565b50505050565b610fac61135c565b600081815260996020526040808220600281018390556001810154815460038301546004840154600585015495519496956001600160a01b039485169593909416937f47eb7f4dd8db9e8af1b6739135896f2a1b7687c89fbc923a4061efbe67fbecf793611035938a939092909193845260208401929092526040830152606082015260800190565b60405180910390a45050565b61104961135c565b610f9e848484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113fc92505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa1580156110f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111179190612333565b905090565b600054610100900460ff161580801561113c5750600054600160ff909116105b806111565750303b158015611156575060005460ff166001145b6111c85760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610415565b6000805460ff1916600117905580156111eb576000805461ff0019166101001790555b6111f482611951565b8015610930576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b61124561135c565b6040805160c0810182526001600160a01b0380881680835287821660208085018281528587018a8152606087018a815260006080890181815260a08a018c815260988054845260999097528b83209a518b54908b1673ffffffffffffffffffffffffffffffffffffffff19918216178c55955160018c01805491909b1696169590951790985591516002890155516003880155945160048701555160059095019490945592549351879491927f47eb7f4dd8db9e8af1b6739135896f2a1b7687c89fbc923a4061efbe67fbecf7926113389290918991899093845260208401929092526040830152606082015260800190565b60405180910390a46098805490600061135083612307565b91905055505050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806113a45750609754600160601b90046001600160a01b031633145b806113ae57503330145b6113fa5760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152606401610415565b565b600080846001600160a01b031684846040516114189190612409565b60006040518083038185875af1925050503d8060008114611455576040519150601f19603f3d011682016040523d82523d6000602084013e61145a565b606091505b5091509150816104c557805160208201fd5b610644611869565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156114ac576114a7836119d8565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611506575060408051601f3d908101601f1916820190925261150391810190612333565b60015b6115785760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610415565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461160d5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610415565b506114a7838383611aa3565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146113fa5760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610415565b6000806116eb836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905061173b6116fe6101408601866122aa565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508593925050611ac89050565b609754600160601b90046001600160a01b03908116911614611761576001915050611767565b60009150505b92915050565b609780546020830135916bffffffffffffffffffffffff90911690600061179383612425565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff16146106445760405162461bcd60e51b815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e6365000000000000000000006044820152606401610415565b801561064457604051600090339060001990849084818181858888f193505050503d80600081146104c5576040519150601f19603f3d011682016040523d82523d6000602084013e6104c5565b609754600160601b90046001600160a01b031633148061188857503330145b6113fa5760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610415565b6002606554036119265760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610415565b6002606555565b60006106858284612450565b60006106858284612467565b6000610685828461234c565b609780546bffffffffffffffffffffffff16600160601b6001600160a01b0384811682029290921792839055600160985560405192048116917f0000000000000000000000000000000000000000000000000000000000000000909116907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a350565b6001600160a01b0381163b611a555760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610415565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b611aac83611aec565b600082511180611ab95750805b156114a757610f9e8383611b2c565b6000806000611ad78585611c37565b91509150611ae481611c7c565b509392505050565b611af5816119d8565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b611bab5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610415565b600080846001600160a01b031684604051611bc69190612409565b600060405180830381855af49150503d8060008114611c01576040519150601f19603f3d011682016040523d82523d6000602084013e611c06565b606091505b5091509150611c2e82826040518060600160405280602781526020016124b360279139611de1565b95945050505050565b6000808251604103611c6d5760208301516040840151606085015160001a611c6187828585611dfa565b94509450505050611c75565b506000905060025b9250929050565b6000816004811115611c9057611c90612489565b03611c985750565b6001816004811115611cac57611cac612489565b03611cf95760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610415565b6002816004811115611d0d57611d0d612489565b03611d5a5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610415565b6003816004811115611d6e57611d6e612489565b036106445760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610415565b60608315611df0575081610685565b6106858383611ebe565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611e315750600090506003611eb5565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611e85573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611eae57600060019250925050611eb5565b9150600090505b94509492505050565b815115611ece5781518083602001fd5b8060405162461bcd60e51b8152600401610415919061249f565b60008083601f840112611efa57600080fd5b50813567ffffffffffffffff811115611f1257600080fd5b6020830191508360208260051b8501011115611c7557600080fd5b60008060008060408587031215611f4357600080fd5b843567ffffffffffffffff80821115611f5b57600080fd5b611f6788838901611ee8565b90965094506020870135915080821115611f8057600080fd5b50611f8d87828801611ee8565b95989497509550505050565b6001600160a01b038116811461064457600080fd5b600060208284031215611fc057600080fd5b813561068581611f99565b600080600060608486031215611fe057600080fd5b833567ffffffffffffffff811115611ff757600080fd5b8401610160818703121561200a57600080fd5b95602085013595506040909401359392505050565b6000806040838503121561203257600080fd5b823561203d81611f99565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261207257600080fd5b813567ffffffffffffffff8082111561208d5761208d61204b565b604051601f8301601f19908116603f011681019082821181831017156120b5576120b561204b565b816040528381528660208588010111156120ce57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561210157600080fd5b823561210c81611f99565b9150602083013567ffffffffffffffff81111561212857600080fd5b61213485828601612061565b9150509250929050565b6000806000806080858703121561215457600080fd5b84359350602085013561216681611f99565b925060408501359150606085013567ffffffffffffffff81111561218957600080fd5b61219587828801612061565b91505092959194509250565b6000602082840312156121b357600080fd5b5035919050565b600080600080606085870312156121d057600080fd5b84356121db81611f99565b935060208501359250604085013567ffffffffffffffff808211156121ff57600080fd5b818701915087601f83011261221357600080fd5b81358181111561222257600080fd5b88602082850101111561223457600080fd5b95989497505060200194505050565b600080600080600060a0868803121561225b57600080fd5b853561226681611f99565b9450602086013561227681611f99565b94979496505050506040830135926060810135926080909101359150565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126122c157600080fd5b83018035915067ffffffffffffffff8211156122dc57600080fd5b602001915036819003821315611c7557600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201612319576123196122f1565b5060010190565b81810381811115611767576117676122f1565b60006020828403121561234557600080fd5b5051919050565b80820180821115611767576117676122f1565b60006020828403121561237157600080fd5b8151801515811461068557600080fd5b60005b8381101561239c578181015183820152602001612384565b50506000910152565b600081518084526123bd816020860160208601612381565b601f01601f19169290920160200192915050565b8481526001600160a01b03841660208201528260408201526080606082015260006123ff60808301846123a5565b9695505050505050565b6000825161241b818460208701612381565b9190910192915050565b60006bffffffffffffffffffffffff808316818103612446576124466122f1565b6001019392505050565b8082028115828204841417611767576117676122f1565b60008261248457634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b60208152600061068560208301846123a556fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a9f7d8dfd500dd1530369b933cc4319c48ce50d8ebf0eb51ca32cd28b347a39064736f6c63430008110033";
  static readonly abi: readonly [
    {
      readonly inputs: readonly [
        {
          readonly internalType: "contract IEntryPoint";
          readonly name: "anEntryPoint";
          readonly type: "address";
        }
      ];
      readonly stateMutability: "nonpayable";
      readonly type: "constructor";
    },
    {
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly indexed: false;
          readonly internalType: "address";
          readonly name: "previousAdmin";
          readonly type: "address";
        },
        {
          readonly indexed: false;
          readonly internalType: "address";
          readonly name: "newAdmin";
          readonly type: "address";
        }
      ];
      readonly name: "AdminChanged";
      readonly type: "event";
    },
    {
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly indexed: true;
          readonly internalType: "address";
          readonly name: "beacon";
          readonly type: "address";
        }
      ];
      readonly name: "BeaconUpgraded";
      readonly type: "event";
    },
    {
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly indexed: false;
          readonly internalType: "uint8";
          readonly name: "version";
          readonly type: "uint8";
        }
      ];
      readonly name: "Initialized";
      readonly type: "event";
    },
    {
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly indexed: true;
          readonly internalType: "contract IEntryPoint";
          readonly name: "entryPoint";
          readonly type: "address";
        },
        {
          readonly indexed: true;
          readonly internalType: "address";
          readonly name: "owner";
          readonly type: "address";
        }
      ];
      readonly name: "SimpleAccountInitialized";
      readonly type: "event";
    },
    {
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly indexed: true;
          readonly internalType: "address";
          readonly name: "implementation";
          readonly type: "address";
        }
      ];
      readonly name: "Upgraded";
      readonly type: "event";
    },
    {
      readonly inputs: readonly [];
      readonly name: "addDeposit";
      readonly outputs: readonly [];
      readonly stateMutability: "payable";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [];
      readonly name: "entryPoint";
      readonly outputs: readonly [
        {
          readonly internalType: "contract IEntryPoint";
          readonly name: "";
          readonly type: "address";
        }
      ];
      readonly stateMutability: "view";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address";
          readonly name: "dest";
          readonly type: "address";
        },
        {
          readonly internalType: "uint256";
          readonly name: "value";
          readonly type: "uint256";
        },
        {
          readonly internalType: "bytes";
          readonly name: "func";
          readonly type: "bytes";
        }
      ];
      readonly name: "execute";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address[]";
          readonly name: "dest";
          readonly type: "address[]";
        },
        {
          readonly internalType: "bytes[]";
          readonly name: "func";
          readonly type: "bytes[]";
        }
      ];
      readonly name: "executeBatch";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [];
      readonly name: "getDeposit";
      readonly outputs: readonly [
        {
          readonly internalType: "uint256";
          readonly name: "";
          readonly type: "uint256";
        }
      ];
      readonly stateMutability: "view";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address";
          readonly name: "anOwner";
          readonly type: "address";
        }
      ];
      readonly name: "initialize";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [];
      readonly name: "nonce";
      readonly outputs: readonly [
        {
          readonly internalType: "uint256";
          readonly name: "";
          readonly type: "uint256";
        }
      ];
      readonly stateMutability: "view";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [];
      readonly name: "owner";
      readonly outputs: readonly [
        {
          readonly internalType: "address";
          readonly name: "";
          readonly type: "address";
        }
      ];
      readonly stateMutability: "view";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [];
      readonly name: "proxiableUUID";
      readonly outputs: readonly [
        {
          readonly internalType: "bytes32";
          readonly name: "";
          readonly type: "bytes32";
        }
      ];
      readonly stateMutability: "view";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address";
          readonly name: "newImplementation";
          readonly type: "address";
        }
      ];
      readonly name: "upgradeTo";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address";
          readonly name: "newImplementation";
          readonly type: "address";
        },
        {
          readonly internalType: "bytes";
          readonly name: "data";
          readonly type: "bytes";
        }
      ];
      readonly name: "upgradeToAndCall";
      readonly outputs: readonly [];
      readonly stateMutability: "payable";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [
        {
          readonly components: readonly [
            {
              readonly internalType: "address";
              readonly name: "sender";
              readonly type: "address";
            },
            {
              readonly internalType: "uint256";
              readonly name: "nonce";
              readonly type: "uint256";
            },
            {
              readonly internalType: "bytes";
              readonly name: "initCode";
              readonly type: "bytes";
            },
            {
              readonly internalType: "bytes";
              readonly name: "callData";
              readonly type: "bytes";
            },
            {
              readonly internalType: "uint256";
              readonly name: "callGasLimit";
              readonly type: "uint256";
            },
            {
              readonly internalType: "uint256";
              readonly name: "verificationGasLimit";
              readonly type: "uint256";
            },
            {
              readonly internalType: "uint256";
              readonly name: "preVerificationGas";
              readonly type: "uint256";
            },
            {
              readonly internalType: "uint256";
              readonly name: "maxFeePerGas";
              readonly type: "uint256";
            },
            {
              readonly internalType: "uint256";
              readonly name: "maxPriorityFeePerGas";
              readonly type: "uint256";
            },
            {
              readonly internalType: "bytes";
              readonly name: "paymasterAndData";
              readonly type: "bytes";
            },
            {
              readonly internalType: "bytes";
              readonly name: "signature";
              readonly type: "bytes";
            }
          ];
          readonly internalType: "struct UserOperation";
          readonly name: "userOp";
          readonly type: "tuple";
        },
        {
          readonly internalType: "bytes32";
          readonly name: "userOpHash";
          readonly type: "bytes32";
        },
        {
          readonly internalType: "uint256";
          readonly name: "missingAccountFunds";
          readonly type: "uint256";
        }
      ];
      readonly name: "validateUserOp";
      readonly outputs: readonly [
        {
          readonly internalType: "uint256";
          readonly name: "validationData";
          readonly type: "uint256";
        }
      ];
      readonly stateMutability: "nonpayable";
      readonly type: "function";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address payable";
          readonly name: "withdrawAddress";
          readonly type: "address";
        },
        {
          readonly internalType: "uint256";
          readonly name: "amount";
          readonly type: "uint256";
        }
      ];
      readonly name: "withdrawDepositTo";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
      readonly type: "function";
    },
    {
      readonly stateMutability: "payable";
      readonly type: "receive";
    },
    {
      readonly inputs: [
        {
          readonly internalType: "address";
          readonly name: "tokenIn";
          readonly type: "address";
        },
        {
          readonly internalType: "address";
          readonly name: "tokenOut";
          readonly type: "address";
        },
        {
          readonly internalType: "uint256";
          readonly name: "amountIn";
          readonly type: "uint256";
        },
        {
          readonly internalType: "uint256";
          readonly name: "minAmountOut";
          readonly type: "uint256";
        },
        {
          readonly internalType: "uint256";
          readonly name: "expiration";
          readonly type: "uint256";
        }
      ];
      readonly name: "createLimitOrder";
      readonly outputs: [];
      readonly stateMutability: "nonpayable";
      readonly type: "function";
    },
    {
      readonly inputs: [
        {
          readonly internalType: "bytes32";
          readonly name: "orderID";
          readonly type: "bytes32";
        }
      ];
      readonly name: "cancelLimitOrder";
      readonly outputs: [];
      readonly stateMutability: "nonpayable";
      readonly type: "function";
    },
    {
      readonly inputs: [
        {
          readonly internalType: "bytes32";
          readonly name: "orderID";
          readonly type: "bytes32";
        }
      ];
      readonly name: "getLimitOrder";
      readonly outputs: [
        {
          readonly internalType: "address";
          readonly name: "tokenIn";
          readonly type: "address";
        },
        {
          readonly internalType: "address";
          readonly name: "tokenOut";
          readonly type: "address";
        },
        {
          readonly internalType: "uint256";
          readonly name: "amountIn";
          readonly type: "uint256";
        },
        {
          readonly internalType: "uint256";
          readonly name: "minAmountOut";
          readonly type: "uint256";
        },
        {
          readonly internalType: "uint256";
          readonly name: "expiration";
          readonly type: "uint256";
        },
        {
          readonly internalType: "bool";
          readonly name: "isCancelled";
          readonly type: "bool";
        }
      ];
      readonly stateMutability: "view";
      readonly type: "function";
    }
  ];
  static createInterface(): LimitOrderAccountInterface;
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LimitOrderAccount;
}
export {};