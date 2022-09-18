export = Input;
/**
 * Input
 * Represents a transaction input.
 * @alias module:primitives.Input
 * @property {Outpoint} prevout - Outpoint.
 * @property {Script} script - Input script / scriptSig.
 * @property {Number} sequence - nSequence.
 * @property {Witness} witness - Witness (empty if not present).
 */
declare class Input {
    /**
     * Instantiate input from outpoint.
     * @param {Outpoint}
     * @returns {Input}
     */
    static fromOutpoint(outpoint: any): Input;
    /**
     * Instantiate input from coin.
     * @param {Coin}
     * @returns {Input}
     */
    static fromCoin(coin: any): Input;
    /**
     * Instantiate input from tx.
     * @param {TX} tx
     * @param {Number} index
     * @returns {Input}
     */
    static fromTX(tx: TX, index: number): Input;
    /**
     * Test an object to see if it is an Input.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isInput(obj: any): boolean;
    /**
     * Create transaction input.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    prevout: Outpoint;
    witness: Witness;
    sequence: number;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Clone the input.
     * @returns {Input}
     */
    inject(input: any): Input;
    /**
     * Test equality against another input.
     * @param {Input} input
     * @returns {Boolean}
     */
    equals(input: Input): boolean;
    /**
     * Compare against another input (BIP69).
     * @param {Input} input
     * @returns {Number}
     */
    compare(input: Input): number;
    /**
     * Get the previous output script's address. Will "guess"
     * based on the input script and/or witness if coin
     * is not available.
     * @param {Coin?} coin
     * @returns {Address?} addr
     */
    getAddress(coin: Coin): Address;
    /**
     * Get the address hash.
     * @param {Coin?} coin
     * @returns {Hash} hash
     */
    getHash(coin: Coin): Hash;
    /**
     * Test to see if nSequence is equal to uint32max.
     * @returns {Boolean}
     */
    isFinal(): boolean;
    /**
     * Test to see if outpoint is null.
     * @returns {Boolean}
     */
    isCoinbase(): boolean;
    /**
     * Convert the input to a more user-friendly object.
     * @param {Coin?} coin
     * @returns {Object}
     */
    format(coin: Coin): any;
    /**
     * Convert the input to an object suitable
     * for JSON serialization.
     * @param {Network} network
     * @param {Coin} coin
     * @param {Path} path
     * @returns {Object}
     */
    getJSON(network: Network, coin: Coin, path: Path): any;
    /**
     * Inject properties from a JSON object.
     * @private
     * @param {Object} json
     */
    private fromJSON;
    /**
     * Calculate size of serialized input.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Write the input to a buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Inject properties from outpoint.
     * @private
     * @param {Outpoint} outpoint
     */
    private fromOutpoint;
    /**
     * Inject properties from coin.
     * @private
     * @param {Coin} coin
     */
    private fromCoin;
    /**
     * Inject properties from transaction.
     * @private
     * @param {TX} tx
     * @param {Number} index
     */
    private fromTX;
}
import Outpoint = require("./outpoint");
import Witness = require("../script/witness");
import Network = require("../protocol/network");
