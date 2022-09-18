/**
 * Resource
 * @extends {Struct}
 */
export class Resource {
    ttl: 21600;
    records: any[];
    hasType(type: any): boolean;
    hasNS(): boolean;
    hasDS(): boolean;
    encode(): any;
    getSize(map: any): number;
    write(bw: any, map: any): Resource;
    read(br: any): Resource;
    toNS(name: any): any[];
    toGlue(name: any): any[];
    toDS(name: any): any[];
    toTXT(name: any): any[];
    toZone(name: any, sign?: boolean): any[];
    toReferral(name: any, type: any, isTLD: any): any;
    toNSEC(name: any): any;
    toDNS(name: any, type: any): any;
    getJSON(name: any): {
        records: any[];
    };
    fromJSON(json: any): Resource;
}
/**
 * DS
 * @extends {Struct}
 */
export class DS {
    keyTag: number;
    algorithm: number;
    digestType: number;
    digest: Buffer;
    get type(): number;
    getSize(): number;
    write(bw: any): DS;
    read(br: any): DS;
    toDNS(name?: string, ttl?: 21600): any;
    getJSON(): {
        type: string;
        keyTag: number;
        algorithm: number;
        digestType: number;
        digest: string;
    };
    fromJSON(json: any): DS;
}
/**
 * NS
 * @extends {Struct}
 */
export class NS {
    ns: string;
    get type(): number;
    getSize(map: any): any;
    write(bw: any, map: any): NS;
    read(br: any): NS;
    toDNS(name?: string, ttl?: 21600): any;
    getJSON(): {
        type: string;
        ns: string;
    };
    fromJSON(json: any): NS;
}
/**
 * GLUE4
 * @extends {Struct}
 */
export class GLUE4 {
    ns: string;
    address: string;
    get type(): number;
    getSize(map: any): any;
    write(bw: any, map: any): GLUE4;
    read(br: any): GLUE4;
    toDNS(name?: string, ttl?: 21600): any;
    toGlue(name?: string, ttl?: 21600): any;
    getJSON(): {
        type: string;
        ns: string;
        address: string;
    };
    fromJSON(json: any): GLUE4;
}
/**
 * GLUE6
 * @extends {Struct}
 */
export class GLUE6 {
    ns: string;
    address: string;
    get type(): number;
    getSize(map: any): any;
    write(bw: any, map: any): GLUE6;
    read(br: any): GLUE6;
    toDNS(name?: string, ttl?: 21600): any;
    toGlue(name?: string, ttl?: 21600): any;
    getJSON(): {
        type: string;
        ns: string;
        address: string;
    };
    fromJSON(json: any): GLUE6;
}
/**
 * SYNTH4
 * @extends {Struct}
 */
export class SYNTH4 {
    address: string;
    get type(): number;
    get ns(): string;
    getSize(): number;
    write(bw: any): SYNTH4;
    read(br: any): SYNTH4;
    toDNS(name?: string, ttl?: 21600): any;
    toGlue(name?: string, ttl?: 21600): any;
    getJSON(): {
        type: string;
        address: string;
    };
    fromJSON(json: any): SYNTH4;
}
/**
 * SYNTH6
 * @extends {Struct}
 */
export class SYNTH6 {
    address: string;
    get type(): number;
    get ns(): string;
    getSize(): number;
    write(bw: any): SYNTH6;
    read(br: any): SYNTH6;
    toDNS(name?: string, ttl?: 21600): any;
    toGlue(name?: string, ttl?: 21600): any;
    getJSON(): {
        type: string;
        address: string;
    };
    fromJSON(json: any): SYNTH6;
}
/**
 * TXT
 * @extends {Struct}
 */
export class TXT {
    txt: any[];
    get type(): number;
    getSize(): number;
    write(bw: any): TXT;
    read(br: any): TXT;
    toDNS(name?: string, ttl?: 21600): any;
    getJSON(): {
        type: string;
        txt: any[];
    };
    fromJSON(json: any): TXT;
}
