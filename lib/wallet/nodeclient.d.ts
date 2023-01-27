export = NodeClient;
/**
 * Node Client
 * @alias module:node.NodeClient
 */
declare class NodeClient {
    /**
     * Create a node client.
     * @constructor
     */
    constructor(node: any);
    node: any;
    network: any;
    filter: any;
    opened: boolean;
    /**
     * Initialize the client.
     */
    init(): void;
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
    bind(type: string, handler: Function): any;
    /**
     * Add a listener.
     * @param {String} type
     * @param {Function} handler
     */
    hook(type: string, handler: Function): any;
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
     * Get name state.
     * @param {Buffer} nameHash
     * @returns {Object}
     */
    getNameStatus(nameHash: Buffer): any;
    /**
     * Get UTXO.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {Object}
     */
    getCoin(hash: Hash, index: number): any;
}
