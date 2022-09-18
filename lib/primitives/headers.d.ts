export = Headers;
/**
 * Headers
 * Represents block headers obtained
 * from the network via `headers`.
 * @alias module:primitives.Headers
 * @extends AbstractBlock
 */
declare class Headers extends AbstractBlock {
    /**
     * Instantiate headers from serialized data.
     * @param {Buffer} data
     * @returns {Headers}
     */
    static fromHead(data: Buffer): Headers;
    /**
     * Instantiate headers from a chain entry.
     * @param {ChainEntry} entry
     * @returns {Headers}
     */
    static fromEntry(entry: ChainEntry): Headers;
    /**
     * Convert the block to a headers object.
     * @param {Block|MerkleBlock} block
     * @returns {Headers}
     */
    static fromBlock(block: Block | MerkleBlock): Headers;
    /**
     * Test an object to see if it is a Headers object.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isHeaders(obj: any): boolean;
    /**
     * Create headers.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    /**
     * Get size of the headers.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize the headers to a buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {Buffer} data
     */
    private read;
    /**
     * Convert the block to a headers object.
     * @returns {Headers}
     */
    toHeaders(): Headers;
    /**
     * Convert the block to an object suitable
     * for JSON serialization.
     * @param {Network} network
     * @param {CoinView} view
     * @param {Number} height
     * @returns {Object}
     */
    getJSON(network: Network, view: CoinView, height: number): any;
    /**
     * Inject properties from json object.
     * @private
     * @param {Object} json
     */
    private fromJSON;
    /**
     * Inspect the headers and return a more
     * user-friendly representation of the data.
     * @param {CoinView} view
     * @param {Number} height
     * @returns {Object}
     */
    format(view: CoinView, height: number): any;
}
import AbstractBlock = require("./abstractblock");
