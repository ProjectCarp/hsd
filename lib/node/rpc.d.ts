export = RPC;
/**
 * Handshake RPC
 * @alias module:http.RPC
 * @extends bweb.RPC
 */
declare class RPC {
    /**
     * Create RPC.
     * @param {Node} node
     */
    constructor(node: Node);
    node: Node;
    network: any;
    workers: any;
    chain: any;
    mempool: any;
    pool: any;
    fees: any;
    miner: any;
    logger: any;
    locker: any;
    mining: boolean;
    procLimit: number;
    attempt: any;
    lastActivity: number;
    boundChain: boolean;
    mask: Buffer;
    merkleMap: any;
    merkleList: any[];
    pollers: any[];
    getCode(err: any): any;
    handleCall(cmd: any, query: any): void;
    handleError(err: any): void;
    init(): void;
    getInfo(args: any, help: any): Promise<{
        version: any;
        protocolversion: any;
        walletversion: number;
        balance: number;
        blocks: any;
        timeoffset: any;
        connections: any;
        proxy: string;
        difficulty: number;
        testnet: boolean;
        keypoololdest: number;
        keypoolsize: number;
        unlocked_until: number;
        paytxfee: string | number;
        relayfee: string | number;
        errors: string;
    }>;
    help(args: any, _help: any): Promise<any>;
    stop(args: any, help: any): Promise<string>;
    getNetworkInfo(args: any, help: any): Promise<{
        version: any;
        subversion: any;
        protocolversion: any;
        identitykey: any;
        localservices: string;
        localservicenames: any;
        localrelay: boolean;
        timeoffset: any;
        networkactive: any;
        connections: any;
        networks: any[];
        relayfee: string | number;
        incrementalfee: number;
        localaddresses: {
            address: any;
            port: any;
            score: any;
        }[];
        warnings: string;
    }>;
    addNode(args: any, help: any): Promise<any>;
    disconnectNode(args: any, help: any): Promise<any>;
    getAddedNodeInfo(args: any, help: any): Promise<{
        addednode: any;
        connected: any;
        addresses: {
            address: any;
            connected: string;
        }[];
    }[]>;
    getConnectionCount(args: any, help: any): Promise<any>;
    getNetTotals(args: any, help: any): Promise<{
        totalbytesrecv: number;
        totalbytessent: number;
        timemillis: number;
    }>;
    getPeerInfo(args: any, help: any): Promise<{
        id: any;
        addr: any;
        addrlocal: any;
        name: any;
        services: string;
        servicenames: any;
        relaytxes: boolean;
        lastsend: number;
        lastrecv: number;
        bytessent: any;
        bytesrecv: any;
        conntime: number;
        timeoffset: any;
        pingtime: number;
        minping: number;
        version: any;
        subver: any;
        inbound: boolean;
        startingheight: any;
        besthash: any;
        bestheight: any;
        banscore: any;
        inflight: string[];
        whitelisted: boolean;
    }[]>;
    ping(args: any, help: any): Promise<any>;
    setBan(args: any, help: any): Promise<any>;
    listBanned(args: any, help: any): Promise<{
        address: any;
        banned_until: any;
        ban_created: any;
        ban_reason: string;
    }[]>;
    clearBanned(args: any, help: any): Promise<any>;
    getBlockchainInfo(args: any, help: any): Promise<{
        chain: any;
        blocks: any;
        headers: any;
        bestblockhash: any;
        treeroot: any;
        difficulty: number;
        mediantime: any;
        verificationprogress: any;
        chainwork: any;
        pruned: any;
        softforks: {};
        deflationary: boolean;
        pruneheight: number;
    }>;
    getBestBlockHash(args: any, help: any): Promise<any>;
    getBlockCount(args: any, help: any): Promise<any>;
    getBlock(args: any, help: any): Promise<any>;
    getBlockByHeight(args: any, help: any): Promise<any>;
    getBlockHash(args: any, help: any): Promise<any>;
    getBlockHeader(args: any, help: any): Promise<any>;
    getChainTips(args: any, help: any): Promise<{
        height: any;
        hash: any;
        branchlen: number;
        status: string;
    }[]>;
    getDifficulty(args: any, help: any): Promise<number>;
    getMempoolInfo(args: any, help: any): Promise<{
        size: any;
        bytes: any;
        usage: any;
        maxmempool: any;
        mempoolminfee: string | number;
    }>;
    getMempoolAncestors(args: any, help: any): Promise<any[]>;
    getMempoolDescendants(args: any, help: any): Promise<any[]>;
    getMempoolEntry(args: any, help: any): Promise<{
        size: any;
        fee: string | number;
        modifiedfee: number;
        time: any;
        height: any;
        startingpriority: any;
        currentpriority: any;
        descendantcount: any;
        descendantsize: any;
        descendantfees: any;
        ancestorcount: any;
        ancestorsize: number;
        ancestorfees: number;
        depends: any;
    }>;
    getRawMempool(args: any, help: any): Promise<any>;
    getTXOut(args: any, help: any): Promise<{
        bestblock: any;
        confirmations: any;
        value: string | number;
        address: {
            version: any;
            hash: any;
            string: any;
        };
        version: any;
        coinbase: any;
    }>;
    getTXOutProof(args: any, help: any): Promise<any>;
    verifyTXOutProof(args: any, help: any): Promise<any[]>;
    getTXOutSetInfo(args: any, help: any): Promise<{
        height: any;
        bestblock: any;
        transactions: any;
        txouts: any;
        bytes_serialized: number;
        hash_serialized: number;
        total_amount: string | number;
        total_burned: string | number;
    }>;
    pruneBlockchain(args: any, help: any): Promise<void>;
    compactTree(args: any, help: any): Promise<void>;
    reconstructTree(args: any, help: any): Promise<void>;
    verifyChain(args: any, help: any): Promise<any>;
    handleWork(data: any, mask: any): Promise<any[]>;
    _handleWork(data: any, mask: any): Promise<any[]>;
    createWork(): Promise<{
        network: any;
        data: any;
        target: any;
        height: any;
        time: any;
        fee: any;
    }>;
    _createWork(): Promise<{
        network: any;
        data: any;
        target: any;
        height: any;
        time: any;
        fee: any;
    }>;
    getWorkLongpoll(args: any, help: any): Promise<{
        network: any;
        data: any;
        target: any;
        height: any;
        time: any;
        fee: any;
    }>;
    getWork(args: any, help: any): Promise<{
        network: any;
        data: any;
        target: any;
        height: any;
        time: any;
        fee: any;
    }>;
    submitWork(args: any, help: any): Promise<any[]>;
    submitBlock(args: any, help: any): Promise<string>;
    getBlockTemplate(args: any, help: any): Promise<any>;
    createTemplate(maxVersion: any, coinbase: any, rules: any): Promise<{
        capabilities: string[];
        mutable: string[];
        version: any;
        rules: any[];
        vbavailable: {};
        vbrequired: number;
        height: any;
        previousblockhash: any;
        merkleroot: any;
        witnessroot: any;
        treeroot: any;
        reservedroot: any;
        mask: string;
        target: any;
        bits: string;
        noncerange: string;
        curtime: any;
        mintime: any;
        maxtime: any;
        expires: any;
        sigoplimit: 80000;
        sizelimit: 1000000;
        weightlimit: 4000000;
        longpollid: string;
        submitold: boolean;
        coinbaseaux: {
            flags: any;
        };
        coinbasevalue: any;
        coinbasetxn: any;
        claims: any;
        airdrops: any;
        transactions: {
            data: any;
            txid: any;
            hash: any;
            depends: any[];
            fee: any;
            sigops: number;
            weight: any;
        }[];
    }>;
    _createTemplate(maxVersion: any, coinbase: any, rules: any): Promise<{
        capabilities: string[];
        mutable: string[];
        version: any;
        rules: any[];
        vbavailable: {};
        vbrequired: number;
        height: any;
        previousblockhash: any;
        merkleroot: any;
        witnessroot: any;
        treeroot: any;
        reservedroot: any;
        mask: string;
        target: any;
        bits: string;
        noncerange: string;
        curtime: any;
        mintime: any;
        maxtime: any;
        expires: any;
        sigoplimit: 80000;
        sizelimit: 1000000;
        weightlimit: 4000000;
        longpollid: string;
        submitold: boolean;
        coinbaseaux: {
            flags: any;
        };
        coinbasevalue: any;
        coinbasetxn: any;
        claims: any;
        airdrops: any;
        transactions: {
            data: any;
            txid: any;
            hash: any;
            depends: any[];
            fee: any;
            sigops: number;
            weight: any;
        }[];
    }>;
    getMiningInfo(args: any, help: any): Promise<{
        blocks: any;
        currentblocksize: number;
        currentblockweight: number;
        currentblocktx: number;
        difficulty: number;
        errors: string;
        genproclimit: number;
        networkhashps: number;
        pooledtx: any;
        testnet: boolean;
        chain: any;
        generate: boolean;
    }>;
    getNetworkHashPS(args: any, help: any): Promise<number>;
    prioritiseTransaction(args: any, help: any): Promise<boolean>;
    verifyBlock(args: any, help: any): Promise<any>;
    getGenerate(args: any, help: any): Promise<boolean>;
    setGenerate(args: any, help: any): Promise<boolean>;
    generate(args: any, help: any): Promise<any[]>;
    generateToAddress(args: any, help: any): Promise<any[]>;
    createRawTransaction(args: any, help: any): Promise<any>;
    decodeRawTransaction(args: any, help: any): Promise<{
        txid: any;
        hash: any;
        size: any;
        vsize: any;
        version: any;
        locktime: any;
        vin: {
            coinbase: any;
            txid: any;
            vout: any;
            txinwitness: any;
            sequence: any;
            link: any;
        }[];
        vout: {
            value: string | number;
            n: number;
            address: {
                version: any;
                hash: any;
                string: any;
            };
            covenant: any;
        }[];
        blockhash: any;
        confirmations: number;
        time: number;
        blocktime: number;
        hex: any;
    }>;
    decodeScript(args: any, help: any): Promise<{
        asm: any;
        hex: any;
        type: any;
        reqSigs: number;
        p2sh: any;
    }>;
    decodeResource(args: any, help: any): Promise<any>;
    getRawTransaction(args: any, help: any): Promise<any>;
    sendRawTransaction(args: any, help: any): Promise<any>;
    signRawTransaction(args: any, help: any): Promise<{
        hex: any;
        complete: any;
    }>;
    createMultisig(args: any, help: any): Promise<{
        address: string;
        redeemScript: any;
    }>;
    validateAddress(args: any, help: any): Promise<{
        isvalid: boolean;
        address?: undefined;
        isscript?: undefined;
        isspendable?: undefined;
        witness_version?: undefined;
        witness_program?: undefined;
    } | {
        isvalid: boolean;
        address: any;
        isscript: any;
        isspendable: boolean;
        witness_version: any;
        witness_program: any;
    }>;
    verifyMessage(args: any, help: any): Promise<boolean>;
    verifyMessageWithName(args: any, help: any): Promise<boolean>;
    signMessageWithPrivkey(args: any, help: any): Promise<string>;
    estimateFee(args: any, help: any): Promise<string | number>;
    estimatePriority(args: any, help: any): Promise<any>;
    estimateSmartFee(args: any, help: any): Promise<{
        fee: any;
        blocks: any;
    }>;
    estimateSmartPriority(args: any, help: any): Promise<{
        priority: any;
        blocks: any;
    }>;
    invalidateBlock(args: any, help: any): Promise<any>;
    reconsiderBlock(args: any, help: any): Promise<any>;
    setMockTime(args: any, help: any): Promise<any>;
    getMemoryInfo(args: any, help: any): Promise<any>;
    setLogLevel(args: any, help: any): Promise<any>;
    getNames(args: any, help: any): Promise<any[]>;
    getNameInfo(args: any, help: any): Promise<{
        start: {
            reserved: boolean;
            week: any;
            start: any;
        };
        info: any;
    }>;
    getNameResource(args: any, help: any): Promise<any>;
    getNameProof(args: any, help: any): Promise<{
        hash: any;
        height: any;
        root: any;
        name: any;
        key: string;
        proof: any;
    }>;
    getDNSSECProof(args: any, help: any): Promise<any>;
    getNameByHash(args: any, help: any): Promise<any>;
    grindName(args: any, help: any): Promise<string>;
    sendRawClaim(args: any, help: any): Promise<any>;
    sendRawAirdrop(args: any, help: any): Promise<any>;
    validateResource(args: any, help: any): Promise<any>;
    resetRootCache(args: any, help: any): Promise<any>;
    handleLongpoll(lpid: any): Promise<void>;
    longpoll(): Promise<any>;
    refreshBlock(): void;
    bindChain(): void;
    getTemplate(): Promise<any>;
    updateWork(): Promise<any>;
    addBlock(block: any): Promise<string>;
    _addBlock(block: any): Promise<string>;
    totalTX(): any;
    getSoftforks(): Promise<{}>;
    getHashRate(lookup: any, height: any): Promise<number>;
    mineBlocks(blocks: any, addr: any, tries: any): Promise<any[]>;
    _mineBlocks(blocks: any, addr: any, tries: any): Promise<any[]>;
    findFork(entry: any): Promise<any>;
    txToJSON(tx: any, entry: any): {
        txid: any;
        hash: any;
        size: any;
        vsize: any;
        version: any;
        locktime: any;
        vin: {
            coinbase: any;
            txid: any;
            vout: any;
            txinwitness: any;
            sequence: any;
            link: any;
        }[];
        vout: {
            value: string | number;
            n: number;
            address: {
                version: any;
                hash: any;
                string: any;
            };
            covenant: any;
        }[];
        blockhash: any;
        confirmations: number;
        time: number;
        blocktime: number;
        hex: any;
    };
    scriptToJSON(script: any, hex: any): {
        asm: any;
        hex: any;
        type: any;
        reqSigs: number;
        p2sh: any;
    };
    addrToJSON(addr: any): {
        version: any;
        hash: any;
        string: any;
    };
    headerToJSON(entry: any): Promise<{
        hash: any;
        confirmations: number;
        height: any;
        version: any;
        versionHex: string;
        merkleroot: any;
        witnessroot: any;
        treeroot: any;
        reservedroot: any;
        mask: any;
        time: any;
        mediantime: any;
        nonce: any;
        extranonce: any;
        bits: string;
        difficulty: number;
        chainwork: any;
        previousblockhash: any;
        nextblockhash: any;
    }>;
    blockToJSON(entry: any, block: any, details: any): Promise<{
        hash: any;
        confirmations: number;
        strippedsize: any;
        size: any;
        weight: any;
        height: any;
        version: any;
        versionHex: string;
        merkleroot: any;
        witnessroot: any;
        treeroot: any;
        reservedroot: any;
        mask: any;
        coinbase: any;
        tx: any[];
        time: any;
        mediantime: any;
        nonce: any;
        extranonce: any;
        bits: string;
        difficulty: number;
        chainwork: any;
        nTx: number;
        previousblockhash: any;
        nextblockhash: any;
    }>;
    entryToJSON(entry: any): {
        size: any;
        fee: string | number;
        modifiedfee: number;
        time: any;
        height: any;
        startingpriority: any;
        currentpriority: any;
        descendantcount: any;
        descendantsize: any;
        descendantfees: any;
        ancestorcount: any;
        ancestorsize: number;
        ancestorfees: number;
        depends: any;
    };
    getNameState(nameHash: any, safe: any): Promise<any>;
}
