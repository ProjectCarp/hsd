/**
 * Block Template
 * @alias module:mining.BlockTemplate
 */
export class BlockTemplate {
    /**
     * Instantiate block template from options.
     * @param {Object} options
     * @returns {BlockTemplate}
     */
    static fromOptions(options: any): BlockTemplate;
    /**
     * Create a block template.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    prevBlock: Buffer;
    version: number;
    height: number;
    time: number;
    bits: number;
    target: Buffer;
    mtp: number;
    flags: number;
    coinbaseFlags: Buffer;
    address: Address;
    sigops: number;
    weight: number;
    opens: number;
    updates: number;
    renewals: number;
    interval: number;
    fees: number;
    merkleRoot: Buffer;
    witnessRoot: Buffer;
    treeRoot: Buffer;
    reservedRoot: Buffer;
    coinbase: Buffer;
    items: any[];
    claims: any[];
    airdrops: any[];
    /**
     * Inject properties from options.
     * @private
     * @param {Object} options
     * @returns {BlockTemplate}
     */
    private fromOptions;
    /**
     * Set the target (bits).
     * @param {Number} bits
     */
    setBits(bits: number): void;
    /**
     * Set the target (uint256le).
     * @param {Buffer} target
     */
    setTarget(target: Buffer): void;
    /**
     * Calculate the block reward.
     * @returns {Amount}
     */
    getReward(): Amount;
    /**
     * Initialize the default coinbase.
     * @returns {TX}
     */
    createCoinbase(): TX;
    /**
     * Refresh the coinbase and merkle tree.
     */
    refresh(): void;
    /**
     * Create raw block header with given parameters.
     * @param {Buffer} extraNonce
     * @param {Number} time
     * @param {Number} nonce
     * @returns {Buffer}
     */
    getHeader(nonce: number, time: number, extraNonce: Buffer, mask: any): Buffer;
    /**
     * Calculate proof with given parameters.
     * @param {Number} nonce1
     * @param {Number} nonce2
     * @param {Number} time
     * @param {Buffer} nonce
     * @returns {BlockProof}
     */
    getProof(nonce: Buffer, time: number, extraNonce: any, mask: any): BlockProof;
    /**
     * Create block from calculated proof.
     * @param {BlockProof} proof
     * @returns {Block}
     */
    commit(proof: BlockProof): Block;
    /**
     * Quick and dirty way to
     * get a coinbase tx object.
     * @returns {TX}
     */
    toCoinbase(): TX;
    /**
     * Quick and dirty way to get a block
     * object (most likely to be an invalid one).
     * @returns {Block}
     */
    toBlock(): Block;
    /**
     * Calculate the target difficulty.
     * @returns {Number}
     */
    getDifficulty(): number;
    /**
     * Set the reward output
     * address and refresh.
     * @param {Address} address
     */
    setAddress(address: Address): void;
    /**
     * Add a transaction to the template.
     * @param {TX} tx
     * @param {CoinView} view
     */
    addTX(tx: TX, view: CoinView): boolean;
    /**
     * Add a transaction to the template
     * (less verification than addTX).
     * @param {TX} tx
     * @param {CoinView?} view
     */
    pushTX(tx: TX, view: CoinView | null): boolean;
    /**
     * Add a claim to the template.
     * @param {Claim} claim
     * @param {Object} data
     */
    addClaim(claim: Claim, data: any): boolean;
    /**
     * Add a claim to the template.
     * @param {AirdropProof} proof
     */
    addAirdrop(proof: AirdropProof): boolean;
}
/**
 * Block Entry
 * @alias module:mining.BlockEntry
 * @property {TX} tx
 * @property {Hash} hash
 * @property {Amount} fee
 * @property {Rate} rate
 * @property {Number} priority
 * @property {Boolean} free
 * @property {Sigops} sigops
 * @property {Number} depCount
 */
export class BlockEntry {
    /**
     * Instantiate block entry from transaction.
     * @param {TX} tx
     * @param {CoinView} view
     * @param {BlockTemplate} attempt
     * @returns {BlockEntry}
     */
    static fromTX(tx: TX, view: CoinView, attempt: BlockTemplate): BlockEntry;
    /**
     * Instantiate block entry from mempool entry.
     * @param {MempoolEntry} entry
     * @param {BlockTemplate} attempt
     * @returns {BlockEntry}
     */
    static fromEntry(entry: MempoolEntry, attempt: BlockTemplate): BlockEntry;
    /**
     * Create a block entry.
     * @constructor
     * @param {TX} tx
     */
    constructor(tx: TX);
    tx: TX;
    hash: Hash;
    fee: number;
    rate: number;
    priority: number;
    free: boolean;
    sigops: number;
    descRate: number;
    depCount: number;
}
/**
 * Block Claim
 * @alias module:mining.BlockClaim
 */
export class BlockClaim {
    /**
     * Instantiate block entry from transaction.
     * @param {Claim} claim
     * @param {Object} data
     * @returns {BlockClaim}
     */
    static fromClaim(claim: Claim, data: any): BlockClaim;
    /**
     * Instantiate block entry from mempool entry.
     * @param {ClaimEntry} entry
     * @returns {BlockClaim}
     */
    static fromEntry(entry: ClaimEntry): BlockClaim;
    blob: Buffer;
    nameHash: Buffer;
    name: Buffer;
    address: Address;
    value: number;
    fee: number;
    rate: number;
    weak: boolean;
    commitHash: Buffer;
    commitHeight: number;
    /**
     * Calculate weight.
     * @returns {Number}
     */
    getWeight(): number;
}
/**
 * Block Airdrop
 * @alias module:mining.BlockAirdrop
 */
export class BlockAirdrop {
    /**
     * Instantiate block entry from transaction.
     * @param {AirdropProof} proof
     * @returns {BlockAirdrop}
     */
    static fromAirdrop(proof: AirdropProof): BlockAirdrop;
    /**
     * Instantiate block entry from mempool entry.
     * @param {ClaimEntry} entry
     * @returns {BlockClaim}
     */
    static fromEntry(entry: ClaimEntry): BlockClaim;
    blob: Buffer;
    position: number;
    address: Address;
    value: number;
    fee: number;
    rate: number;
    weak: boolean;
    /**
     * Calculate weight.
     * @returns {Number}
     */
    getWeight(): number;
}
import Address = require("../primitives/address");
import TX = require("../primitives/tx");
/**
 * Block Proof
 */
declare class BlockProof {
    hdr: Buffer;
    time: number;
    nonce: number;
    extraNonce: Buffer;
    mask: Buffer;
    hash(): Buffer;
    shareHash(): Buffer;
    powHash(): Buffer;
    verify(target: any, network: any): boolean;
    getDifficulty(): number;
}
import Block = require("../primitives/block");
import CoinView = require("../coins/coinview");
export {};
