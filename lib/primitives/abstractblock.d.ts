export = AbstractBlock;
/**
 * Abstract Block
 * The class which all block-like objects inherit from.
 * @alias module:primitives.AbstractBlock
 * @abstract
 * @property {Number} version
 * @property {Hash} prevBlock
 * @property {Hash} merkleRoot
 * @property {Number} time
 * @property {Number} bits
 * @property {Number} nonce
 */
declare class AbstractBlock {
    /**
     * Decode from miner serialization.
     * @param {Buffer} data
     */
    static fromMiner(data: Buffer): AbstractBlock;
    version: number;
    prevBlock: Buffer;
    merkleRoot: Buffer;
    witnessRoot: Buffer;
    treeRoot: Buffer;
    reservedRoot: Buffer;
    time: number;
    bits: number;
    nonce: number;
    extraNonce: Buffer;
    mask: Buffer;
    mutable: boolean;
    _hash: Buffer;
    _maskHash: any;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private parseOptions;
    /**
     * Inject properties from json object.
     * @private
     * @param {Object} json
     */
    private parseJSON;
    /**
     * Test whether the block is a memblock.
     * @returns {Boolean}
     */
    isMemory(): boolean;
    /**
     * Clear any cached values (abstract).
     */
    _refresh(): AbstractBlock;
    /**
     * Clear any cached values.
     */
    refresh(): AbstractBlock;
    /**
     * Hash the block header.
     * @returns {Hash} hash
     */
    hash(): Hash;
    /**
     * Hash the block header.
     * @returns {String}
     */
    hashHex(): string;
    /**
     * Get header size.
     * @returns {Number}
     */
    sizeHead(): number;
    /**
     * Serialize the block headers.
     * @returns {Buffer}
     */
    toHead(): Buffer;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     */
    private fromHead;
    /**
     * Retrieve deterministically random padding.
     * @param {Number} size
     * @returns {Buffer}
     */
    padding(size: number): Buffer;
    /**
     * Serialize subheader for proof.
     * @returns {Buffer}
     */
    toSubhead(): Buffer;
    /**
     * Compute subheader hash.
     * @returns {Buffer}
     */
    subHash(): Buffer;
    /**
     * Compute xor bytes hash.
     * @returns {Buffer}
     */
    maskHash(): Buffer;
    /**
     * Compute commitment hash.
     * @returns {Buffer}
     */
    commitHash(): Buffer;
    /**
     * Serialize preheader.
     * @returns {Buffer}
     */
    toPrehead(): Buffer;
    /**
     * Calculate share hash.
     * @returns {Buffer}
     */
    shareHash(): Buffer;
    /**
     * Calculate PoW hash.
     * @returns {Buffer}
     */
    powHash(): Buffer;
    /**
     * Serialize the block headers.
     * @param {BufferWriter} bw
     */
    writeHead(bw: BufferWriter): BufferWriter;
    /**
     * Parse the block headers.
     * @param {BufferReader} br
     */
    readHead(br: BufferReader): AbstractBlock;
    /**
     * Encode to miner serialization.
     * @returns {Buffer}
     */
    toMiner(): Buffer;
    /**
     * Decode from miner serialization.
     * @param {Buffer} data
     */
    fromMiner(data: Buffer): AbstractBlock;
    /**
     * Verify the block.
     * @returns {Boolean}
     */
    verify(): boolean;
    /**
     * Verify proof-of-work.
     * @returns {Boolean}
     */
    verifyPOW(): boolean;
    /**
     * Verify the block.
     * @returns {Boolean}
     */
    verifyBody(): boolean;
    /**
     * Convert the block to an inv item.
     * @returns {InvItem}
     */
    toInv(): InvItem;
}
import InvItem = require("./invitem");
