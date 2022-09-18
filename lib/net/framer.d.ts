export = Framer;
/**
 * Protocol Message Framer
 * @alias module:net.Framer
 */
declare class Framer {
    /**
     * Create a framer.
     * @constructor
     * @param {Network} network
     */
    constructor(network: Network);
    network: Network;
    /**
     * Frame a payload with a header.
     * @param {Number} cmd - Packet type.
     * @param {Buffer} payload
     * @returns {Buffer} Payload with header prepended.
     */
    packet(cmd: number, payload: Buffer): Buffer;
}
import Network = require("../protocol/network");
