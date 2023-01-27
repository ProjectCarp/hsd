export = TXDB;
/**
 * TXDB
 * @alias module:wallet.TXDB
 */
declare class TXDB {
    /**
     * Create a TXDB.
     * @constructor
     * @param {WalletDB} wdb
     */
    constructor(wdb: WalletDB, wid: any);
    wdb: WalletDB;
    db: any;
    logger: any;
    wid: any;
    bucket: any;
    wallet: any;
    locked: any;
    /**
     * Open TXDB.
     * @returns {Promise}
     */
    open(wallet: any): Promise<any>;
    /**
     * Emit transaction event.
     * @private
     * @param {String} event
     * @param {Object} data
     * @param {Details} details
     */
    private emit;
    /**
     * Get wallet path for output.
     * @param {Output} output
     * @returns {Promise} - Returns {@link Path}.
     */
    getPath(output: Output): Promise<any>;
    /**
     * Test whether path exists for output.
     * @param {Output} output
     * @returns {Promise} - Returns Boolean.
     */
    hasPath(output: Output): Promise<any>;
    /**
     * Save credit.
     * @param {Credit} credit
     * @param {Path} path
     */
    saveCredit(b: any, credit: Credit, path: Path): Promise<any>;
    /**
     * Remove credit.
     * @param {Credit} credit
     * @param {Path} path
     */
    removeCredit(b: any, credit: Credit, path: Path): Promise<any>;
    /**
     * Spend credit.
     * @param {Credit} credit
     * @param {TX} tx
     * @param {Number} index
     */
    spendCredit(b: any, credit: Credit, tx: TX, index: number): void;
    /**
     * Unspend credit.
     * @param {TX} tx
     * @param {Number} index
     */
    unspendCredit(b: any, tx: TX, index: number): void;
    /**
     * Write input record.
     * @param {TX} tx
     * @param {Number} index
     */
    writeInput(b: any, tx: TX, index: number): Promise<any>;
    /**
     * Remove input record.
     * @param {TX} tx
     * @param {Number} index
     */
    removeInput(b: any, tx: TX, index: number): Promise<any>;
    /**
     * Update wallet balance.
     * @param {BalanceDelta} state
     */
    updateBalance(b: any, state: BalanceDelta): Promise<any>;
    /**
     * Update account balance.
     * @param {Number} acct
     * @param {Balance} delta
     */
    updateAccountBalance(b: any, acct: number, delta: Balance): Promise<any>;
    /**
     * Test a whether a coin has been spent.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise} - Returns Boolean.
     */
    getSpent(hash: Hash, index: number): Promise<any>;
    /**
     * Test a whether a coin has been spent.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise} - Returns Boolean.
     */
    isSpent(hash: Hash, index: number): Promise<any>;
    /**
     * Append to global map.
     * @param {Number} height
     * @returns {Promise}
     */
    addBlockMap(b: any, height: number): Promise<any>;
    /**
     * Remove from global map.
     * @param {Number} height
     * @returns {Promise}
     */
    removeBlockMap(b: any, height: number): Promise<any>;
    /**
     * Append to global map.
     * @param {Hash} hash
     * @returns {Promise}
     */
    addTXMap(b: any, hash: Hash): Promise<any>;
    /**
     * Remove from global map.
     * @param {Hash} hash
     * @returns {Promise}
     */
    removeTXMap(b: any, hash: Hash): Promise<any>;
    /**
     * Append to global map.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise}
     */
    addOutpointMap(b: any, hash: Hash, index: number): Promise<any>;
    /**
     * Remove from global map.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise}
     */
    removeOutpointMap(b: any, hash: Hash, index: number): Promise<any>;
    /**
     * Append to global map.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise}
     */
    addNameMap(b: any, nameHash: any): Promise<any>;
    /**
     * Remove from global map.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise}
     */
    removeNameMap(b: any, nameHash: any): Promise<any>;
    /**
     * List block records.
     * @returns {Promise}
     */
    getBlocks(): Promise<any>;
    /**
     * Get block record.
     * @param {Number} height
     * @returns {Promise}
     */
    getBlock(height: number): Promise<any>;
    /**
     * Append to the global block record.
     * @param {Hash} hash
     * @param {BlockMeta} block
     * @returns {Promise}
     */
    addBlock(b: any, hash: Hash, block: BlockMeta): Promise<any>;
    /**
     * Remove from the global block record.
     * @param {Hash} hash
     * @param {Number} height
     * @returns {Promise}
     */
    removeBlock(b: any, hash: Hash, height: number): Promise<any>;
    /**
     * Remove from the global block record.
     * @param {Hash} hash
     * @param {Number} height
     * @returns {Promise}
     */
    spliceBlock(b: any, hash: Hash, height: number): Promise<any>;
    /**
     * Test whether we have a name.
     * @param {Buffer} nameHash
     * @returns {Boolean}
     */
    hasNameState(nameHash: Buffer): boolean;
    /**
     * Get a name state if present.
     * @param {Buffer} nameHash
     * @returns {NameState}
     */
    getNameState(nameHash: Buffer): NameState;
    /**
     * Get all names.
     * @returns {NameState[]}
     */
    getNames(): NameState[];
    /**
     * Test whether we have a bid.
     * @param {Buffer} nameHash
     * @param {Outpoint} outpoint
     * @returns {Boolean}
     */
    hasBid(nameHash: Buffer, outpoint: Outpoint): boolean;
    /**
     * Get a bid if present.
     * @param {Buffer} nameHash
     * @param {Outpoint} outpoint
     * @returns {BlindBid}
     */
    getBid(nameHash: Buffer, outpoint: Outpoint): BlindBid;
    /**
     * Write a bid.
     * @param {Object} b
     * @param {Buffer} nameHash
     * @param {Outpoint} outpoint
     * @param {Object} options
     */
    putBid(b: any, nameHash: Buffer, outpoint: Outpoint, options: any): void;
    /**
     * Delete a bid.
     * @param {Object} b
     * @param {Buffer} nameHash
     * @param {Outpoint} outpoint
     */
    removeBid(b: any, nameHash: Buffer, outpoint: Outpoint): void;
    /**
     * Get all bids for name.
     * @param {Buffer} nameHash
     * @returns {BlindBid[]}
     */
    getBids(nameHash: Buffer): BlindBid[];
    /**
     * Remove all bids for name.
     * @param {Buffer} nameHash
     */
    removeBids(b: any, nameHash: Buffer): Promise<void>;
    /**
     * Test whether we have a reveal.
     * @param {Buffer} nameHash
     * @param {Outpoint} outpoint
     * @returns {Boolean}
     */
    hasReveal(nameHash: Buffer, outpoint: Outpoint): boolean;
    /**
     * Get a reveal if present.
     * @param {Buffer} nameHash
     * @param {Outpoint} outpoint
     * @returns {BidReveal}
     */
    getReveal(nameHash: Buffer, outpoint: Outpoint): BidReveal;
    /**
     * Write a reveal.
     * @param {Object} b
     * @param {Buffer} nameHash
     * @param {Outpoint} outpoint
     * @param {Object} options
     */
    putReveal(b: any, nameHash: Buffer, outpoint: Outpoint, options: any): void;
    /**
     * Delete a reveal.
     * @param {Object} b
     * @param {Buffer} nameHash
     * @param {Outpoint} outpoint
     */
    removeReveal(b: any, nameHash: Buffer, outpoint: Outpoint): void;
    /**
     * Get all reveals by name.
     * @param {Buffer} nameHash
     * @returns {BidReveal[]}
     */
    getReveals(nameHash: Buffer): BidReveal[];
    /**
     * Remove all reveals by name.
     * @param {Object} b
     * @param {Buffer} nameHash
     */
    removeReveals(b: any, nameHash: Buffer): Promise<void>;
    /**
     * Test whether a blind value is present.
     * @param {Buffer} blind - Blind hash.
     * @returns {Boolean}
     */
    hasBlind(blind: Buffer): boolean;
    /**
     * Get a blind value if present.
     * @param {Buffer} blind - Blind hash.
     * @returns {BlindValue}
     */
    getBlind(blind: Buffer): BlindValue;
    /**
     * Write a blind value.
     * @param {Object} b
     * @param {Buffer} blind
     * @param {Object} options
     */
    putBlind(b: any, blind: Buffer, options: any): void;
    /**
     * Save blind value.
     * @param {Buffer} blind
     * @param {Object} options
     */
    saveBlind(blind: Buffer, options: any): Promise<void>;
    /**
     * Delete a blind value.
     * @param {Object} b
     * @param {Buffer} blind
     */
    removeBlind(b: any, blind: Buffer): void;
    /**
     * Add transaction without a batch.
     * @private
     * @param {TX} tx
     * @returns {Promise}
     */
    private add;
    /**
     * Test whether the transaction
     * has a duplicate open.
     * @param {TX}
     * @returns {Boolean}
     */
    isDoubleOpen(tx: any): boolean;
    /**
     * Remove duplicate opens.
     * @private
     * @param {TX} tx
     */
    private removeDoubleOpen;
    /**
     * Index open covenants.
     * @private
     * @param {Batch} b
     * @param {TX} tx
     */
    private indexOpens;
    /**
     * Unindex open covenants.
     * @private
     * @param {Batch} b
     * @param {TX} tx
     */
    private unindexOpens;
    /**
     * Insert transaction.
     * @private
     * @param {TXRecord} wtx
     * @param {BlockMeta} block
     * @returns {Promise}
     */
    private insert;
    /**
     * Attempt to confirm a transaction.
     * @private
     * @param {TXRecord} wtx
     * @param {BlockMeta} block
     * @returns {Promise}
     */
    private confirm;
    /**
     * Recursively remove a transaction
     * from the database.
     * @param {Hash} hash
     * @returns {Promise}
     */
    remove(hash: Hash): Promise<any>;
    /**
     * Remove a transaction from the
     * database. Disconnect inputs.
     * @private
     * @param {TXRecord} wtx
     * @returns {Promise}
     */
    private erase;
    /**
     * Remove a transaction and recursively
     * remove all of its spenders.
     * @private
     * @param {TXRecord} wtx
     * @returns {Promise}
     */
    private removeRecursive;
    /**
     * Revert a block.
     * @param {Number} height
     * @returns {Promise}
     */
    revert(height: number): Promise<any>;
    /**
     * Unconfirm a transaction without a batch.
     * @private
     * @param {Hash} hash
     * @param {Number} height
     * @returns {Promise}
     */
    private unconfirm;
    /**
     * Unconfirm a transaction. Necessary after a reorg.
     * @param {TXRecord} wtx
     * @returns {Promise}
     */
    disconnect(wtx: typeof records.TXRecord, block: any): Promise<any>;
    /**
     * Remove spenders that have not been confirmed. We do this in the
     * odd case of stuck transactions or when a coin is double-spent
     * by a newer transaction. All previously-spending transactions
     * of that coin that are _not_ confirmed will be removed from
     * the database.
     * @private
     * @param {Hash} hash
     * @param {TX} ref - Reference tx, the tx that double-spent.
     * @returns {Promise} - Returns Boolean.
     */
    private removeConflict;
    /**
     * Retrieve coins for own inputs, remove
     * double spenders, and verify inputs.
     * @private
     * @param {TX} tx
     * @returns {Promise}
     */
    private removeConflicts;
    /**
     * Lock balances according to covenants.
     * @param {Object} b
     * @param {State} state
     * @param {TX} tx
     * @param {Number} i
     * @param {Path} path
     * @param {Number} height
     */
    lockBalances(b: any, state: State, tx: TX, i: number, path: Path, height: number): Promise<void>;
    /**
     * Unlock balances according to covenants.
     * @param {Object} b
     * @param {State} state
     * @param {TX} tx
     * @param {Number} i
     * @param {Path} path
     * @param {Number} height
     */
    unlockBalances(b: any, state: State, tx: TX, i: number, path: Path, height: number): Promise<void>;
    /**
     * Handle incoming covenant.
     * @param {Object} b
     * @param {TX} tx
     * @param {Number} i
     * @param {Path} path
     * @param {Number} height
     * @returns {Object} out
     * @returns {Boolean} out.updated
     * @returns {Boolean} out.index
     */
    connectNames(b: any, tx: TX, view: any, height: number): any;
    /**
     * Handle reorg'd covenant.
     * @param {Object} b
     * @param {TX} tx
     * @param {Number} i
     * @param {Path} path
     * @param {Number} height
     */
    undoNameState(b: any, tx: TX): Promise<boolean>;
    /**
     * Apply namestate undo data by hash without transaction.
     * Should only be called directly to undo namestate transitions
     * that do not affect wallet balance like a TRANSFER for a name
     * that is in the nameMap but does not involve wallet addresses.
     * @param {Object} b
     * @param {Hash} hash
     */
    applyNameUndo(b: any, hash: Hash): Promise<boolean>;
    /**
     * Lock all coins in a transaction.
     * @param {TX} tx
     */
    lockTX(tx: TX): void;
    /**
     * Unlock all coins in a transaction.
     * @param {TX} tx
     */
    unlockTX(tx: TX): void;
    /**
     * Lock a single coin.
     * @param {Coin|Outpoint} coin
     */
    lockCoin(coin: Coin | Outpoint): void;
    /**
     * Unlock a single coin.
     * @param {Coin|Outpoint} coin
     */
    unlockCoin(coin: Coin | Outpoint): any;
    /**
     * Unlock all locked coins.
     */
    unlockCoins(): void;
    /**
     * Test locked status of a single coin.
     * @param {Coin|Outpoint} coin
     */
    isLocked(coin: Coin | Outpoint): any;
    /**
     * Filter array of coins or outpoints
     * for only unlocked ones.
     * @param {Coin[]|Outpoint[]}
     * @returns {Array}
     */
    filterLocked(coins: any): any[];
    /**
     * Return an array of all locked outpoints.
     * @returns {Outpoint[]}
     */
    getLocked(): Outpoint[];
    /**
     * Get hashes of all transactions in the database.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getAccountHistoryHashes(acct: number): Promise<any>;
    /**
     * Test whether an account owns a coin.
     * @param {Number} acct
     * @param {Hash} hash
     * @param {Index} number
     * @returns {Promise} - Returns Boolean.
     */
    hasCoinByAccount(acct: number, hash: Hash, index: any): Promise<any>;
    /**
     * Get hashes of all transactions in the database.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getHistoryHashes(acct: number): Promise<any>;
    /**
     * Get hashes of all unconfirmed transactions in the database.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getAccountPendingHashes(acct: number): Promise<any>;
    /**
     * Get hashes of all unconfirmed transactions in the database.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getPendingHashes(acct: number): Promise<any>;
    /**
     * Test whether the database has a pending transaction.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasPending(hash: Hash): Promise<any>;
    /**
     * Get all coin hashes in the database.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getAccountOutpoints(acct: number): Promise<any>;
    /**
     * Get all coin hashes in the database.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getOutpoints(acct: number): Promise<any>;
    /**
     * Get TX hashes by height range.
     * @param {Number} acct
     * @param {Object} options
     * @param {Number} options.start - Start height.
     * @param {Number} options.end - End height.
     * @param {Number?} options.limit - Max number of records.
     * @param {Boolean?} options.reverse - Reverse order.
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getAccountHeightRangeHashes(acct: number, options: {
        start: number;
        end: number;
        limit: number | null;
        reverse: boolean | null;
    }): Promise<any>;
    /**
     * Get TX hashes by height range.
     * @param {Number} acct
     * @param {Object} options
     * @param {Number} options.start - Start height.
     * @param {Number} options.end - End height.
     * @param {Number?} options.limit - Max number of records.
     * @param {Boolean?} options.reverse - Reverse order.
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getHeightRangeHashes(acct: number, options: {
        start: number;
        end: number;
        limit: number | null;
        reverse: boolean | null;
    }): Promise<any>;
    /**
     * Get TX hashes by height.
     * @param {Number} height
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getHeightHashes(height: number): Promise<any>;
    /**
     * Get TX hashes by timestamp range.
     * @param {Number} acct
     * @param {Object} options
     * @param {Number} options.start - Start height.
     * @param {Number} options.end - End height.
     * @param {Number?} options.limit - Max number of records.
     * @param {Boolean?} options.reverse - Reverse order.
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getAccountRangeHashes(acct: number, options: {
        start: number;
        end: number;
        limit: number | null;
        reverse: boolean | null;
    }): Promise<any>;
    /**
     * Get TX hashes by timestamp range.
     * @param {Number} acct
     * @param {Object} options
     * @param {Number} options.start - Start height.
     * @param {Number} options.end - End height.
     * @param {Number?} options.limit - Max number of records.
     * @param {Boolean?} options.reverse - Reverse order.
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getRangeHashes(acct: number, options: {
        start: number;
        end: number;
        limit: number | null;
        reverse: boolean | null;
    }): Promise<any>;
    /**
     * Get transactions by timestamp range.
     * @param {Number} acct
     * @param {Object} options
     * @param {Number} options.start - Start time.
     * @param {Number} options.end - End time.
     * @param {Number?} options.limit - Max number of records.
     * @param {Boolean?} options.reverse - Reverse order.
     * @returns {Promise} - Returns {@link TX}[].
     */
    getRange(acct: number, options: {
        start: number;
        end: number;
        limit: number | null;
        reverse: boolean | null;
    }): Promise<any>;
    /**
     * Get last N transactions.
     * @param {Number} acct
     * @param {Number} limit - Max number of transactions.
     * @returns {Promise} - Returns {@link TX}[].
     */
    getLast(acct: number, limit: number): Promise<any>;
    /**
     * Get all transactions.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link TX}[].
     */
    getHistory(acct: number): Promise<any>;
    /**
     * Get all acct transactions.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link TX}[].
     */
    getAccountHistory(acct: number): Promise<any>;
    /**
     * Get unconfirmed transactions.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link TX}[].
     */
    getPending(acct: number): Promise<any>;
    /**
     * Get coins.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getCredits(acct: number): Promise<any>;
    /**
     * Get coins by account.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getAccountCredits(acct: number): Promise<any>;
    /**
     * Fill a transaction with coins (all historical coins).
     * @param {TX} tx
     * @returns {Promise} - Returns {@link TX}.
     */
    getSpentCredits(tx: TX): Promise<any>;
    /**
     * Get coins.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getCoins(acct: number): Promise<any>;
    /**
     * Get coins by account.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getAccountCoins(acct: number): Promise<any>;
    /**
     * Get historical coins for a transaction.
     * @param {TX} tx
     * @returns {Promise} - Returns {@link TX}.
     */
    getSpentCoins(tx: TX): Promise<any>;
    /**
     * Get a coin viewpoint.
     * @param {TX} tx
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getCoinView(tx: TX): Promise<any>;
    /**
     * Get historical coin viewpoint.
     * @param {TX} tx
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getSpentView(tx: TX): Promise<any>;
    /**
     * Get transaction.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link TX}.
     */
    getTX(hash: Hash): Promise<any>;
    /**
     * Get transaction details.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link TXDetails}.
     */
    getDetails(hash: Hash): Promise<any>;
    /**
     * Convert transaction to transaction details.
     * @param {TXRecord[]} wtxs
     * @returns {Promise}
     */
    toDetails(wtxs: (typeof records.TXRecord)[]): Promise<any>;
    /**
     * Convert transaction to transaction details.
     * @private
     * @param {TXRecord} wtx
     * @returns {Promise}
     */
    private _toDetails;
    /**
     * Test whether the database has a transaction.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasTX(hash: Hash): Promise<any>;
    /**
     * Get coin.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise} - Returns {@link Coin}.
     */
    getCoin(hash: Hash, index: number): Promise<any>;
    /**
     * Get coin.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise} - Returns {@link Coin}.
     */
    getCredit(hash: Hash, index: number): Promise<any>;
    /**
     * Get spender coin.
     * @param {Outpoint} spent
     * @param {Outpoint} prevout
     * @returns {Promise} - Returns {@link Coin}.
     */
    getSpentCoin(spent: Outpoint, prevout: Outpoint): Promise<any>;
    /**
     * Test whether the database has a spent coin.
     * @param {Outpoint} spent
     * @returns {Promise} - Returns {@link Coin}.
     */
    hasSpentCoin(spent: Outpoint): Promise<any>;
    /**
     * Update spent coin height in storage.
     * @param {TX} tx - Sending transaction.
     * @param {Number} index
     * @param {Number} height
     * @returns {Promise}
     */
    updateSpentCoin(b: any, tx: TX, index: number, height: number): Promise<any>;
    /**
     * Test whether the database has a transaction.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasCoin(hash: Hash, index: any): Promise<any>;
    /**
     * Calculate balance.
     * @param {Number?} account
     * @returns {Promise} - Returns {@link Balance}.
     */
    getBalance(acct: any): Promise<any>;
    /**
     * Calculate balance.
     * @returns {Promise} - Returns {@link Balance}.
     */
    getWalletBalance(): Promise<any>;
    /**
     * Calculate balance by account.
     * @param {Number} acct
     * @returns {Promise} - Returns {@link Balance}.
     */
    getAccountBalance(acct: number): Promise<any>;
    /**
     * Zap pending transactions older than `age`.
     * @param {Number} acct
     * @param {Number} age - Age delta.
     * @returns {Promise}
     */
    zap(acct: number, age: number): Promise<any>;
    /**
     * Abandon transaction.
     * @param {Hash} hash
     * @returns {Promise}
     */
    abandon(hash: Hash): Promise<any>;
}
/**
 * Credit (wrapped coin)
 * @alias module:wallet.Credit
 * @property {Coin} coin
 * @property {Boolean} spent
 */
