/**
 * @module blockstore/records
 */
/**
 * Block Record
 */
export class BlockRecord {
    /**
     * Create a block record.
     * @constructor
     */
    constructor(options?: {});
    file: any;
    position: any;
    length: any;
    /**
     * Get size of the serialized block record.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} data
     */
    private read;
    /**
     * Serialize the block record.
     * Write block record to a buffer writer
     * @param {BufferWriter} bw
     * @returns {BufferWriter}
     */
    write(bw: BufferWriter): BufferWriter;
}
/**
 * File Record
 */
export class FileRecord {
    /**
     * Create a file record.
     * @constructor
     */
    constructor(options?: {});
    blocks: any;
    used: any;
    length: any;
    /**
     * Get serialized size of File Record.
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
     * Write serialized file record to the buffer writer.
     * @param {BufferWriter} bw
     * @returns {BufferWriter}
     */
    write(bw: BufferWriter): BufferWriter;
}
