export = Claim;
/**
 * Claim
 * @extends {bufio.Struct}
 */
declare class Claim {
    static fromBlob(blob: any): Claim;
    static fromProof(proof: any): Claim;
    blob: Buffer;
    _hash: any;
    _data: any;
    refresh(): Claim;
    hash(): any;
    hashHex(): any;
    getData(network: any): any;
    getSize(): number;
    write(bw: any): any;
    decode(data: any): Claim;
    read(br: any): Claim;
    toInv(): InvItem;
    getWeight(): number;
    getVirtualSize(): number;
    getMinFee(size: any, rate: any): number;
    getFee(network: any): any;
    getRate(size: any, network: any): number;
    toTX(network: any, height: any): TX;
    getProof(): any;
    toProof(): any;
    toBlob(): Buffer;
    getJSON(): any;
    fromBlob(blob: any): Claim;
    fromProof(proof: any): Claim;
}
import InvItem = require("./invitem");
import TX = require("./tx");
