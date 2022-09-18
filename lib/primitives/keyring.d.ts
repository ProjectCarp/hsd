export = KeyRing;
/**
 * Key Ring
 * Represents a key ring which amounts to an address.
 * @alias module:primitives.KeyRing
 */
declare class KeyRing {
    /**
     * Instantiate keyring from a private key.
     * @param {Buffer} key
     * @returns {KeyRing}
     */
    static fromPrivate(key: Buffer): KeyRing;
    /**
     * Generate a keyring.
     * @returns {KeyRing}
     */
    static generate(): KeyRing;
    /**
     * Instantiate keyring from a public key.
     * @param {Buffer} publicKey
     * @returns {KeyRing}
     */
    static fromPublic(key: any): KeyRing;
    /**
     * Instantiate keyring from a public key.
     * @param {Buffer} publicKey
     * @returns {KeyRing}
     */
    static fromKey(key: any): KeyRing;
    /**
     * Instantiate keyring from script.
     * @param {Buffer} key
     * @param {Script} script
     * @returns {KeyRing}
     */
    static fromScript(key: Buffer, script: Script): KeyRing;
    /**
     * Instantiate a keyring from a serialized secret.
     * @param {Base58String} secret
     * @param {(Network|NetworkType)?} network
     * @returns {KeyRing}
     */
    static fromSecret(data: any, network: (Network | NetworkType) | null): KeyRing;
    /**
     * Test whether an object is a KeyRing.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isKeyRing(obj: any): boolean;
    /**
     * Create a key ring.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    publicKey: Buffer;
    privateKey: any;
    script: any;
    _keyHash: any;
    _keyAddress: Address;
    _scriptHash: any;
    _scriptAddress: Address;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Clear cached key/script hashes.
     */
    refresh(): KeyRing;
    /**
     * Inject data from private key.
     * @private
     * @param {Buffer} key
     */
    private fromPrivate;
    /**
     * Inject data from public key.
     * @private
     * @param {Buffer} key
     */
    private fromPublic;
    /**
     * Generate a keyring.
     * @private
     * @returns {KeyRing}
     */
    private generate;
    /**
     * Inject data from public key.
     * @private
     * @param {Buffer} privateKey
     */
    private fromKey;
    /**
     * Inject data from script.
     * @private
     * @param {Buffer} key
     * @param {Script} script
     */
    private fromScript;
    /**
     * Calculate WIF serialization size.
     * @returns {Number}
     */
    getSecretSize(): number;
    /**
     * Convert key to a secret.
     * @param {(Network|NetworkType)?} network
     * @returns {Base58String}
     */
    toSecret(network: (Network | NetworkType) | null): Base58String;
    /**
     * Inject properties from serialized secret.
     * @private
     * @param {Base58String} secret
     * @param {(Network|NetworkType)?} network
     */
    private fromSecret;
    /**
     * Get private key.
     * @returns {Buffer} Private key.
     */
    getPrivateKey(): Buffer;
    /**
     * Get public key.
     * @returns {Buffer}
     */
    getPublicKey(): Buffer;
    /**
     * Get redeem script.
     * @returns {Script}
     */
    getScript(): Script;
    /**
     * Get scripthash.
     * @returns {Buffer}
     */
    getScriptHash(): Buffer;
    /**
     * Get scripthash address.
     * @returns {Address}
     */
    getScriptAddress(): Address;
    /**
     * Get public key hash.
     * @returns {Buffer}
     */
    getKeyHash(): Buffer;
    /**
     * Get pubkeyhash address.
     * @returns {Address}
     */
    getKeyAddress(): Address;
    /**
     * Get hash.
     * @returns {Buffer}
     */
    getHash(): Buffer;
    /**
     * Get base58 address.
     * @returns {Address}
     */
    getAddress(): Address;
    /**
     * Test an address hash against hash and program hash.
     * @param {Buffer} hash
     * @returns {Boolean}
     */
    ownHash(hash: Buffer): boolean;
    /**
     * Check whether transaction output belongs to this address.
     * @param {TX|Output} tx - Transaction or Output.
     * @param {Number?} index - Output index.
     * @returns {Boolean}
     */
    ownOutput(tx: TX | Output, index: number | null): boolean;
    /**
     * Test a hash against script hashes to
     * find the correct redeem script, if any.
     * @param {Buffer} hash
     * @returns {Script|null}
     */
    getRedeem(hash: Buffer): Script | null;
    /**
     * Sign a message.
     * @param {Buffer} msg
     * @returns {Buffer} Signature in DER format.
     */
    sign(msg: Buffer): Buffer;
    /**
     * Verify a message.
     * @param {Buffer} msg
     * @param {Buffer} sig - Signature in DER format.
     * @returns {Boolean}
     */
    verify(msg: Buffer, sig: Buffer): boolean;
    /**
     * Get witness program version.
     * @returns {Number}
     */
    getVersion(): number;
    /**
     * Inspect keyring.
     * @returns {Object}
     */
    format(): any;
    /**
     * Convert an KeyRing to a more json-friendly object.
     * @returns {Object}
     */
    getJSON(network: any): any;
    /**
     * Inject properties from json object.
     * @private
     * @param {Object} json
     */
    private fromJSON;
    /**
     * Calculate serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Write the keyring to a buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
import Address = require("./address");
import Network = require("../protocol/network");
import Script = require("../script/script");
import Output = require("./output");
