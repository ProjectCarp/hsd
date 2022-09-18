export = Peer;
/**
 * Represents a network peer.
 * @alias module:net.Peer
 * @extends EventEmitter
 */
declare class Peer extends EventEmitter {
    /**
     * Create inbound peer from socket.
     * @param {PeerOptions} options
     * @param {net.Socket} socket
     * @returns {Peer}
     */
    static fromInbound(options: PeerOptions, socket: net.Socket, encrypted: any): Peer;
    /**
     * Create outbound peer from net address.
     * @param {PeerOptions} options
     * @param {NetAddress} addr
     * @returns {Peer}
     */
    static fromOutbound(options: PeerOptions, addr: NetAddress): Peer;
    /**
     * Create a peer.
     * @alias module:net.Peer
     * @constructor
     * @param {PeerOptions} options
     */
    constructor(options: PeerOptions);
    options: PeerOptions;
    network: Network;
    logger: any;
    locker: any;
    parser: Parser;
    framer: Framer;
    id: number;
    stream: any;
    socket: any;
    brontide: BrontideStream;
    encrypted: boolean;
    identityKey: Buffer;
    opened: boolean;
    outbound: boolean;
    loader: boolean;
    address: NetAddress;
    local: NetAddress;
    name: any;
    connected: boolean;
    destroyed: boolean;
    ack: boolean;
    handshake: boolean;
    time: number;
    lastSend: number;
    lastRecv: number;
    drainSize: number;
    drainQueue: any[];
    banScore: number;
    invQueue: any[];
    onPacket: any;
    next: any;
    prev: any;
    version: number;
    services: number;
    height: number;
    agent: any;
    noRelay: boolean;
    preferHeaders: boolean;
    hashContinue: Buffer;
    spvFilter: any;
    feeRate: number;
    compactMode: number;
    merkleBlock: any;
    merkleTime: number;
    merkleMatches: number;
    merkleMap: any;
    syncing: boolean;
    sentAddr: boolean;
    gettingAddr: boolean;
    sentGetAddr: boolean;
    challenge: Buffer;
    lastPong: number;
    lastPing: number;
    minPing: number;
    blockTime: number;
    bestHash: Buffer;
    bestHeight: number;
    lastTip: Buffer;
    lastStop: Buffer;
    connectTimeout: any;
    pingTimer: NodeJS.Timer;
    invTimer: NodeJS.Timer;
    stallTimer: NodeJS.Timer;
    addrFilter: any;
    invFilter: any;
    blockMap: any;
    txMap: any;
    claimMap: any;
    airdropMap: any;
    responseMap: Map<any, any>;
    compactBlocks: any;
    nameMap: any;
    totalProofs: number;
    proofWindow: SlidingWindow;
    /**
     * Begin peer initialization.
     * @private
     */
    private init;
    /**
     * Getter to retrieve hostname.
     * @returns {String}
     */
    hostname(): string;
    /**
     * Frame a payload with a header.
     * @param {String} cmd - Packet type.
     * @param {Buffer} payload
     * @returns {Buffer} Payload with header prepended.
     */
    framePacket(cmd: string, payload: Buffer): Buffer;
    /**
     * Feed data to the parser.
     * @param {Buffer} data
     */
    feedParser(data: Buffer): void;
    /**
     * Bind to socket.
     * @param {net.Socket} socket
     */
    _bind(socket: net.Socket, encrypted: any): void;
    /**
     * Accept an inbound socket.
     * @param {net.Socket} socket
     * @returns {net.Socket}
     */
    accept(socket: net.Socket, encrypted: any): net.Socket;
    /**
     * Create the socket and begin connecting. This method
     * will use `options.createSocket` if provided.
     * @param {NetAddress} addr
     * @returns {net.Socket}
     */
    connect(addr: NetAddress): net.Socket;
    /**
     * Do a reverse dns lookup on peer's addr.
     * @returns {Promise}
     */
    getName(): Promise<any>;
    /**
     * Open and perform initial handshake (without rejection).
     * @method
     * @returns {Promise}
     */
    tryOpen(): Promise<any>;
    /**
     * Open and perform initial handshake.
     * @method
     * @returns {Promise}
     */
    open(): Promise<any>;
    /**
     * Open and perform initial handshake.
     * @method
     * @returns {Promise}
     */
    _open(): Promise<any>;
    /**
     * Wait for connection.
     * @private
     * @returns {Promise}
     */
    private initConnect;
    /**
     * Setup stall timer.
     * @private
     * @returns {Promise}
     */
    private initStall;
    /**
     * Handle post handshake.
     * @method
     * @private
     * @returns {Promise}
     */
    private initVersion;
    /**
     * Finalize peer after handshake.
     * @method
     * @private
     * @returns {Promise}
     */
    private finalize;
    /**
     * Broadcast blocks to peer.
     * @param {Block[]} blocks
     */
    announceBlock(blocks: Block[]): void;
    /**
     * Broadcast transactions to peer.
     * @param {TX[]} txs
     */
    announceTX(txs: TX[]): void;
    /**
     * Broadcast transactions to peer.
     * @param {Claim[]} claims
     */
    announceClaim(claims: Claim[]): void;
    /**
     * Broadcast transactions to peer.
     * @param {AirdropProof[]} proofs
     */
    announceAirdrop(proofs: AirdropProof[]): void;
    /**
     * Send inv to a peer.
     * @param {InvItem[]} items
     */
    queueInv(items: InvItem[]): void;
    /**
     * Flush inv queue.
     * @private
     */
    private flushInv;
    /**
     * Force send an inv (no filter check).
     * @param {InvItem[]} items
     */
    sendInv(items: InvItem[]): void;
    /**
     * Send headers to a peer.
     * @param {Headers[]} items
     */
    sendHeaders(items: Headers[]): void;
    /**
     * Send a compact block.
     * @private
     * @param {Block} block
     * @returns {Boolean}
     */
    private sendCompactBlock;
    /**
     * Send a `version` packet.
     */
    sendVersion(): void;
    /**
     * Send a `getaddr` packet.
     */
    sendGetAddr(): void;
    /**
     * Send a `ping` packet.
     */
    sendPing(): void;
    /**
     * Send `filterload` to update the local bloom filter.
     */
    sendFilterLoad(filter: any): void;
    /**
     * Set a fee rate filter for the peer.
     * @param {Rate} rate
     */
    sendFeeRate(rate: Rate): void;
    /**
     * Disconnect from and destroy the peer.
     */
    destroy(): void;
    /**
     * Write data to the peer's socket.
     * @param {Buffer} data
     */
    write(data: Buffer): void;
    /**
     * Send a packet.
     * @param {Packet} packet
     */
    send(packet: Packet): void;
    /**
     * Send a packet.
     * @param {Packet} packet
     */
    sendRaw(type: any, body: any): void;
    /**
     * Wait for a drain event.
     * @returns {Promise}
     */
    drain(): Promise<any>;
    /**
     * Handle drain event.
     * @private
     */
    private handleDrain;
    /**
     * Add to drain counter.
     * @private
     * @param {Number} size
     */
    private needsDrain;
    /**
     * Potentially add response timeout.
     * @private
     * @param {Packet} packet
     */
    private addTimeout;
    /**
     * Potentially finish response timeout.
     * @private
     * @param {Packet} packet
     */
    private fulfill;
    /**
     * Potentially timeout peer if it hasn't responded.
     * @private
     */
    private maybeTimeout;
    /**
     * Wait for a packet to be received from peer.
     * @private
     * @param {Number} type - Packet type.
     * @param {Number} timeout
     * @returns {RequestEntry}
     */
    private request;
    /**
     * Fulfill awaiting requests created with {@link Peer#request}.
     * @private
     * @param {Number} type - Packet type.
     * @param {Object} payload
     */
    private response;
    /**
     * Wait for a packet to be received from peer.
     * @private
     * @param {Number} type - Packet type.
     * @returns {Promise} - Returns Object(payload).
     * Executed on timeout or once packet is received.
     */
    private wait;
    /**
     * Emit an error and destroy the peer.
     * @private
     * @param {...String|Error} err
     */
    private error;
    /**
     * Calculate peer block inv type (filtered,
     * compact, witness, or non-witness).
     * @returns {Number}
     */
    blockType(): number;
    /**
     * Calculate peer tx inv type (witness or non-witness).
     * @returns {Number}
     */
    txType(): number;
    /**
     * Send `getdata` to peer.
     * @param {InvItem[]} items
     */
    getData(items: InvItem[]): void;
    /**
     * Send batched `getdata` to peer.
     * @param {InvType} type
     * @param {Hash[]} hashes
     */
    getItems(type: InvType, hashes: Hash[]): void;
    /**
     * Send batched `getdata` to peer (blocks).
     * @param {Hash[]} hashes
     */
    getBlock(hashes: Hash[]): void;
    /**
     * Send batched `getdata` to peer (txs).
     * @param {Hash[]} hashes
     */
    getTX(hashes: Hash[]): void;
    /**
     * Send batched `getdata` to peer (claims).
     * @param {Hash[]} hashes
     */
    getClaim(hashes: Hash[]): void;
    /**
     * Send batched `getdata` to peer (airdrops).
     * @param {Hash[]} hashes
     */
    getAirdrop(hashes: Hash[]): void;
    /**
     * Send `getdata` to peer for a single block.
     * @param {Hash} hash
     */
    getFullBlock(hash: Hash): void;
    /**
     * Handle a packet payload.
     * @method
     * @private
     * @param {Packet} packet
     */
    private readPacket;
    /**
     * Handle a packet payload without a lock.
     * @method
     * @private
     * @param {Packet} packet
     */
    private handlePacket;
    /**
     * Handle `version` packet.
     * @method
     * @private
     * @param {VersionPacket} packet
     */
    private handleVersion;
    /**
     * Handle `verack` packet.
     * @method
     * @private
     * @param {VerackPacket} packet
     */
    private handleVerack;
    /**
     * Handle `ping` packet.
     * @method
     * @private
     * @param {PingPacket} packet
     */
    private handlePing;
    /**
     * Handle `pong` packet.
     * @method
     * @private
     * @param {PongPacket} packet
     */
    private handlePong;
    /**
     * Handle `sendheaders` packet.
     * @method
     * @private
     * @param {SendHeadersPacket} packet
     */
    private handleSendHeaders;
    /**
     * Handle `filterload` packet.
     * @method
     * @private
     * @param {FilterLoadPacket} packet
     */
    private handleFilterLoad;
    /**
     * Handle `filteradd` packet.
     * @method
     * @private
     * @param {FilterAddPacket} packet
     */
    private handleFilterAdd;
    /**
     * Handle `filterclear` packet.
     * @method
     * @private
     * @param {FilterClearPacket} packet
     */
    private handleFilterClear;
    /**
     * Handle `feefilter` packet.
     * @method
     * @private
     * @param {FeeFilterPacket} packet
     */
    private handleFeeFilter;
    /**
     * Handle `sendcmpct` packet.
     * @method
     * @private
     * @param {SendCmpctPacket}
     */
    private handleSendCmpct;
    /**
     * Send `getheaders` to peer. Note that unlike
     * `getblocks`, `getheaders` can have a null locator.
     * @param {Hash[]} locator - Chain locator.
     * @param {Hash} stop - Hash to stop at.
     */
    sendGetHeaders(locator: Hash[], stop: Hash): void;
    /**
     * Send `getblocks` to peer.
     * @param {Hash[]} locator - Chain locator.
     * @param {Hash} stop - Hash to stop at.
     */
    sendGetBlocks(locator: Hash[], stop: Hash): void;
    /**
     * Send `mempool` to peer.
     */
    sendMempool(): void;
    /**
     * Send `reject` to peer.
     * @param {Number} code
     * @param {String} reason
     * @param {Number} msg
     * @param {Hash} hash
     */
    sendReject(code: number, reason: string, msg: number, hash: Hash): void;
    /**
     * Send a `sendcmpct` packet.
     * @param {Number} mode
     */
    sendCompact(mode: number): void;
    /**
     * Send a `getproof` packet.
     * @param {Buffer} root
     * @param {Buffer} key
     */
    sendGetProof(root: Buffer, key: Buffer): void;
    /**
     * Send a `proof` packet.
     * @param {Number} version
     * @param {Buffer} root
     * @param {Buffer} key
     * @param {Proof} proof
     */
    sendProof(root: Buffer, key: Buffer, proof: Proof): void;
    /**
     * Increase banscore on peer.
     * @param {Number} score
     * @returns {Boolean}
     */
    increaseBan(score: number): boolean;
    /**
     * Ban peer.
     */
    ban(): void;
    /**
     * Send a `reject` packet to peer.
     * @param {Number} msg
     * @param {VerifyError} err
     * @returns {Boolean}
     */
    reject(msg: number, err: VerifyError): boolean;
    /**
     * Returns human readable list of services
     * that are available.
     * @returns {String[]}
     */
    getServiceNames(): string[];
    /**
     * Test whether required services are available.
     * @param {Number} services
     * @returns {Boolean}
     */
    hasServices(services: number): boolean;
    /**
     * Test whether the peer sent us a
     * compatible compact block handshake.
     * @returns {Boolean}
     */
    hasCompact(): boolean;
    /**
     * Inspect the peer.
     * @returns {String}
     */
    inspect(): string;
}
declare namespace Peer {
    const DRAIN_MAX: number;
    const STALL_INTERVAL: number;
    const PING_INTERVAL: number;
    const INV_INTERVAL: number;
    const RESPONSE_TIMEOUT: number;
    const BLOCK_TIMEOUT: number;
    const TX_TIMEOUT: number;
    const NAME_TIMEOUT: number;
    const TIMEOUT_INTERVAL: number;
    const CONNECT_TIMEOUT: number;
    const HANDSHAKE_TIMEOUT: number;
}
import EventEmitter = require("events");
/**
 * Peer Options
 * @alias module:net.PeerOptions
 */
