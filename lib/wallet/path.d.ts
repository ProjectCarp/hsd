export = Path;
/**
 * Path
 * @alias module:wallet.Path
 * @property {String} name - Account name.
 * @property {Number} account - Account index.
 * @property {Number} branch - Branch index.
 * @property {Number} index - Address index.
 */
declare class Path {
    /**
     * Instantiate path from address.
     * @param {Account} account
     * @param {Address} address
     * @returns {Path}
     */
    static fromAddress(account: Account, address: Address): Path;
    /**
     * Inject properties from a json object.
     * @param {Object} json
     * @returns {Path}
     */
    static fromJSON(json: any): Path;
    /**
     * Create a path.
     * @constructor
     * @param {Object} [options]
     */
    constructor(options?: any);
    keyType: number;
    name: any;
    account: number;
    version: number;
    branch: number;
    index: number;
    encrypted: boolean;
    data: any;
    hash: any;
    /**
     * Instantiate path from options object.
     * @private
     * @param {Object} options
     * @returns {Path}
     */
    private fromOptions;
    /**
     * Clone the path object.
     * @returns {Path}
     */
    inject(path: any): Path;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     */
    private read;
    /**
     * Calculate serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize path.
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
    /**
     * Inject properties from address.
     * @private
     * @param {Account} account
     * @param {Address} address
     */
    private fromAddress;
    /**
     * Convert path object to string derivation path.
     * @param {(String|Network)?} network - Network type.
     * @returns {String}
     */
    toPath(network: (string | Network) | null): string;
    /**
     * Convert path object to an address (currently unused).
     * @returns {Address}
     */
    toAddress(): Address;
    /**
     * Convert path to a json-friendly object.
     * @param {(String|Network)?} network - Network type.
     * @returns {Object}
     */
    getJSON(network: (string | Network) | null): any;
    /**
     * Inject properties from a json object.
     * @param {Object} json
     * @returns {Path}
     */
    fromJSON(json: any): Path;
    /**
     * Inspect the path.
     * @returns {String}
     */
    format(): string;
}
declare namespace Path {
    namespace types {
        const HD: number;
        const KEY: number;
        const ADDRESS: number;
    }
    /**
     * *
     */
    type types = number;
    /**
     * *
     */
    type typesByVal = number;
    const typesByVal: string[];
}
import Network = require("../protocol/network");
import Address = require("../primitives/address");
