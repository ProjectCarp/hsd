export = Parser;
/**
 * Protocol Message Parser
 * @alias module:net.Parser
 * @extends EventEmitter
 * @emits Parser#error
 * @emits Parser#packet
 */
declare class Parser extends EventEmitter {
    /**
     * Create a parser.
     * @constructor
     * @param {Network} network
     */
    constructor(network: Network);
    network: Network;
    pending: any[];
    total: number;
    waiting: number;
    header: Header;
    /**
     * Emit an error.
     * @private
     * @param {...String} msg
     */
    private error;
    /**
     * Feed data to the parser.
     * @param {Buffer} data
     */
    feed(data: Buffer): void;
    /**
     * Parse a fully-buffered chunk.
     * @param {Buffer} chunk
     */
    parse(data: any): void;
    /**
     * Parse buffered packet header.
     * @param {Buffer} data - Header.
     * @returns {Header}
     */
    parseHeader(data: Buffer): Header;
    /**
     * Parse a payload.
     * @param {Number} type - Packet type.
     * @param {Buffer} data - Payload.
     * @returns {Object}
     */
    parsePayload(type: number, data: Buffer): any;
}
import EventEmitter = require("events");
import Network = require("../protocol/network");
/**
 * Packet Header
 * @ignore
 */
declare class Header {
    /**
     * Create a header.
     * @constructor
     */
    constructor(type: any, size: any);
    type: any;
    size: any;
}
