/**
 * CipherState
 * @extends {EventEmitter}
 */
export class CipherState extends EventEmitter {
    constructor();
    nonce: number;
    iv: Buffer;
    key: Buffer;
    salt: Buffer;
    update(): Buffer;
    initKey(key: any): CipherState;
    initSalt(key: any, salt: any): CipherState;
    rotateKey(): CipherState;
    encrypt(pt: any, ad: any): any;
    decrypt(ct: any, tag: any, ad: any): boolean;
}
/**
 * SymmetricState
 * @extends {CipherState}
 */
export class SymmetricState extends CipherState {
    chain: Buffer;
    temp: Buffer;
    digest: Buffer;
    initSymmetric(protocolName: any): SymmetricState;
    mixKey(input: any): SymmetricState;
    mixDigest(data: any, tag: any): any;
    mixHash(data: any, tag: any): SymmetricState;
    encryptHash(pt: any): any;
    decryptHash(ct: any, tag: any): boolean;
}
/**
 * HandshakeState
 * @extends {SymmetricState}
 */
export class HandshakeState extends SymmetricState {
    initiator: boolean;
    localStatic: Buffer;
    localEphemeral: Buffer;
    remoteStatic: Buffer;
    remoteEphemeral: Buffer;
    generateKey: () => any;
    initState(initiator: any, prologue: any, localPub: any, remotePub: any): HandshakeState;
}
/**
 * Brontide
 * @extends {HandshakeState}
 */
export class Brontide extends HandshakeState {
    sendCipher: CipherState;
    recvCipher: CipherState;
    init(initiator: any, localPub: any, remotePub: any): Brontide;
    genActOne(): Buffer;
    recvActOne(actOne: any): Brontide;
    genActTwo(): Buffer;
    recvActTwo(actTwo: any): Brontide;
    genActThree(): Buffer;
    recvActThree(actThree: any): Brontide;
    split(): Brontide;
    write(data: any): Buffer;
    read(packet: any): any;
}
/**
 * BrontideStream
 * @extends {Brontide}
 */
export class BrontideStream extends Brontide {
    static fromInbound(socket: any, ourKey: any): BrontideStream;
    static fromOutbound(socket: any, ourKey: any, theirKey: any): BrontideStream;
    socket: any;
    state: number;
    pending: any[];
    total: number;
    waiting: number;
    hasSize: boolean;
    buffer: any[];
    onData: (data: any) => void;
    onConnect: () => BrontideStream;
    accept(socket: any, ourKey: any): BrontideStream;
    connect(socket: any, ourKey: any, theirKey: any): BrontideStream;
    start(): BrontideStream;
    unleash(): BrontideStream;
    destroy(): BrontideStream;
    write(data: any): boolean;
    feed(data: any): void;
    parse(data: any): boolean;
    _parse(data: any): void;
}
import EventEmitter = require("events");
