export namespace types {
    const VERSION: number;
    const VERACK: number;
    const PING: number;
    const PONG: number;
    const GETADDR: number;
    const ADDR: number;
    const INV: number;
    const GETDATA: number;
    const NOTFOUND: number;
    const GETBLOCKS: number;
    const GETHEADERS: number;
    const HEADERS: number;
    const SENDHEADERS: number;
    const BLOCK: number;
    const TX: number;
    const REJECT: number;
    const MEMPOOL: number;
    const FILTERLOAD: number;
    const FILTERADD: number;
    const FILTERCLEAR: number;
    const MERKLEBLOCK: number;
    const FEEFILTER: number;
    const SENDCMPCT: number;
    const CMPCTBLOCK: number;
    const GETBLOCKTXN: number;
    const BLOCKTXN: number;
    const GETPROOF: number;
    const PROOF: number;
    const CLAIM: number;
    const AIRDROP: number;
    const UNKNOWN: number;
    const INTERNAL: number;
    const DATA: number;
}
/**
 * *
 */
export type types = number;
export const typesByVal: string[];
export function decode(type: number, data: Buffer): Packet;
/**
 * Base Packet
 */
export class Packet {
    type: number;
    get rawType(): number;
}
/**
 * Version Packet
 * @extends Packet
 * @property {Number} version - Protocol version.
 * @property {Number} services - Service bits.
 * @property {Number} time - Timestamp of discovery.
 * @property {NetAddress} remote - Their address.
 * @property {Buffer} nonce
 * @property {String} agent - User agent string.
 * @property {Number} height - Chain height.
 * @property {Boolean} noRelay - Whether transactions
 * should be relayed immediately.
 */
export class VersionPacket extends Packet {
    /**
     * Create a version packet.
     * @constructor
     * @param {Object?} options
     * @param {Number} options.version - Protocol version.
     * @param {Number} options.services - Service bits.
     * @param {Number} options.time - Timestamp of discovery.
     * @param {NetAddress} options.remote - Their address.
     * @param {Buffer} options.nonce
     * @param {String} options.agent - User agent string.
     * @param {Number} options.height - Chain height.
     * @param {Boolean} options.noRelay - Whether transactions
     * should be relayed immediately.
     */
    constructor(options: any | null);
    version: 3;
    services: number;
    time: number;
    remote: NetAddress;
    nonce: Buffer;
    agent: string;
    height: number;
    noRelay: boolean;
    /**
     * Inject properties from options.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Write version packet to buffer writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): VersionPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * Verack Packet
 * @extends Packet
 */
export class VerackPacket extends Packet {
}
/**
 * Ping Packet
 * @extends Packet
 * @property {BN|null} nonce
 */
export class PingPacket extends Packet {
    /**
     * Create a `ping` packet.
     * @constructor
     * @param {Buffer} nonce
     */
    constructor(nonce: Buffer);
    nonce: Buffer;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize ping packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): PingPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * Pong Packet
 * @extends Packet
 * @property {BN} nonce
 */
export class PongPacket extends Packet {
    /**
     * Create a `pong` packet.
     * @constructor
     * @param {Buffer} nonce
     */
    constructor(nonce: Buffer);
    nonce: Buffer;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize pong packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): PongPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * GetAddr Packet
 * @extends Packet
 */
export class GetAddrPacket extends Packet {
}
/**
 * Addr Packet
 * @extends Packet
 * @property {NetAddress[]} items
 */
export class AddrPacket extends Packet {
    /**
     * Create a `addr` packet.
     * @constructor
     * @param {(NetAddress[])?} items
     */
    constructor(items: (NetAddress[]) | null);
    items: NetAddress[];
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize addr packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): AddrPacket;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {Buffer} data
     */
    private read;
}
/**
 * Inv Packet
 * @extends Packet
 * @property {InvItem[]} items
 */
