/**
 * Return hrtime (shim for browser).
 * @param {Array} time
 * @returns {Array} [seconds, nanoseconds]
 */
export function bench(time: any[]): any[];
/**
 * Get current time in unix time (seconds).
 * @returns {Number}
 */
export function now(): number;
/**
 * Get current time in unix time (milliseconds).
 * @returns {Number}
 */
export function ms(): number;
/**
 * Create a Date ISO string from time in unix time (seconds).
 * @param {Number?} time - Seconds in unix time.
 * @returns {String}
 */
export function date(time: number | null): string;
/**
 * Get unix seconds from a Date string.
 * @param {String?} date - Date ISO String.
 * @returns {Number}
 */
export function time(date: string | null): number;
/**
 * Convert u32 to padded hex.
 * @param {Number} num
 * @returns {String}
 */
export function hex32(num: number): string;
/**
 * Parse hex.
 * @param {String} str
 * @param {Number} size
 * @returns {Buffer}
 */
export function parseHex(str: string, size: number): Buffer;
/**
 * Test whether a number is a safe uint64.
 * @param {Number} num
 * @returns {Boolean}
 */
export function isU64(num: number): boolean;
/**
 * Encode a uint32.
 * @param {Number} num
 * @returns {Buffer}
 */
export function encodeU32(num: number): Buffer;
