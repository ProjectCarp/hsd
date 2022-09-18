export = SigCache;
/**
 * Signature cache.
 * @alias module:script.SigCache
 * @property {Number} size
 * @property {Hash[]} keys
 * @property {Object} valid
 */
declare class SigCache {
    /**
     * Create a signature cache.
     * @constructor
     * @param {Number} [size=10000]
     */
    constructor(size?: number);
    size: number;
    keys: any[];
    valid: any;
    /**
     * Resize the sigcache.
     * @param {Number} size
     */
    resize(size: number): void;
    /**
     * Add item to the sigcache.
     * Potentially evict a random member.
     * @param {Hash} hash - Sig hash.
     * @param {Buffer} sig
     * @param {Buffer} key
     */
    add(hash: Hash, sig: Buffer, key: Buffer): void;
    /**
     * Test whether the sig exists.
     * @param {Hash} hash - Sig hash.
     * @param {Buffer} sig
     * @param {Buffer} key
     * @returns {Boolean}
     */
    has(hash: Hash, sig: Buffer, key: Buffer): boolean;
    /**
     * Verify a signature, testing
     * it against the cache first.
     * @param {Buffer} hash
     * @param {Buffer} sig
     * @param {Buffer} key
     * @returns {Boolean}
     */
    verify(hash: Buffer, sig: Buffer, key: Buffer): boolean;
}
