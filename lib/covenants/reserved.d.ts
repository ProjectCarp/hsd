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
    _compare(b: any, off: any): 1 | -1 | 0;
    _find(key: any): any;
    _target(pos: any): any;
    _flags(pos: any): any;
    _index(pos: any): any;
    _value(pos: any): any;
    _get(hash: any, pos: any): {
        name: any;
        hash: any;
        target: any;
        value: any;
        root: boolean;
    };
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
    entries(): Generator<any[], void, unknown>;
    keys(): Generator<any, void, unknown>;
    values(): Generator<any, void, unknown>;
    [Symbol.iterator](): Generator<any[], void, unknown>;
}
