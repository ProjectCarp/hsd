export = ClaimEntry;
/**
 * Claim Entry
 * Represents a claim entry.
 * @alias module:mempool.ClaimEntry
 */
declare class ClaimEntry {
    /**
     * Create a mempool entry from a claim.
     * @param {Claim} claim
     * @param {Object} data
     * @param {Number} height - Entry height.
     * @returns {ClaimEntry}
     */
    static fromClaim(claim: Claim, data: any, height: number): ClaimEntry;
    /**
     * Create a claim entry.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    blob: Buffer;
    hash: Buffer;
    nameHash: Buffer;
    name: Buffer;
    height: number;
    size: number;
    address: Address;
    value: number;
    fee: number;
    rate: number;
    time: number;
    weak: boolean;
    commitHash: Buffer;
    commitHeight: number;
    inception: number;
    expiration: number;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Inject properties from claim.
     * @private
     * @param {Claim} claim
     * @param {Object} data
     * @param {Number} height
     */
    private fromClaim;
    /**
     * Get fee.
     * @returns {Amount}
     */
    getFee(): Amount;
    /**
     * Calculate fee rate.
     * @returns {Rate}
     */
    getRate(): Rate;
    /**
     * Calculate the memory usage of a claim.
     * @returns {Number} Usage in bytes.
     */
    memUsage(): number;
    /**
     * Get entry serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize entry to a buffer.
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     * @returns {ClaimEntry}
     */
    private read;
}
import Address = require("../primitives/address");
