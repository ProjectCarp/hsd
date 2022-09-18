export = mine;
/**
 * Hash until the nonce overflows.
 * @alias module:mining.mine
 * @param {Buffer} raw
 * @param {Buffer} target
 * @param {Number} rounds
 * @returns {Buffer|null}
 */
declare function mine(raw: Buffer, target: Buffer, rounds: number): Buffer | null;
