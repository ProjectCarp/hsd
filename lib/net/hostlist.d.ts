/**
 * Host Entry
 * @alias module:net.HostEntry
 * @property {NetAddress} addr - host address.
 * @property {NetAddress} src - the first address we discovered this entry
 *                              from.
 * @property {Boolean} used - is it in the used set.
 * @property {Number} refCount - Reference count in new buckets.
 * @property {Number} attempts - connection attempts since last successful one.
 * @property {Number} lastSuccess - last success timestamp.
 * @property {Number} lastAttempt - last attempt timestamp.
 */
export class HostEntry {
    /**
     * Instantiate host entry from options.
     * @param {NetAddress} addr
     * @param {NetAddress} src
     * @returns {HostEntry}
     */
    static fromOptions(addr: NetAddress, src: NetAddress): HostEntry;
    /**
     * Instantiate host entry from json object.
     * @param {Object} json
     * @param {Network} network
     * @returns {HostEntry}
     */
    static fromJSON(json: any, network: Network): HostEntry;
    /**
     * Create a host entry.
     * @constructor
     * @param {NetAddress} addr
     * @param {NetAddress} src
     */
    constructor(addr: NetAddress, src: NetAddress);
    addr: NetAddress;
    src: NetAddress;
    prev: any;
    next: any;
    used: boolean;
    refCount: number;
    attempts: number;
    lastSuccess: number;
    lastAttempt: number;
    /**
     * Inject properties from options.
     * @private
     * @param {NetAddress} addr
     * @param {NetAddress} src
     * @returns {HostEntry}
     */
    private fromOptions;
    /**
     * Get key suitable for a hash table (hostname).
     * @returns {String}
     */
    key(): string;
    /**
     * Get host priority.
     * @param {Number} now
     * @returns {Number}
     */
    chance(now: number): number;
    /**
     * Inspect host address.
     * @returns {Object}
     */
    inspect(): any;
    /**
     * Convert host entry to json-friendly object.
     * @returns {Object}
     */
    toJSON(): any;
    /**
     * Inject properties from json object.
     * @private
     * @param {Object} json
     * @param {Network} network
     * @returns {HostEntry}
     */
    private fromJSON;
}
import NetAddress = require("./netaddress");
import Network = require("../protocol/network");
