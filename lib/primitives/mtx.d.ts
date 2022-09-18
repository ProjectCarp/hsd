/**
 * MTX
 * A mutable transaction object.
 * @alias module:primitives.MTX
 * @extends TX
 * @property {Number} changeIndex
 * @property {CoinView} view
 */
export class MTX extends TX {
    /**
     * Instantiate MTX from TX.
     * @param {TX} tx
     * @returns {MTX}
     */
    static fromTX(tx: TX): MTX;
    /**
     * Test whether an object is an MTX.
     * @param {Object} obj
     * @returns {Boolean}
     */
    static isMTX(obj: any): boolean;
    changeIndex: number;
    view: CoinView;
    /**
     * Inject properties from options object.
     * @private
     * @param {Object} options
     */
    private fromOptions;
    /**
     * Clone the transaction. Note that
     * this will not carry over the view.
     * @returns {MTX}
     */
    inject(mtx: any): MTX;
    /**
     * Add an input to the transaction.
     * @param {Input|Object} options
     * @returns {Input}
     *
     * @example
     * mtx.addInput({ prevout: { hash: ... }, witness: ... });
     * mtx.addInput(new Input());
     */
    addInput(options: Input | any): Input;
    /**
     * Add an outpoint as an input.
     * @param {Outpoint|Object} outpoint
     * @returns {Input}
     *
     * @example
     * mtx.addOutpoint({ hash: ..., index: 0 });
     * mtx.addOutpoint(new Outpoint(hash, index));
     */
    addOutpoint(outpoint: Outpoint | any): Input;
    /**
     * Add a coin as an input. Note that this will
     * add the coin to the internal coin viewpoint.
     * @param {Coin} coin
     * @returns {Input}
     *
     * @example
     * mtx.addCoin(Coin.fromTX(tx, 0, -1));
     */
    addCoin(coin: Coin): Input;
    /**
     * Add a transaction as an input. Note that
     * this will add the coin to the internal
     * coin viewpoint.
     * @param {TX} tx
     * @param {Number} index
     * @param {Number?} height
     * @returns {Input}
     *
     * @example
     * mtx.addTX(tx, 0);
     */
    addTX(tx: TX, index: number, height: number | null): Input;
    /**
     * Add an output.
     * @param {Address|Output|Object} addr - Address or output options.
     * @param {Amount?} value
     * @returns {Output}
     *
     * @example
     * mtx.addOutput(new Output());
     * mtx.addOutput({ address: ..., value: 100000 });
     * mtx.addOutput(address, 100000);
     */
    addOutput(addr: Address | Output | any, value: Amount | null): Output;
    /**
     * Verify all transaction inputs.
     * @param {VerifyFlags} [flags=STANDARD_VERIFY_FLAGS]
     * @returns {Boolean} Whether the inputs are valid.
     * @throws {ScriptError} on invalid inputs
     */
    check(flags?: VerifyFlags): boolean;
    /**
     * Verify the transaction inputs on the worker pool
     * (if workers are enabled).
     * @param {VerifyFlags?} [flags=STANDARD_VERIFY_FLAGS]
     * @param {WorkerPool?} pool
     * @returns {Promise}
     */
    checkAsync(flags?: VerifyFlags | null, pool: WorkerPool): Promise<any>;
    /**
     * Verify all transaction inputs.
     * @param {VerifyFlags} [flags=STANDARD_VERIFY_FLAGS]
     * @returns {Boolean} Whether the inputs are valid.
     */
    verify(flags?: VerifyFlags): boolean;
    /**
     * Verify the transaction inputs on the worker pool
     * (if workers are enabled).
     * @param {VerifyFlags?} [flags=STANDARD_VERIFY_FLAGS]
     * @param {WorkerPool?} pool
     * @returns {Promise}
     */
    verifyAsync(flags?: VerifyFlags | null, pool: WorkerPool): Promise<any>;
    /**
     * Calculate the fee for the transaction.
     * @returns {Amount} fee (zero if not all coins are available).
     */
    getFee(): Amount;
    /**
     * Calculate the total input value.
     * @returns {Amount} value
     */
    getInputValue(): Amount;
    /**
     * Get all input addresses.
     * @returns {Address[]} addresses
     */
    getInputAddresses(): Address[];
    /**
     * Get all addresses.
     * @returns {Address[]} addresses
     */
    getAddresses(): Address[];
    /**
     * Get all input address hashes.
     * @returns {Hash[]} hashes
     */
    getInputHashes(): Hash[];
    /**
     * Get all address hashes.
     * @returns {Hash[]} hashes
     */
    getHashes(): Hash[];
    /**
     * Test whether the transaction has
     * all coins available/filled.
     * @returns {Boolean}
     */
    hasCoins(): boolean;
    /**
     * Calculate virtual sigop count.
     * @param {VerifyFlags?} flags
     * @returns {Number} sigop count
     */
    getSigops(): number;
    /**
     * Calculate the virtual size of the transaction
     * (weighted against bytes per sigop cost).
     * @returns {Number} vsize
     */
    getSigopsSize(): number;
    /**
     * Perform contextual checks to verify input, output,
     * and fee values, as well as coinbase spend maturity
     * (coinbases can only be spent 100 blocks or more
     * after they're created). Note that this function is
     * consensus critical.
     * @param {Number} height - Height at which the
     * transaction is being spent. In the mempool this is
     * the chain height plus one at the time it entered the pool.
     * @returns {Boolean}
     */
    verifyInputs(height: number, network: any): boolean;
    /**
     * Perform contextual checks to verify input, output,
     * and fee values, as well as coinbase spend maturity
     * (coinbases can only be spent 100 blocks or more
     * after they're created). Note that this function is
     * consensus critical.
     * @param {Number} height - Height at which the
     * transaction is being spent. In the mempool this is
     * the chain height plus one at the time it entered the pool.
     * @returns {Array} [fee, reason, score]
     */
    checkInputs(height: number, network: any): any[];
    /**
     * Build input script (or witness) templates (with
     * OP_0 in place of signatures).
     * @param {Number} index - Input index.
     * @param {Coin|Output} coin
     * @param {KeyRing} ring
     * @returns {Boolean} Whether the script was able to be built.
     */
    scriptInput(index: number, coin: Coin | Output, ring: KeyRing): boolean;
    /**
     * Build script for a single vector
     * based on a previous script.
     * @param {Script} prev
     * @param {Buffer} ring
     * @return {Boolean}
     */
    scriptVector(prev: Script, ring: Buffer): boolean;
    /**
     * Sign a transaction input on the worker pool
     * (if workers are enabled).
     * @param {Number} index
     * @param {Coin|Output} coin
     * @param {KeyRing} ring
     * @param {SighashType?} type
     * @param {WorkerPool?} pool
     * @returns {Promise}
     */
    signInputAsync(index: number, coin: Coin | Output, ring: KeyRing, type: SighashType | null, pool: WorkerPool): Promise<any>;
    /**
     * Sign an input.
     * @param {Number} index - Index of input being signed.
     * @param {Coin|Output} coin
     * @param {KeyRing} ring - Private key.
     * @param {SighashType} type
     * @returns {Boolean} Whether the input was able to be signed.
     */
    signInput(index: number, coin: Coin | Output, ring: KeyRing, type: SighashType): boolean;
    /**
     * Add a signature to a vector
     * based on a previous script.
     * @param {Script} prev
     * @param {Stack} vector
     * @param {Buffer} sig
     * @param {KeyRing} ring
     * @return {Boolean}
     */
    signVector(prev: Script, vector: Stack, sig: Buffer, ring: KeyRing): boolean;
    /**
     * Test whether the transaction is fully-signed.
     * @returns {Boolean}
     */
    isSigned(): boolean;
    /**
     * Test whether an input is fully-signed.
     * @param {Number} index
     * @param {Coin|Output} coin
     * @returns {Boolean}
     */
    isInputSigned(index: number, coin: Coin | Output): boolean;
    /**
     * Test whether a vector is fully-signed.
     * @param {Script} prev
     * @param {Stack} vector
     * @returns {Boolean}
     */
    isVectorSigned(prev: Script, vector: Stack): boolean;
    /**
     * Build input scripts (or witnesses).
     * @param {KeyRing} ring - Address used to sign. The address
     * must be able to redeem the coin.
     * @returns {Number} Number of inputs templated.
     */
    template(ring: KeyRing): number;
    /**
     * Built input scripts (or witnesses) and sign the inputs.
     * @param {KeyRing} ring - Address used to sign. The address
     * must be able to redeem the coin.
     * @param {SighashType} type
     * @returns {Number} Number of inputs signed.
     */
    sign(ring: KeyRing, type: SighashType): number;
    /**
     * Sign the transaction inputs on the worker pool
     * (if workers are enabled).
     * @param {KeyRing} ring
     * @param {SighashType?} type
     * @param {WorkerPool?} pool
     * @returns {Promise}
     */
    signAsync(ring: KeyRing, type: SighashType | null, pool: WorkerPool): Promise<any>;
    /**
     * Estimate maximum possible size.
     * @param {Function?} estimate - Input script size estimator.
     * @returns {Number}
     */
    estimateSize(estimate: Function | null): number;
    /**
     * Select necessary coins based on total output value.
     * @param {Coin[]} coins
     * @param {Object?} options
     * @returns {CoinSelection}
     * @throws on not enough funds available.
     */
    selectCoins(coins: Coin[], options: any | null): CoinSelection;
    /**
     * Attempt to subtract a fee from a single output.
     * @param {Number} index
     * @param {Amount} fee
     */
    subtractIndex(index: number, fee: Amount): void;
    /**
     * Attempt to subtract a fee from all outputs evenly.
     * @param {Amount} fee
     */
    subtractFee(fee: Amount): void;
    /**
     * Select coins and fill the inputs.
     * @param {Coin[]} coins
     * @param {Object} options - See {@link MTX#selectCoins} options.
     * @returns {CoinSelector}
     */
    fund(coins: Coin[], options: any): CoinSelector;
    /**
     * Sort inputs and outputs according to BIP69.
     * @see https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki
     */
    sortMembers(): void;
    /**
     * Avoid fee sniping.
     * @param {Number} - Current chain height.
     * @see bitcoin/src/wallet/wallet.cpp
     */
    avoidFeeSniping(height: any): void;
    /**
     * Set locktime and sequences appropriately.
     * @param {Number} locktime
     * @param {Boolean?} seconds
     */
    setLocktime(locktime: number, seconds: boolean | null): void;
    /**
     * Set sequence locktime.
     * @param {Number} index - Input index.
     * @param {Number} locktime
     * @param {Boolean?} seconds
     */
    setSequence(index: number, locktime: number, seconds: boolean | null): void;
    /**
     * Inspect the transaction.
     * @returns {Object}
     */
    format(): any;
    /**
     * Convert transaction to JSON.
     * @returns {Object}
     */
    toJSON(): any;
    /**
     * Convert transaction to JSON.
     * @param {Network} network
     * @returns {Object}
     */
    getJSON(network: Network): any;
    /**
     * Inject properties from a json object.
     * @param {Object} json
     */
    fromJSON(json: any): MTX;
    /**
     * Convert the MTX to a TX.
     * @returns {TX}
     */
    toTX(): TX;
    /**
     * Convert the MTX to a TX.
     * @returns {Array} [tx, view]
     */
    commit(): any[];
    /**
     * Instantiate MTX from TX.
     * @param {TX} tx
     * @returns {MTX}
     */
    fromTX(tx: TX): MTX;
}
/**
 * Coin Selector
 * @alias module:primitives.CoinSelector
 * @property {TX} tx - clone of the original mtx.
 * @property {CoinView} view - reference to the original view.
 * @property {Coin[]} coins - List of available coins.
 * @property {Amount} outputValue - Total output value.
 * @property {Coin[]} chosen - List of chosen coins to add.
 * @property {Coin[]} viewCoins - List of coins to only apply to coinview.
 * @property {Address} changeAddress - change address.
 * @property {Amount} change - change value.
 * @property {Amount} fee - Value of fee.
 * @property {String} selection - selection type.
 * @property {Boolean} subtractFee - whether to subtract fee from the output.
 * @property {Number} subtractIndex - index of the output to subtract fee from.
 * @property {Number} height - height of the chain. (to check spendability)
 * @property {Number} depth - depth or confirmations for the coin.
 * @property {Number} hardFee - fixed fee.
 * @property {Number} rate - Rate of dollarydoo per kB.
 * @property {Number} maxFee - maximum fee we are willing to pay.
 * @property {Boolean} round - round to the nearest kilobyte.
 * @property {Number} coinbaseMaturity - when do CBs become spendable.
 * @property {Function} estimate - Input script size estimator.
 * @property {Object[]} inputs - preferred inputs.
 */
