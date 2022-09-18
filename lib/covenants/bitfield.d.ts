/**
 * Field
 */
export class Field {
    static decode(size: any, data: any): Field;
    constructor(size?: number);
    size: number;
    field: Buffer;
    dirty: boolean;
    set(i: any, val: any): Field;
    get(i: any): number;
    isSpent(i: any): boolean;
    spend(i: any): Field;
    unspend(i: any): Field;
    encode(): Buffer;
    decode(data: any): Field;
}
/**
 * BitField
 */
export class BitField extends Field {
    static decode(data: any): BitField;
    constructor();
}
/**
 * BitView
 */
export class BitView {
    bits: Map<any, any>;
    spend(field: any, tx: any): boolean;
    undo(tx: any): BitView;
    commit(field: any): any;
}
