/**
 * @module errors
 */
/**
 * Critical Error
 * An error severe enough to warrant shutting down the node.
 * @extends Error
 */
export class CriticalError extends Error {
    /**
     * Create a verify error.
     * @constructor
     * @param {String} msg
     */
    constructor(msg: string);
    type: string;
}
