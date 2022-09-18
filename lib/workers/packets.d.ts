declare namespace packetTypes {
    const ENV: number;
    const EVENT: number;
    const LOG: number;
    const ERROR: number;
    const ERRORRESULT: number;
    const CHECK: number;
    const CHECKRESULT: number;
    const SIGN: number;
    const SIGNRESULT: number;
    const CHECKINPUT: number;
    const CHECKINPUTRESULT: number;
    const SIGNINPUT: number;
    const SIGNINPUTRESULT: number;
    const ECVERIFY: number;
    const ECVERIFYRESULT: number;
    const ECSIGN: number;
    const ECSIGNRESULT: number;
    const MINE: number;
    const MINERESULT: number;
    const SCRYPT: number;
    const SCRYPTRESULT: number;
}
/**
 * EnvPacket
 */
export class EnvPacket extends Packet {
    constructor(env: any);
    env: any;
    json: string;
    getSize(): any;
    write(bw: any): any;
    read(br: any): EnvPacket;
}
/**
 * EventPacket
 */
export class EventPacket extends Packet {
    constructor(items: any);
    items: any;
    json: string;
    getSize(): any;
    write(bw: any): any;
    read(br: any): EventPacket;
}
/**
 * LogPacket
 */
export class LogPacket extends Packet {
    constructor(text: any);
    text: any;
    getSize(): any;
    write(bw: any): any;
    read(br: any): LogPacket;
}
/**
 * ErrorPacket
 */
export class ErrorPacket extends Packet {
    constructor(error: any);
    error: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): ErrorPacket;
}
/**
 * ErrorResultPacket
 */
export class ErrorResultPacket extends ErrorPacket {
}
/**
 * CheckPacket
 */
export class CheckPacket extends Packet {
    constructor(tx: any, view: any, flags: any);
    tx: any;
    view: any;
    flags: any;
    getSize(): any;
    write(bw: any): any;
    read(br: any): CheckPacket;
}
/**
 * CheckResultPacket
 */
export class CheckResultPacket extends Packet {
    constructor(error: any);
    error: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): CheckResultPacket;
}
/**
 * SignPacket
 */
export class SignPacket extends Packet {
    constructor(tx: any, rings: any, type: any);
    tx: any;
    rings: any;
    type: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): SignPacket;
}
/**
 * SignResultPacket
 */
export class SignResultPacket extends Packet {
    static fromTX(tx: any, total: any): SignResultPacket;
    constructor(total: any, witness: any, script: any);
    total: any;
    witness: any;
    fromTX(tx: any, total: any): SignResultPacket;
    getSize(): number;
    write(bw: any): any;
    inject(tx: any): void;
    read(br: any): SignResultPacket;
}
/**
 * CheckInputPacket
 */
export class CheckInputPacket extends Packet {
    constructor(tx: any, index: any, coin: any, flags: any);
    tx: any;
    index: any;
    coin: any;
    flags: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): CheckInputPacket;
}
/**
 * CheckInputResultPacket
 */
export class CheckInputResultPacket extends CheckResultPacket {
}
/**
 * SignInputPacket
 */
export class SignInputPacket extends Packet {
    constructor(tx: any, index: any, coin: any, ring: any, type: any);
    tx: any;
    index: any;
    coin: any;
    ring: any;
    type: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): SignInputPacket;
}
/**
 * SignInputResultPacket
 */
export class SignInputResultPacket extends Packet {
    static fromTX(tx: any, i: any, value: any): SignInputResultPacket;
    constructor(value: any, witness: any);
    value: any;
    witness: any;
    fromTX(tx: any, i: any, value: any): SignInputResultPacket;
    getSize(): any;
    write(bw: any): any;
    inject(tx: any, i: any): void;
    read(br: any): SignInputResultPacket;
}
/**
 * ECVerifyPacket
 */
export class ECVerifyPacket extends Packet {
    constructor(msg: any, sig: any, key: any);
    msg: any;
    sig: any;
    key: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): ECVerifyPacket;
}
/**
 * ECVerifyResultPacket
 */
export class ECVerifyResultPacket extends Packet {
    constructor(value: any);
    value: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): ECVerifyResultPacket;
}
/**
 * ECSignPacket
 */
export class ECSignPacket extends Packet {
    constructor(msg: any, key: any);
    msg: any;
    key: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): ECSignPacket;
}
/**
 * ECSignResultPacket
 */
export class ECSignResultPacket extends Packet {
    constructor(sig: any);
    sig: any;
    getSize(): any;
    write(bw: any): any;
    read(br: any): ECSignResultPacket;
}
/**
 * MinePacket
 */
export class MinePacket extends Packet {
    constructor(hdr: any, target: any, rounds: any);
    hdr: any;
    target: any;
    rounds: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): MinePacket;
}
/**
 * MineResultPacket
 */
export class MineResultPacket extends Packet {
    constructor(nonce: any, solved: any);
    nonce: any;
    solved: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): MineResultPacket;
}
/**
 * ScryptPacket
 */
export class ScryptPacket extends Packet {
    constructor(passwd: any, salt: any, N: any, r: any, p: any, len: any);
    passwd: any;
    salt: any;
    N: any;
    r: any;
    p: any;
    len: any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): ScryptPacket;
}
/**
 * ScryptResultPacket
 */
export class ScryptResultPacket extends Packet {
    constructor(key: any);
    key: any;
    getSize(): any;
    write(bw: any): any;
    read(br: any): ScryptResultPacket;
}
/**
 * Packet
 */
declare class Packet {
    id: number;
    cmd: number;
    getSize(): void;
    write(bw: any): void;
    read(br: any): void;
    decode(data: any, extra: any): Packet;
}
declare namespace Packet {
    const id: number;
}
export { packetTypes as types };