declare class PeerOptions {
    /**
     * Instantiate options from object.
     * @param {Object} options
     * @returns {PeerOptions}
     */
    static fromOptions(options: any): PeerOptions;
    /**
     * Get the chain height.
     * @private
     * @returns {Number}
     */
    private static getHeight;
    /**
     * Test whether the chain is synced.
     * @private
     * @returns {Boolean}
     */
    private static isFull;
    /**
     * Create a version packet nonce.
     * @private
     * @param {String} hostname
     * @returns {Buffer}
     */
    private static createNonce;
    /**
     * Test whether version nonce is ours.
     * @private
     * @param {Buffer} nonce
     * @returns {Boolean}
     */
    private static hasNonce;
    /**
     * Get fee rate for txid.
     * @private
     * @param {Hash} hash
     * @returns {Rate}
     */
    private static getRate;
    /**
     * Create peer options.
     * @constructor
     */
    constructor(options: any);
    network: Network;
    logger: any;
    createSocket: any;
    version: 3;
    services: number;
    agent: string;
    identityKey: Buffer;
    noRelay: boolean;
    spv: boolean;
    compact: boolean;
    headers: boolean;
    banScore: 100;
    maxProofRPS: number;
    getHeight: typeof PeerOptions.getHeight;
    isFull: typeof PeerOptions.isFull;
    createNonce: typeof PeerOptions.createNonce;
    hasNonce: typeof PeerOptions.hasNonce;
    getRate: typeof PeerOptions.getRate;
    /**
     * Inject properties from object.
     * @private
     * @param {Object} options
     * @returns {PeerOptions}
     */
    private fromOptions;
}
import Network = require("../protocol/network");
import Parser = require("./parser");
import Framer = require("./framer");
import { BrontideStream } from "./brontide";
import NetAddress = require("./netaddress");
import SlidingWindow = require("./slidingwindow");
import Block = require("../primitives/block");
import TX = require("../primitives/tx");
import Claim = require("../primitives/claim");
import AirdropProof = require("../primitives/airdropproof");
import InvItem = require("../primitives/invitem");
