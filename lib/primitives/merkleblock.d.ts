export = MerkleBlock;
/**
 * Merkle Block
 * Represents a merkle (filtered) block.
 * @alias module:primitives.MerkleBlock
 * @extends AbstractBlock
 */
declare class MerkleBlock extends AbstractBlock {
    /**
     * Create a merkleblock from a {@link Block} object, passing
     * it through a filter first. This will build the partial
     * merkle tree.
     * @param {Block} block
     * @param {Bloom} filter
     * @returns {MerkleBlock}
     */
    static fromBlock(block: Block, filter: Bloom): MerkleBlock;
    /**
     * Create a merkleblock from an array of txids.
     * This will build the partial merkle tree.
     * @param {Block} block
     * @param {Hash[]} hashes
     * @returns {MerkleBlock}
     */
    static fromHashes(block: Block, hashes: Hash[]): MerkleBlock;
    /**
     * Create a merkleblock from an array of matches.
     * This will build the partial merkle tree.
     * @param {Block} block
     * @param {Number[]} matches
     * @returns {MerkleBlock}
     */
    static fromMatches(block: Block, matches: number[]): MerkleBlock;
    /**
     * Test whether an object is a MerkleBlock.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isMerkleBlock(obj: any): boolean;
    /**
     * Create a merkle block.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    txs: any[];
    hashes: any[];
    flags: Buffer;
    totalTX: number;
    _tree: any;
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
    refresh(all: boolean | null): MerkleBlock;
    /**
     * Test the block's _matched_ transaction vector against a hash.
     * @param {Hash} hash
     * @returns {Boolean}
     */
    hasTX(hash: Hash): boolean;
    /**
     * Test the block's _matched_ transaction vector against a hash.
     * @param {Hash} hash
     * @returns {Number} Index.
     */
    indexOf(hash: Hash): number;
    /**
     * Verify the partial merkletree.
     * @private
     * @returns {Array} [valid, reason, score]
     */
    private checkBody;
    /**
     * Extract the matches from partial merkle
     * tree and calculate merkle root.
     * @returns {Object}
     */
    getTree(): any;
    /**
     * Extract the matches from partial merkle
     * tree and calculate merkle root.
     * @private
     * @returns {Object}
     */
    private extractTree;
    /**
     * Extract the coinbase height (always -1).
     * @returns {Number}
     */
    getCoinbaseHeight(): number;
    /**
     * Inspect the block and return a more
     * user-friendly representation of the data.
     * @param {CoinView} view
     * @param {Number} height
     * @returns {Object}
     */
    format(view: CoinView, height: number): any;
    /**
     * Get merkleblock size.
     * @returns {Number} Size.
     */
    getSize(): number;
    /**
     * Write the merkleblock to a buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Convert the block to an object suitable
     * for JSON serialization.
     * @param {Network} network
     * @param {CoinView} view
     * @param {Number} height
     * @returns {Object}
     */
    getJSON(network: Network, view: CoinView, height: number): any;
    /**
     * Inject properties from json object.
     * @private
     * @param {Object} json
     */
    private fromJSON;
    /**
     * Convert the block to a headers object.
     * @returns {Headers}
     */
    toHeaders(): Headers;
}
import AbstractBlock = require("./abstractblock");
import Headers = require("./headers");
