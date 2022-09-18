export = FileBlockStore;
/**
 * File Block Store
 *
 * @alias module:blockstore:FileBlockStore
 * @abstract
 */
declare class FileBlockStore extends AbstractBlockStore {
    location: any;
    indexLocation: string;
    db: any;
    name: string;
    version: number;
    maxFileLength: any;
    network: Network;
    writing: any;
    /**
     * Compares the number of files in the directory
     * with the recorded number of files.
     * @param {Number} type - The type of block data
     * @private
     * @returns {Promise<Object>}
     */
    private check;
    /**
     * Creates indexes from files for a block type. Reads the hash of
     * the block data from the magic prefix, except for a block which
     * the hash is read from the block header.
     * @private
     * @param {Number} type - The type of block data
     * @returns {Promise}
     */
    private _index;
    /**
     * Compares the number of files in the directory
     * with the recorded number of files. If there are any
     * inconsistencies it will reindex all blocks.
     * @private
     * @returns {Promise}
     */
    private index;
    /**
     * This closes the file block store and underlying
     * indexing databases.
     */
    close(): Promise<void>;
    /**
     * This method will determine the file path based on the file number
     * and the current block data location.
     * @private
     * @param {Number} type - The type of block data
     * @param {Number} fileno - The number of the file.
     * @returns {Promise}
     */
    private filepath;
    /**
     * This method will select and potentially allocate a file to
     * write a block based on the size and type.
     * @private
     * @param {Number} type - The type of block data
     * @param {Number} length - The number of bytes
     * @returns {Promise}
     */
    private allocate;
    /**
     * This method stores block data in files with by appending
     * data to the last written file and updating indexes to point
     * to the file and position.
     * @private
     * @param {Number} type - The type of block data
     * @param {Buffer} hash - The block hash
     * @param {Buffer} data - The block data
     * @returns {Promise}
     */
    private _write;
    /**
     * This methods reads data from disk by retrieving the index of
     * the data and reading from the corresponding file and location.
     * @private
     * @param {Number} type - The type of block data
     * @param {Buffer} hash - The block hash
     * @param {Number} offset - The offset within the block
     * @param {Number} length - The number of bytes of the data
     * @returns {Promise}
     */
    private _read;
    /**
     * This will free resources for storing the block data. The block
     * data may not be deleted from disk immediately, the index for the
     * block is removed and will not be able to be read. The underlying
     * file is unlinked when all blocks in a file have been pruned.
     * @private
     * @param {Buffer} hash - The block hash
     * @returns {Promise}
     */
    private _prune;
    /**
     * Create batch.
     * @returns {FileBatch}
     */
    batch(): FileBatch;
}
import AbstractBlockStore = require("./abstract");
import Network = require("../protocol/network");
/**
 * Batch operations for fileblockstore.
 * Currently, this is not meant for atomicity or performance improvements,
 * but to have better interface for chaindb.
 * Proper implementation could use single batch for
 * leveldb updates after all file writes.
 * @alias module:blockstore.FileBatch
 */
declare class FileBatch {
    /**
     * Create AbstractBatch.
     * @constructor
     */
    constructor(blocks: any);
    blocks: any;
    writes: any[];
    prunes: any[];
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
    /**
     * Commit only writes.
     * @returns {Promise}
     */
    commitWrites(): Promise<any>;
    /**
     * Commit only prunes.
     * @returns {Promise}
     */
    commitPrunes(): Promise<any>;
    /**
     * Commit both.
     * @returns {Promise}
     */
    commit(): Promise<any>;
}