declare class Credit {
    /**
     * Instantiate credit from transaction.
     * @param {TX} tx
     * @param {Number} index
     * @returns {Credit}
     */
    static fromTX(tx: TX, index: number, height: any): Credit;
    /**
     * Create a credit.
     * @constructor
     * @param {Coin} coin
     * @param {Boolean?} spent
     */
    constructor(coin: Coin, spent: boolean | null);
    coin: Coin;
    spent: boolean;
    own: boolean;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     */
    private read;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize credit.
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
    /**
     * Inject properties from tx object.
     * @private
     * @param {TX} tx
     * @param {Number} index
     * @returns {Credit}
     */
    private fromTX;
}
/**
 * Balance Delta
 * @ignore
 */
declare class BalanceDelta {
    wallet: Balance;
    accounts: Map<any, any>;
    updated(): boolean;
    applyTo(balance: any): void;
    get(path: any): any;
    tx(path: any, value: any): void;
    coin(path: any, value: any): void;
    unconfirmed(path: any, value: any): void;
    confirmed(path: any, value: any): void;
    ulocked(path: any, value: any): void;
    clocked(path: any, value: any): void;
}
/**
 * Balance
 * @alias module:wallet.Balance
 */
declare class Balance {
    /**
     * Create a balance.
     * @constructor
     * @param {Number} account
     */
    constructor(acct?: number);
    account: number;
    tx: number;
    coin: number;
    unconfirmed: number;
    confirmed: number;
    ulocked: number;
    clocked: number;
    /**
     * Apply delta.
     * @param {Balance} balance
     */
    applyTo(balance: Balance): void;
    /**
     * Calculate size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize balance.
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     * @returns {TXDBState}
     */
    private read;
    /**
     * Convert balance to a more json-friendly object.
     * @param {Boolean?} minimal
     * @returns {Object}
     */
    getJSON(minimal: boolean | null): any;
    /**
     * Inspect balance.
     * @param {String}
     */
    format(): string;
}
import NameState = require("../covenants/namestate");
import Outpoint = require("../primitives/outpoint");
/**
 * Blind Bid
 */
declare class BlindBid {
    name: Buffer;
    nameHash: Buffer;
    prevout: Outpoint;
    value: number;
    lockup: number;
    blind: Buffer;
    own: boolean;
    getSize(): number;
    write(bw: any): any;
    read(br: any): BlindBid;
    getJSON(): {
        name: string;
        nameHash: string;
        prevout: any;
        value: number;
        lockup: number;
        blind: string;
        own: boolean;
    };
}
/**
 * Bid Reveal
 */
declare class BidReveal {
    name: Buffer;
    nameHash: Buffer;
    prevout: Outpoint;
    value: number;
    height: number;
    own: boolean;
    getSize(): number;
    write(bw: any): any;
    read(br: any): BidReveal;
    getJSON(): {
        name: string;
        nameHash: string;
        prevout: any;
        value: number;
        height: number;
        own: boolean;
    };
}
/**
 * Blind Value
 */
declare class BlindValue {
    value: number;
    nonce: Buffer;
    getSize(): number;
    write(bw: any): any;
    read(br: any): BlindValue;
    getJSON(): {
        value: number;
        nonce: string;
    };
}
import records = require("./records");
import Coin = require("../primitives/coin");
