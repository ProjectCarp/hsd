export = Output;
/**
 * Represents a transaction output.
 * @alias module:primitives.Output
 * @property {Amount} value
 * @property {Address} address
 */
declare class Output {
    /**
     * Instantiate output from address/value pair.
     * @param {Address} address
     * @param {Amount} value
     * @returns {Output}
     */
    static fromScript(address: Address, value: Amount): Output;
    /**
     * Test an object to see if it is an Output.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isOutput(obj: any): boolean;
    /**
     * Create an output.
     * @constructor
     * @param {Object?} options
     */
    constructor(options: any | null);
    value: number;
    address: Address;
    covenant: Covenant;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Inject properties from address/value pair.
     * @private
     * @param {Address} address
     * @param {Amount} value
     * @returns {Output}
     */
    private fromScript;
    /**
     * Clone the output.
     * @returns {Output}
     */
    inject(output: any): Output;
    /**
     * Test equality against another output.
     * @param {Output} output
     * @returns {Boolean}
     */
    equals(output: Output): boolean;
    /**
     * Compare against another output (BIP69).
     * @param {Output} output
     * @returns {Number}
     */
    compare(output: Output): number;
    /**
     * Get the address.
     * @returns {Address} address
     */
    getAddress(): Address;
    /**
     * Get the address hash.
     * @returns {Hash} hash
     */
    getHash(): Hash;
    /**
     * Convert the input to a more user-friendly object.
     * @returns {Object}
     */
    format(): any;
    /**
     * Convert the output to an object suitable
     * for JSON serialization.
     * @param {Network} network
     * @returns {Object}
     */
    getJSON(network: Network): any;
    /**
     * Calculate the dust threshold for this
     * output, based on serialize size and rate.
     * @param {Rate?} rate
     * @returns {Amount}
     */
    getDustThreshold(rate: Rate | null): Amount;
    /**
     * Calculate size of serialized output.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Test whether the output should be considered dust.
     * @param {Rate?} rate
     * @returns {Boolean}
     */
    isDust(rate: Rate | null): boolean;
    /**
     * Test whether the output is unspendable.
     * @returns {Boolean}
     */
    isUnspendable(): boolean;
    /**
     * Inject properties from a JSON object.
     * @private
     * @param {Object} json
     */
    private fromJSON;
    /**
     * Write the output to a buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
import Address = require("../primitives/address");
import Covenant = require("./covenant");
import Network = require("../protocol/network");
import Amount = require("../ui/amount");
