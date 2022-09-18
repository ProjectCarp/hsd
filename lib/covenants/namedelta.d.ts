export = NameDelta;
/**
 * NameDelta
 * @extends {bio.Struct}
 */
declare class NameDelta {
    height: any;
    renewal: any;
    owner: Outpoint;
    value: any;
    highest: any;
    data: any;
    transfer: any;
    revoked: any;
    claimed: any;
    renewals: any;
    registered: boolean;
    expired: boolean;
    weak: boolean;
    isNull(): boolean;
    getSize(): number;
    getField(): number;
    write(bw: any): any;
    read(br: any): NameDelta;
}
import Outpoint = require("../primitives/outpoint");
