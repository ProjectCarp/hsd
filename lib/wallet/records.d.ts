/**
 * Chain State
 */
export class ChainState {
    startHeight: number;
    startHash: Buffer;
    height: number;
    marked: boolean;
    /**
     * Clone the state.
     * @returns {ChainState}
     */
    inject(state: any): ChainState;
    /**
     * Calculate size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     */
    private read;
    /**
     * Serialize the chain state.
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
}
/**
 * Block Meta
 */
export class BlockMeta {
    /**
     * Instantiate block meta from chain entry.
     * @param {ChainEntry} entry
     * @returns {BlockMeta}
     */
    static fromEntry(entry: ChainEntry): BlockMeta;
    /**
     * Create block meta.
     * @constructor
     * @param {Hash} hash
     * @param {Number} height
     * @param {Number} time
     */
    constructor(hash: Hash, height: number, time: number);
    hash: Hash;
    height: number;
    time: number;
    /**
     * Clone the block.
     * @returns {BlockMeta}
     */
    inject(meta: any): BlockMeta;
    /**
     * Get block meta hash as a buffer.
     * @returns {Buffer}
     */
    toHash(): Buffer;
    /**
     * Instantiate block meta from chain entry.
     * @private
     * @param {ChainEntry} entry
     */
    private fromEntry;
    /**
     * Instantiate block meta from serialized tip data.
     * @private
     * @param {Buffer} data
     */
    private read;
    /**
     * Calculate size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize the block meta.
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
    /**
     * Instantiate block meta from json object.
     * @param {Object} json
     */
    fromJSON(json: any): BlockMeta;
    /**
     * Convert the block meta to a more json-friendly object.
     * @returns {Object}
     */
    getJSON(): any;
}
/**
 * TX Record
 */
export class TXRecord {
    /**
     * Instantiate tx record from tx and block.
     * @param {TX} tx
     * @param {Block?} block
     * @returns {TXRecord}
     */
    static fromTX(tx: TX, block: Block): TXRecord;
    /**
     * Create tx record.
     * @constructor
     * @param {TX} tx
     * @param {BlockMeta?} block
     */
    constructor(tx: TX, block: BlockMeta | null);
    tx: TX;
    hash: Hash;
    mtime: number;
    height: number;
    block: any;
    index: number;
    time: number;
    /**
     * Inject properties from tx and block.
     * @private
     * @param {TX} tx
     * @param {Block?} block
     * @returns {TXRecord}
     */
    private fromTX;
    /**
     * Set block data (confirm).
     * @param {BlockMeta} block
     */
    setBlock(block: BlockMeta): TXRecord;
    /**
     * Unset block (unconfirm).
     */
    unsetBlock(): TXRecord;
    /**
     * Convert tx record to a block meta.
     * @returns {BlockMeta}
     */
    getBlock(): BlockMeta;
    /**
     * Calculate current number of transaction confirmations.
     * @param {Number} height - Current chain height.
     * @returns {Number} confirmations
     */
    getDepth(height: number): number;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize a transaction to "extended format".
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
    /**
     * Inject properties from "extended" format.
     * @private
     * @param {Buffer} data
     */
    private read;
}
/**
 * Map Record
 */
export class MapRecord {
    wids: Set<any>;
    add(wid: any): boolean;
    remove(wid: any): boolean;
    write(bw: any): any;
    getSize(): number;
    read(br: any): MapRecord;
}
import TX = require("../primitives/tx");
