export = Parser;
/**
 * Parser
 * @alias module:workers.Parser
 * @extends EventEmitter
 */
declare class Parser extends EventEmitter {
    /**
     * Create a parser.
     * @constructor
     */
    constructor();
    waiting: number;
    header: any;
    pending: any[];
    total: number;
    feed(data: any): void;
    read(size: any): any;
    parse(data: any): void;
    parseHeader(data: any): Header;
    parsePacket(header: any, data: any): any;
}
import EventEmitter = require("events");
/**
 * Header
 * @ignore
 */
declare class Header {
    /**
     * Create a header.
     * @constructor
     */
    constructor(id: any, cmd: any, size: any);
    id: any;
    cmd: any;
    size: any;
}
