export = Outpoint;
/**
 * Outpoint
 * Represents a COutPoint.
 * @alias module:primitives.Outpoint
 * @property {Hash} hash
 * @property {Number} index
 */
declare class Outpoint {
    /**
     * Instantiate outpoint from hash table key.
     * @param {String} key
     * @returns {Outpoint}
     */
    static fromKey(key: string): Outpoint;
    /**
     * Instantiate outpoint from tx.
     * @param {TX} tx
     * @param {Number} index
     * @returns {Outpoint}
     */
    static fromTX(tx: TX, index: number): Outpoint;
    /**
     * Serialize outpoint to a key
     * suitable for a hash table.
     * @param {Hash} hash
     * @param {Number} index
     * @returns {String}
     */
    static toKey(hash: Hash, index: number): string;
    /**
     * Test an object to see if it is an outpoint.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isOutpoint(obj: any): boolean;
    /**
     * Create an outpoint.
     * @constructor
     * @param {Hash?} hash
     * @param {Number?} index
     */
    constructor(hash: Hash | null, index: number | null);
    hash: Hash;
    index: number;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Clone the outpoint.
     * @returns {Outpoint}
     */
    inject(prevout: any): Outpoint;
    /**
     * Test equality against another outpoint.
     * @param {Outpoint} prevout
     * @returns {Boolean}
     */
    equals(prevout: Outpoint): boolean;
    /**
     * Compare against another outpoint (BIP69).
     * @param {Outpoint} prevout
     * @returns {Number}
     */
    compare(prevout: Outpoint): number;
    /**
     * Test whether the outpoint is null (hash of zeroes
     * with max-u32 index). Used to detect coinbases.
     * @returns {Boolean}
     */
    isNull(): boolean;
    /**
     * Get little-endian hash.
     * @returns {Hash}
     */
    txid(): Hash;
    /**
     * Serialize outpoint to a key
     * suitable for a hash table.
     * @returns {String}
     */
    toKey(): string;
    /**
     * Inject properties from hash table key.
     * @private
     * @param {String} key
     * @returns {Outpoint}
     */
    private fromKey;
    /**
     * Write outpoint to a buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Calculate size of outpoint.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Inject properties from json object.
     * @private
     * @params {Object} json
     */
    private fromJSON;
    /**
     * Convert the outpoint to an object suitable
     * for JSON serialization.
     * @returns {Object}
     */
    getJSON(): any;
    /**
     * Inject properties from tx.
     * @private
     * @param {TX} tx
     * @param {Number} index
     */
    private fromTX;
    /**
     * Convert the outpoint to a user-friendly string.
     * @returns {String}
     */
    format(): string;
}
