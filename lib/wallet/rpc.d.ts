export = RPC;
/**
 * Wallet RPC
 * @alias module:wallet.RPC
 * @extends bweb.RPC
 */
declare class RPC {
    /**
     * Create an RPC.
     * @param {WalletDB} wdb
     */
    constructor(node: any);
    wdb: any;
    network: any;
    logger: any;
    client: any;
    locker: any;
    wallet: any;
    getCode(err: any): any;
    handleCall(cmd: any, query: any): void;
    handleError(err: any): void;
    init(): void;
    help(args: any, _help: any): Promise<any>;
    stop(args: any, help: any): Promise<string>;
    fundRawTransaction(args: any, help: any): Promise<{
        hex: any;
        changepos: any;
        fee: string | number;
    }>;
    resendWalletTransactions(args: any, help: any): Promise<any[]>;
    backupWallet(args: any, help: any): Promise<any>;
    dumpPrivKey(args: any, help: any): Promise<any>;
    dumpWallet(args: any, help: any): Promise<string>;
    encryptWallet(args: any, help: any): Promise<string>;
    getAccountAddress(args: any, help: any): Promise<any>;
    getAccount(args: any, help: any): Promise<any>;
    getAddressesByAccount(args: any, help: any): Promise<any[]>;
    getAddressInfo(args: any, help: any): Promise<{
        address: any;
        ismine: boolean;
        iswatchonly: any;
        ischange: boolean;
        isspendable: boolean;
        isscript: any;
        witness_version: any;
        witness_program: any;
    }>;
    getBalance(args: any, help: any): Promise<string | number>;
    getNewAddress(args: any, help: any): Promise<any>;
    getRawChangeAddress(args: any, help: any): Promise<any>;
    getReceivedByAccount(args: any, help: any): Promise<string | number>;
    getReceivedByAddress(args: any, help: any): Promise<string | number>;
    _toWalletTX(wtx: any): Promise<{
        amount: string | number;
        confirmations: any;
        blockhash: any;
        blockindex: any;
        blocktime: any;
        txid: any;
        walletconflicts: any[];
        time: any;
        timereceived: any;
        'bip125-replaceable': string;
        details: ({
            account: any;
            address: any;
            category: string;
            amount: string | number;
            label: any;
            vout: number;
            fee?: undefined;
        } | {
            account: string;
            address: any;
            category: string;
            amount: number;
            fee: number;
            vout: number;
            label?: undefined;
        })[];
        hex: any;
    }>;
    getTransaction(args: any, help: any): Promise<{
        amount: string | number;
        confirmations: any;
        blockhash: any;
        blockindex: any;
        blocktime: any;
        txid: any;
        walletconflicts: any[];
        time: any;
        timereceived: any;
        'bip125-replaceable': string;
        details: ({
            account: any;
            address: any;
            category: string;
            amount: string | number;
            label: any;
            vout: number;
            fee?: undefined;
        } | {
            account: string;
            address: any;
            category: string;
            amount: number;
            fee: number;
            vout: number;
            label?: undefined;
        })[];
        hex: any;
    }>;
    abandonTransaction(args: any, help: any): Promise<any>;
    getUnconfirmedBalance(args: any, help: any): Promise<string | number>;
    getWalletInfo(args: any, help: any): Promise<{
        walletid: any;
        walletversion: number;
        balance: string | number;
        unconfirmed_balance: string | number;
        txcount: any;
        keypoololdest: number;
        keypoolsize: number;
        unlocked_until: any;
        paytxfee: string | number;
        height: any;
    }>;
    importPrivKey(args: any, help: any): Promise<any>;
    importWallet(args: any, help: any): Promise<any>;
    importAddress(args: any, help: any): Promise<any>;
    importPubkey(args: any, help: any): Promise<any>;
    importName(args: any, help: any): Promise<any>;
    keyPoolRefill(args: any, help: any): Promise<any>;
    listAccounts(args: any, help: any): Promise<any>;
    listAddressGroupings(args: any, help: any): Promise<void>;
    listLockUnspent(args: any, help: any): Promise<{
        txid: any;
        vout: any;
    }[]>;
    listReceivedByAccount(args: any, help: any): Promise<any[]>;
    listReceivedByAddress(args: any, help: any): Promise<any[]>;
    _listReceived(minconf: any, empty: any, watchOnly: any, account: any): Promise<any[]>;
    listSinceBlock(args: any, help: any): Promise<any[] | {
        transactions: {
            account: any;
            address: any;
            category: string;
            amount: string | number;
            label: any;
            vout: number;
            confirmations: any;
            blockhash: any;
            blockindex: number;
            blocktime: any;
            blockheight: any;
            txid: any;
            walletconflicts: any[];
            time: any;
            timereceived: any;
        }[];
        lastblock: any;
    }>;
    _toListTX(wtx: any): Promise<{
        account: any;
        address: any;
        category: string;
        amount: string | number;
        label: any;
        vout: number;
        confirmations: any;
        blockhash: any;
        blockindex: number;
        blocktime: any;
        blockheight: any;
        txid: any;
        walletconflicts: any[];
        time: any;
        timereceived: any;
    }>;
    listTransactions(args: any, help: any): Promise<{
        account: any;
        address: any;
        category: string;
        amount: string | number;
        label: any;
        vout: number;
        confirmations: any;
        blockhash: any;
        blockindex: number;
        blocktime: any;
        blockheight: any;
        txid: any;
        walletconflicts: any[];
        time: any;
        timereceived: any;
    }[]>;
    listUnspent(args: any, help: any): Promise<{
        txid: any;
        vout: any;
        address: any;
        account: any;
        redeemScript: any;
        amount: string | number;
        confirmations: any;
        spendable: boolean;
        solvable: boolean;
    }[]>;
    lockUnspent(args: any, help: any): Promise<boolean>;
    sendFrom(args: any, help: any): Promise<any>;
    sendMany(args: any, help: any): Promise<any>;
    sendToAddress(args: any, help: any): Promise<any>;
    createSendToAddress(args: any, help: any): Promise<any>;
    _validateSendToAddress(args: any, help: any, method: any): {
        subtract: any;
        addr: any;
        value: any;
        account: any;
    };
    setAccount(args: any, help: any): Promise<void>;
    setTXFee(args: any, help: any): Promise<boolean>;
    signMessage(args: any, help: any): Promise<any>;
    signMessageWithName(args: any, help: any): Promise<any>;
    walletLock(args: any, help: any): Promise<any>;
    walletPassphraseChange(args: any, help: any): Promise<any>;
    walletPassphrase(args: any, help: any): Promise<any>;
    importPrunedFunds(args: any, help: any): Promise<any>;
    removePrunedFunds(args: any, help: any): Promise<any>;
    selectWallet(args: any, help: any): Promise<any>;
    getMemoryInfo(args: any, help: any): Promise<any>;
    setLogLevel(args: any, help: any): Promise<any>;
    getBids(args: any, help: any): Promise<any[]>;
    getReveals(args: any, help: any): Promise<any[]>;
    getNames(args: any, help: any): Promise<any[]>;
    getAuctionInfo(args: any, help: any): Promise<any>;
    getNameInfo(args: any, help: any): Promise<any>;
    getNameResource(args: any, help: any): Promise<any>;
    getNameByHash(args: any, help: any): Promise<any>;
    createClaim(args: any, help: any): Promise<{
        name: any;
        target: any;
        value: any;
        size: any;
        fee: any;
        address: any;
        txt: any;
    }>;
    sendFakeClaim(args: any, help: any): Promise<any>;
    sendClaim(args: any, help: any): Promise<any>;
    sendOpen(args: any, help: any): Promise<any>;
    createOpen(args: any, help: any): Promise<any>;
    _validateOpen(args: any, help: any, method: any): {
        name: any;
        force: any;
        account: any;
    };
    sendBid(args: any, help: any): Promise<any>;
    createBid(args: any, help: any): Promise<any>;
    _validateBid(args: any, help: any, method: any): {
        name: any;
        bid: any;
        value: any;
        account: any;
    };
    sendReveal(args: any, help: any): Promise<any>;
    createReveal(args: any, help: any): Promise<any>;
    _validateReveal(args: any, help: any, method: any): {
        name: any;
        account: any;
    };
    sendRedeem(args: any, help: any): Promise<any>;
    createRedeem(args: any, help: any): Promise<any>;
    _validateRedeem(args: any, help: any, method: any): {
        name: any;
        account: any;
    };
    sendUpdate(args: any, help: any): Promise<any>;
    createUpdate(args: any, help: any): Promise<any>;
    _validateUpdate(args: any, help: any, method: any): {
        name: any;
        resource: any;
        account: any;
    };
    sendRenewal(args: any, help: any): Promise<any>;
    createRenewal(args: any, help: any): Promise<any>;
    _validateRenewal(args: any, help: any, method: any): {
        name: any;
        account: any;
    };
    sendTransfer(args: any, help: any): Promise<any>;
    createTransfer(args: any, help: any): Promise<any>;
    _validateTransfer(args: any, help: any, method: any): {
        name: any;
        address: any;
        account: any;
    };
    sendCancel(args: any, help: any): Promise<any>;
    createCancel(args: any, help: any): Promise<any>;
    _validateCancel(args: any, help: any, method: any): {
        name: any;
        account: any;
    };
    sendFinalize(args: any, help: any): Promise<any>;
    createFinalize(args: any, help: any): Promise<any>;
    _validateFinalize(args: any, help: any, method: any): {
        name: any;
        account: any;
    };
    sendRevoke(args: any, help: any): Promise<any>;
    createRevoke(args: any, help: any): Promise<any>;
    _validateRevoke(args: any, help: any, method: any): {
        name: any;
        account: any;
    };
    sendBatch(args: any, help: any): Promise<any>;
    createBatch(args: any, help: any): Promise<any>;
    _validateBatch(args: any, help: any, method: any): any[];
    importNonce(args: any, help: any): Promise<any>;
}
