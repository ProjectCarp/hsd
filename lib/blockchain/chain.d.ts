export = Chain;
/**
 * Blockchain
 * @alias module:blockchain.Chain
 * @property {ChainDB} db
 * @property {ChainEntry?} tip
 * @property {Number} height
 * @property {DeploymentState} state
 */
declare class Chain {
    /**
     * Create a blockchain.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    opened: boolean;
    options: ChainOptions;
    network: Network;
    logger: any;
    workers: any;
    db: ChainDB;
    locker: any;
    invalid: any;
    state: DeploymentState;
    tip: ChainEntry;
    height: number;
    synced: boolean;
    orphanMap: any;
    orphanPrev: any;
    /**
     * Open the chain, wait for the database to load.
     * @returns {Promise}
     */
    open(): Promise<any>;
    /**
     * Close the chain, wait for the database to close.
     * @returns {Promise}
     */
    close(): Promise<any>;
    /**
     * Check if we need to compact tree data.
     * @returns {Promise<Boolean>} - Should we sync
     */
    tryCompact(): Promise<boolean>;
    /**
     * Sync tree state.
     */
    syncTree(): Promise<void>;
    /**
     * Perform all necessary contextual verification on a block.
     * @private
     * @param {Block} block
     * @param {ChainEntry} prev
     * @param {Number} flags
     * @returns {Promise} - Returns {@link ContextResult}.
     */
    private verifyContext;
    /**
     * Perform all necessary contextual verification
     * on a block, without POW check.
     * @param {Block} block
     * @returns {Promise}
     */
    verifyBlock(block: Block): Promise<any>;
    /**
     * Perform all necessary contextual verification
     * on a block, without POW check (no lock).
     * @private
     * @param {Block} block
     * @returns {Promise}
     */
    private _verifyBlock;
    /**
     * Test whether the hash is in the main chain.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    isMainHash(hash: Hash): Promise<any>;
    /**
     * Test whether the entry is in the main chain.
     * @param {ChainEntry} entry
     * @returns {Promise} - Returns Boolean.
     */
    isMainChain(entry: ChainEntry): Promise<any>;
    /**
     * Get ancestor by `height`.
     * @param {ChainEntry} entry
     * @param {Number} height
     * @returns {Promise} - Returns ChainEntry.
     */
    getAncestor(entry: ChainEntry, height: number): Promise<any>;
    /**
     * Get previous entry.
     * @param {ChainEntry} entry
     * @returns {Promise} - Returns ChainEntry.
     */
    getPrevious(entry: ChainEntry): Promise<any>;
    /**
     * Get previous cached entry.
     * @param {ChainEntry} entry
     * @returns {ChainEntry|null}
     */
    getPrevCache(entry: ChainEntry): ChainEntry | null;
    /**
     * Get next entry.
     * @param {ChainEntry} entry
     * @returns {Promise} - Returns ChainEntry.
     */
    getNext(entry: ChainEntry): Promise<any>;
    /**
     * Get next entry.
     * @param {ChainEntry} entry
     * @returns {Promise} - Returns ChainEntry.
     */
    getNextEntry(entry: ChainEntry): Promise<any>;
    /**
     * Calculate median time past.
     * @param {ChainEntry} prev
     * @returns {Promise} - Returns Number.
     */
    getMedianTime(prev: ChainEntry): Promise<any>;
    /**
     * Test whether the entry is potentially
     * an ancestor of a checkpoint.
     * @param {ChainEntry} prev
     * @returns {Boolean}
     */
    isHistorical(prev: ChainEntry): boolean;
    /**
     * Test whether the height is potentially
     * an ancestor of a checkpoint.
     * @param {Number} height
     * @returns {Boolean}
     */
    isHistoricalHeight(height: number): boolean;
    /**
     * Contextual verification for a block, including
     * version deployments (IsSuperMajority), versionbits,
     * coinbase height, finality checks.
     * @private
     * @param {Block} block
     * @param {ChainEntry} prev
     * @param {Number} flags
     * @returns {Promise} - Returns {@link DeploymentState}.
     */
    private verify;
    /**
     * Check all deployments on a chain.
     * @param {Number} time
     * @param {ChainEntry} prev
     * @returns {Promise} - Returns {@link DeploymentState}.
     */
    getDeployments(time: number, prev: ChainEntry): Promise<any>;
    /**
     * Set a new deployment state.
     * @param {DeploymentState} state
     */
    setDeploymentState(state: DeploymentState): void;
    /**
     * Spend and update inputs (checkpoints only).
     * @private
     * @param {Block} block
     * @param {ChainEntry} prev
     * @returns {Promise} - Returns {@link CoinView}.
     */
    private updateInputs;
    /**
     * Check block transactions for all things pertaining
     * to inputs. This function is important because it is
     * what actually fills the coins into the block. This
     * function will check the block reward, the sigops,
     * the tx values, and execute and verify the scripts (it
     * will attempt to do this on the worker pool). If
     * `checkpoints` is enabled, it will skip verification
     * for historical data.
     * @private
     * @see TX#verifyInputs
     * @see TX#verify
     * @param {Block} block
     * @param {ChainEntry} prev
     * @param {DeploymentState} state
     * @returns {Promise} - Returns {@link CoinView}.
     */
    private verifyInputs;
    /**
     * Get main chain height for hash.
     * @param {Hash} hash
     * @returns {Number}
     */
    getMainHeight(hash: Hash): number;
    /**
     * Verify a renewal.
     * @param {Hash} hash
     * @param {Number} height
     * @returns {Boolean}
     */
    verifyRenewal(hash: Hash, height: number): boolean;
    /**
     * Verify covenants.
     * @param {TX} tx
     * @param {CoinView} view
     * @param {Number} height
     * @param {Boolean} hardened
     */
    verifyCovenants(tx: TX, view: CoinView, height: number, hardened: boolean): Promise<void>;
    /**
     * Find the block at which a fork ocurred.
     * @private
     * @param {ChainEntry} fork - The current chain.
     * @param {ChainEntry} longer - The competing chain.
     * @returns {Promise}
     */
    private findFork;
    /**
     * Reorganize the blockchain (connect and disconnect inputs).
     * Called when a competing chain with a higher chainwork
     * is received.
     * @private
     * @param {ChainEntry} competitor - The competing chain's tip.
     * @returns {Promise}
     */
    private reorganize;
    /**
     * Revert a failed reorganization.
     * @private
     * @param {ChainEntry} fork - The common ancestor.
     * @param {ChainEntry} last - The previous valid tip.
     * @returns {Promise}
     */
    private unreorganize;
    /**
     * Reorganize the blockchain for SPV. This
     * will reset the chain to the fork block.
     * @private
     * @param {ChainEntry} competitor - The competing chain's tip.
     * @returns {Promise}
     */
    private reorganizeSPV;
    /**
     * Disconnect an entry from the chain (updates the tip).
     * @param {ChainEntry} entry
     * @returns {Promise}
     */
    disconnect(entry: ChainEntry): Promise<any>;
    /**
     * Reconnect an entry to the chain (updates the tip).
     * This will do contextual-verification on the block
     * (necessary because we cannot validate the inputs
     * in alternate chains when they come in).
     * @param {ChainEntry} entry
     * @param {Number} flags
     * @returns {Promise}
     */
    reconnect(entry: ChainEntry): Promise<any>;
    /**
     * Set the best chain. This is called on every incoming
     * block with greater chainwork than the current tip.
     * @private
     * @param {ChainEntry} entry
     * @param {Block} block
     * @param {ChainEntry} prev
     * @param {Number} flags
     * @returns {Promise}
     */
    private setBestChain;
    /**
     * Save block on an alternate chain.
     * @private
     * @param {ChainEntry} entry
     * @param {Block} block
     * @param {ChainEntry} prev
     * @param {Number} flags
     * @returns {Promise}
     */
    private saveAlternate;
    /**
     * Reset the chain to the desired block. This
     * is useful for replaying the blockchain download
     * for SPV.
     * @param {Hash|Number} block
     * @returns {Promise}
     */
    reset(block: Hash | number): Promise<any>;
    /**
     * Reset the chain to the desired block without a lock.
     * @private
     * @param {Hash|Number} block
     * @returns {Promise}
     */
    private _reset;
    /**
     * Reset the chain to a height or hash. Useful for replaying
     * the blockchain download for SPV.
     * @param {Hash|Number} block - hash/height
     * @returns {Promise}
     */
    replay(block: Hash | number): Promise<any>;
    /**
     * Reset the chain without a lock.
     * @private
     * @param {Hash|Number} block - hash/height
     * @param {Boolean?} silent
     * @returns {Promise}
     */
    private _replay;
    /**
     * Invalidate block.
     * @param {Hash} hash
     * @returns {Promise}
     */
    invalidate(hash: Hash): Promise<any>;
    /**
     * Invalidate block (no lock).
     * @param {Hash} hash
     * @returns {Promise}
     */
    _invalidate(hash: Hash): Promise<any>;
    /**
     * Retroactively prune the database.
     * @returns {Promise}
     */
    prune(): Promise<any>;
    /**
     * Compact the Urkel Tree.
     * Removes all historical state and all data not
     * linked directly to the provided root node hash.
     * @returns {Promise}
     */
    compactTree(): Promise<any>;
    /**
     * Reconstruct the Urkel Tree.
     * @returns {Promise}
     */
    reconstructTree(): Promise<any>;
    /**
     * Scan the blockchain for transactions containing specified address hashes.
     * @param {Hash} start - Block hash to start at.
     * @param {Bloom} filter - Bloom filter containing tx and address hashes.
     * @param {Function} iter - Iterator.
     * @returns {Promise}
     */
    scan(start: Hash, filter: Bloom, iter: Function): Promise<any>;
    /**
     * Add a block to the chain, perform all necessary verification.
     * @param {Block} block
     * @param {Number?} flags
     * @param {Number?} id
     * @returns {Promise}
     */
    add(block: Block, flags: number | null, id: number | null): Promise<any>;
    /**
     * Add a block to the chain without a lock.
     * @private
     * @param {Block} block
     * @param {Number?} flags
     * @param {Number?} id
     * @returns {Promise}
     */
    private _add;
    /**
     * Connect block to chain.
     * @private
     * @param {ChainEntry} prev
     * @param {Block} block
     * @param {Number} flags
     * @returns {Promise}
     */
    private connect;
    /**
     * Handle orphans.
     * @private
     * @param {ChainEntry} entry
     * @returns {Promise}
     */
    private handleOrphans;
    /**
     * Test whether the chain has reached its slow height.
     * @private
     * @returns {Boolean}
     */
    private isSlow;
    /**
     * Calculate the time difference from
     * start time and log block.
     * @private
     * @param {Array} start
     * @param {Block} block
     * @param {ChainEntry} entry
     */
    private logStatus;
    /**
     * Verify a block hash and height against the checkpoints.
     * @private
     * @param {ChainEntry} prev
     * @param {Hash} hash
     * @returns {Boolean}
     */
    private verifyCheckpoint;
    /**
     * Store an orphan.
     * @private
     * @param {Block} block
     * @param {Number?} flags
     * @param {Number?} id
     */
    private storeOrphan;
    /**
     * Add an orphan.
     * @private
     * @param {Orphan} orphan
     * @returns {Orphan}
     */
    private addOrphan;
    /**
     * Remove an orphan.
     * @private
     * @param {Orphan} orphan
     * @returns {Orphan}
     */
    private removeOrphan;
    /**
     * Test whether a hash would resolve the next orphan.
     * @private
     * @param {Hash} hash - Previous block hash.
     * @returns {Boolean}
     */
    private hasNextOrphan;
    /**
     * Resolve an orphan.
     * @private
     * @param {Hash} hash - Previous block hash.
     * @returns {Orphan}
     */
    private resolveOrphan;
    /**
     * Purge any waiting orphans.
     */
    purgeOrphans(): void;
    /**
     * Prune orphans, only keep the orphan with the highest
     * coinbase height (likely to be the peer's tip).
     */
    limitOrphans(): void;
    /**
     * Test whether an invalid block hash has been seen.
     * @private
     * @param {Block} block
     * @returns {Boolean}
     */
    private hasInvalid;
    /**
     * Mark a block as invalid.
     * @private
     * @param {Hash} hash
     */
    private setInvalid;
    /**
     * Forget an invalid block hash.
     * @private
     * @param {Hash} hash
     */
    private removeInvalid;
    /**
     * Test the chain to see if it contains
     * a block, or has recently seen a block.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    has(hash: Hash): Promise<any>;
    /**
     * Find the corresponding block entry by hash or height.
     * @param {Hash|Number} hash/height
     * @returns {Promise} - Returns {@link ChainEntry}.
     */
    getEntry(hash: Hash | number): Promise<any>;
    /**
     * Retrieve a chain entry by height.
     * @param {Number} height
     * @returns {Promise} - Returns {@link ChainEntry}.
     */
    getEntryByHeight(height: number): Promise<any>;
    /**
     * Retrieve a chain entry by hash.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link ChainEntry}.
     */
    getEntryByHash(hash: Hash): Promise<any>;
    /**
     * Get the hash of a block by height. Note that this
     * will only return hashes in the main chain.
     * @param {Number} height
     * @returns {Promise} - Returns {@link Hash}.
     */
    getHash(height: number): Promise<any>;
    /**
     * Get the height of a block by hash.
     * @param {Hash} hash
     * @returns {Promise} - Returns Number.
     */
    getHeight(hash: Hash): Promise<any>;
    /**
     * Test the chain to see if it contains a block.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasEntry(hash: Hash): Promise<any>;
    /**
     * Get the _next_ block hash (does not work by height).
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link Hash}.
     */
    getNextHash(hash: Hash): Promise<any>;
    /**
     * Check whether coins are still unspent.
     * @param {TX} tx
     * @returns {Promise} - Returns Boolean.
     */
    hasCoins(tx: TX): Promise<any>;
    /**
     * Get all tip hashes.
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getTips(): Promise<any>;
    /**
     * Get range of hashes.
     * @param {Number} [start=-1]
     * @param {Number} [end=-1]
     * @returns {Promise}
     */
    getHashes(start?: number, end?: number): Promise<any>;
    /**
     * Get a coin (unspents only).
     * @private
     * @param {Outpoint} prevout
     * @returns {Promise} - Returns {@link CoinEntry}.
     */
    private readCoin;
    /**
     * Get a coin (unspents only).
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise} - Returns {@link Coin}.
     */
    getCoin(hash: Hash, index: number): Promise<any>;
    /**
     * Retrieve a block from the database (not filled with coins).
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link Block}.
     */
    getBlock(hash: Hash): Promise<any>;
    /**
     * Retrieve a block from the database (not filled with coins).
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link Block}.
     */
    getRawBlock(block: any): Promise<any>;
    /**
     * Get a historical block coin viewpoint.
     * @param {Block} hash
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getBlockView(block: any): Promise<any>;
    /**
     * Get a transaction with metadata.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link TXMeta}.
     */
    getMeta(hash: Hash): Promise<any>;
    /**
     * Retrieve a transaction.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link TX}.
     */
    getTX(hash: Hash): Promise<any>;
    /**
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasTX(hash: Hash): Promise<any>;
    /**
     * Get all coins pertinent to an address.
     * @param {Address[]} addrs
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getCoinsByAddress(addrs: Address[]): Promise<any>;
    /**
     * Get all transaction hashes to an address.
     * @param {Address[]} addrs
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getHashesByAddress(addrs: Address[]): Promise<any>;
    /**
     * Get all transactions pertinent to an address.
     * @param {Address[]} addrs
     * @returns {Promise} - Returns {@link TX}[].
     */
    getTXByAddress(addrs: Address[]): Promise<any>;
    /**
     * Get all transactions pertinent to an address.
     * @param {Address[]} addrs
     * @returns {Promise} - Returns {@link TXMeta}[].
     */
    getMetaByAddress(addrs: Address[]): Promise<any>;
    /**
     * Get an orphan block.
     * @param {Hash} hash
     * @returns {Block}
     */
    getOrphan(hash: Hash): Block;
    /**
     * Test the chain to see if it contains an orphan.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasOrphan(hash: Hash): Promise<any>;
    /**
     * Test the chain to see if it contains a pending block in its queue.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasPending(hash: Hash): Promise<any>;
    /**
     * Get coin viewpoint.
     * @param {TX} tx
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getCoinView(tx: TX): Promise<any>;
    /**
     * Get coin viewpoint (spent).
     * @param {TX} tx
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getSpentView(tx: TX): Promise<any>;
    /**
     * Test the chain to see if it is synced.
     * @returns {Boolean}
     */
    isFull(): boolean;
    /**
     * Potentially emit a `full` event.
     * @private
     */
    private maybeSync;
    /**
     * Test the chain to see if it has the
     * minimum required chainwork for the
     * network.
     * @returns {Boolean}
     */
    hasChainwork(): boolean;
    /**
     * Get the fill percentage.
     * @returns {Number} percent - Ranges from 0.0 to 1.0.
     */
    getProgress(): number;
    /**
     * Calculate chain locator (an array of hashes).
     * @param {Hash?} start - Height or hash to treat as the tip.
     * The current tip will be used if not present. Note that this can be a
     * non-existent hash, which is useful for headers-first locators.
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getLocator(start: Hash | null): Promise<any>;
    /**
     * Calculate chain locator without a lock.
     * @private
     * @param {Hash?} start
     * @returns {Promise}
     */
    private _getLocator;
    /**
     * Calculate the orphan root of the hash (if it is an orphan).
     * @param {Hash} hash
     * @returns {Hash}
     */
    getOrphanRoot(hash: Hash): Hash;
    /**
     * Calculate the time difference (in seconds)
     * between two blocks by examining chainworks.
     * @param {ChainEntry} to
     * @param {ChainEntry} from
     * @returns {Number}
     */
    getProofTime(to: ChainEntry, from: ChainEntry): number;
    /**
     * Calculate the next target based on the chain tip.
     * @returns {Promise} - returns Number
     * (target is in compact/mantissa form).
     */
    getCurrentTarget(): Promise<any>;
    /**
     * Get median block by timestamp.
     * @param {ChainEntry} prev
     * @returns {Promise}
     */
    getSuitableBlock(prev: ChainEntry): Promise<any>;
    /**
     * Calculate the next target.
     * @param {Number} time - Next block timestamp.
     * @param {ChainEntry} prev - Previous entry.
     * @returns {Promise} - returns Number
     * (target is in compact/mantissa form).
     */
    getTarget(time: number, prev: ChainEntry): Promise<any>;
    /**
     * Calculate the next target.
     * @param {ChainEntry} first - Suitable block from 1 day prior.
     * @param {ChainEntry} last - Last suitable block.
     * @returns {Number} target - Target in compact/mantissa form.
     */
    retarget(first: ChainEntry, last: ChainEntry): number;
    /**
     * Find a locator. Analagous to bitcoind's `FindForkInGlobalIndex()`.
     * @param {Hash[]} locator - Hashes.
     * @returns {Promise} - Returns {@link Hash} (the
     * hash of the latest known block).
     */
    findLocator(locator: Hash[]): Promise<any>;
    /**
     * Check whether a versionbits deployment is active (BIP9: versionbits).
     * @example
     * await chain.isActive(tip, deployments.segwit);
     * @see https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki
     * @param {ChainEntry} prev - Previous chain entry.
     * @param {Object} deployment - Deployment.
     * @returns {Promise} - Returns Number.
     */
    isActive(prev: ChainEntry, deployment: any): Promise<any>;
    /**
     * Get chain entry state for a deployment (BIP9: versionbits).
     * @example
     * await chain.getState(tip, deployments.segwit);
     * @see https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki
     * @param {ChainEntry} prev - Previous chain entry.
     * @param {Object} deployment - Deployment.
     * @returns {Promise} - Returns Number.
     */
    getState(prev: ChainEntry, deployment: any): Promise<any>;
    /**
     * Get signalling statistics for BIP9/versionbits soft fork
     * @param {ChainEntry} prev - Previous chain entry.
     * @param {Obejct} deployment - Deployment.
     * @returns {Promise} - Returns JSON object.
     */
    getBIP9Stats(prev: ChainEntry, deployment: Obejct): Promise<any>;
    /**
     * Compute the version for a new block (BIP9: versionbits).
     * @see https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki
     * @param {ChainEntry} prev - Previous chain entry (usually the tip).
     * @returns {Promise} - Returns Number.
     */
    computeBlockVersion(prev: ChainEntry): Promise<any>;
    /**
     * Get the current deployment state of the chain. Called on load.
     * @private
     * @returns {Promise} - Returns {@link DeploymentState}.
     */
    private getDeploymentState;
    /**
     * Get deployment state.
     * @private
     * @returns {Promise} - Returns {@link DeploymentState}.
     */
    private readDeploymentState;
    /**
     * Get the next deployment state of the chain.
     * @private
     * @returns {Promise} - Returns {@link DeploymentState}.
     */
    private getNextState;
    /**
     * Check transaction finality, taking into account MEDIAN_TIME_PAST
     * if it is present in the lock flags.
     * @param {ChainEntry} prev - Previous chain entry.
     * @param {TX} tx
     * @param {LockFlags} flags
     * @returns {Promise} - Returns Boolean.
     */
    verifyFinal(prev: ChainEntry, tx: TX, flags: LockFlags): Promise<any>;
    /**
     * Get the necessary minimum time and height sequence locks for a transaction.
     * @param {ChainEntry} prev
     * @param {TX} tx
     * @param {CoinView} view
     * @param {LockFlags} flags
     * @returns {Promise}
     */
    getLocks(prev: ChainEntry, tx: TX, view: CoinView, flags: LockFlags): Promise<any>;
    /**
     * Verify sequence locks.
     * @param {ChainEntry} prev
     * @param {TX} tx
     * @param {CoinView} view
     * @param {LockFlags} flags
     * @returns {Promise} - Returns Boolean.
     */
    verifyLocks(prev: ChainEntry, tx: TX, view: CoinView, flags: LockFlags): Promise<any>;
    /**
     * Get safe tree root.
     * @returns {Hash}
     */
    getSafeRoot(): Hash;
}
/**
 * ChainOptions
 * @alias module:blockchain.ChainOptions
 */
