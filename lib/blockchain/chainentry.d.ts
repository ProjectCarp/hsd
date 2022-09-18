export = ChainEntry;
/**
 * Chain Entry
 * Represents an entry in the chain.
 * @alias module:blockchain.ChainEntry
 * @property {Hash} hash
 * @property {Number} version
 * @property {Hash} prevBlock
 * @property {Hash} merkleRoot
 * @property {Hash} witnessRoot
 * @property {Hash} treeRoot
 * @property {Hash} reservedRoot
 * @property {Number} time
 * @property {Number} bits
 * @property {Buffer} nonce
 * @property {Number} height
 * @property {BN} chainwork
 */
declare class ChainEntry {
    /**
     * Instantiate chainentry from block.
     * @param {Block|MerkleBlock} block
     * @param {ChainEntry} prev - Previous entry.
     * @returns {ChainEntry}
     */
    static fromBlock(block: Block | MerkleBlock, prev: ChainEntry): ChainEntry;
    /**
     * Test whether an object is a {@link ChainEntry}.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isChainEntry(obj: any): boolean;
    /**
     * Create a chain entry.
     * @constructor
     * @param {Object?} options
     */
    constructor(options: any | null);
    hash: Buffer;
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
    height: number;
    chainwork: any;
    /**
     * Inject properties from options.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Calculate the proof: (1 << 256) / (target + 1)
     * @returns {BN} proof
     */
    getProof(): BN;
    /**
     * Calculate the chainwork by
     * adding proof to previous chainwork.
     * @returns {BN} chainwork
     */
    getChainwork(prev: any): BN;
    /**
     * Test against the genesis block.
     * @returns {Boolean}
     */
    isGenesis(): boolean;
    /**
     * Test whether the entry contains an unknown version bit.
     * @param {Network} network
     * @returns {Boolean}
     */
    hasUnknown(network: Network): boolean;
    /**
     * Test whether the entry contains a version bit.
     * @param {Number} bit
     * @returns {Boolean}
     */
    hasBit(bit: number): boolean;
    /**
     * Inject properties from block.
     * @private
     * @param {Block|MerkleBlock} block
     * @param {ChainEntry} prev - Previous entry.
     */
    private fromBlock;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize the entry to internal database format.
     * @returns {Buffer}
     */
    write(bw: any): Buffer;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     */
    private read;
    /**
     * Serialize the entry to an object more
     * suitable for JSON serialization.
     * @returns {Object}
     */
    getJSON(): any;
    /**
     * Inject properties from json object.
     * @private
     * @param {Object} json
     */
    private fromJSON;
    /**
     * Convert the entry to a headers object.
     * @returns {Headers}
     */
    toHeaders(): Headers;
    /**
     * Convert the entry to an inv item.
     * @returns {InvItem}
     */
    toInv(): InvItem;
    /**
     * Return a more user-friendly object.
     * @returns {Object}
     */
    format(): any;
}
declare namespace ChainEntry {
    const MAX_CHAINWORK: any;
}
import Headers = require("../primitives/headers");
import InvItem = require("../primitives/invitem");
