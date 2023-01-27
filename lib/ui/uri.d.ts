export = URI;
/**
 * URI
 * Represents a handshake URI.
 * @alias module:ui.URI
 * @property {Address} address
 * @property {Amount} amount
 * @property {String|null} label
 * @property {String|null} message
 * @property {String|null} request
 */
declare class URI {
    /**
     * Instantiate URI from options.
     * @param {Object|String} options
     * @returns {URI}
     */
    static fromOptions(options: any | string): URI;
    /**
     * Instantiate uri from string.
     * @param {String} str
     * @param {Network?} network
     * @returns {URI}
     */
    static fromString(str: string, network: Network): URI;
    /**
     * Create a handshake URI.
     * @alias module:ui.URI
     * @constructor
     * @param {Object|String} options
     */
    constructor(options: any | string);
    address: Address;
    amount: number;
    label: any;
    message: any;
    request: any;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object|String} options
     * @returns {URI}
     */
    private fromOptions;
    /**
     * Parse and inject properties from string.
     * @private
     * @param {String} str
     * @param {Network?} network
     * @returns {URI}
     */
    private fromString;
    /**
     * Serialize uri to a string.
     * @returns {String}
     */
    toString(): string;
    /**
     * Inspect handshake uri.
     * @returns {String}
     */
    inspect(): string;
}
import Address = require("../primitives/address");
