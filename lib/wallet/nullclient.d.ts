export = NullClient;
/**
 * Null Client
 * Sort of a fake local client for separation of concerns.
 * @alias module:node.NullClient
 */
declare class NullClient extends EventEmitter {
    /**
     * Create a client.
     * @constructor
     */
    constructor(wdb: any);
    wdb: any;
    network: any;
    opened: boolean;
    /**
     * Open the client.
     * @returns {Promise}
     */
    open(options: any): Promise<any>;
    /**
     * Close the client.
     * @returns {Promise}
     */
    close(): Promise<any>;
    /**
     * Add a listener.
     * @param {String} type
     * @param {Function} handler
     */
    bind(type: string, handler: Function): NullClient;
    /**
     * Add a listener.
     * @param {String} type
     * @param {Function} handler
     */
    hook(type: string, handler: Function): NullClient;
    /**
     * Get chain tip.
     * @returns {Promise}
     */
    getTip(): Promise<any>;
    /**
     * Get chain entry.
     * @param {Hash} hash
     * @returns {Promise}
     */
    getEntry(hash: Hash): Promise<any>;
    /**
     * Send a transaction. Do not wait for promise.
     * @param {TX} tx
     * @returns {Promise}
     */
    send(tx: TX): Promise<any>;
    /**
     * Send a claim. Do not wait for promise.
     * @param {Claim} claim
     * @returns {Promise}
     */
    sendClaim(claim: Claim): Promise<any>;
    /**
     * Set bloom filter.
     * @param {Bloom} filter
     * @returns {Promise}
     */
    setFilter(filter: Bloom): Promise<any>;
    /**
     * Add data to filter.
     * @param {Buffer} data
     * @returns {Promise}
     */
    addFilter(data: Buffer): Promise<any>;
    /**
     * Reset filter.
     * @returns {Promise}
     */
    resetFilter(): Promise<any>;
    /**
     * Esimate smart fee.
     * @param {Number?} blocks
     * @returns {Promise}
     */
    estimateFee(blocks: number | null): Promise<any>;
    /**
     * Get hash range.
     * @param {Number} start
     * @param {Number} end
     * @returns {Promise}
     */
    getHashes(start?: number, end?: number): Promise<any>;
    /**
     * Rescan for any missed transactions.
     * @param {Number|Hash} start - Start block.
     * @param {Bloom} filter
     * @param {Function} iter - Iterator.
     * @returns {Promise}
     */
    rescan(start: number | Hash): Promise<any>;
    /**
     * Get opening bid height.
     * @param {Buffer} nameHash
     * @returns {Object}
     */
    getNameStatus(nameHash: Buffer): any;
}
import EventEmitter = require("events");
