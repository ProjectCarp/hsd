export = HashList;
/**
 * HashList
 */
declare class HashList {
    static decode(data: any, size: any): HashList;
    static decodeSafe(data: any, size: any): HashList;
    constructor(size: any);
    size: any;
    data: Buffer;
    pos: number;
    set length(arg: number);
    get length(): number;
    keys(): Generator<Buffer, void, unknown>;
    values(): Generator<Buffer, void, unknown>;
    clone(): any;
    push(hash: any): HashList;
    pop(): Buffer;
    clear(): HashList;
    encode(): Buffer;
    decode(data: any): HashList;
    valuesSafe(): Generator<Buffer, void, unknown>;
    popSafe(): Buffer;
    encodeSafe(): Buffer;
    decodeSafe(data: any): HashList;
    [Symbol.iterator](): Generator<Buffer, void, unknown>;
}
