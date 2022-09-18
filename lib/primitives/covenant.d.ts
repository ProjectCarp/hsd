export = Covenant;
/**
 * Covenant
 * @alias module:primitives.Covenant
 * @property {Number} type
 * @property {Buffer[]} items
 * @property {Number} length
 */
declare class Covenant {
    /**
     * Insantiate covenant from an array of buffers.
     * @param {Buffer[]} items
     * @returns {Covenant}
     */
    static fromArray(items: Buffer[]): Covenant;
    /**
     * Test an object to see if it is a covenant.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isCovenant(obj: any): boolean;
    /**
     * Create a covenant.
     * @constructor
     */
    constructor(type: any, items: any);
    type: number;
    items: any[];
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Get an item.
     * @param {Number} index
     * @returns {Buffer}
     */
    get(index: number): Buffer;
    /**
     * Set an item.
     * @param {Number} index
     * @param {Buffer} item
     * @returns {Buffer}
     */
    set(index: number, item: Buffer): Buffer;
    /**
     * Push an item.
     * @param {Buffer} item
     */
    push(item: Buffer): Covenant;
    /**
     * Get a uint8.
     * @param {Number} index
     * @returns {Number}
     */
    getU8(index: number): number;
    /**
     * Push a uint8.
     * @param {Number} num
     */
    pushU8(num: number): Covenant;
    /**
     * Get a uint32.
     * @param {Number} index
     * @returns {Number}
     */
    getU32(index: number): number;
    /**
     * Push a uint32.
     * @param {Number} num
     */
    pushU32(num: number): Covenant;
    /**
     * Get a hash.
     * @param {Number} index
     * @returns {Buffer}
     */
    getHash(index: number): Buffer;
    /**
     * Push a hash.
     * @param {Buffer} hash
     */
    pushHash(hash: Buffer): Covenant;
    /**
     * Get a string.
     * @param {Number} index
     * @returns {String}
     */
    getString(index: number): string;
    /**
     * Push a string.
     * @param {String} str
     */
    pushString(str: string): Covenant;
    /**
     * Test whether the covenant is known.
     * @returns {Boolean}
     */
    isKnown(): boolean;
    /**
     * Test whether the covenant is unknown.
     * @returns {Boolean}
     */
    isUnknown(): boolean;
    /**
     * Test whether the covenant is a payment.
     * @returns {Boolean}
     */
    isNone(): boolean;
    /**
     * Test whether the covenant is a claim.
     * @returns {Boolean}
     */
    isClaim(): boolean;
    /**
     * Test whether the covenant is an open.
     * @returns {Boolean}
     */
    isOpen(): boolean;
    /**
     * Test whether the covenant is a bid.
     * @returns {Boolean}
     */
    isBid(): boolean;
    /**
     * Test whether the covenant is a reveal.
     * @returns {Boolean}
     */
    isReveal(): boolean;
    /**
     * Test whether the covenant is a redeem.
     * @returns {Boolean}
     */
    isRedeem(): boolean;
    /**
     * Test whether the covenant is a register.
     * @returns {Boolean}
     */
    isRegister(): boolean;
    /**
     * Test whether the covenant is an update.
     * @returns {Boolean}
     */
    isUpdate(): boolean;
    /**
     * Test whether the covenant is a renewal.
     * @returns {Boolean}
     */
    isRenew(): boolean;
    /**
     * Test whether the covenant is a transfer.
     * @returns {Boolean}
     */
    isTransfer(): boolean;
    /**
     * Test whether the covenant is a finalize.
     * @returns {Boolean}
     */
    isFinalize(): boolean;
    /**
     * Test whether the covenant is a revocation.
     * @returns {Boolean}
     */
    isRevoke(): boolean;
    /**
     * Test whether the covenant is name-related.
     * @returns {Boolean}
     */
    isName(): boolean;
    /**
     * Test whether a covenant type should be
     * considered subject to the dust policy rule.
     * @returns {Boolean}
     */
    isDustworthy(): boolean;
    /**
     * Test whether a coin should be considered
     * unspendable in the coin selector.
     * @returns {Boolean}
     */
    isNonspendable(): boolean;
    /**
     * Test whether a covenant should be considered "linked".
     * @returns {Boolean}
     */
    isLinked(): boolean;
    /**
     * Convert covenant to an array of buffers.
     * @returns {Buffer[]}
     */
    toArray(): Buffer[];
    /**
     * Inject properties from an array of buffers.
     * @private
     * @param {Buffer[]} items
     */
    private fromArray;
    /**
     * Test whether the covenant is unspendable.
     * @returns {Boolean}
     */
    isUnspendable(): boolean;
    /**
     * Convert the covenant to a string.
     * @returns {String}
     */
    toString(): string;
    /**
     * Inject properties from covenant.
     * Used for cloning.
     * @private
     * @param {Covenant} covenant
     * @returns {Covenant}
     */
    private inject;
    /**
     * Test the covenant against a bloom filter.
     * @param {Bloom} filter
     * @returns {Boolean}
     */
    test(filter: Bloom): boolean;
    /**
     * Find a data element in a covenant.
     * @param {Buffer} data - Data element to match against.
     * @returns {Number} Index (`-1` if not present).
     */
    indexOf(data: Buffer): number;
    /**
     * Calculate size of the covenant
     * excluding the varint size bytes.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Calculate size of the covenant
     * including the varint size bytes.
     * @returns {Number}
     */
    getVarSize(): number;
    /**
     * Write covenant to a buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Encode covenant.
     * @returns {Buffer}
     */
    encode(): Buffer;
    /**
     * Convert covenant to a hex string.
     * @returns {String}
     */
    getJSON(): string;
    /**
     * Inject properties from json object.
     * @private
     * @param {String} json
     */
    private fromJSON;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Inject items from string.
     * @private
     * @param {String|String[]} items
     */
    private fromString;
    /**
     * Inspect a covenant object.
     * @returns {String}
     */
    format(): string;
}
declare namespace Covenant {
    export { types };
}
declare const types: {
    NONE: number;
    CLAIM: number;
    OPEN: number;
    BID: number;
    REVEAL: number;
    REDEEM: number;
    REGISTER: number;
    UPDATE: number;
    RENEW: number;
    TRANSFER: number;
    FINALIZE: number;
    /**
     * Get an item.
     * @param {Number} index
     * @returns {Buffer}
     */
    REVOKE: number;
};
