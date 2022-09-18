export = SlidingWindow;
declare class SlidingWindow {
    /**
     * Create a sliding window counter
     * e.g:
     * ```
     * new SlidingWindow({
     *   window: 1000,
     *   limit: 100
     * })
     * ```
     * creates a sliding window which allows 100 requests per second
     * @property {Number} window - window period in milliseconds
     * @property {Number} limit - max requests allowed
     * @property {Timeout} timeout - sliding window timeout
     * @property {Number} current - current window counter
     * @property {Number} previous - previous window counter
     * @property {Number} timestamp - current window start time in milliseconds
     */
    constructor(options: any);
    window: any;
    limit: any;
    timeout: NodeJS.Timer;
    current: number;
    previous: number;
    timestamp: number;
    start(): void;
    stop(): void;
    reset(): Promise<void>;
    score(): number;
    increase(count: any): void;
    allow(): boolean;
}
