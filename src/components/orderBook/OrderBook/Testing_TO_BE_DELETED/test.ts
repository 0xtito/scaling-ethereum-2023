import { ethers, utils } from 'ethers';
const MUMBAI_URL = "https://rpc.gnosischain.com";
const abi = [{ "inputs": [{ "internalType": "contract IEntryPoint", "name": "_entryPoint", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newAccount", "type": "address" }], "name": "newAccount", "type": "event" }, { "inputs": [], "name": "accountImplementation", "outputs": [{ "internalType": "contract LimitOrderAccount", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }], "name": "createAccount", "outputs": [{ "internalType": "contract LimitOrderAccount", "name": "ret", "type": "address" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }], "name": "getAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]
const abi2 = [{ "inputs": [{ "internalType": "contract IEntryPoint", "name": "anEntryPoint", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "beacon", "type": "address" }], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" }], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IEntryPoint", "name": "entryPoint", "type": "address" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }], "name": "SimpleAccountInitialized", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "tokenOut", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenIn", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "orderAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "filledAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rate", "type": "uint256" }], "name": "UpdateLimitOrder", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "implementation", "type": "address" }], "name": "Upgraded", "type": "event" }, { "inputs": [], "name": "addDeposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "cancelLimitOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenOut", "type": "address" }, { "internalType": "address", "name": "_tokenIn", "type": "address" }, { "internalType": "uint256", "name": "_expiry", "type": "uint256" }, { "internalType": "uint256", "name": "_orderAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_rate", "type": "uint256" }], "name": "createLimitOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "entryPoint", "outputs": [{ "internalType": "contract IEntryPoint", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "dest", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "bytes", "name": "func", "type": "bytes" }], "name": "execute", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "dest", "type": "address[]" }, { "internalType": "bytes[]", "name": "func", "type": "bytes[]" }], "name": "executeBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "address payable", "name": "_filler", "type": "address" }, { "internalType": "uint256", "name": "_fillAmount", "type": "uint256" }, { "internalType": "bytes", "name": "_params", "type": "bytes" }], "name": "fillLimitOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getDeposit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "anOwner", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "limitOrders", "outputs": [{ "internalType": "address", "name": "tokenOut", "type": "address" }, { "internalType": "address", "name": "tokenIn", "type": "address" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint256", "name": "orderAmount", "type": "uint256" }, { "internalType": "uint256", "name": "filledAmount", "type": "uint256" }, { "internalType": "uint256", "name": "rate", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nonce", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxiableUUID", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newImplementation", "type": "address" }], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "bytes", "name": "initCode", "type": "bytes" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }, { "internalType": "uint256", "name": "callGasLimit", "type": "uint256" }, { "internalType": "uint256", "name": "verificationGasLimit", "type": "uint256" }, { "internalType": "uint256", "name": "preVerificationGas", "type": "uint256" }, { "internalType": "uint256", "name": "maxFeePerGas", "type": "uint256" }, { "internalType": "uint256", "name": "maxPriorityFeePerGas", "type": "uint256" }, { "internalType": "bytes", "name": "paymasterAndData", "type": "bytes" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "internalType": "struct UserOperation", "name": "userOp", "type": "tuple" }, { "internalType": "bytes32", "name": "userOpHash", "type": "bytes32" }, { "internalType": "uint256", "name": "missingAccountFunds", "type": "uint256" }], "name": "validateUserOp", "outputs": [{ "internalType": "uint256", "name": "validationData", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "withdrawAddress", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawDepositTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]

const provider = new ethers.providers.JsonRpcProvider(MUMBAI_URL);
const WETH = "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1";
const xDAI = "0x0000000000000000000000000000000000000000";
const WBTC = "0x8e5bbbb09ed1ebde8674cda39a0c169401db4252";
const AccountFactoryAddress = "0xf37255D9F2f1c1AfdF10FedE072d934733e7e983";



interface Iprices {
    numLevels: 25,
    feed: 'book_ui_1_snapshot',
    product_id: string;
    asks: number[][];
    bids: number[][];
}


async function main() {

    let iface: utils.Interface = new utils.Interface(abi);
    const limitOrderAccountFactory = new ethers.Contract(AccountFactoryAddress, iface, provider);
    const events = limitOrderAccountFactory.filters.newAccount();
    const logsLimitOrderAccountFactory = await limitOrderAccountFactory.queryFilter(events, 27086500);

    for (let i = 0; i < logsLimitOrderAccountFactory.length; i++) {
        let newAccount = logsLimitOrderAccountFactory[i].args?.newAccount;
        let iface2: utils.Interface = new utils.Interface(abi2);
        const limitOrderAccount = new ethers.Contract(newAccount, iface2, provider);
        const eventsAccountXdaiWeth = limitOrderAccount.filters.UpdateLimitOrder([xDAI, WBTC], [WBTC, xDAI]);
        let logsxDaiWeth = await limitOrderAccount.queryFilter(eventsAccountXdaiWeth, 27086500);

        console.log("logsxDaiWeth", logsxDaiWeth);
    }


}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

