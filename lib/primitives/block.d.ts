export = Block;
/**
 * Block
 * Represents a full block.
 * @alias module:primitives.Block
 * @extends AbstractBlock
 */
declare class Block extends AbstractBlock {
    /**
     * Test whether an object is a Block.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isBlock(obj: any): boolean;
    /**
     * Create a block.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    txs: any[];
    _raw: any;
    _sizes: Sizes;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Clear any cached values.
     * @param {Boolean?} all - Clear transactions.
     */
    refresh(all: boolean | null): Block;
    /**
     * Calculate virtual block size.
     * @returns {Number} Virtual size.
     */
    getVirtualSize(): number;
    /**
     * Calculate block weight.
     * @returns {Number} weight
     */
    getWeight(): number;
    /**
     * Get real block size.
     * @returns {Number} size
     */
    getSize(): number;
    /**
     * Get base block size (without witness).
     * @returns {Number} size
     */
    getBaseSize(): number;
    /**
     * Test whether the block contains a
     * transaction with a non-empty witness.
     * @returns {Boolean}
     */
    hasWitness(): boolean;
    /**
     * Test the block's transaction vector against a hash.
     * @param {Hash} hash
     * @returns {Boolean}
     */
    hasTX(hash: Hash): boolean;
    /**
     * Find the index of a transaction in the block.
     * @param {Hash} hash
     * @returns {Number} index (-1 if not present).
     */
    indexOf(hash: Hash): number;
    /**
     * Calculate merkle root.
     * @returns {Hash}
     */
    createMerkleRoot(): Hash;
    /**
     * Calculate witness root.
     * @returns {Hash}
     */
    createWitnessRoot(): Hash;
    /**
     * Retrieve the merkle root from the block header.
     * @returns {Hash}
     */
    getMerkleRoot(): Hash;
    /**
     * Do non-contextual verification on the block. Including checking the block
     * size, the coinbase and the merkle root. This is consensus-critical.
     * @returns {Array} [valid, reason, score]
     */
    checkBody(): any[];
    /**
     * Retrieve the coinbase height from the coinbase input script.
     * @returns {Number} height (-1 if not present).
     */
    getCoinbaseHeight(): number;
    /**
     * Get the "claimed" reward by the coinbase.
     * @returns {Amount} claimed
     */
    getClaimed(): Amount;
    /**
     * Get all unique outpoint hashes in the
     * block. Coinbases are ignored.
     * @returns {Hash[]} Outpoint hashes.
     */
    getPrevout(): Hash[];
    /**
     * Inspect the block and return a more
     * user-friendly representation of the data.
     * @param {CoinView} view
     * @param {Number} height
     * @returns {Object}
     */
    format(view: CoinView, height: number): any;
    /**
     * Convert the block to an object suitable
     * for JSON serialization.
     * @param {Network} network
     * @param {CoinView} view
     * @param {Number} height
     * @param {Number} depth
     * @returns {Object}
     */
    getJSON(network: Network, view: CoinView, height: number, depth: number): any;
    /**
     * Inject properties from json object.
     * @private
     * @param {Object} json
     */
    private fromJSON;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     */
    private read;
    /**
     * Convert the Block to a MerkleBlock.
     * @param {Bloom} filter - Bloom filter for transactions
     * to match. The merkle block will contain only the
     * matched transactions.
     * @returns {MerkleBlock}
     */
    toMerkle(filter: Bloom): MerkleBlock;
    write(bw: any): any;
    encode(): any;
    /**
     * Convert the block to a headers object.
     * @returns {Headers}
     */
    toHeaders(): Headers;
    /**
     * Get real block size with witness.
     * @returns {RawBlock}
     */
    getSizes(): RawBlock;
}
import AbstractBlock = require("./abstractblock");
declare class Sizes {
    constructor(base: any, witness: any);
    base: any;
    witness: any;
}
import Network = require("../protocol/network");
import MerkleBlock = require("./merkleblock");
import Headers = require("./headers");
