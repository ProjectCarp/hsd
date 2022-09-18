export = Node;
/**
 * Node
 * Base class from which every other
 * Node-like object inherits.
 * @alias module:node.Node
 * @extends EventEmitter
 * @abstract
 */
declare class Node extends EventEmitter {
    /**
     * Create a node.
     * @constructor
     * @param {Object} options
     */
    constructor(module: any, config: any, file: any, options: any);
    config: any;
    network: Network;
    memory: any;
    identityKey: Buffer;
    startTime: number;
    bound: any[];
    plugins: any;
    stack: any[];
    logger: any;
    workers: WorkerPool;
    spv: boolean;
    blocks: any;
    chain: any;
    fees: any;
    mempool: any;
    pool: any;
    miner: any;
    http: any;
    /**
     * Initialize node.
     * @private
     * @param {Object} options
     */
    private _init;
    /**
     * Ensure prefix directory.
     * @returns {Promise}
     */
    ensure(): Promise<any>;
    /**
     * Create a file path using `prefix`.
     * @param {String} file
     * @returns {String}
     */
    location(name: any): string;
    /**
     * Generate identity key.
     * @private
     * @returns {Buffer}
     */
    private genKey;
    /**
     * Load identity key.
     * @private
     * @returns {Buffer}
     */
    private loadKey;
    /**
     * Open node. Bind all events.
     * @private
     */
    private handlePreopen;
    /**
     * Open node.
     * @private
     */
    private handleOpen;
    /**
     * Open node. Bind all events.
     * @private
     */
    private handlePreclose;
    /**
     * Close node. Unbind all events.
     * @private
     */
    private handleClose;
    /**
     * Bind to an event on `obj`, save listener for removal.
     * @private
     * @param {EventEmitter} obj
     * @param {String} event
     * @param {Function} listener
     */
    private _bind;
    /**
     * Emit and log an error.
     * @private
     * @param {Error} err
     */
    private error;
    /**
     * Emit and log an abort error.
     * @private
     * @param {Error} err
     */
    private abort;
    /**
     * Get node uptime in seconds.
     * @returns {Number}
     */
    uptime(): number;
    /**
     * Attach a plugin.
     * @param {Object} plugin
     * @returns {Object} Plugin instance.
     */
    use(plugin: any): any;
    /**
     * Test whether a plugin is available.
     * @param {String} name
     * @returns {Boolean}
     */
    has(name: string): boolean;
    /**
     * Get a plugin.
     * @param {String} name
     * @returns {Object|null}
     */
    get(name: string): any | null;
    /**
     * Require a plugin.
     * @param {String} name
     * @returns {Object}
     * @throws {Error} on onloaded plugin
     */
    require(name: string): any;
    /**
     * Load plugins.
     * @private
     */
    private loadPlugins;
    /**
     * Open plugins.
     * @private
     */
    private openPlugins;
    /**
     * Close plugins.
     * @private
     */
    private closePlugins;
}
import EventEmitter = require("events");
import Network = require("../protocol/network");
import WorkerPool = require("../workers/workerpool");
