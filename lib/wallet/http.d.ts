/**
 * HTTP
 * @alias module:wallet.HTTP
 */
export class HTTP {
    /**
     * Create an http server.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    network: any;
    logger: any;
    wdb: any;
    rpc: any;
    /**
     * Initialize http server.
     * @private
     */
    private init;
    /**
     * Initialize routes.
     * @private
     */
    private initRouter;
    /**
     * Initialize websockets.
     * @private
     */
    private initSockets;
    /**
     * Handle new websocket.
     * @private
     * @param {WebSocket} socket
     */
    private handleSocket;
    /**
     * Handle new auth'd websocket.
     * @private
     * @param {WebSocket} socket
     */
    private handleAuth;
}
export class TransactionOptions {
    static fromValidator(valid: any): TransactionOptions;
    /**
     * TransactionOptions
     * @alias module:http.TransactionOptions
     * @constructor
     * @param {Validator} valid
     */
    constructor(valid: Validator);
    /**
     * Inject properties from Validator.
     * @private
     * @param {Validator} valid
     * @returns {TransactionOptions}
     */
    private fromValidator;
    rate: any;
    maxFee: any;
    selection: any;
    smart: any;
    account: any;
    locktime: any;
    sort: any;
    subtractFee: any;
    subtractIndex: any;
    depth: any;
    paths: any;
    outputs: any[];
}
