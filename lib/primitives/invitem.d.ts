export = InvItem;
/**
 * Inv Item
 * @alias module:primitives.InvItem
 * @constructor
 * @property {InvType} type
 * @property {Hash} hash
 */
declare class InvItem {
    /**
     * Create an inv item.
     * @constructor
     * @param {Number} type
     * @param {Hash} hash
     */
    constructor(type: number, hash: Hash);
    type: number;
    hash: Hash;
    /**
     * Write inv item to buffer writer.
     * @param {BufferWriter} bw
     */
    getSize(): number;
    /**
     * Write inv item to buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): InvItem;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Test whether the inv item is a block.
     * @returns {Boolean}
     */
    isBlock(): boolean;
    /**
     * Test whether the inv item is a tx.
     * @returns {Boolean}
     */
    isTX(): boolean;
    /**
     * Test whether the inv item is a claim.
     * @returns {Boolean}
     */
    isClaim(): boolean;
    /**
     * Test whether the inv item is an airdrop proof.
     * @returns {Boolean}
     */
    isAirdrop(): boolean;
}
declare namespace InvItem {
    namespace types {
        const TX: number;
        const BLOCK: number;
        const FILTERED_BLOCK: number;
        const CMPCT_BLOCK: number;
        const CLAIM: number;
        const AIRDROP: number;
    }
    /**
     * *
     */
    type types = number;
    const typesByVal: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
}
