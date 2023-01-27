export const HARDENED: number;
export const MIN_ENTROPY: number;
export const MAX_ENTROPY: number;
export const cache: LRU;
/**
 * Parse a derivation path and return an array of indexes.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 * @param {String} path
 * @param {Boolean} hard
 * @returns {Number[]}
 */
export function parsePath(path: string, hard: boolean): number[];
/**
 * Test whether the key is a master key.
 * @param {HDPrivateKey|HDPublicKey} key
 * @returns {Boolean}
 */
export function isMaster(key: HDPrivateKey | HDPublicKey): boolean;
/**
 * Test whether the key is (most likely) a BIP44 account key.
 * @param {HDPrivateKey|HDPublicKey} key
 * @param {Number?} account
 * @returns {Boolean}
 */
export function isAccount(key: HDPrivateKey | HDPublicKey, account: number | null): boolean;
export const ZERO_KEY: Buffer;
