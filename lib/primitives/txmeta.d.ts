export = TXMeta;
/**
 * TXMeta
 * An extended transaction object.
 * @alias module:primitives.TXMeta
 */
declare class TXMeta {
    /**
     * Instantiate TXMeta from options.
     * @param {Object} options
     * @returns {TXMeta}
     */
    static fromTX(tx: any, entry: any, index: any): TXMeta;
    /**
     * Test whether an object is an TXMeta.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isTXMeta(obj: any): boolean;
    /**
     * Create an extended transaction.
     * @constructor
     * @param {Object?} options
     */
    constructor(options: any | null);
    tx: TX;
    mtime: number;
    height: number;
    block: any;
    time: number;
    index: number;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromTX;
    /**
     * Inspect the transaction.
     * @returns {Object}
     */
    format(view: any): any;
    /**
     * Convert the transaction to an object suitable
     * for JSON serialization.
     * @param {Network} network
     * @param {CoinView} view
     * @returns {Object}
     */
    getJSON(network: Network, view: CoinView, chainHeight: any): any;
    /**
     * Inject properties from a json object.
     * @private
     * @param {Object} json
     */
    private fromJSON;
    /**
     * Calculate serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize a transaction to "extended format".
     * This is the serialization format we use internally
     * to store transactions in the database. The extended
     * serialization includes the height, block hash, index,
     * timestamp, and pending-since time.
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
    /**
     * Inject properties from "extended" serialization format.
     * @private
     * @param {Buffer} data
     */
    private read;
}
import TX = require("./tx");
