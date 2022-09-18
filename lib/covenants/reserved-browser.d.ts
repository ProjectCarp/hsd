declare const _exports: Reserved;
export = _exports;
/**
 * Reserved
 */
declare class Reserved {
    constructor(data: any);
    data: any;
    size: any;
    nameValue: any;
    rootValue: any;
    topValue: any;
    has(hash: any): boolean;
    get(hash: any): {
        name: any;
        hash: any;
        target: any;
        value: any;
        root: boolean;
    };
    hasByName(name: any): boolean;
    getByName(name: any): {
        name: any;
        hash: any;
        target: any;
        value: any;
        root: boolean;
    };
    entries(): Generator<(Buffer | {
        name: any;
        hash: any;
        target: any;
        value: any;
        root: boolean;
    })[], void, unknown>;
    keys(): Generator<Buffer, void, unknown>;
    values(): Generator<any, void, unknown>;
    [Symbol.iterator](): Generator<(Buffer | {
        name: any;
        hash: any;
        target: any;
        value: any;
        root: boolean;
    })[], void, unknown>;
}