declare class ChainOptions {
    /**
     * Instantiate chain options from object.
     * @param {Object} options
     * @returns {ChainOptions}
     */
    static fromOptions(options: any): ChainOptions;
    /**
     * Create chain options.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    network: Network;
    logger: any;
    blocks: any;
    workers: any;
    prefix: any;
    location: any;
    treeLocation: any;
    memory: boolean;
    maxFiles: number;
    cacheSize: number;
    compression: boolean;
    spv: boolean;
    prune: boolean;
    indexTX: boolean;
    indexAddress: boolean;
    entryCache: number;
    maxOrphans: number;
    checkpoints: boolean;
    chainMigrate: number;
    compactTreeOnInit: boolean;
    compactTreeInitInterval: number;
    /**
     * Inject properties from object.
     * @private
     * @param {Object} options
     * @returns {ChainOptions}
     */
    private fromOptions;
    treePrefix: any;
}
import Network = require("../protocol/network");
import ChainDB = require("./chaindb");
/**
 * Deployment State
 * @alias module:blockchain.DeploymentState
 * @property {VerifyFlags} flags
 * @property {LockFlags} lockFlags
 */
declare class DeploymentState {
    /**
     * Create a deployment state.
     * @constructor
     */
    constructor(tip: any);
    tip: any;
    flags: any;
    lockFlags: number;
    hardening: boolean;
    hasHardening(): boolean;
}
import ChainEntry = require("./chainentry");
import CoinView = require("../coins/coinview");