export class InvPacket extends Packet {
    /**
     * Create a `inv` packet.
     * @constructor
     * @param {(InvItem[])?} items
     */
    constructor(items: (InvItem[]) | null);
    items: InvItem[];
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize inv packet to writer.
     * @param {Buffer} bw
     */
    write(bw: Buffer): InvPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * GetData Packet
 * @extends InvPacket
 */
export class GetDataPacket extends InvPacket {
}
/**
 * NotFound Packet
 * @extends InvPacket
 */
export class NotFoundPacket extends InvPacket {
}
/**
 * GetBlocks Packet
 * @extends Packet
 * @property {Hash[]} locator
 * @property {Hash|null} stop
 */
export class GetBlocksPacket extends Packet {
    /**
     * Create a `getblocks` packet.
     * @constructor
     * @param {Hash[]} locator
     * @param {Hash?} stop
     */
    constructor(locator: Hash[], stop: Hash | null);
    locator: Hash[];
    stop: Hash;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize getblocks packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): GetBlocksPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * GetHeader Packets
 * @extends GetBlocksPacket
 */
export class GetHeadersPacket extends GetBlocksPacket {
}
/**
 * Headers Packet
 * @extends Packet
 * @property {Headers[]} items
 */
export class HeadersPacket extends Packet {
    /**
     * Create a `headers` packet.
     * @constructor
     * @param {(Headers[])?} items
     */
    constructor(items: (Headers[]) | null);
    items: Headers[];
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize headers packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): HeadersPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * SendHeaders Packet
 * @extends Packet
 */
export class SendHeadersPacket extends Packet {
}
/**
 * Block Packet
 * @extends Packet
 * @property {Block} block
 */
export class BlockPacket extends Packet {
    /**
     * Create a `block` packet.
     * @constructor
     * @param {Block|null} block
     */
    constructor(block: Block | null);
    block: any;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize block packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): any;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * TX Packet
 * @extends Packet
 * @property {TX} block
 */
export class TXPacket extends Packet {
    /**
     * Create a `tx` packet.
     * @constructor
     * @param {TX|null} tx
     */
    constructor(tx: TX | null);
    tx: TX;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize tx packet to writer.
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
/**
 * Reject Packet
 * @extends Packet
 * @property {(Number|String)?} code - Code
 * (see {@link RejectPacket.codes}).
 * @property {String?} msg - Message.
 * @property {String?} reason - Reason.
 * @property {(Hash|Buffer)?} data - Transaction or block hash.
 */
export class RejectPacket extends Packet {
    /**
     * Instantiate reject packet from reason message.
     * @param {Number} code
     * @param {String} reason
     * @param {String?} msg
     * @param {Hash?} hash
     * @returns {RejectPacket}
     */
    static fromReason(code: number, reason: string, msg: string | null, hash: Hash | null): RejectPacket;
    /**
     * Instantiate reject packet from verify error.
     * @param {VerifyError} err
     * @param {(TX|Block)?} obj
     * @returns {RejectPacket}
     */
    static fromError(err: VerifyError, obj: (TX | Block) | null): RejectPacket;
    /**
     * Create reject packet.
     * @constructor
     */
    constructor(options: any);
    message: number;
    code: number;
    reason: string;
    hash: any;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Get symbolic code.
     * @returns {String}
     */
    getCode(): string;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize reject packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): RejectPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Inject properties from reason message and object.
     * @private
     * @param {Number} code
     * @param {String} reason
     * @param {String?} msg
     * @param {Hash?} hash
     */
    private fromReason;
    /**
     * Inspect reject packet.
     * @returns {String}
     */
    format(): string;
}
export namespace RejectPacket {
    namespace codes {
        export const MALFORMED: number;
        export const INVALID: number;
        export const OBSOLETE: number;
        export const DUPLICATE: number;
        export const NONSTANDARD: number;
        export const DUST: number;
        export const INSUFFICIENTFEE: number;
        export const CHECKPOINT: number;
        const INTERNAL_1: number;
        export { INTERNAL_1 as INTERNAL };
        export const HIGHFEE: number;
        export const ALREADYKNOWN: number;
        export const CONFLICT: number;
    }
    /**
     * *
     */
    type codes = number;
    const codesByVal: {
        1: string;
        16: string;
        17: string;
        18: string;
        64: string;
        65: string;
        66: string;
        67: string;
        256: string;
        257: string;
        258: string;
        259: string;
    };
}
/**
 * Mempool Packet
 * @extends Packet
 */
export class MempoolPacket extends Packet {
}
/**
 * FilterLoad Packet
 * @extends Packet
 */
export class FilterLoadPacket extends Packet {
    /**
     * Create a `filterload` packet.
     * @constructor
     * @param {BloomFilter|null} filter
     */
    constructor(filter: BloomFilter | null);
    filter: any;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize filterload packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): any;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Ensure the filter is within the size limits.
     * @returns {Boolean}
     */
    isWithinConstraints(): boolean;
}
/**
 * FilterAdd Packet
 * @extends Packet
 * @property {Buffer} data
 */
