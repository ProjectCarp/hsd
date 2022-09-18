export = Wallet;
/**
 * Wallet
 * @alias module:wallet.Wallet
 * @extends EventEmitter
 */
declare class Wallet extends EventEmitter {
    /**
     * Instantiate wallet from options.
     * @param {WalletDB} wdb
     * @param {Object} options
     * @returns {Wallet}
     */
    static fromOptions(wdb: WalletDB, options: any): Wallet;
    /**
     * Instantiate a wallet from serialized data.
     * @param {Buffer} data
     * @returns {Wallet}
     */
    static decode(wdb: any, data: Buffer): Wallet;
    /**
     * Test an object to see if it is a Wallet.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isWallet(obj: any): boolean;
    /**
     * Create a wallet.
     * @constructor
     * @param {Object} options
     */
    constructor(wdb: any, options: any);
    wdb: any;
    db: any;
    network: any;
    logger: any;
    writeLock: any;
    fundLock: any;
    wid: number;
    id: any;
    watchOnly: boolean;
    accountDepth: number;
    token: Buffer;
    tokenDepth: number;
    master: MasterKey;
    txdb: TXDB;
    maxAncestors: 50;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Attempt to intialize the wallet (generating
     * the first addresses along with the lookahead
     * addresses). Called automatically from the
     * walletdb.
     * @returns {Promise}
     */
    init(options: any, passphrase: any): Promise<any>;
    /**
     * Open wallet (done after retrieval).
     * @returns {Promise}
     */
    open(): Promise<any>;
    /**
     * Close the wallet, unregister with the database.
     * @returns {Promise}
     */
    destroy(): Promise<any>;
    /**
     * Add a public account key to the wallet (multisig).
     * Saves the key in the wallet database.
     * @param {(Number|String)} acct
     * @param {HDPublicKey} key
     * @returns {Promise}
     */
    addSharedKey(acct: (number | string), key: HDPublicKey): Promise<any>;
    /**
     * Add a public account key to the wallet without a lock.
     * @private
     * @param {(Number|String)} acct
     * @param {HDPublicKey} key
     * @returns {Promise}
     */
    private _addSharedKey;
    /**
     * Remove a public account key from the wallet (multisig).
     * @param {(Number|String)} acct
     * @param {HDPublicKey} key
     * @returns {Promise}
     */
    removeSharedKey(acct: (number | string), key: HDPublicKey): Promise<any>;
    /**
     * Remove a public account key from the wallet (multisig).
     * @private
     * @param {(Number|String)} acct
     * @param {HDPublicKey} key
     * @returns {Promise}
     */
    private _removeSharedKey;
    /**
     * Change or set master key's passphrase.
     * @param {String|Buffer} passphrase
     * @param {String|Buffer} old
     * @returns {Promise}
     */
    setPassphrase(passphrase: string | Buffer, old: string | Buffer): Promise<any>;
    /**
     * Encrypt the wallet permanently.
     * @param {String|Buffer} passphrase
     * @returns {Promise}
     */
    encrypt(passphrase: string | Buffer): Promise<any>;
    /**
     * Encrypt the wallet permanently, without a lock.
     * @private
     * @param {String|Buffer} passphrase
     * @returns {Promise}
     */
    private _encrypt;
    /**
     * Decrypt the wallet permanently.
     * @param {String|Buffer} passphrase
     * @returns {Promise}
     */
    decrypt(passphrase: string | Buffer): Promise<any>;
    /**
     * Decrypt the wallet permanently, without a lock.
     * @private
     * @param {String|Buffer} passphrase
     * @returns {Promise}
     */
    private _decrypt;
    /**
     * Generate a new token.
     * @param {(String|Buffer)?} passphrase
     * @returns {Promise}
     */
    retoken(passphrase: (string | Buffer) | null): Promise<any>;
    /**
     * Generate a new token without a lock.
     * @private
     * @param {(String|Buffer)?} passphrase
     * @returns {Promise}
     */
    private _retoken;
    /**
     * Rename the wallet.
     * @param {String} id
     * @returns {Promise}
     */
    rename(id: string): Promise<any>;
    /**
     * Rename account.
     * @param {(String|Number)?} acct
     * @param {String} name
     * @returns {Promise}
     */
    renameAccount(acct: (string | number) | null, name: string): Promise<any>;
    /**
     * Rename account without a lock.
     * @private
     * @param {(String|Number)?} acct
     * @param {String} name
     * @returns {Promise}
     */
    private _renameAccount;
    /**
     * Lock the wallet, destroy decrypted key.
     */
    lock(): Promise<void>;
    /**
     * Unlock the key for `timeout` seconds.
     * @param {Buffer|String} passphrase
     * @param {Number?} [timeout=60]
     */
    unlock(passphrase: Buffer | string, timeout?: number | null): Promise<any>;
    /**
     * Generate the wallet ID if none was passed in.
     * It is represented as BLAKE2b(m/44->public|magic, 20)
     * converted to an "address" with a prefix
     * of `0x03be04` (`WLT` in base58).
     * @private
     * @returns {Base58String}
     */
    private getID;
    /**
     * Generate the wallet api key if none was passed in.
     * It is represented as BLAKE2b(m/44'->private|nonce).
     * @private
     * @param {HDPrivateKey} master
     * @param {Number} nonce
     * @returns {Buffer}
     */
    private getToken;
    /**
     * Create an account. Requires passphrase if master key is encrypted.
     * @param {Object} options - See {@link Account} options.
     * @returns {Promise} - Returns {@link Account}.
     */
    createAccount(options: any, passphrase: any): Promise<any>;
    /**
     * Create an account without a lock.
     * @param {Object} options - See {@link Account} options.
     * @returns {Promise} - Returns {@link Account}.
     */
    _createAccount(options: any, passphrase: any): Promise<any>;
    /**
     * Ensure an account. Requires passphrase if master key is encrypted.
     * @param {Object} options - See {@link Account} options.
     * @returns {Promise} - Returns {@link Account}.
     */
    ensureAccount(options: any, passphrase: any): Promise<any>;
    /**
     * List account names and indexes from the db.
     * @returns {Promise} - Returns Array.
     */
    getAccounts(): Promise<any>;
    /**
     * Get all wallet address hashes.
     * @param {(String|Number)?} acct
     * @returns {Promise} - Returns Array.
     */
    getAddressHashes(acct: (string | number) | null): Promise<any>;
    /**
     * Get all account address hashes.
     * @param {String|Number} acct
     * @returns {Promise} - Returns Array.
     */
    getAccountHashes(acct: string | number): Promise<any>;
    /**
     * Retrieve an account from the database.
     * @param {Number|String} acct
     * @returns {Promise} - Returns {@link Account}.
     */
    getAccount(acct: number | string): Promise<any>;
    /**
     * Lookup the corresponding account name's index.
     * @param {String|Number} acct - Account name/index.
     * @returns {Promise} - Returns Number.
     */
    getAccountIndex(acct: string | number): Promise<any>;
    /**
     * Lookup the corresponding account name's index.
     * @param {String|Number} acct - Account name/index.
     * @returns {Promise} - Returns Number.
     * @throws on non-existent account
     */
    ensureIndex(acct: string | number): Promise<any>;
    /**
     * Lookup the corresponding account index's name.
     * @param {Number} index - Account index.
     * @returns {Promise} - Returns String.
     */
    getAccountName(index: number): Promise<any>;
    /**
     * Test whether an account exists.
     * @param {Number|String} acct
     * @returns {Promise} - Returns {@link Boolean}.
     */
    hasAccount(acct: number | string): Promise<any>;
    /**
     * Create a new receiving address (increments receiveDepth).
     * @param {(Number|String)?} acct
     * @returns {Promise} - Returns {@link WalletKey}.
     */
    createReceive(acct?: (number | string) | null): Promise<any>;
    /**
     * Create a new change address (increments receiveDepth).
     * @param {(Number|String)?} acct
     * @returns {Promise} - Returns {@link WalletKey}.
     */
    createChange(acct?: (number | string) | null): Promise<any>;
    /**
     * Create a new address (increments depth).
     * @param {(Number|String)?} acct
     * @param {Number} branch
     * @returns {Promise} - Returns {@link WalletKey}.
     */
    createKey(acct: (number | string) | null, branch: number): Promise<any>;
    /**
     * Create a new address (increments depth) without a lock.
     * @private
     * @param {(Number|String)?} acct
     * @param {Number} branche
     * @returns {Promise} - Returns {@link WalletKey}.
     */
    private _createKey;
    /**
     * Save the wallet to the database. Necessary
     * when address depth and keys change.
     * @returns {Promise}
     */
    save(b: any): Promise<any>;
    /**
     * Increment the wid depth.
     * @returns {Promise}
     */
    increment(b: any): Promise<any>;
    /**
     * Test whether the wallet possesses an address.
     * @param {Address|Hash} address
     * @returns {Promise} - Returns Boolean.
     */
    hasAddress(address: Address | Hash): Promise<any>;
    /**
     * Get path by address hash.
     * @param {Address|Hash} address
     * @returns {Promise} - Returns {@link Path}.
     */
    getPath(address: Address | Hash): Promise<any>;
    /**
     * Get path by address hash (without account name).
     * @private
     * @param {Address|Hash} address
     * @returns {Promise} - Returns {@link Path}.
     */
    private readPath;
    /**
     * Test whether the wallet contains a path.
     * @param {Address|Hash} address
     * @returns {Promise} - Returns {Boolean}.
     */
    hasPath(address: Address | Hash): Promise<any>;
    /**
     * Get all wallet paths.
     * @param {(String|Number)?} acct
     * @returns {Promise} - Returns {@link Path}.
     */
    getPaths(acct: (string | number) | null): Promise<any>;
    /**
     * Get all account paths.
     * @param {String|Number} acct
     * @returns {Promise} - Returns {@link Path}.
     */
    getAccountPaths(acct: string | number): Promise<any>;
    /**
     * Import a keyring (will not exist on derivation chain).
     * Rescanning must be invoked manually.
     * @param {(String|Number)?} acct
     * @param {WalletKey} ring
     * @param {(String|Buffer)?} passphrase
     * @returns {Promise}
     */
    importKey(acct: (string | number) | null, ring: WalletKey, passphrase: (string | Buffer) | null): Promise<any>;
    /**
     * Import a keyring (will not exist on derivation chain) without a lock.
     * @private
     * @param {(String|Number)?} acct
     * @param {WalletKey} ring
     * @param {(String|Buffer)?} passphrase
     * @returns {Promise}
     */
    private _importKey;
    /**
     * Import a keyring (will not exist on derivation chain).
     * Rescanning must be invoked manually.
     * @param {(String|Number)?} acct
     * @param {WalletKey} ring
     * @param {(String|Buffer)?} passphrase
     * @returns {Promise}
     */
    importAddress(acct: (string | number) | null, address: any): Promise<any>;
    /**
     * Import a keyring (will not exist on derivation chain) without a lock.
     * @private
     * @param {(String|Number)?} acct
     * @param {WalletKey} ring
     * @param {(String|Buffer)?} passphrase
     * @returns {Promise}
     */
    private _importAddress;
    /**
     * Import a name.
     * Rescanning must be invoked manually.
     * @param {String} name
     * @returns {Promise}
     */
    importName(name: string): Promise<any>;
    /**
     * Import a name without a lock.
     * @private
     * @param {String} name
     * @returns {Promise}
     */
    private _importName;
    /**
     * Fill a transaction with inputs, estimate
     * transaction size, calculate fee, and add a change output.
     * @see MTX#selectCoins
     * @see MTX#fill
     * @param {MTX} mtx - _Must_ be a mutable transaction.
     * @param {Object?} options
     * @param {(String|Number)?} options.account - If no account is
     * specified, coins from the entire wallet will be filled.
     * @param {String?} options.selection - Coin selection priority. Can
     * be `age`, `random`, or `all`. (default=age).
     * @param {Boolean} options.round - Whether to round to the nearest
     * kilobyte for fee calculation.
     * See {@link TX#getMinFee} vs. {@link TX#getRoundFee}.
     * @param {Rate} options.rate - Rate used for fee calculation.
     * @param {Boolean} options.confirmed - Select only confirmed coins.
     * @param {Boolean} options.free - Do not apply a fee if the
     * transaction priority is high enough to be considered free.
     * @param {Amount?} options.hardFee - Use a hard fee rather than
     * calculating one.
     * @param {Number|Boolean} options.subtractFee - Whether to subtract the
     * fee from existing outputs rather than adding more inputs.
     */
    fund(mtx: typeof MTX, options: any | null, force: any): Promise<void>;
    /**
     * Fill a transaction with inputs without a lock.
     * @private
     * @see MTX#selectCoins
     * @see MTX#fill
     */
    private fill;
    /**
     * Generate nonce deterministically
     * based on address, name hash, and
     * bid value.
     * @param {Buffer} nameHash
     * @param {Address} address
     * @param {Amount} value
     * @returns {Buffer}
     */
    generateNonce(nameHash: Buffer, address: Address, value: Amount): Buffer;
    /**
     * Generate nonce & blind, save nonce.
     * @param {Buffer} nameHash
     * @param {Address} address
     * @param {Amount} value
     * @returns {Buffer}
     */
    generateBlind(nameHash: Buffer, address: Address, value: Amount): Buffer;
    /**
     * Make a claim MTX.
     * @param {String} name
     * @returns {Claim}
     */
    _createClaim(name: string, options: any): Claim;
    /**
     * Create and send a claim MTX.
     * @param {String} name
     * @param {Object} options
     */
    createClaim(name: string, options: any): Promise<Claim>;
    /**
     * Make a claim proof.
     * @param {String} name
     * @param {Object} options
     * @returns {Claim}
     */
    makeFakeClaim(name: string, options: any): Claim;
    /**
     * Create and send a claim proof.
     * @param {String} name
     * @param {Object} options
     */
    _sendFakeClaim(name: string, options: any): Promise<Claim>;
    /**
     * Create and send a claim proof.
     * @param {String} name
     * @param {Object} options
     */
    sendFakeClaim(name: string, options: any): Promise<Claim>;
    /**
     * Make a claim proof.
     * @param {String} name
     * @param {Object} options
     * @returns {Claim}
     */
    makeClaim(name: string, options: any): Claim;
    /**
     * Create and send a claim proof.
     * @param {String} name
     * @param {Object} options
     */
    _sendClaim(name: string, options: any): Promise<Claim>;
    /**
     * Create and send a claim proof.
     * @param {String} name
     * @param {Object} options
     */
    sendClaim(name: string, options: any): Promise<Claim>;
    /**
     * Make a open MTX.
     * @param {String} name
     * @param {Number|String} acct
     * @param {Boolean} force
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeOpen(name: string, force: boolean, acct: number | string, mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize an open
     * MTX without a lock.
     * @param {String} name
     * @param {Boolean} force
     * @param {Object} options
     * @returns {MTX}
     */
    _createOpen(name: string, force: boolean, options: any): typeof MTX;
    /**
     * Create and finalize an open
     * MTX with a lock.
     * @param {String} name
     * @param {Boolean} force
     * @param {Object} options
     * @returns {MTX}
     */
    createOpen(name: string, force: boolean, options: any): typeof MTX;
    /**
     * Create and send an open
     * MTX without a lock.
     * @param {String} name
     * @param {Boolean} force
     * @param {Object} options
     */
    _sendOpen(name: string, force: boolean, options: any): Promise<any>;
    /**
     * Create and send an open
     * MTX with a lock.
     * @param {String} name
     * @param {Boolean} force
     * @param {Object} options
     */
    sendOpen(name: string, force: boolean, options: any): Promise<any>;
    /**
     * Make a bid MTX.
     * @param {String} name
     * @param {Number} value
     * @param {Number} lockup
     * @param {Number|String} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeBid(name: string, value: number, lockup: number, acct: number | string, mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize a bid
     * MTX without a lock.
     * @param {String} name
     * @param {Number} value
     * @param {Number} lockup
     * @param {Object} options
     * @returns {MTX}
     */
    _createBid(name: string, value: number, lockup: number, options: any): typeof MTX;
    /**
     * Create and finalize a bid
     * MTX with a lock.
     * @param {String} name
     * @param {Number} value
     * @param {Number} lockup
     * @param {Object} options
     * @returns {MTX}
     */
    createBid(name: string, value: number, lockup: number, options: any): typeof MTX;
    /**
     * Create and send a bid MTX.
     * @param {String} name
     * @param {Number} value
     * @param {Number} lockup
     * @param {Object} options
     */
    _sendBid(name: string, value: number, lockup: number, options: any): Promise<any>;
    /**
     * Create and send a bid MTX.
     * @param {String} name
     * @param {Number} value
     * @param {Number} lockup
     * @param {Object} options
     */
    sendBid(name: string, value: number, lockup: number, options: any): Promise<any>;
    /**
     * Create and finalize a bid & a reveal (in advance)
     * MTX with a lock.
     * @param {String} name
     * @param {Number} value
     * @param {Number} lockup
     * @param {Object} options
     * @returns {Object} output
     * @returns {MTX} output.bid
     * @returns {MTX} output.reveal
     */
    createAuctionTxs(name: string, value: number, lockup: number, options: any): any;
    /**
     * Create and finalize a bid & a reveal (in advance)
     * MTX without a lock.
     * @param {String} name
     * @param {Number} value
     * @param {Number} lockup
     * @param {Object} options
     * @returns {Object} output
     * @returns {MTX} output.bid
     * @returns {MTX} output.reveal
     */
    _createAuctionTxs(name: string, value: number, lockup: number, options: any): any;
    /**
     * Make a reveal MTX.
     * @param {String} name
     * @param {(Number|String)?} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeReveal(name: string, acct: (number | string) | null, mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize a reveal
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    _createReveal(name: string, options: any): typeof MTX;
    /**
     * Create and finalize a reveal
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    createReveal(name: string, options: any): typeof MTX;
    /**
     * Create and send a reveal MTX.
     * @param {String} name
     * @param {Object} options
     */
    _sendReveal(name: string, options: any): Promise<any>;
    /**
     * Create and send a bid MTX.
     * @param {String} name
     * @param {Object} options
     */
    sendReveal(name: string, options: any): Promise<any>;
    /**
     * Make a reveal MTX.
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeRevealAll(mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize a reveal all
     * MTX without a lock.
     * @param {Object} options
     * @returns {MTX}
     */
    _createRevealAll(options: any): typeof MTX;
    /**
     * Create and finalize a reveal all
     * MTX with a lock.
     * @param {Object} options
     * @returns {MTX}
     */
    createRevealAll(options: any): typeof MTX;
    /**
     * Create and send a reveal all MTX.
     * @param {Object} options
     */
    _sendRevealAll(options: any): Promise<any>;
    /**
     * Create and send a bid MTX.
     * @param {Object} options
     */
    sendRevealAll(options: any): Promise<any>;
    /**
     * Make a redeem MTX.
     * @param {String} name
     * @param {(Number|String)?} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeRedeem(name: string, acct: (number | string) | null, mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize a redeem
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    _createRedeem(name: string, options: any): typeof MTX;
    /**
     * Create and finalize a redeem
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    createRedeem(name: string, options: any): typeof MTX;
    /**
     * Create and send a redeem
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     */
    _sendRedeem(name: string, options: any): Promise<any>;
    /**
     * Create and send a redeem
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     */
    sendRedeem(name: string, options: any): Promise<any>;
    /**
     * Make a redeem MTX.
     * @param {String} name
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeRedeemAll(mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize a redeem
     * all MTX without a lock.
     * @param {Object} options
     * @returns {MTX}
     */
    _createRedeemAll(options: any): typeof MTX;
    /**
     * Create and finalize a redeem
     * all MTX with a lock.
     * @param {Object} options
     * @returns {MTX}
     */
    createRedeemAll(options: any): typeof MTX;
    /**
     * Create and send a redeem all
     * MTX without a lock.
     * @param {Object} options
     */
    _sendRedeemAll(options: any): Promise<any>;
    /**
     * Create and send a redeem all
     * MTX with a lock.
     * @param {Object} options
     */
    sendRedeemAll(options: any): Promise<any>;
    /**
     * Make a register MTX.
     * @private
     * @param {String} name
     * @param {Resource?} resource
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    private _makeRegister;
    /**
     * Make an update MTX.
     * @param {String} name
     * @param {Resource} resource
     * @param {(Number|String)?} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeUpdate(name: string, resource: Resource, acct: (number | string) | null, mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize an update
     * MTX without a lock.
     * @param {String} name
     * @param {Resource} resource
     * @param {Object} options
     * @returns {MTX}
     */
    _createUpdate(name: string, resource: Resource, options: any): typeof MTX;
    /**
     * Create and finalize an update
     * MTX with a lock.
     * @param {String} name
     * @param {Resource} resource
     * @param {Object} options
     * @returns {MTX}
     */
    createUpdate(name: string, resource: Resource, options: any): typeof MTX;
    /**
     * Create and send an update
     * MTX without a lock.
     * @param {String} name
     * @param {Resource} resource
     * @param {Object} options
     */
    _sendUpdate(name: string, resource: Resource, options: any): Promise<any>;
    /**
     * Create and send an update
     * MTX with a lock.
     * @param {String} name
     * @param {Resource} resource
     * @param {Object} options
     */
    sendUpdate(name: string, resource: Resource, options: any): Promise<any>;
    /**
     * Make a renewal MTX.
     * @private
     * @param {String} name
     * @param {(Number|String)?} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    private makeRenewal;
    /**
     * Create and finalize a renewal
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    _createRenewal(name: string, options: any): typeof MTX;
    /**
     * Create and finalize a renewal
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    createRenewal(name: string, options: any): typeof MTX;
    /**
     * Create and send a renewal
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     */
    _sendRenewal(name: string, options: any): Promise<any>;
    /**
     * Create and send a renewal
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     */
    sendRenewal(name: string, options: any): Promise<any>;
    /**
     * Make a transfer MTX.
     * @param {String} name
     * @param {Address} address
     * @param {(Number|String)?} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeTransfer(name: string, address: Address, acct: (number | string) | null, mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize a transfer
     * MTX without a lock.
     * @param {String} name
     * @param {Address} address
     * @param {Object} options
     * @returns {MTX}
     */
    _createTransfer(name: string, address: Address, options: any): typeof MTX;
    /**
     * Create and finalize a transfer
     * MTX with a lock.
     * @param {String} name
     * @param {Address} address
     * @param {Object} options
     * @returns {MTX}
     */
    createTransfer(name: string, address: Address, options: any): typeof MTX;
    /**
     * Create and send a transfer
     * MTX without a lock.
     * @param {String} name
     * @param {Address} address
     * @param {Object} options
     */
    _sendTransfer(name: string, address: Address, options: any): Promise<any>;
    /**
     * Create and send a transfer
     * MTX with a lock.
     * @param {String} name
     * @param {Address} address
     * @param {Object} options
     */
    sendTransfer(name: string, address: Address, options: any): Promise<any>;
    /**
     * Make a transfer-cancelling MTX.
     * @private
     * @param {String} name
     * @param {(Number|String)?} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    private makeCancel;
    /**
     * Create and finalize a cancel
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    _createCancel(name: string, options: any): typeof MTX;
    /**
     * Create and finalize a cancel
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    createCancel(name: string, options: any): typeof MTX;
    /**
     * Create and send a cancel
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     */
    _sendCancel(name: string, options: any): Promise<any>;
    /**
     * Create and send a cancel
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     */
    sendCancel(name: string, options: any): Promise<any>;
    /**
     * Make a transfer-finalizing MTX.
     * @private
     * @param {String} name
     * @param {(Number|String)?} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    private makeFinalize;
    /**
     * Create and finalize a finalize
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    _createFinalize(name: string, options: any): typeof MTX;
    /**
     * Create and finalize a finalize
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    createFinalize(name: string, options: any): typeof MTX;
    /**
     * Create and send a finalize
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     */
    _sendFinalize(name: string, options: any): Promise<any>;
    /**
     * Create and send a finalize
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     */
    sendFinalize(name: string, options: any): Promise<any>;
    /**
     * Make a revoke MTX.
     * @param {String} name
     * @param {(Number|String)?} acct
     * @param {MTX?} mtx
     * @returns {MTX}
     */
    makeRevoke(name: string, acct: (number | string) | null, mtx: typeof MTX | null): typeof MTX;
    /**
     * Create and finalize a revoke
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    _createRevoke(name: string, options: any): typeof MTX;
    /**
     * Create and finalize a revoke
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     * @returns {MTX}
     */
    createRevoke(name: string, options: any): typeof MTX;
    /**
     * Create and send a revoke
     * MTX without a lock.
     * @param {String} name
     * @param {Object} options
     */
    _sendRevoke(name: string, options: any): Promise<any>;
    /**
     * Create and send a revoke
     * MTX with a lock.
     * @param {String} name
     * @param {Object} options
     */
    sendRevoke(name: string, options: any): Promise<any>;
    /**
     * Get account by address.
     * @param {Address} address
     * @returns {Account}
     */
    getAccountByAddress(address: Address): Account;
    /**
     * Input size estimator for max possible tx size.
     * @param {Address} addr
     * @returns {Number}
     */
    estimateSize(addr: Address): number;
    /**
     * Build a transaction, fill it with outputs and inputs,
     * sort the members according to BIP69 (set options.sort=false
     * to avoid sorting), set locktime, and template it.
     * @param {Object} options - See {@link Wallet#fund options}.
     * @param {Object[]} options.outputs - See {@link MTX#addOutput}.
     * @param {Object[]} options.outputs - See {@link MTX#addOutput}.
     * @param {MTX?} mtx
     * @returns {Promise} - Returns {@link MTX}.
     */
    createTX(options: {
        outputs: any[];
        outputs: any[];
    }, force: any, mtx: typeof MTX | null): Promise<any>;
    /**
     * Make a batch transaction with multiple actions.
     * @param {Array} actions
     * @param {Object} options
     * @returns {MTX}
     */
    makeBatch(actions: any[], options: any): typeof MTX;
    /**
     * Make a batch transaction with multiple actions.
     * @param {Array} actions
     * @param {Object} options
     * @returns {MTX}
     */
    _createBatch(actions: any[], options: any): typeof MTX;
    /**
     * Make a batch transaction with multiple actions.
     * @param {Array} actions
     * @param {Object} options
     * @returns {MTX}
     */
    createBatch(actions: any[], options: any): typeof MTX;
    /**
     * Create and send a batch transaction with multiple actions.
     * @param {Array} actions
     * @param {Object} options
     * @returns {TX}
     */
    _sendBatch(actions: any[], options: any): TX;
    /**
     * Create and send a batch transaction with multiple actions.
     * @param {Array} actions
     * @param {Object} options
     * @returns {TX}
     */
    sendBatch(actions: any[], options: any): TX;
    /**
     * Finalize and template an MTX.
     * @param {MTX} mtx
     * @param {Object} options
     * @returns {MTX}
     */
    finalize(mtx: typeof MTX, options: any): typeof MTX;
    /**
     * Build a transaction, fill it with outputs and inputs,
     * sort the members according to BIP69, set locktime,
     * sign and broadcast. Doing this all in one go prevents
     * coins from being double spent.
     * @param {Object} options - See {@link Wallet#fund options}.
     * @param {Object[]} options.outputs - See {@link MTX#addOutput}.
     * @returns {Promise} - Returns {@link TX}.
     */
    send(options: {
        outputs: any[];
    }, passphrase: any): Promise<any>;
    /**
     * Build and send a transaction without a lock.
     * @private
     * @param {Object} options - See {@link Wallet#fund options}.
     * @param {Object[]} options.outputs - See {@link MTX#addOutput}.
     * @returns {Promise} - Returns {@link TX}.
     */
    private _send;
    /**
     * Sign and send a (templated) mutable transaction.
     * @param {MTX} mtx
     * @param {String} passphrase
     */
    sendMTX(mtx: typeof MTX, passphrase: string): Promise<any>;
    /**
     * Intentionally double-spend outputs by
     * increasing fee for an existing transaction.
     * @param {Hash} hash
     * @param {Rate} rate
     * @param {(String|Buffer)?} passphrase
     * @returns {Promise} - Returns {@link TX}.
     */
    increaseFee(hash: Hash, rate: Rate, passphrase: (string | Buffer) | null): Promise<any>;
    /**
     * Resend pending wallet transactions.
     * @returns {Promise}
     */
    resend(): Promise<any>;
    /**
     * Derive necessary addresses for signing a transaction.
     * @param {MTX} mtx
     * @param {Number?} index - Input index.
     * @returns {Promise} - Returns {@link WalletKey}[].
     */
    deriveInputs(mtx: typeof MTX): Promise<any>;
    /**
     * Retrieve a single keyring by address.
     * @param {Address|Hash} hash
     * @returns {Promise}
     */
    getKey(address: any): Promise<any>;
    /**
     * Retrieve a single keyring by address
     * (with the private key reference).
     * @param {Address|Hash} hash
     * @param {(Buffer|String)?} passphrase
     * @returns {Promise}
     */
    getPrivateKey(address: any, passphrase: (Buffer | string) | null): Promise<any>;
    /**
     * Map input addresses to paths.
     * @param {MTX} mtx
     * @returns {Promise} - Returns {@link Path}[].
     */
    getInputPaths(mtx: typeof MTX): Promise<any>;
    /**
     * Map output addresses to paths.
     * @param {TX} tx
     * @returns {Promise} - Returns {@link Path}[].
     */
    getOutputPaths(tx: TX): Promise<any>;
    /**
     * Increase lookahead for account.
     * @param {(Number|String)?} account
     * @param {Number} lookahead
     * @returns {Promise}
     */
    setLookahead(acct: any, lookahead: number): Promise<any>;
    /**
     * Increase lookahead for account (without a lock).
     * @private
     * @param {(Number|String)?} account
     * @param {Number} lookahead
     * @returns {Promise}
     */
    private _setLookahead;
    /**
     * Sync address depths based on a transaction's outputs.
     * This is used for deriving new addresses when
     * a confirmed transaction is seen.
     * @param {TX} tx
     * @returns {Promise}
     */
    syncOutputDepth(tx: TX): Promise<any>;
    /**
     * Build input scripts templates for a transaction (does not
     * sign, only creates signature slots). Only builds scripts
     * for inputs that are redeemable by this wallet.
     * @param {MTX} mtx
     * @returns {Promise} - Returns Number
     * (total number of scripts built).
     */
    template(mtx: typeof MTX): Promise<any>;
    /**
     * Build input scripts and sign inputs for a transaction. Only attempts
     * to build/sign inputs that are redeemable by this wallet.
     * @param {MTX} tx
     * @param {Object|String|Buffer} options - Options or passphrase.
     * @returns {Promise} - Returns Number (total number
     * of inputs scripts built and signed).
     */
    sign(mtx: any, passphrase: any): Promise<any>;
    /**
     * Get pending ancestors up to the policy limit
     * @param {TX} tx
     * @returns {Promise} - Returns {BufferSet} with Hash
     */
    getPendingAncestors(tx: TX): Promise<any>;
    /**
     * Get pending ancestors up to the policy limit.
     * @param {TX} tx
     * @param {Object} set
     * @returns {Promise} - Returns {BufferSet} with Hash
     */
    _getPendingAncestors(tx: TX, set: any): Promise<any>;
    /**
     * Test whether the database has a pending transaction.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasPending(hash: Hash): Promise<any>;
    /**
     * Get a coin viewpoint.
     * @param {TX} tx
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getCoinView(tx: TX): Promise<any>;
    /**
     * Get a wallet coin viewpoint with HD paths.
     * @param {TX} tx
     * @param {CoinView?} view - Coins to be used in wallet coin viewpoint.
     * @returns {Promise} - Returns {@link WalletCoinView}.
     */
    getWalletCoinView(tx: TX, view: CoinView | null): Promise<any>;
    /**
     * Get a historical coin viewpoint.
     * @param {TX} tx
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getSpentView(tx: TX): Promise<any>;
    /**
     * Convert transaction to transaction details.
     * @param {TXRecord} wtx
     * @returns {Promise} - Returns {@link Details}.
     */
    toDetails(wtx: TXRecord): Promise<any>;
    /**
     * Get transaction details.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link Details}.
     */
    getDetails(hash: Hash): Promise<any>;
    /**
     * Get a coin from the wallet.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise} - Returns {@link Coin}.
     */
    getCoin(hash: Hash, index: number): Promise<any>;
    /**
     * Get a transaction from the wallet.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link TX}.
     */
    getTX(hash: Hash): Promise<any>;
    /**
     * List blocks for the wallet.
     * @returns {Promise} - Returns {@link BlockRecord}.
     */
    getBlocks(): Promise<any>;
    /**
     * Get a block from the wallet.
     * @param {Number} height
     * @returns {Promise} - Returns {@link BlockRecord}.
     */
    getBlock(height: number): Promise<any>;
    /**
     * Get all names.
     * @returns {NameState[]}
     */
    getNames(): NameState[];
    /**
     * Get a name if present.
     * @param {Buffer} nameHash
     * @returns {NameState}
     */
    getNameState(nameHash: Buffer): NameState;
    /**
     * Get a name if present.
     * @param {String|Buffer} name
     * @returns {NameState}
     */
    getNameStateByName(name: string | Buffer): NameState;
    /**
     * Get a blind value if present.
     * @param {Buffer} blind - Blind hash.
     * @returns {BlindValue}
     */
    getBlind(blind: Buffer): BlindValue;
    /**
     * Get all bids for name.
     * @param {Buffer} nameHash
     * @returns {BlindBid[]}
     */
    getBids(nameHash: Buffer): BlindBid[];
    /**
     * Get all bids for name.
     * @param {String|Buffer} name
     * @returns {BlindBid[]}
     */
    getBidsByName(name: string | Buffer): BlindBid[];
    /**
     * Get all reveals by name.
     * @param {Buffer} nameHash
     * @returns {BidReveal[]}
     */
    getReveals(nameHash: Buffer): BidReveal[];
    /**
     * Get all reveals by name.
     * @param {String} name
     * @returns {BidReveal[]}
     */
    getRevealsByName(name: string): BidReveal[];
    /**
     * Add a transaction to the wallets TX history.
     * @param {TX} tx
     * @returns {Promise}
     */
    add(tx: TX, block: any): Promise<any>;
    /**
     * Add a transaction to the wallet without a lock.
     * Potentially resolves orphans.
     * @private
     * @param {TX} tx
     * @returns {Promise}
     */
    private _add;
    /**
     * Revert a block.
     * @param {Number} height
     * @returns {Promise}
     */
    revert(height: number): Promise<any>;
    /**
     * Remove a wallet transaction.
     * @param {Hash} hash
     * @returns {Promise}
     */
    remove(hash: Hash): Promise<any>;
    /**
     * Zap stale TXs from wallet.
     * @param {(Number|String)?} acct
     * @param {Number} age - Age threshold (unix time, default=72 hours).
     * @returns {Promise}
     */
    zap(acct: (number | string) | null, age: number): Promise<any>;
    /**
     * Zap stale TXs from wallet without a lock.
     * @private
     * @param {(Number|String)?} acct
     * @param {Number} age
     * @returns {Promise}
     */
    private _zap;
    /**
     * Abandon transaction.
     * @param {Hash} hash
     * @returns {Promise}
     */
    abandon(hash: Hash): Promise<any>;
    /**
     * Abandon transaction without a lock.
     * @private
     * @param {Hash} hash
     * @returns {Promise}
     */
    private _abandon;
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
     * Return an array of all locked outpoints.
     * @returns {Outpoint[]}
     */
    getLocked(): Outpoint[];
    /**
     * Get all transactions in transaction history.
     * @param {(String|Number)?} acct
     * @returns {Promise} - Returns {@link TX}[].
     */
    getHistory(acct: (string | number) | null): Promise<any>;
    /**
     * Get all available coins.
     * @param {(String|Number)?} account
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getCoins(acct: any): Promise<any>;
    /**
     * Get all available credits.
     * @param {(String|Number)?} account
     * @returns {Promise} - Returns {@link Credit}[].
     */
    getCredits(acct: any): Promise<any>;
    /**
     * Get "smart" coins.
     * @param {(String|Number)?} account
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getSmartCoins(acct: any): Promise<any>;
    /**
     * Get all pending/unconfirmed transactions.
     * @param {(String|Number)?} acct
     * @returns {Promise} - Returns {@link TX}[].
     */
    getPending(acct: (string | number) | null): Promise<any>;
    /**
     * Get wallet balance.
     * @param {(String|Number)?} acct
     * @returns {Promise} - Returns {@link Balance}.
     */
    getBalance(acct: (string | number) | null): Promise<any>;
    /**
     * Get a range of transactions between two timestamps.
     * @param {(String|Number)?} acct
     * @param {Object} options
     * @param {Number} options.start
     * @param {Number} options.end
     * @returns {Promise} - Returns {@link TX}[].
     */
    getRange(acct: (string | number) | null, options: {
        start: number;
        end: number;
    }): Promise<any>;
    /**
     * Get the last N transactions.
     * @param {(String|Number)?} acct
     * @param {Number} limit
     * @returns {Promise} - Returns {@link TX}[].
     */
    getLast(acct: (string | number) | null, limit: number): Promise<any>;
    /**
     * Get account key.
     * @param {Number} [acct=0]
     * @returns {HDPublicKey}
     */
    accountKey(acct?: number): HDPublicKey;
    /**
     * Get current receive depth.
     * @param {Number} [acct=0]
     * @returns {Number}
     */
    receiveDepth(acct?: number): number;
    /**
     * Get current change depth.
     * @param {Number} [acct=0]
     * @returns {Number}
     */
    changeDepth(acct?: number): number;
    /**
     * Get current receive address.
     * @param {Number} [acct=0]
     * @returns {Address}
     */
    receiveAddress(acct?: number): Address;
    /**
     * Get current change address.
     * @param {Number} [acct=0]
     * @returns {Address}
     */
    changeAddress(acct?: number): Address;
    /**
     * Get current receive key.
     * @param {Number} [acct=0]
     * @returns {WalletKey}
     */
    receiveKey(acct?: number): WalletKey;
    /**
     * Get current change key.
     * @param {Number} [acct=0]
     * @returns {WalletKey}
     */
    changeKey(acct?: number): WalletKey;
    /**
     * Convert the wallet to a more inspection-friendly object.
     * @returns {Object}
     */
    format(): any;
    /**
     * Convert the wallet to a more inspection-friendly object.
     * @returns {Object}
     */
    inspect(): any;
    /**
     * Convert the wallet to an object suitable for
     * serialization.
     * @param {Boolean?} unsafe - Whether to include
     * the master key in the JSON.
     * @returns {Object}
     */
    getJSON(unsafe: boolean | null, balance: any): any;
    /**
     * Convert the wallet to an object suitable for
     * serialization.
     * @param {Boolean?} unsafe - Whether to include
     * the master key in the JSON.
     * @returns {Object}
     */
    toJSON(): any;
    /**
     * Calculate serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize the wallet.
     * @returns {Buffer}
     */
    encode(): Buffer;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     */
    private decode;
}
import EventEmitter = require("events");
import MasterKey = require("./masterkey");
import TXDB = require("./txdb");
import Address = require("../primitives/address");
import WalletKey = require("./walletkey");
import MTX = require("../primitives/mtx");
import Claim = require("../primitives/claim");
import { Resource } from "../dns/resource";
import Account = require("./account");
import CoinView = require("../coins/coinview");
import Coin = require("../primitives/coin");
import Outpoint = require("../primitives/outpoint");
