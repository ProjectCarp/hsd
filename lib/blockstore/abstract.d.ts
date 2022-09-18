export = AbstractBlockStore;
/**
 * Abstract Block Store
 *
 * @alias module:blockstore.AbstractBlockStore
 * @abstract
 */
declare class AbstractBlockStore {
    /**
     * Create an abstract blockstore.
     * @constructor
     */
    constructor(options: any);
    options: any;
    logger: any;
    /**
     * This method ensures that resources are available
     * before opening.
     * @returns {Promise}
     */
    ensure(): Promise<any>;
    /**
     * This method opens any necessary resources and
     * initializes the store to be ready to be queried.
     * @returns {Promise}
     */
    open(): Promise<any>;
    /**
     * This method closes resources and prepares
     * the store to be closed.
     * @returns {Promise}
     */
    close(): Promise<any>;
    /**
     * This method stores merkle blocks including
     * all the relevant transactions.
     * @param {Buffer} hash
     * @param {Buffer} data
     * @returns {Promise}
     */
    writeMerkle(hash: Buffer, data: Buffer): Promise<any>;
    /**
     * This method stores block undo coin data.
     * @param {Buffer} hash
     * @param {Buffer} data
     * @returns {Promise}
     */
    writeUndo(hash: Buffer, data: Buffer): Promise<any>;
    /**
     * This method stores block data.
     * @param {Buffer} hash
     * @param {Buffer} data
     * @returns {Promise}
     */
    writeBlock(hash: Buffer, data: Buffer): Promise<any>;
    /**
     * This method reads merkle block data.
     * @param {Buffer} hash
     * @returns {Promise}
     */
    readMerkle(hash: Buffer): Promise<any>;
    /**
     * This method will retrieve block undo coin data.
     * @param {Buffer} hash
     * @returns {Promise}
     */
    readUndo(hash: Buffer): Promise<any>;
    /**
     * This method will retrieve block data. Smaller portions of
     * the block can be read by using the offset and size arguments.
     * @param {Buffer} hash
     * @param {Number} offset
     * @param {Number} size
     * @returns {Promise}
     */
    readBlock(hash: Buffer, offset: number, size: number): Promise<any>;
    /**
     * This will free resources for storing the merkle block data.
     * @param {Buffer} hash
     * @returns {Promise}
     */
    pruneMerkle(hash: Buffer): Promise<any>;
    /**
     * This will free resources for storing the block undo coin data.
     * @param {Buffer} hash
     * @returns {Promise}
     */
    pruneUndo(hash: Buffer): Promise<any>;
    /**
     * This will free resources for storing the block data.
     * @param {Buffer} hash
     * @returns {Promise}
     */
    pruneBlock(hash: Buffer): Promise<any>;
    /**
     * This will check if merkle block data has been stored
     * and is available.
     * @param {Buffer} hash
     * @returns {Promise}
     */
    hasMerkle(hash: Buffer): Promise<any>;
    /**
     * This will check if a block undo coin data has been stored
     * and is available.
     * @param {Buffer} hash
     * @returns {Promise}
     */
    hasUndo(hash: Buffer): Promise<any>;
    /**
     * This will check if a block has been stored and is available.
     * @param {Buffer} hash
     * @returns {Promise}
     */
    hasBlock(hash: Buffer): Promise<any>;
    /**
     * Create batch.
     * @returns {Batch}
     */
    batch(): Batch;
}
