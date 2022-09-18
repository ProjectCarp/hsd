export = Seeder;
/**
 * Seeder
 */
declare class Seeder {
    constructor(options: any);
    ra: boolean;
    edns: boolean;
    dnssec: boolean;
    hosts: any;
    zone: string;
    ns: string;
    ip: any;
    host: string;
    port: number;
    lastRefresh: number;
    res4: any;
    res6: any;
    initOptions(options: any): Seeder;
    resolve(req: any, rinfo: any): Promise<any>;
    refresh(): Promise<void>;
    createA(type: any): any;
    createNS(): any;
    createSOA(): any;
    createEmpty(code: any): any;
    open(): Promise<any>;
}
