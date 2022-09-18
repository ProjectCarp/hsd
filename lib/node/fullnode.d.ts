export = FullNode;
/**
 * Full Node
 * Respresents a fullnode complete with a
 * chain, mempool, miner, etc.
 * @alias module:node.FullNode
 * @extends Node
 */
declare class FullNode extends Node {
    /**
     * Create a full node.
     * @constructor
     * @param {Object?} options
     */
    constructor(options: any | null);
    opened: boolean;
    blocks: blockstore.FileBlockStore | blockstore.LevelBlockStore;
    chain: Chain;
    fees: Fees;
    mempool: Mempool;
    pool: Pool;
    miner: Miner;
    rpc: RPC;
    http: HTTP;
    ns: RootServer;
    rs: RecursiveServer;
    /**
     * Initialize the node.
     * @private
     */
    private init;
    /**
     * Open the node and all its child objects,
     * wait for the database to load.
     * @alias FullNode#open
     * @returns {Promise}
     */
    open(): Promise<any>;
    /**
     * Close the node, wait for the database to close.
     * @alias FullNode#close
     * @returns {Promise}
     */
    close(): Promise<any>;
    /**
     * Rescan for any missed transactions.
     * @param {Number|Hash} start - Start block.
     * @param {Bloom} filter
     * @param {Function} iter - Iterator.
     * @returns {Promise}
     */
    scan(start: number | Hash, filter: Bloom, iter: Function): Promise<any>;
    /**
     * Broadcast a transaction.
     * @param {TX|Block|Claim|AirdropProof} item
     * @returns {Promise}
     */
    broadcast(item: TX | Block | Claim | AirdropProof): Promise<any>;
    /**
     * Add transaction to mempool, broadcast.
     * @param {TX} tx
     */
    sendTX(tx: TX): Promise<void>;
    /**
     * Add transaction to mempool, broadcast. Silence errors.
     * @param {TX} tx
     * @returns {Promise}
     */
    relay(tx: TX): Promise<any>;
    /**
     * Add claim to mempool, broadcast.
     * @param {Claim} claim
     */
    sendClaim(claim: Claim): Promise<void>;
    /**
     * Add claim to mempool, broadcast. Silence errors.
     * @param {Claim} claim
     * @returns {Promise}
     */
    relayClaim(claim: Claim): Promise<any>;
    /**
     * Add airdrop proof to mempool, broadcast.
     * @param {AirdropProof} proof
     */
    sendAirdrop(proof: AirdropProof): Promise<void>;
    /**
     * Add airdrop proof to mempool, broadcast. Silence errors.
     * @param {AirdropProof} proof
     * @returns {Promise}
     */
    relayAirdrop(proof: AirdropProof): Promise<any>;
    /**
     * Connect to the network.
     * @returns {Promise}
     */
    connect(): Promise<any>;
    /**
     * Disconnect from the network.
     * @returns {Promise}
     */
    disconnect(): Promise<any>;
    /**
     * Start the blockchain sync.
     */
    startSync(): void;
    /**
     * Stop syncing the blockchain.
     */
    stopSync(): void;
    /**
     * Retrieve a block from the chain database.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link Block}.
     */
    getBlock(hash: Hash): Promise<any>;
    /**
     * Retrieve a coin from the mempool or chain database.
     * Takes into account spent coins in the mempool.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Promise} - Returns {@link Coin}.
     */
    getCoin(hash: Hash, index: number): Promise<any>;
    /**
     * Get coins that pertain to an address from the mempool or chain database.
     * Takes into account spent coins in the mempool.
     * @param {Address} addrs
     * @returns {Promise} - Returns {@link Coin}[].
     */
    getCoinsByAddress(addrs: Address): Promise<any>;
    /**
     * Retrieve transactions pertaining to an
     * address from the mempool or chain database.
     * @param {Address} addrs
     * @returns {Promise} - Returns {@link TXMeta}[].
     */
    getMetaByAddress(addrs: Address): Promise<any>;
    /**
     * Retrieve a transaction from the mempool or chain database.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link TXMeta}.
     */
    getMeta(hash: Hash): Promise<any>;
    /**
     * Retrieve a spent coin viewpoint from mempool or chain database.
     * @param {TXMeta} meta
     * @returns {Promise} - Returns {@link CoinView}.
     */
    getMetaView(meta: TXMeta): Promise<any>;
    /**
     * Retrieve transactions pertaining to an
     * address from the mempool or chain database.
     * @param {Address} addrs
     * @returns {Promise} - Returns {@link TX}[].
     */
    getTXByAddress(addrs: Address): Promise<any>;
    /**
     * Retrieve a transaction from the mempool or chain database.
     * @param {Hash} hash
     * @returns {Promise} - Returns {@link TX}.
     */
    getTX(hash: Hash): Promise<any>;
    /**
     * Test whether the mempool or chain contains a transaction.
     * @param {Hash} hash
     * @returns {Promise} - Returns Boolean.
     */
    hasTX(hash: Hash): Promise<any>;
    /**
     * Get current name state.
     * @param {Buffer} nameHash
     * @returns {NameState}
     */
    getNameStatus(nameHash: Buffer): NameState;
}
import Node = require("./node");
import blockstore = require("../blockstore");
import Chain = require("../blockchain/chain");
import Fees = require("../mempool/fees");
import Mempool = require("../mempool/mempool");
import Pool = require("../net/pool");
import Miner = require("../mining/miner");
import RPC = require("./rpc");
import HTTP = require("./http");
import { RootServer } from "../dns/server";
import { RecursiveServer } from "../dns/server";
