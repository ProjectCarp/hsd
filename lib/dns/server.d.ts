/**
 * RootServer
 * @extends {DNSServer}
 */
export class RootServer {
    constructor(options: any);
    ra: boolean;
    edns: boolean;
    dnssec: boolean;
    noSig0: boolean;
    icann: any;
    logger: any;
    key: any;
    host: string;
    port: number;
    lookup: any;
    middle: any;
    publicHost: string;
    blacklist: Set<string>;
    cache: RootCache;
    synth: string;
    initOptions(options: any): RootServer;
    initNode(): RootServer;
    logMessage(prefix: any, msg: any): void;
    signSize(): 0 | 94;
    sign(msg: any, host: any, port: any): any;
    lookupName(name: any): Promise<any>;
    response(req: any, rinfo: any): Promise<any>;
    resolve(req: any, rinfo: any): Promise<any>;
    open(): Promise<void>;
    getReserved(tld: any): {
        name: any;
        hash: any;
        target: any;
        value: any;
        root: boolean;
    };
    signRRSet(rrset: any, type: any): void;
    resetCache(): void;
    serial(): number;
    toSOA(): any;
    toNS(): any;
    toA(): any;
    toAAAA(): any;
    toNSEC(): any;
}
/**
 * RecursiveServer
 * @extends {DNSServer}
 */
export class RecursiveServer {
    constructor(options: any);
    ra: boolean;
    edns: boolean;
    dnssec: boolean;
    noSig0: boolean;
    noAny: boolean;
    logger: any;
    key: any;
    host: string;
    port: number;
    stubHost: string;
    stubPort: number;
    hns: any;
    initOptions(options: any): RecursiveServer;
    initNode(): RecursiveServer;
    logMessage(prefix: any, msg: any): void;
    signSize(): 0 | 94;
    sign(msg: any, host: any, port: any): any;
    open(...args: any[]): Promise<void>;
    close(): Promise<void>;
    resolve(req: any, rinfo: any): Promise<any>;
    lookup(name: any, type: any): Promise<any>;
}
/**
 * RootCache
 */
declare class RootCache {
    constructor(size: any);
    cache: any;
    set(name: any, type: any, msg: any): RootCache;
    get(name: any, type: any): any;
    reset(): void;
}
export {};
