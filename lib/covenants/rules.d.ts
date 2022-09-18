export namespace types {
    const NONE: number;
    const CLAIM: number;
    const OPEN: number;
    const BID: number;
    const REVEAL: number;
    const REDEEM: number;
    const REGISTER: number;
    const UPDATE: number;
    const RENEW: number;
    const TRANSFER: number;
    const FINALIZE: number;
    const REVOKE: number;
}
/**
 * *
 */
export type types = number;
export const typesByVal: {
    [x: number]: string;
};
export const blacklist: Set<string>;
export const MAX_NAME_SIZE: number;
export const MAX_RESOURCE_SIZE: number;
export const MAX_COVENANT_SIZE: number;
/**
 * Hash a domain name.
 * @param {String|Buffer} name
 * @returns {Buffer}
 */
export function hashName(name: string | Buffer): Buffer;
/**
 * Hash a domain name.
 * @param {String} name
 * @returns {Buffer}
 */
export function hashString(name: string): Buffer;
/**
 * Hash a domain name.
 * @param {Buffer} name
 * @returns {Buffer}
 */
export function hashBinary(name: Buffer): Buffer;
/**
 * Verify a domain name meets handshake requirements.
 * @param {String|Buffer} name
 * @returns {Boolean}
 */
export function verifyName(name: string | Buffer): boolean;
/**
 * Verify a domain name meets handshake requirements.
 * @param {String} name
 * @returns {Boolean}
 */
export function verifyString(str: any): boolean;
/**
 * Verify a domain name meets handshake requirements.
 * @param {Buffer} name
 * @returns {Boolean}
 */
export function verifyBinary(buf: any): boolean;
/**
 * Get height and week of name hash rollout.
 * @param {Buffer} nameHash
 * @param {Network} network
 * @returns {Array} [height, week]
 */
export function getRollout(nameHash: Buffer, network: Network): any[];
/**
 * Verify a name hash meets the rollout.
 * @param {Buffer} hash
 * @param {Number} height
 * @param {Network} network
 * @returns {Boolean}
 */
export function hasRollout(hash: Buffer, height: number, network: Network): boolean;
/**
 * Grind a name for rollout.
 * Used for testing.
 * @param {Number} size
 * @param {Number} height
 * @param {Network} network
 * @returns {String}
 */
export function grindName(size: number, height: number, network: Network): string;
/**
 * Test whether a name is reserved.
 * @param {Buffer} nameHash
 * @param {Number} height
 * @param {Network} network
 * @returns {Boolean}
 */
export function isReserved(nameHash: Buffer, height: number, network: Network): boolean;
/**
 * Create a blind bid hash from a value and nonce.
 * @param {Amount} value
 * @param {Buffer} nonce
 * @returns {Buffer}
 */
export function blind(value: Amount, nonce: Buffer): Buffer;
/**
 * Test whether a transaction has
 * names contained in the set.
 * @param {TX} tx
 * @param {BufferSet} set
 * @returns {Boolean}
 */
export function hasNames(tx: TX, set: BufferSet): boolean;
/**
 * Add names to set.
 * @param {TX} tx
 * @param {BufferSet} set
 */
export function addNames(tx: TX, set: BufferSet): void;
/**
 * Remove names from set.
 * @param {TX} tx
 * @param {BufferSet} set
 */
export function removeNames(tx: TX, set: BufferSet): void;
/**
 * Count name opens.
 * @param {TX} tx
 * @returns {Number}
 */
export function countOpens(tx: TX): number;
/**
 * Count name updates.
 * @param {TX} tx
 * @returns {Number}
 */
export function countUpdates(tx: TX): number;
/**
 * Count name renewals.
 * @param {TX} tx
 * @returns {Number}
 */
export function countRenewals(tx: TX): number;
/**
 * Check covenant sanity (called from `tx.checkSanity()`).
 * @param {TX} tx
 * @returns {Boolean}
 */
export function hasSaneCovenants(tx: TX): boolean;
/**
 * Perform contextual verification for covenants.
 * Called from `tx.checkInputs()`.
 * @param {TX} tx
 * @param {CoinView} view
 * @param {Number} height
 * @param {Network} network
 * @returns {Number}
 */
export function verifyCovenants(tx: TX, view: CoinView, height: number, network: Network): number;
