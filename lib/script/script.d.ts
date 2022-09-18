export = Script;
/**
 * Script
 * Represents a input or output script.
 * @alias module:script.Script
 * @property {Array} code - Parsed script code.
 * @property {Buffer?} raw - Serialized script.
 * @property {Number} length - Number of parsed opcodes.
 */
declare class Script {
    /**
     * Instantiate script from an array
     * of buffers and numbers.
     * @param {Array} code
     * @returns {Script}
     */
    static fromArray(code: any[]): Script;
    /**
     * Instantiate script from stack items.
     * @param {Buffer[]} items
     * @returns {Script}
     */
    static fromItems(items: Buffer[]): Script;
    /**
     * Instantiate script from stack.
     * @param {Stack} stack
     * @returns {Script}
     */
    static fromStack(stack: Stack): Script;
    /**
     * Create a pay-to-pubkey script.
     * @param {Buffer} key
     * @returns {Script}
     */
    static fromPubkey(key: Buffer): Script;
    /**
     * Create a pay-to-pubkeyhash script.
     * @param {Buffer} hash
     * @returns {Script}
     */
    static fromPubkeyhash(hash: Buffer): Script;
    /**
     * Create a pay-to-multisig script.
     * @param {Number} m
     * @param {Number} n
     * @param {Buffer[]} keys
     * @returns {Script}
     */
    static fromMultisig(m: number, n: number, keys: Buffer[]): Script;
    /**
     * Verify an input and output script, and a witness if present.
     * @param {Witness} witness
     * @param {Address} addr
     * @param {TX} tx
     * @param {Number} index
     * @param {Amount} value
     * @param {VerifyFlags} flags
     * @throws {ScriptError}
     */
    static verify(witness: Witness, addr: Address, tx: TX, index: number, value: Amount, flags: VerifyFlags): void;
    /**
     * Test whether an object a Script.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isScript(obj: any): boolean;
    /**
     * Create a script.
     * @constructor
     * @param {Buffer|Array|Object} code
     */
    constructor(options: any);
    raw: Buffer;
    code: any[];
    /**
     * Set length.
     * @param {Number} value
     */
    set length(arg: number);
    /**
     * Get length.
     * @returns {Number}
     */
    get length(): number;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Instantiate a value-only iterator.
     * @returns {ScriptIterator}
     */
    values(): ScriptIterator;
    /**
     * Instantiate a key and value iterator.
     * @returns {ScriptIterator}
     */
    entries(): ScriptIterator;
    /**
     * Convert the script to an array of
     * Buffers (pushdatas) and Numbers
     * (opcodes).
     * @returns {Array}
     */
    toArray(): any[];
    /**
     * Inject properties from an array of
     * of buffers and numbers.
     * @private
     * @param {Array} code
     * @returns {Script}
     */
    private fromArray;
    /**
     * Convert script to stack items.
     * @returns {Buffer[]}
     */
    toItems(): Buffer[];
    /**
     * Inject data from stack items.
     * @private
     * @param {Buffer[]} items
     * @returns {Script}
     */
    private fromItems;
    /**
     * Convert script to stack.
     * @returns {Stack}
     */
    toStack(): Stack;
    /**
     * Inject data from stack.
     * @private
     * @param {Stack} stack
     * @returns {Script}
     */
    private fromStack;
    /**
     * Inject properties from script.
     * Used for cloning.
     * @private
     * @param {Script} script
     * @returns {Script}
     */
    private inject;
    /**
     * Test equality against script.
     * @param {Script} script
     * @returns {Boolean}
     */
    equals(script: Script): boolean;
    /**
     * Compare against another script.
     * @param {Script} script
     * @returns {Number}
     */
    compare(script: Script): number;
    /**
     * Clear the script.
     * @returns {Script}
     */
    clear(): Script;
    /**
     * Inspect the script.
     * @returns {String} Human-readable script code.
     */
    format(): string;
    /**
     * Convert the script to a bitcoind test string.
     * @returns {String} Human-readable script code.
     */
    toString(): string;
    /**
     * Format the script as bitcoind asm.
     * @param {Boolean?} decode - Attempt to decode hash types.
     * @returns {String} Human-readable script.
     */
    toASM(decode: boolean | null): string;
    /**
     * Re-encode the script internally. Useful if you
     * changed something manually in the `code` array.
     * @returns {Script}
     */
    compile(): Script;
    /**
     * Write the script to a buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Encode the script to a Buffer. See {@link Script#encode}.
     * @param {String} enc - Encoding, either `'hex'` or `null`.
     * @returns {Buffer|String} Serialized script.
     */
    encode(): Buffer | string;
    /**
     * Convert script to a hex string.
     * @returns {String}
     */
    getJSON(): string;
    /**
     * Inject properties from json object.
     * @private
     * @param {String} json
     */
    private fromJSON;
    /**
     * Get the script's "subscript" starting at a separator.
     * @param {Number} index - The last separator to sign/verify beyond.
     * @returns {Script} Subscript.
     */
    getSubscript(index: number): Script;
    /**
     * Get the script's "subscript" starting at a separator.
     * Remove all OP_CODESEPARATORs if present. This bizarre
     * behavior is necessary for signing and verification when
     * code separators are present.
     * @returns {Script} Subscript.
     */
    removeSeparators(): Script;
    /**
     * Execute and interpret the script.
     * @param {Stack} stack - Script execution stack.
     * @param {Number?} flags - Script standard flags.
     * @param {TX?} tx - Transaction being verified.
     * @param {Number?} index - Index of input being verified.
     * @param {Amount?} value - Previous output value.
     * @throws {ScriptError} Will be thrown on VERIFY failures.
     */
    execute(stack: Stack, flags: number | null, tx: TX, index: number | null, value: Amount | null): void;
    /**
     * Find a data element in a script.
     * @param {Buffer} data - Data element to match against.
     * @returns {Number} Index (`-1` if not present).
     */
    indexOf(data: Buffer): number;
    /**
     * Test a script to see if it is likely
     * to be script code (no weird opcodes).
     * @returns {Boolean}
     */
    isCode(): boolean;
    /**
     * Inject properties from a pay-to-pubkey script.
     * @private
     * @param {Buffer} key
     */
    private fromPubkey;
    /**
     * Inject properties from a pay-to-pubkeyhash script.
     * @private
     * @param {Buffer} hash
     */
    private fromPubkeyhash;
    /**
     * Inject properties from pay-to-multisig script.
     * @private
     * @param {Number} m
     * @param {Number} n
     * @param {Buffer[]} keys
     */
    private fromMultisig;
    /**
     * Get the standard script type.
     * @returns {ScriptType}
     */
    getType(): ScriptType;
    /**
     * Test whether a script is of an unknown/non-standard type.
     * @returns {Boolean}
     */
    isUnknown(): boolean;
    /**
     * Test whether the script is standard by policy standards.
     * @returns {Boolean}
     */
    isStandard(): boolean;
    /**
     * Calculate the size of the script
     * excluding the varint size bytes.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Calculate the size of the script
     * including the varint size bytes.
     * @returns {Number}
     */
    getVarSize(): number;
    /**
     * Get the sha3 of the raw script.
     * @returns {Hash}
     */
    sha3(): Hash;
    /**
     * Test whether the output script is pay-to-pubkey.
     * @param {Boolean} [minimal=false] - Minimaldata only.
     * @returns {Boolean}
     */
    isPubkey(minimal?: boolean): boolean;
    /**
     * Get P2PK key if present.
     * @param {Boolean} [minimal=false] - Minimaldata only.
     * @returns {Buffer|null}
     */
    getPubkey(minimal?: boolean): Buffer | null;
    /**
     * Test whether the output script is pay-to-pubkeyhash.
     * @param {Boolean} [minimal=false] - Minimaldata only.
     * @returns {Boolean}
     */
    isPubkeyhash(minimal?: boolean): boolean;
    /**
     * Get P2PKH hash if present.
     * @param {Boolean} [minimal=false] - Minimaldata only.
     * @returns {Buffer|null}
     */
    getPubkeyhash(minimal?: boolean): Buffer | null;
    /**
     * Test whether the output script is pay-to-multisig.
     * @param {Boolean} [minimal=false] - Minimaldata only.
     * @returns {Boolean}
     */
    isMultisig(minimal?: boolean): boolean;
    /**
     * Get multisig m and n values if present.
     * @param {Boolean} [minimal=false] - Minimaldata only.
     * @returns {Array} [m, n]
     */
    getMultisig(minimal?: boolean): any[];
    /**
     * Test whether the output script is unspendable.
     * @returns {Boolean}
     */
    isUnspendable(): boolean;
    /**
     * Test the script against a bloom filter.
     * @param {Bloom} filter
     * @returns {Boolean}
     */
    test(filter: Bloom): boolean;
    /**
     * Test the script to see if it contains only push ops.
     * Push ops are: OP_1NEGATE, OP_0-OP_16 and all PUSHDATAs.
     * @returns {Boolean}
     */
    isPushOnly(): boolean;
    /**
     * Count the sigops in the script.
     * @returns {Number} sigop count
     */
    getSigops(): number;
    get(index: any): any;
    pop(): any;
    shift(): any;
    remove(index: any): any;
    set(index: any, op: any): Script;
    push(op: any): Script;
    unshift(op: any): Script;
    insert(index: any, op: any): Script;
    getOp(index: any): any;
    popOp(): any;
    shiftOp(): any;
    removeOp(index: any): any;
    setOp(index: any, value: any): Script;
    pushOp(value: any): Script;
    unshiftOp(value: any): Script;
    insertOp(index: any, value: any): Script;
    getData(index: any): any;
    popData(): any;
    shiftData(): any;
    removeData(index: any): any;
    setData(index: any, data: any): Script;
    pushData(data: any): Script;
    unshiftData(data: any): Script;
    insertData(index: any, data: any): Script;
    getLength(index: any): any;
    getPush(index: any): any;
    popPush(): any;
    shiftPush(): any;
    removePush(index: any): any;
    setPush(index: any, data: any): Script;
    pushPush(data: any): Script;
    unshiftPush(data: any): Script;
    insertPush(index: any, data: any): Script;
    getString(index: any, enc: any): any;
    popString(enc: any): any;
    shiftString(enc: any): any;
    removeString(index: any, enc: any): any;
    setString(index: any, str: any, enc: any): Script;
    pushString(str: any, enc: any): Script;
    unshiftString(str: any, enc: any): Script;
    insertString(index: any, str: any, enc: any): Script;
    getSmall(index: any): any;
    popSmall(): any;
    shiftSmall(): any;
    removeSmall(index: any): any;
    setSmall(index: any, num: any): Script;
    pushSmall(num: any): Script;
    unshiftSmall(num: any): Script;
    insertSmall(index: any, num: any): Script;
    getNum(index: any, minimal: any, limit: any): any;
    popNum(minimal: any, limit: any): any;
    shiftNum(minimal: any, limit: any): any;
    removeNum(index: any, minimal: any, limit: any): any;
    setNum(index: any, num: any): Script;
    pushNum(num: any): Script;
    unshiftNum(num: any): Script;
    insertNum(index: any, num: any): Script;
    getInt(index: any, minimal: any, limit: any): any;
    popInt(minimal: any, limit: any): any;
    shiftInt(minimal: any, limit: any): any;
    removeInt(index: any, minimal: any, limit: any): any;
    setInt(index: any, num: any): Script;
    pushInt(num: any): Script;
    unshiftInt(num: any): Script;
    insertInt(index: any, num: any): Script;
    getBool(index: any): any;
    popBool(): any;
    shiftBool(): any;
    removeBool(index: any): any;
    setBool(index: any, value: any): Script;
    pushBool(value: any): Script;
    unshiftBool(value: any): Script;
    insertBool(index: any, value: any): Script;
    getSym(index: any): any;
    popSym(): any;
    shiftSym(): any;
    removeSym(index: any): any;
    setSym(index: any, symbol: any): Script;
    pushSym(symbol: any): Script;
    unshiftSym(symbol: any): Script;
    insertSym(index: any, symbol: any): Script;
    /**
     * Inject properties from bitcoind test string.
     * @private
     * @param {String} items - Script string.
     * @throws Parse error.
     */
    private fromString;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer}
     */
    private decode;
    /**
     * Instantiate a value-only iterator.
     * @returns {ScriptIterator}
     */
    [Symbol.iterator](): ScriptIterator;
}
declare namespace Script {
    /**
     * *
     */
    type opcodes = number;
    const opcodes: {
        OP_0: number;
        OP_PUSHDATA1: number;
        OP_PUSHDATA2: number;
        OP_PUSHDATA4: number;
        OP_1NEGATE: number;
        OP_RESERVED: number;
        OP_1: number;
        OP_2: number;
        OP_3: number;
        OP_4: number;
        OP_5: number;
        OP_6: number;
        OP_7: number;
        OP_8: number;
        OP_9: number;
        OP_10: number;
        OP_11: number;
        OP_12: number;
        OP_13: number;
        OP_14: number;
        OP_15: number;
        OP_16: number;
        OP_NOP: number;
        OP_VER: number;
        OP_IF: number;
        OP_NOTIF: number;
        OP_VERIF: number;
        OP_VERNOTIF: number;
        OP_ELSE: number;
        OP_ENDIF: number;
        OP_VERIFY: number;
        OP_RETURN: number;
        OP_TOALTSTACK: number;
        OP_FROMALTSTACK: number;
        OP_2DROP: number;
        OP_2DUP: number;
        OP_3DUP: number;
        OP_2OVER: number;
        OP_2ROT: number;
        OP_2SWAP: number;
        OP_IFDUP: number;
        OP_DEPTH: number;
        OP_DROP: number;
        OP_DUP: number;
        OP_NIP: number;
        OP_OVER: number;
        OP_PICK: number;
        OP_ROLL: number;
        OP_ROT: number;
        OP_SWAP: number;
        OP_TUCK: number;
        OP_CAT: number;
        OP_SUBSTR: number;
        OP_LEFT: number;
        OP_RIGHT: number;
        OP_SIZE: number;
        OP_INVERT: number;
        OP_AND: number;
        OP_OR: number;
        OP_XOR: number;
        OP_EQUAL: number;
        OP_EQUALVERIFY: number;
        OP_RESERVED1: number;
        OP_RESERVED2: number;
        OP_1ADD: number;
        OP_1SUB: number;
        OP_2MUL: number;
        OP_2DIV: number;
        OP_NEGATE: number;
        OP_ABS: number;
        OP_NOT: number;
        OP_0NOTEQUAL: number;
        OP_ADD: number;
        OP_SUB: number;
        OP_MUL: number;
        OP_DIV: number;
        OP_MOD: number;
        OP_LSHIFT: number;
        OP_RSHIFT: number;
        OP_BOOLAND: number;
        OP_BOOLOR: number;
        OP_NUMEQUAL: number;
        OP_NUMEQUALVERIFY: number;
        OP_NUMNOTEQUAL: number;
        OP_LESSTHAN: number;
        OP_GREATERTHAN: number;
        OP_LESSTHANOREQUAL: number;
        OP_GREATERTHANOREQUAL: number;
        OP_MIN: number;
        OP_MAX: number;
        OP_WITHIN: number;
        OP_RIPEMD160: number;
        OP_SHA1: number;
        OP_SHA256: number;
        OP_HASH160: number;
        OP_HASH256: number;
        OP_CODESEPARATOR: number;
        OP_CHECKSIG: number;
        OP_CHECKSIGVERIFY: number;
        OP_CHECKMULTISIG: number;
        OP_CHECKMULTISIGVERIFY: number;
        OP_NOP1: number;
        OP_CHECKLOCKTIMEVERIFY: number;
        OP_CHECKSEQUENCEVERIFY: number;
        OP_NOP4: number;
        OP_NOP5: number;
        OP_NOP6: number;
        OP_NOP7: number; /**
         * Instantiate a value-only iterator.
         * @returns {ScriptIterator}
         */
        OP_NOP8: number;
        OP_NOP9: number;
        OP_NOP10: number;
        OP_BLAKE160: number;
        OP_BLAKE256: number;
        OP_SHA3: number;
        /**
         * Instantiate a key and value iterator.
         * @returns {ScriptIterator}
         */
        OP_KECCAK: number;
        OP_TYPE: number;
        OP_INVALIDOPCODE: number;
    };
    const opcodesByVal: {
        0: string;
        76: string;
        77: string;
        78: string;
        79: string;
        80: string;
        81: string;
        82: string;
        83: string;
        84: string;
        85: string;
        86: string;
        87: string;
        88: string;
        89: string;
        90: string;
        91: string;
        92: string;
        93: string;
        94: string;
        95: string;
        96: string;
        97: string;
        98: string;
        99: string;
        100: string;
        101: string;
        102: string;
        103: string;
        104: string;
        105: string;
        106: string;
        107: string;
        108: string;
        109: string;
        110: string;
        111: string;
        112: string;
        113: string;
        114: string; /**
         * Convert script to stack items.
         * @returns {Buffer[]}
         */
        115: string;
        116: string;
        117: string;
        118: string;
        119: string;
        120: string;
        121: string;
        122: string;
        123: string;
        124: string;
        125: string;
        126: string;
        127: string;
        128: string;
        129: string;
        130: string;
        131: string;
        132: string;
        133: string;
        134: string;
        135: string;
        136: string;
        137: string;
        138: string;
        139: string;
        140: string;
        141: string;
        142: string;
        143: string;
        144: string;
        145: string;
        146: string;
        147: string;
        148: string;
        149: string;
        150: string;
        151: string;
        152: string;
        153: string;
        154: string;
        155: string;
        156: string;
        157: string;
        158: string;
        159: string;
        160: string;
        161: string;
        162: string;
        163: string;
        164: string;
        165: string;
        166: string;
        167: string;
        168: string;
        169: string;
        170: string;
        171: string;
        172: string;
        173: string;
        174: string;
        175: string;
        176: string;
        177: string;
        178: string;
        179: string;
        180: string;
        181: string;
        182: string;
        183: string;
        184: string;
        185: string;
        192: string;
        193: string;
        194: string;
        195: string;
        208: string;
        255: string;
    };
    /**
     * Script and locktime flags. See {@link VerifyFlags }.
     */
    type flags = number;
    const flags: {
        VERIFY_NONE: number;
        VERIFY_MINIMALDATA: number;
        VERIFY_DISCOURAGE_UPGRADABLE_NOPS: number;
        VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM: number;
        VERIFY_MINIMALIF: number;
        VERIFY_NULLFAIL: number;
    };
    /**
     * *
     */
    type hashType = SighashType;
    const hashType: {
        ALL: number;
        NONE: number; /**
         * Convert script to a hex string.
         * @returns {String}
         */
        SINGLE: number;
        SINGLEREVERSE: number;
        NOINPUT: number;
        ANYONECANPAY: number;
    };
    const hashTypeByVal: {
        1: string;
        2: string;
        3: string;
        4: string;
        64: string;
        128: string;
    };
    /**
     * Output script types.
     */
    type types = number;
    const types: {
        NONSTANDARD: number;
        PUBKEY: number;
        PUBKEYHASH: number;
        MULTISIG: number;
    };
    const typesByVal: {
        0: string;
        1: string;
        2: string;
        3: string;
    };
}
import Stack = require("./stack");
