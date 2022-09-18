export = AirdropKey;
/**
 * AirdropKey
 */
declare class AirdropKey {
    static fromAddress(addr: any, value: any, sponsor: any): AirdropKey;
    type: number;
    n: Buffer;
    e: Buffer;
    C1: Buffer;
    point: Buffer;
    version: number;
    address: Buffer;
    value: number;
    sponsor: boolean;
    nonce: any;
    tweak: any;
    inject(key: any): AirdropKey;
    isRSA(): boolean;
    isGoo(): boolean;
    isP256(): boolean;
    isED25519(): boolean;
    isAddress(): boolean;
    isWeak(): boolean;
    validate(): any;
    verify(msg: any, sig: any): any;
    hash(): any;
    getSize(): number;
    write(bw: any): any;
    read(br: any): AirdropKey;
    fromAddress(addr: any, value: any, sponsor?: boolean): AirdropKey;
    getJSON(): {
        type: string;
        n: string;
        e: string;
        C1: string;
        point: string;
        version: number;
        address: string;
        value: number;
        sponsor: boolean;
        nonce: any;
    };
    fromJSON(json: any): AirdropKey;
}
declare namespace AirdropKey {
    export { keyTypes };
    export { keyTypesByVal };
}
declare namespace keyTypes {
    const RSA: number;
    const GOO: number;
    const P256: number;
    const ED25519: number;
    const ADDRESS: number;
}
declare const keyTypesByVal: {
    [x: number]: string;
};
