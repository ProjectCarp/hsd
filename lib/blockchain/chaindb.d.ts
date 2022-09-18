export = ChainDB;
/**
 * ChainDB
 * @alias module:blockchain.ChainDB
 */
declare class ChainDB {
    /**
     * Create a chaindb.
     * @constructor
     * @param {ChainOptions} options
     */
    constructor(options: ChainOptions);
    options: ChainOptions;
    network: any;
    logger: any;
    blocks: any;
    db: any;
    name: string;
    version: number;
    tree: any;
    txn: any;
    treeState: TreeState;
    stateCache: StateCache;
    state: ChainState;
    field: BitField;
    pending: any;
    pendingTreeState: any;
    current: any;
    blocksBatch: any;
    cacheHash: any;
    cacheHeight: any;
    /**
     * Open and wait for the database to load.
     * @returns {Promise}
     */
    open(): Promise<any>;
    /**
     * Initialize fresh database.
     * @return {Promise}
     */
    initialize(): Promise<any>;
    /**
     * Initialize fresh database.
     * @returns {Promise}
     */
    _initialize(): Promise<any>;
    /**
     * Write chaindb version.
     * @param {Batch} b
     * @param {Number} version
     */
    writeVersion(b: Batch, version: number): void;
    /**
     * Verify version
     * @param {Number}
     * @returns {Promise}
     */
    verifyVersion(version: any): Promise<any>;
    /**
     * Close and wait for the database to close.
     * @returns {Promise}
     */
    close(): Promise<any>;
    /**
     * Start a batch.
     * @returns {Batch}
     */
    start(): Batch;
    /**
     * Put key and value to current batch.
     * @param {String} key
     * @param {Buffer} value
     */
    put(key: string, value: Buffer): void;
    /**
     * Delete key from current batch.
     * @param {String} key
     */
    del(key: string): void;
    /**
     * Get current batch.
     * @returns {Batch}
     */
    batch(): Batch;
    /**
     * Drop current batch.
     * @returns {Batch}
     */
    drop(): Batch;
    /**
     * Commit current batch.
     * @returns {Promise}
     */
    commit(): Promise<any>;
    /**
     * Test the cache for a present entry hash or height.
     * @param {Hash|Number} block - Hash or height.
     */
    hasCache(block: Hash | number): any;
    /**
     * Get an entry directly from the LRU cache.
     * @param {Hash|Number} block - Hash or height.
     */
    getCache(block: Hash | number): any;
    /**
     * Get the height of a block by hash.
     * @param {Hash} hash
     * @returns {Promise} - Returns Number.
     */
    getHeight(hash: Hash): Promise<any>;
    /**
     * Get the hash of a block by height. Note that this
     * will only return hashes in the main chain.
     * @param {Number} height
     * @returns {Promise} - Returns {@link Hash}.
     */
    getHash(height: number): Promise<any>;
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
     * Retrieve a chain entry.
     * @param {Number|Hash} block - Height or hash.
     * @returns {Promise} - Returns {@link ChainEntry}.
     */
    getEntry(block: number | Hash): Promise<any>;
    /**
     * Test whether the chain contains a block.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasEntry(hash: Hash): Promise<any>;
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
     * Lookup a name tree value.
     * @param {Hash} root
     * @param {Hash} key
     * @returns {Buffer}
     */
    lookup(root: Hash, key: Hash): Buffer;
    /**
     * Create a name tree proof.
     * @param {Hash} root
     * @param {Hash} key
     * @returns {Buffer[]} nodes
     */
    prove(root: Hash, key: Hash): Buffer[];
    /**
     * Get the current name tree root.
     * @returns {Hash}
     */
    treeRoot(): Hash;
    /**
     * Retrieve the tip entry from the tip record.
     * @returns {Promise} - Returns {@link ChainEntry}.
     */
    getTip(): Promise<any>;
    /**
     * Retrieve the tip entry from the tip record.
     * @returns {Promise} - Returns {@link ChainState}.
     */
    getState(): Promise<any>;
    /**
     * Retrieve tree state from the tree record.
     * @returns {Promise<TreeState>}
     */
    getTreeState(): Promise<TreeState>;
    /**
     * Write genesis block to database.
     * @returns {Promise}
     */
    writeGenesis(): Promise<any>;
    /**
     * Retrieve the database flags.
     * @returns {Promise} - Returns {@link ChainFlags}.
     */
    getFlags(): Promise<any>;
    /**
     * Verify current options against db options.
     * @returns {Promise}
     */
    verifyFlags(): Promise<any>;
    /**
     * Get state caches.
     * @returns {Promise} - Returns {@link StateCache}.
     */
    getStateCache(): Promise<any>;
    /**
     * Save deployment table.
     * @returns {Promise}
     */
    saveDeployments(): Promise<any>;
    /**
     * Save deployment table.
     * @returns {Promise}
     */
    writeDeployments(b: any): Promise<any>;
    /**
     * Check for outdated deployments.
     * @private
     * @returns {Promise}
     */
    private checkDeployments;
    /**
     * Potentially invalidate state cache.
     * @returns {Promise}
     */
    verifyDeployments(): Promise<any>;
    /**
     * Invalidate state cache.
     * @private
     * @returns {Promise}
     */
    private invalidateCache;
    /**
     * Retroactively prune the database.
     * @returns {Promise}
     */
    prune(): Promise<any>;
    /**
     * Compact the Urkel Tree.
     * Removes all historical state and all data not
     * linked directly to the provided root node hash.
     * @param {ChainEntry} entry
     * @returns {Promise}
     */
    compactTree(entry: ChainEntry): Promise<any>;
    /**
     * Get the _next_ block hash (does not work by height).
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link Hash}.
     */
    getNextHash(hash: Hash): Promise<any>;
    /**
     * Check to see if a block is on the main chain.
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
     * Get hash range.
     * @param {Number} [start=-1]
     * @param {Number} [end=-1]
     * @returns {Promise}
     */
    getHashes(start?: number, end?: number): Promise<any>;
    /**
     * Get all entries.
     * @returns {Promise} - Returns {@link ChainEntry}[].
     */
    getEntries(): Promise<any>;
    /**
     * Get all tip hashes.
     * @returns {Promise} - Returns {@link Hash}[].
     */
    getTips(): Promise<any>;
    /**
     * Get bitfield.
     * @returns {Buffer}
     */
    getField(): Buffer;
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
     * Check whether coins are still unspent. Necessary for bip30.
     * @see https://bitcointalk.org/index.php?topic=67738.0
     * @param {TX} tx
     * @returns {Promise} - Returns Boolean.
     */
    hasCoins(tx: TX): Promise<any>;
    /**
     * Get coin viewpoint.
     * @param {TX} tx
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getCoinView(tx: TX): Promise<any>;
    /**
     * Get coin viewpoint (historical).
     * @param {TX} tx
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getSpentView(tx: TX): Promise<any>;
    /**
     * Get coins necessary to be resurrected during a reorg.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getUndoCoins(hash: Hash): Promise<any>;
    /**
     * Get name state.
     * @param {Buffer} nameHash
     * @returns {Promise<NameState>}
     */
    getNameState(nameHash: Buffer): Promise<NameState>;
    /**
     * Get name state by name.
     * @param {Buffer} name
     * @returns {Promise<NameState>}
     */
    getNameStateByName(name: Buffer): Promise<NameState>;
    /**
     * Get name status.
     * @param {Buffer} nameHash
     * @returns {Promise<NameState>}
     */
    getNameStatus(nameHash: Buffer, height: any, hardened: any): Promise<NameState>;
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
     * Scan the blockchain for transactions containing specified address hashes.
     * @param {Hash} start - Block hash to start at.
     * @param {Bloom} filter - Bloom filter containing tx and address hashes.
     * @param {Function} iter - Iterator.
     * @returns {Promise}
     */
    scan(start: Hash, filter: Bloom, iter: Function): Promise<any>;
    /**
     * Save an entry to the database and optionally
     * connect it as the tip. Note that this method
     * does _not_ perform any verification which is
     * instead performed in {@link Chain#add}.
     * @param {ChainEntry} entry
     * @param {Block} block
     * @param {CoinView?} view - Will not connect if null.
     * @returns {Promise}
     */
    save(entry: ChainEntry, block: Block, view: CoinView | null): Promise<any>;
    /**
     * Save an entry.
     * @private
     * @param {ChainEntry} entry
     * @param {Block} block
     * @param {CoinView?} view
     * @returns {Promise}
     */
    private _save;
    /**
     * Reconnect the block to the chain.
     * @param {ChainEntry} entry
     * @param {Block} block
     * @param {CoinView} view
     * @returns {Promise}
     */
    reconnect(entry: ChainEntry, block: Block, view: CoinView): Promise<any>;
    /**
     * Reconnect block.
     * @private
     * @param {ChainEntry} entry
     * @param {Block} block
     * @param {CoinView} view
     * @returns {Promise}
     */
    private _reconnect;
    /**
     * Disconnect block from the chain.
     * @param {ChainEntry} entry
     * @param {Block} block
     * @returns {Promise}
     */
    disconnect(entry: ChainEntry, block: Block): Promise<any>;
    /**
     * Disconnect block.
     * @private
     * @param {ChainEntry} entry
     * @param {Block} block
     * @returns {Promise} - Returns {@link CoinView}.
     */
    private _disconnect;
    /**
     * Save state cache updates.
     * @private
     */
    private saveUpdates;
    /**
     * Reset the chain to a height or hash. Useful for replaying
     * the blockchain download for SPV.
     * @param {Hash|Number} block - hash/height
     * @returns {Promise}
     */
    reset(block: Hash | number): Promise<any>;
    /**
     * Remove all alternate chains.
     * @returns {Promise}
     */
    removeChains(): Promise<any>;
    /**
     * Remove an alternate chain.
     * @private
     * @param {Hash} hash - Alternate chain tip.
     * @returns {Promise}
     */
    private _removeChain;
    /**
     * Save a block (not an entry) to the
     * database and potentially connect the inputs.
     * @param {ChainEntry} entry
     * @param {Block} block
     * @param {CoinView?} view
     * @returns {Promise} - Returns {@link Block}.
     */
    saveBlock(entry: ChainEntry, block: Block, view: CoinView | null): Promise<any>;
    /**
     * Remove a block (not an entry) to the database.
     * Disconnect inputs.
     * @param {ChainEntry} entry
     * @returns {Promise} - Returns {@link Block}.
     */
    removeBlock(entry: ChainEntry): Promise<any>;
    /**
     * Commit coin view to database.
     * @private
     * @param {CoinView} view
     */
    private saveView;
    /**
     * Commit names to tree.
     * @private
     * @param {CoinView} view
     * @param {ChainEntry} entry
     * @param {Boolean} revert
     */
    private saveNames;
    /**
     * Commit names to tree, assuming batch is started.
     * @private
     * @param {CoinView} view
     * @param {ChainEntry} entry
     * @param {Boolean} revert
     */
    private _saveNames;
    /**
     * Connect names to tree.
     * @private
     * @param {CoinView} view
     * @param {ChainEntry} entry
     */
    private connectNames;
    /**
     * Disconnect names from tree.
     * @private
     * @param {CoinView} view
     * @param {ChainEntry} entry
     */
    private disconnectNames;
    /**
     * Connect block inputs.
     * @param {ChainEntry} entry
     * @param {Block} block
     * @param {CoinView} view
     * @returns {Promise} - Returns {@link Block}.
     */
    connectBlock(entry: ChainEntry, block: Block, view: CoinView): Promise<any>;
    /**
     * Disconnect block inputs.
     * @param {ChainEntry} entry
     * @param {Block} block
     * @returns {Promise} - Returns {@link CoinView}.
     */
    disconnectBlock(entry: ChainEntry, block: Block): Promise<any>;
    /**
     * Prune a block from the chain and
     * add current block to the prune queue.
     * @private
     * @param {ChainEntry} entry
     * @returns {Promise}
     */
    private pruneBlock;
    /**
     * Save database options.
     * @returns {Promise}
     */
    saveFlags(): Promise<any>;
    /**
     * Write database options.
     * @param {Batch} b
     */
    writeFlags(b: Batch): void;
    /**
     * Index a transaction by txid and address.
     * @private
     * @param {TX} tx
     * @param {CoinView} view
     * @param {ChainEntry} entry
     * @param {Number} index
     */
    private indexTX;
    /**
     * Remove transaction from index.
     * @private
     * @param {TX} tx
     * @param {CoinView} view
     */
    private unindexTX;
}
/**
 * Tree related state.
 */
