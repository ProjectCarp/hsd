export = MempoolEntry;
/**
 * Mempool Entry
 * Represents a mempool entry.
 * @alias module:mempool.MempoolEntry
 * @property {TX} tx
 * @property {Number} height
 * @property {Number} priority
 * @property {Number} time
 * @property {Amount} value
 */
declare class MempoolEntry {
    /**
     * Create a mempool entry from a TX.
     * @param {TX} tx
     * @param {Number} height - Entry height.
     * @returns {MempoolEntry}
     */
    static fromTX(tx: TX, view: any, height: number): MempoolEntry;
    /**
     * Create a mempool entry.
     * @constructor
     * @param {Object} options
     * @param {TX} options.tx - Transaction in mempool.
     * @param {Number} options.height - Entry height.
     * @param {Number} options.priority - Entry priority.
     * @param {Number} options.time - Entry time.
     * @param {Amount} options.value - Value of on-chain coins.
     */
    constructor(options: {
        tx: TX;
        height: number;
        priority: number;
        time: number;
        value: Amount;
    });
    tx: any;
    height: number;
    size: number;
    sigops: number;
    priority: number;
    fee: number;
    deltaFee: number;
    time: number;
    value: number;
    coinbase: boolean;
    dependencies: boolean;
    descFee: number;
    descSize: number;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Inject properties from transaction.
     * @private
     * @param {TX} tx
     * @param {Number} height
     */
    private fromTX;
    /**
     * Calculate transaction hash.
     * @returns {Hash}
     */
    hash(): Hash;
    /**
     * Calculate reverse transaction hash.
     * @returns {Hash}
     */
    txid(): Hash;
    /**
     * Calculate priority, taking into account
     * the entry height delta, modified size,
     * and chain value.
     * @param {Number} height
     * @returns {Number} Priority.
     */
    getPriority(height: number): number;
    /**
     * Get fee.
     * @returns {Amount}
     */
    getFee(): Amount;
    /**
     * Get delta fee.
     * @returns {Amount}
     */
    getDeltaFee(): Amount;
    /**
     * Calculate fee rate.
     * @returns {Rate}
     */
    getRate(): Rate;
    /**
     * Calculate delta fee rate.
     * @returns {Rate}
     */
    getDeltaRate(): Rate;
    /**
     * Calculate fee cumulative descendant rate.
     * @returns {Rate}
     */
    getDescRate(): Rate;
    /**
     * Calculate the memory usage of a transaction.
     * Note that this only calculates the JS heap
     * size. Sizes of buffers are ignored (the v8
     * heap is what we care most about). All numbers
     * are based on the output of v8 heap snapshots
     * of TX objects.
     * @returns {Number} Usage in bytes.
     */
    memUsage(): number;
    /**
     * Test whether the entry is free with
     * the current priority (calculated by
     * current height).
     * @param {Number} height
     * @returns {Boolean}
     */
    isFree(height: number): boolean;
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
     * @returns {MempoolEntry}
     */
    private read;
}
import TX = require("../primitives/tx");