export class FilterAddPacket extends Packet {
    /**
     * Create a `filteradd` packet.
     * @constructor
     * @param {Buffer?} data
     */
    constructor(data: Buffer | null);
    data: Buffer;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize filteradd packet to writer.
     * @returns {BufferWriter} bw
     */
    write(bw: any): BufferWriter;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * FilterClear Packet
 * @extends Packet
 */
export class FilterClearPacket extends Packet {
}
/**
 * MerkleBlock Packet
 * @extends Packet
 * @property {MerkleBlock} block
 */
export class MerkleBlockPacket extends Packet {
    /**
     * Create a `merkleblock` packet.
     * @constructor
     * @param {MerkleBlock?} block
     */
    constructor(block: MerkleBlock | null);
    block: MerkleBlock;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize merkleblock packet to writer.
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
/**
 * FeeFilter Packet
 * @extends Packet
 * @property {Rate} rate
 */
export class FeeFilterPacket extends Packet {
    /**
     * Create a `feefilter` packet.
     * @constructor
     * @param {Rate?} rate
     */
    constructor(rate: Rate | null);
    rate: number;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize feefilter packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): FeeFilterPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * SendCmpct Packet
 * @extends Packet
 * @property {Number} mode
 * @property {Number} version
 */
export class SendCmpctPacket extends Packet {
    /**
     * Create a `sendcmpct` packet.
     * @constructor
     * @param {Number|null} mode
     * @param {Number|null} version
     */
    constructor(mode: number | null, version: number | null);
    mode: number;
    version: number;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize sendcmpct packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): SendCmpctPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * CmpctBlock Packet
 * @extends Packet
 * @property {Block} block
 */
export class CmpctBlockPacket extends Packet {
    /**
     * Create a `cmpctblock` packet.
     * @constructor
     * @param {Block|null} block
     */
    constructor(block: Block | null);
    block: any;
    /**
     * Serialize cmpctblock packet.
     * @returns {Buffer}
     */
    getSize(): Buffer;
    /**
     * Serialize cmpctblock packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): any;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * GetBlockTxn Packet
 * @extends Packet
 * @property {TXRequest} request
 */
export class GetBlockTxnPacket extends Packet {
    /**
     * Create a `getblocktxn` packet.
     * @constructor
     * @param {TXRequest?} request
     */
    constructor(request: TXRequest);
    request: any;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize getblocktxn packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): any;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * BlockTxn Packet
 * @extends Packet
 * @property {TXResponse} response
 */
export class BlockTxnPacket extends Packet {
    /**
     * Create a `blocktxn` packet.
     * @constructor
     * @param {TXResponse?} response
     */
    constructor(response: TXResponse);
    response: any;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize blocktxn packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): any;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * GetProof Packet
 * @extends Packet
 * @property {Buffer} root
 * @property {Buffer} key
 */
export class GetProofPacket extends Packet {
    /**
     * Create a `getproof` packet.
     * @constructor
     * @param {Buffer?} root
     * @param {Buffer?} key
     */
    constructor(root: Buffer | null, key: Buffer | null);
    root: Buffer;
    key: Buffer;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize getproof packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): GetProofPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * Proof Packet
 * @extends Packet
 * @property {Hash} hash
 */
export class ProofPacket extends Packet {
    /**
     * Create a `proof` packet.
     * @constructor
     * @param {Buffer} root
     * @param {Buffer} key
     * @param {UrkelProof} proof
     */
    constructor(root: Buffer, key: Buffer, proof: UrkelProof);
    root: Buffer;
    key: Buffer;
    proof: any;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize proof packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): ProofPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * Claim Packet
 * @extends Packet
 */
export class ClaimPacket extends Packet {
    /**
     * Create a `proof` packet.
     * @constructor
     * @param {Claim?} claim
     */
    constructor(claim: Claim | null);
    claim: Claim;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize proof packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): ClaimPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * Airdrop Packet
 * @extends Packet
 */
export class AirdropPacket extends Packet {
    /**
     * Create a `proof` packet.
     * @constructor
     * @param {AirdropProof?} proof
     */
    constructor(proof: AirdropProof | null);
    proof: AirdropProof;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize proof packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): AirdropPacket;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
}
/**
 * Unknown Packet
 * @extends Packet
 * @property {String} cmd
 * @property {Buffer} data
 */
export class UnknownPacket extends Packet {
    /**
     * Create an unknown packet.
     * @constructor
     * @param {Number|null} type
     * @param {Buffer|null} data
     */
    constructor(type: number | null, data: Buffer | null);
    packetType: number;
    data: Buffer;
    /**
     * Get serialization size.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize unknown packet to writer.
     * @param {BufferWriter} bw
     */
    write(bw: BufferWriter): UnknownPacket;
    /**
     * Inject properties from serialized data.
     * @private
     * @param {BufferReader} data
     * @param {Number} type
     */
    private read;
}
import NetAddress = require("./netaddress");
import InvItem = require("../primitives/invitem");
import Headers = require("../primitives/headers");
import TX_1 = require("../primitives/tx");
import MerkleBlock = require("../primitives/merkleblock");
import Claim = require("../primitives/claim");
import AirdropProof = require("../primitives/airdropproof");