declare class CoinSelector {
    /**
     * Create a coin selector.
     * @constructor
     * @param {TX} tx
     * @param {Object?} options
     */
    constructor(tx: TX, options: any | null);
    tx: any;
    view: any;
    coins: any[];
    outputValue: number;
    index: number;
    chosen: any[];
    viewCoins: any[];
    change: number;
    fee: number;
    selection: string;
    subtractFee: boolean;
    subtractIndex: number;
    height: number;
    depth: number;
    hardFee: number;
    rate: number;
    maxFee: number;
    round: boolean;
    coinbaseMaturity: number;
    changeAddress: any;
    inputs: any;
    preferredInputs: any;
    estimate: any;
    /**
     * Initialize selector options.
     * @param {Object} options
     * @private
     */
    private fromOptions;
    /**
     * Attempt to inject existing inputs.
     * @private
     */
    private injectInputs;
    /**
     * Initialize the selector with coins to select from.
     * @param {Coin[]} coins
     */
    init(coins: Coin[]): void;
    /**
     * Calculate total value required.
     * @returns {Amount}
     */
    total(): Amount;
    /**
     * Test whether the selector has
     * completely funded the transaction.
     * @returns {Boolean}
     */
    isFull(): boolean;
    /**
     * Test whether a coin is spendable
     * with regards to the options.
     * @param {Coin} coin
     * @returns {Boolean}
     */
    isSpendable(coin: Coin): boolean;
    /**
     * Get the current fee based on a size.
     * @param {Number} size
     * @returns {Amount}
     */
    getFee(size: number): Amount;
    /**
     * Fund the transaction with more
     * coins if the `output value + fee`
     * total was updated.
     */
    fund(): void;
    /**
     * Resolve coins for existing inputs.
     */
    resolveInputs(): void;
    /**
     * Resolve preferred inputs.
     */
    resolvePreferred(): void;
    /**
     * Initiate selection from `coins`.
     * @param {Coin[]} coins
     * @returns {CoinSelector}
     */
    select(coins: Coin[]): CoinSelector;
    /**
     * Initialize selection based on size estimate.
     */
    selectEstimate(): Promise<void>;
    /**
     * Initiate selection based on a hard fee.
     */
    selectHard(): void;
}
declare namespace CoinSelector {
    const FEE_RATE: number;
    const MIN_FEE: number;
    const MAX_FEE: number;
}
/**
 * Funding Error
 * An error thrown from the coin selector.
 * @ignore
 * @extends Error
 * @property {String} message - Error message.
 * @property {Amount} availableFunds
 * @property {Amount} requiredFunds
 */
export class FundingError extends Error {
    /**
     * Create a funding error.
     * @constructor
     * @param {String} msg
     * @param {Amount} available
     * @param {Amount} required
     */
    constructor(msg: string, available: Amount, required: Amount);
    type: string;
    availableFunds: number | Amount;
    requiredFunds: number | Amount;
}
import TX = require("./tx");
import CoinView = require("../coins/coinview");
import Input = require("./input");
import Outpoint = require("./outpoint");
import Coin = require("./coin");
import Address = require("./address");
import Output = require("./output");
import Amount = require("../ui/amount");
import Script = require("../script/script");
import Stack = require("../script/stack");
export { CoinSelector as Selector };