declare class TreeState {
    treeRoot: Buffer;
    commitHeight: number;
    compactionRoot: Buffer;
    compactionHeight: number;
    committed: boolean;
    inject(state: any): TreeState;
    compact(hash: any, height: any): void;
    commit(hash: any, height: any): any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): TreeState;
}
/**
 * State Cache
 */
declare class StateCache {
    /**
     * Create state cache.
     * @alias module:blockchain.StateCache
     * @constructor
     */
    constructor(network: any);
    network: any;
    bits: any[];
    updates: any[];
    init(): void;
    set(bit: any, entry: any, state: any): void;
    get(bit: any, entry: any): any;
    commit(): void;
    drop(): void;
    insert(bit: any, hash: any, state: any): void;
}
/**
 * Chain State
 */
declare class ChainState {
    tip: Buffer;
    tx: number;
    coin: number;
    value: number;
    burned: number;
    committed: boolean;
    inject(state: any): ChainState;
    connect(block: any): void;
    disconnect(block: any): void;
    add(coin: any): void;
    spend(coin: any): void;
    burn(coin: any): void;
    unburn(coin: any): void;
    commit(hash: any): any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): ChainState;
}
import { BitField } from "../covenants/bitfield";
import ChainEntry = require("./chainentry");
import NameState = require("../covenants/namestate");
import Address = require("../primitives/address");
import Block = require("../primitives/block");
import CoinView = require("../coins/coinview");
