export = AirdropProof;
/**
 * AirdropProof
 */
declare class AirdropProof {
    index: number;
    proof: any[];
    subindex: number;
    subproof: any[];
    key: Buffer;
    version: number;
    address: Buffer;
    fee: number;
    signature: Buffer;
    getSize(sighash?: boolean): number;
    write(bw: any, sighash?: boolean): any;
    decode(data: any): AirdropProof;
    read(br: any): AirdropProof;
    hash(): any;
    verifyMerkle(expect: any): any;
    signatureData(): any;
    signatureHash(): any;
    getKey(): any;
    verifySignature(): any;
    position(): number;
    toTX(TX: any, Input: any, Output: any): any;
    toInv(): InvItem;
    getWeight(): number;
    getVirtualSize(): number;
    isWeak(): any;
    isAddress(): boolean;
    getValue(): any;
    isSane(): boolean;
    verify(expect: any): boolean;
    getJSON(): {
        index: number;
        proof: any[];
        subindex: number;
        subproof: any[];
        key: any;
        version: number;
        address: string;
        fee: number;
        signature: string;
    };
    fromJSON(json: any): AirdropProof;
}
declare namespace AirdropProof {
    export { AIRDROP_ROOT };
    export { FAUCET_ROOT };
    export { TREE_LEAVES };
    export { AIRDROP_LEAVES };
    export { FAUCET_LEAVES };
}
import InvItem = require("./invitem");
declare const AIRDROP_ROOT: Buffer;
declare const FAUCET_ROOT: Buffer;
declare const TREE_LEAVES: number;
declare const AIRDROP_LEAVES: 216199;
declare const FAUCET_LEAVES: 1358;
