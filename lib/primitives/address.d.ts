export = Address;
/**
 * Address
 * Represents an address.
 * @alias module:primitives.Address
 * @property {Number} version
 * @property {Buffer} hash
 */
declare class Address {
    /**
     * Instantiate address from pubkey.
     * @param {Buffer} key
     * @returns {Address}
     */
    static fromPubkey(key: Buffer): Address;
    /**
     * Instantiate address from script.
     * @param {Script} script
     * @returns {Address}
     */
    static fromScript(script: Script): Address;
    /**
     * Create an Address from a witness.
     * Attempt to extract address
     * properties from a witness.
     * @param {Witness}
     * @returns {Address|null}
     */
    static fromWitness(witness: any): Address | null;
    /**
     * Create a naked address from hash/version.
     * @param {Hash} hash
     * @param {Number} [version=-1]
     * @returns {Address}
     * @throws on bad hash size
     */
    static fromHash(hash: Hash, version?: number): Address;
    /**
     * Instantiate address from witness pubkeyhash.
     * @param {Buffer} hash
     * @returns {Address}
     */
    static fromPubkeyhash(hash: Buffer): Address;
    /**
     * Instantiate address from witness scripthash.
     * @param {Buffer} hash
     * @returns {Address}
     */
    static fromScripthash(hash: Buffer): Address;
    /**
     * Instantiate address from witness program.
     * @param {Number} version
     * @param {Buffer} hash
     * @returns {Address}
     */
    static fromProgram(version: number, hash: Buffer): Address;
    /**
     * Instantiate address from nulldata.
     * @param {Buffer} data
     * @returns {Address}
     */
    static fromNulldata(data: Buffer): Address;
    /**
     * Get the hash of a base58 address or address-related object.
     * @param {String|Address|Hash} data
     * @param {Network?} network
     * @returns {Hash}
     */
    static getHash(data: string | Address | Hash, network: Network | null): Hash;
    /**
     * Create an address.
     * @constructor
     * @param {Object?} options
     */
    constructor(options: any | null, network: any);
    version: number;
    hash: Buffer;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Count the sigops in a script, taking into account witness programs.
     * @param {Witness} witness
     * @returns {Number} sigop count
     */
    getSigops(witness: Witness): number;
    /**
     * Get the address hash.
     * @returns {Hash}
     */
    getHash(): Hash;
    /**
     * Test whether the address is null.
     * @returns {Boolean}
     */
    isNull(): boolean;
    /**
     * Test whether the address is unspendable.
     * @returns {Boolean}
     */
    isUnspendable(): boolean;
    /**
     * Test equality against another address.
     * @param {Address} addr
     * @returns {Boolean}
     */
    equals(addr: Address): boolean;
    /**
     * Compare against another address.
     * @param {Address} addr
     * @returns {Boolean}
     */
    compare(addr: Address): boolean;
    /**
     * Inject properties from another address.
     * @param {Address} addr
     * @returns {Boolean}
     */
    inject(addr: Address): boolean;
    /**
     * Clone address.
     * @returns {Address}
     */
    clone(): Address;
    /**
     * Compile the address object to a bech32 address.
     * @param {{NetworkType|Network)?} network
     * @returns {String}
     * @throws Error on bad hash/prefix.
     */
    toString(network: any): string;
    /**
     * Instantiate address from pubkey.
     * @param {Buffer} key
     * @returns {Address}
     */
    fromPubkey(key: Buffer): Address;
    /**
     * Instantiate address from script.
     * @param {Script} script
     * @returns {Address}
     */
    fromScript(script: Script): Address;
    /**
     * Inject properties from bech32 address.
     * @private
     * @param {String} data
     * @param {Network?} network
     * @throws Parse error
     */
    private fromString;
    /**
     * Inject properties from witness.
     * @private
     * @param {Witness} witness
     */
    private fromWitness;
    /**
     * Inject properties from a hash.
     * @private
     * @param {Buffer|Hash} hash
     * @param {Number} [version=-1]
     * @throws on bad hash size
     */
    private fromHash;
    /**
     * Inject properties from witness pubkeyhash.
     * @private
     * @param {Buffer} hash
     * @returns {Address}
     */
    private fromPubkeyhash;
    /**
     * Inject properties from witness scripthash.
     * @private
     * @param {Buffer} hash
     * @returns {Address}
     */
    private fromScripthash;
    /**
     * Inject properties from witness program.
     * @private
     * @param {Number} version
     * @param {Buffer} hash
     * @returns {Address}
     */
    private fromProgram;
    /**
     * Instantiate address from nulldata.
     * @param {Buffer} data
     * @returns {Address}
     */
    fromNulldata(data: Buffer): Address;
    /**
     * Test whether the address is witness pubkeyhash.
     * @returns {Boolean}
     */
    isPubkeyhash(): boolean;
    /**
     * Test whether the address is witness scripthash.
     * @returns {Boolean}
     */
    isScripthash(): boolean;
    /**
     * Test whether the address is unspendable.
     * @returns {Boolean}
     */
    isNulldata(): boolean;
    /**
     * Test whether the address is an unknown witness program.
     * @returns {Boolean}
     */
    isUnknown(): boolean;
    /**
     * Test address validity.
     * @returns {Boolean}
     */
    isValid(): boolean;
    /**
     * Calculate address size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Write address to buffer writer.
     * @param {BufferWriter} bw
     * @returns {BufferWriter}
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Read address from buffer reader.
     * @param {BufferReader} br
     * @returns {Address}
     */
    read(br: BufferReader): Address;
    /**
     * Inspect the Address.
     * @returns {Object}
     */
    format(): any;
}
import Network = require("../protocol/network");
