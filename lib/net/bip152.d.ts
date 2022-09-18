/**
 * Compact Block
 * Represents a compact block (bip152): `cmpctblock` packet.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki
 * @extends AbstractBlock
 * @property {Buffer|null} keyNonce - Nonce for siphash key.
 * @property {Number[]} ids - Short IDs.
 * @property {Object[]} ptx - Prefilled transactions.
 * @property {TX[]} available - Available transaction vector.
 * @property {Object} idMap - Map of short ids to indexes.
 * @property {Number} count - Transactions resolved.
 * @property {Buffer|null} sipKey - Siphash key.
 */
export class CompactBlock extends AbstractBlock {
    /**
     * Instantiate compact block from a block.
     * @param {Block} block
     * @param {Buffer?} nonce
     * @returns {CompactBlock}
     */
    static fromBlock(block: Block, nonce: Buffer | null): CompactBlock;
    /**
     * Create a compact block.
     * @constructor
     * @param {Object?} options
     */
    constructor(options: any | null);
    keyNonce: any;
    ids: any[];
    ptx: any[];
    available: any[];
    idMap: Map<any, any>;
    count: number;
    sipKey: Buffer;
    totalTX: number;
    now: number;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Calculate block serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize block to buffer writer.
     * @private
     * @param {BufferWriter} bw
     */
    private write;
    /**
     * Convert block to a TXRequest
     * containing missing indexes.
     * @returns {TXRequest}
     */
    toRequest(): TXRequest;
    /**
     * Attempt to fill missing transactions from mempool.
     * @param {Mempool} mempool
     * @returns {Boolean}
     */
    fillMempool(mempool: Mempool): boolean;
    /**
     * Attempt to fill missing transactions from TXResponse.
     * @param {TXResponse} res
     * @returns {Boolean}
     */
    fillMissing(res: TXResponse): boolean;
    /**
     * Calculate a transaction short ID.
     * @param {Hash} hash
     * @returns {Number}
     */
    sid(hash: Hash): number;
    /**
     * Test whether an index is available.
     * @param {Number} index
     * @returns {Boolean}
     */
    hasIndex(index: number): boolean;
    /**
     * Initialize the siphash key.
     * @private
     * @returns {Buffer}
     */
    private getKey;
    /**
     * Initialize compact block and short id map.
     * @private
     */
    private init;
    /**
     * Convert completely filled compact
     * block to a regular block.
     * @returns {Block}
     */
    toBlock(): Block;
    /**
     * Inject properties from block.
     * @private
     * @param {Block} block
     * @param {Buffer?} nonce
     * @returns {CompactBlock}
     */
    private fromBlock;
    /**
     * Convert block to headers.
     * @returns {Headers}
     */
    toHeaders(): Headers;
}
/**
 * TX Request
 * Represents a BlockTransactionsRequest (bip152): `getblocktxn` packet.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki
 * @property {Hash} hash
 * @property {Number[]} indexes
 */
export class TXRequest {
    /**
     * Instantiate request from compact block.
     * @param {CompactBlock} block
     * @returns {TXRequest}
     */
    static fromCompact(block: CompactBlock): TXRequest;
    /**
     * TX Request
     * @constructor
     * @param {Object?} options
     */
    constructor(options: any | null);
    hash: Buffer;
    indexes: any[];
    /**
     * Inject properties from options.
     * @private
     * @param {Object} options
     * @returns {TXRequest}
     */
    private fromOptions;
    /**
     * Inject properties from compact block.
     * @private
     * @param {CompactBlock} block
     * @returns {TXRequest}
     */
    private fromCompact;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     * @returns {TXRequest}
     */
    private read;
    /**
     * Calculate request serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Write serialized request to buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
}
/**
 * TX Response
 * Represents BlockTransactions (bip152): `blocktxn` packet.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki
 * @property {Hash} hash
 * @property {TX[]} txs
 */
export class TXResponse {
    /**
     * Instantiate response from block.
     * @param {Block} block
     * @returns {TXResponse}
     */
    static fromBlock(block: Block, req: any): TXResponse;
    /**
     * Create a tx response.
     * @constructor
     * @param {Object?} options
     */
    constructor(options: any | null);
    hash: Buffer;
    txs: any[];
    /**
     * Inject properties from options.
     * @private
     * @param {Object} options
     * @returns {TXResponse}
     */
    private fromOptions;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     * @returns {TXResponse}
     */
    private read;
    /**
     * Inject properties from block.
     * @private
     * @param {Block} block
     * @returns {TXResponse}
     */
    private fromBlock;
    /**
     * Calculate request serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Write serialized response to buffer writer.
     * @private
     * @param {BufferWriter} bw
     */
    private write;
}
import AbstractBlock = require("../primitives/abstractblock");
import Block = require("../primitives/block");
import Headers = require("../primitives/headers");
