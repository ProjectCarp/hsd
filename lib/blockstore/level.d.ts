export = LevelBlockStore;
/**
 * LevelDB Block Store
 *
 * @alias module:blockstore:LevelBlockStore
 * @abstract
 */
declare class LevelBlockStore extends AbstractBlockStore {
    location: any;
    db: any;
    /**
     * Closes the block storage.
     */
    close(): Promise<void>;
    /**
     * Create batch.
     * @returns {LevelBatch}
     */
    batch(): LevelBatch;
}
import AbstractBlockStore = require("./abstract");
/**
 * Batch wrapper for the level blockstore.
 * @alias module:blockstore.LevelBatch
 */
declare class LevelBatch {
    /**
     * Create LevelBatch
     * @param {DB} db
     */
    constructor(db: DB);
    writesBatch: any;
    prunesBatch: any;
    committedWrites: boolean;
    committedPrunes: boolean;
    get written(): boolean;
    /**
     * Write merkle block data to the batch.
     * @property {Buffer} hash
     * @property {Buffer} data
     * @returns {Batch}
     */
    writeMerkle(hash: any, data: any): Batch;
    /**
     * Write undo coin data to the batch.
     * @param {Buffer} hash
     * @param {Buffer} data
     * @returns {Batch}
     */
    writeUndo(hash: Buffer, data: Buffer): Batch;
    /**
     * Write block data to the batch.
     * @param {Buffer} hash
     * @param {Buffer} data
     * @returns {Batch}
     */
    writeBlock(hash: Buffer, data: Buffer): Batch;
    /**
     * Remove merkle block data from the batch.
     * @param {Buffer} hash
     * @returns {Batch}
     */
    pruneMerkle(hash: Buffer): Batch;
    /**
     * Remove undo data from the batch.
     * @param {Buffer} hash
     * @returns {Batch}
     */
    pruneUndo(hash: Buffer): Batch;
    /**
     * Prune block data from the batch.
     * @param {Buffer} hash
     * @returns {Batch}
     */
    pruneBlock(hash: Buffer): Batch;
    /**
     * Clear the batch.
     * @returns {Batch}
     */
    clear(): Batch;
    commitWrites(): Promise<void>;
    commitPrunes(): Promise<void>;
    /**
     * Write change to the store.
     * @returns {Promise}
     */
    commit(): Promise<any>;
}
