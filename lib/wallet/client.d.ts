export = WalletClient;
declare class WalletClient {
    constructor(options: any);
    bind(event: any, handler: any): void;
    hook(event: any, handler: any): void;
    getTip(): Promise<{
        hash: any;
        height: any;
        time: any;
    }>;
    getEntry(block: any): Promise<{
        hash: any;
        height: any;
        time: any;
    }>;
    send(tx: any): Promise<any>;
    sendClaim(claim: any): Promise<any>;
    setFilter(filter: any): Promise<any>;
    rescan(start: any): Promise<any>;
    getNameStatus(nameHash: any): Promise<any>;
    getCoin(hash: any, index: any): Promise<any>;
}
