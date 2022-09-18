export = ContractState;
declare class ContractState {
    constructor(network: any);
    network: any;
    unique: any;
    refs: any;
    opens: any;
    bids: any;
    reveals: any;
    updates: any;
    view: CoinView;
    names: any;
    clear(): ContractState;
    hasName(nameHash: any): any;
    addName(nameHash: any): ContractState;
    removeName(nameHash: any): ContractState;
    hasNames(tx: any): boolean;
    addMap(map: any, nameHash: any, hash: any): ContractState;
    removeMap(map: any, nameHash: any, hash: any): ContractState;
    addOpen(nameHash: any, hash: any): ContractState;
    removeOpen(nameHash: any, hash: any): ContractState;
    addBid(nameHash: any, hash: any): ContractState;
    removeBid(nameHash: any, hash: any): ContractState;
    addReveal(nameHash: any, hash: any): ContractState;
    removeReveal(nameHash: any, hash: any): ContractState;
    addUpdate(nameHash: any, hash: any): ContractState;
    removeUpdate(nameHash: any, hash: any): ContractState;
    reference(nameHash: any): ContractState;
    dereference(nameHash: any): ContractState;
    track(tx: any, view: any): ContractState;
    untrack(tx: any): ContractState;
    merge(view: any): ContractState;
    toSet(map: any, nameHash: any, items: any): ContractState;
    handleExpired(nameHash: any, items: any): ContractState;
    handleOpen(nameHash: any, items: any): ContractState;
    handleBidding(nameHash: any, items: any): ContractState;
    handleReveal(nameHash: any, items: any): ContractState;
    handleClosed(nameHash: any, items: any): ContractState;
    invalidate(height: any, hardened: any): any;
}
import CoinView = require("../coins/coinview");
