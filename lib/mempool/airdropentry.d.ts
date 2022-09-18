export = AirdropEntry;
/**
 * Airdrop Entry
 * Represents a airdrop entry.
 * @alias module:mempool.AirdropEntry
 */
declare class AirdropEntry {
    /**
     * Create a mempool entry from an airdrop proof.
     * @param {AirdropProof} proof
     * @param {Object} data
     * @param {Number} height - Entry height.
     * @returns {AirdropEntry}
     */
    static fromAirdrop(proof: AirdropProof, height: number): AirdropEntry;
    /**
     * Create an airdrop entry.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    blob: Buffer;
    hash: Buffer;
    position: number;
    height: number;
    size: number;
    address: Address;
    value: number;
    fee: number;
    rate: number;
    time: number;
    weak: boolean;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Inject properties from airdrop.
     * @private
     * @param {AirdropProof} proof
     * @param {Number} height
     */
    private fromAirdrop;
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
     * Calculate the memory usage of an airdrop proof.
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
     * @returns {AirdropEntry}
     */
    private read;
}
import Address = require("../primitives/address");
