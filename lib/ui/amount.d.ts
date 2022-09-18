export = Amount;
/**
 * Amount
 * Represents a currency amount (base unit internally).
 * @alias module:currency.Amount
 * @property {Number} value
 */
declare class Amount {
    /**
     * Instantiate amount from options.
     * @param {String|Number} value
     * @param {AmountUnitType} [unit=doo]
     * @returns {Amount}
     */
    static fromOptions(value: string | number, unit?: AmountUnitType): Amount;
    /**
     * Instantiate amount from value.
     * @private
     * @param {Amount} value
     * @returns {Amount}
     */
    private static fromValue;
    /**
     * Instantiate amount from base unit.
     * @param {Number|String} value
     * @returns {Amount}
     */
    static fromBase(value: number | string): Amount;
    /**
     * Instantiate amount from milliunit.
     * @param {Number|String} value
     * @returns {Amount}
     */
    static fromMilli(value: number | string): Amount;
    /**
     * Instantiate amount from unit.
     * @param {Number|String} value
     * @returns {Amount}
     */
    static fromCoins(value: number | string): Amount;
    /**
     * Instantiate amount from unit.
     * @param {AmountUnitType} unit
     * @param {Number|String} value
     * @returns {Amount}
     */
    static from(unit: AmountUnitType, value: number | string): Amount;
    /**
     * Safely convert base unit to a currency string.
     * This function explicitly avoids any
     * floating point arithmetic.
     * @param {Amount} value - Base unit.
     * @param {Boolean} [num=false] - Return a number.
     * @returns {String|Number} Currency string.
     */
    static coin(value: Amount, num?: boolean): string | number;
    /**
     * Safely convert a currency string to base unit.
     * @param {String} str
     * @returns {Amount} Base unit.
     * @throws on parse error
     */
    static value(str: string): Amount;
    /**
     * Safely convert base unit to a currency string.
     * @param {Amount} value
     * @param {Number} exp - Exponent.
     * @param {Boolean} [num=false] - Return a number.
     * @returns {String|Number}
     */
    static encode(value: Amount, exp: number, num?: boolean): string | number;
    /**
     * Safely convert a currency string to base unit.
     * @param {String|Number} value
     * @param {Number} exp - Exponent.
     * @returns {Amount} Base unit.
     * @throws on parse error
     */
    static decode(value: string | number, exp: number): Amount;
    /**
     * Create an amount.
     * @constructor
     * @param {(String|Number)?} value
     * @param {AmountUnitType} [unit=doo]
     */
    constructor(value: (string | number) | null, unit?: AmountUnitType);
    value: number;
    /**
     * Inject properties from options.
     * @private
     * @param {String|Number} value
     * @param {AmountUnitType} [unit=doo]
     * @returns {Amount}
     */
    private fromOptions;
    /**
     * Get base unit value.
     * @returns {Amount}
     */
    toValue(): Amount;
    /**
     * Get base unit string or value.
     * @param {Boolean} [num=false] - Return a number.
     * @returns {String|Amount}
     */
    toBase(num?: boolean): string | Amount;
    /**
     * Get mhns string or value.
     * @param {Boolean} [num=false] - Return a number.
     * @returns {String|Amount}
     */
    toMilli(num?: boolean): string | Amount;
    /**
     * Get currency string or value.
     * @param {Boolean} [num=false] - Return a number.
     * @returns {String|Amount}
     */
    toCoins(num?: boolean): string | Amount;
    /**
     * Get unit string or value.
     * @param {AmountUnitType} unit
     * @param {Boolean} [num=false] - Return a number.
     * @returns {String|Amount}
     * @throws on incorrect unit type.
     */
    to(unit: AmountUnitType, num?: boolean): string | Amount;
    /**
     * Convert amount to currency string.
     * @returns {String}
     */
    toString(): string;
    /**
     * Inject properties from value.
     * @private
     * @param {Amount} value
     * @returns {Amount}
     */
    private fromValue;
    /**
     * Inject properties from base unit.
     * @private
     * @param {Number|String} value
     * @returns {Amount}
     */
    private fromBase;
    /**
     * Inject properties from mhns.
     * @private
     * @param {Number|String} value
     * @returns {Amount}
     */
    private fromMilli;
    /**
     * Inject properties from value.
     * @private
     * @param {Number|String} value
     * @returns {Amount}
     */
    private fromCoins;
    /**
     * Inject properties from unit.
     * @private
     * @param {AmountUnitType} unit
     * @param {Number|String} value
     * @returns {Amount}
     * @throws on incorrect unit type.
     */
    private from;
    /**
     * Inspect amount.
     * @returns {String}
     */
    inspect(): string;
}
