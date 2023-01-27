export = NetAddress;
/**
 * Net Address
 * Represents a network address.
 * @alias module:net.NetAddress
 * @property {Host} host
 * @property {Number} port
 * @property {Number} services
 * @property {Number} time
 */
declare class NetAddress {
    /**
     * Instantiate a network address
     * from a host and port.
     * @param {String} host
     * @param {Number} port
     * @param {(Network|NetworkType)?} network
     * @returns {NetAddress}
     */
    static fromHost(host: string, port: number, key: any, network: (Network | NetworkType) | null): NetAddress;
    /**
     * Instantiate a network address
     * from a hostname (i.e. 127.0.0.1:8333).
     * @param {String} hostname
     * @param {(Network|NetworkType)?} network
     * @returns {NetAddress}
     */
    static fromHostname(hostname: string, network: (Network | NetworkType) | null): NetAddress;
    /**
     * Instantiate a network address
     * from a socket.
     * @param {net.Socket} socket
     * @returns {NetAddress}
     */
    static fromSocket(hostname: any, network: any): NetAddress;
    /**
     * Create a network address.
     * @constructor
     * @param {Object} options
     * @param {Number?} options.time - Timestamp.
     * @param {Number?} options.services - Service bits.
     * @param {String?} options.host - IP address (IPv6 or IPv4).
     * @param {Number?} options.port - Port.
     */
    constructor(options: {
        time: number | null;
        services: number | null;
        host: string | null;
        port: number | null;
    });
    host: string;
    port: number;
    services: number;
    time: number;
    hostname: string;
    raw: any;
    key: Buffer;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Test whether required services are available.
     * @param {Number} services
     * @returns {Boolean}
     */
    hasServices(services: number): boolean;
    /**
     * Test whether the address is IPv4.
     * @returns {Boolean}
     */
    isIPv4(): boolean;
    /**
     * Test whether the address is IPv6.
     * @returns {Boolean}
     */
    isIPv6(): boolean;
    /**
     * Test whether the address is RFC3964.
     * @returns {Boolean}
     */
    isRFC3964(): boolean;
    /**
     * Test whether the address is RFC4380.
     * @returns {Boolean}
     */
    isRFC4380(): boolean;
    /**
     * Test whether the address is RFC6052.
     * @returns {Boolean}
     */
    isRFC6052(): boolean;
    /**
     * Test whether the address is RFC6145.
     * @returns {Boolean}
     */
    isRFC6145(): boolean;
    /**
     * Test whether the host is null.
     * @returns {Boolean}
     */
    isNull(): boolean;
    /**
     * Test whether the host is a local address.
     * @returns {Boolean}
     */
    isLocal(): boolean;
    /**
     * Test whether the host is valid.
     * @returns {Boolean}
     */
    isValid(): boolean;
    /**
     * Test whether the host is routable.
     * @returns {Boolean}
     */
    isRoutable(): boolean;
    /**
     * Test whether the host is an onion address.
     * @returns {Boolean}
     */
    isOnion(): boolean;
    /**
     * Test whether the peer has a key.
     * @returns {Boolean}
     */
    hasKey(): boolean;
    /**
     * Compare against another network address.
     * @returns {Boolean}
     */
    equal(addr: any): boolean;
    /**
     * Compare against another network address.
     * @returns {Number}
     */
    compare(addr: any): number;
    /**
     * Get reachable score to destination.
     * @param {NetAddress} dest
     * @returns {Number}
     */
    getReachability(dest: NetAddress): number;
    /**
     * Get the canonical identifier of our network group
     * @returns {Buffer}
     */
    getGroup(): Buffer;
    /**
     * Set null host.
     */
    setNull(): void;
    /**
     * Set host.
     * @param {String} host
     */
    setHost(host: string): void;
    /**
     * Set port.
     * @param {Number} port
     */
    setPort(port: number): void;
    /**
     * Set key.
     * @param {Buffer} key
     */
    setKey(key: Buffer): void;
    /**
     * Get key.
     * @param {String} enc
     * @returns {String|Buffer}
     */
    getKey(enc: string): string | Buffer;
    /**
     * Inject properties from host, port, and network.
     * @private
     * @param {String} host
     * @param {Number} port
     * @param {(Network|NetworkType)?} network
     */
    private fromHost;
    /**
     * Inject properties from hostname and network.
     * @private
     * @param {String} hostname
     * @param {(Network|NetworkType)?} network
     */
    private fromHostname;
    /**
     * Inject properties from socket.
     * @private
     * @param {net.Socket} socket
     */
    private fromSocket;
    /**
     * Calculate serialization size of address.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Write network address to a buffer writer.
     * @param {BufferWriter} bw
     * @returns {Buffer}
     */
    write(bw: BufferWriter): Buffer;
    /**
     * Inject properties from buffer reader.
     * @private
     * @param {BufferReader} br
     */
    private read;
    /**
     * Convert net address to json-friendly object.
     * @returns {Object}
     */
    getJSON(): any;
    /**
     * Inject properties from json object.
     * @private
     * @param {Object} json
     * @returns {NetAddress}
     */
    private fromJSON;
    /**
     * Inspect the network address.
     * @returns {Object}
     */
    format(): any;
}
declare namespace NetAddress {
    const DEFAULT_SERVICES: number;
}
import Network = require("../protocol/network");
