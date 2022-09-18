export = WalletCoinView;
/**
 * Wallet Coin View
 * Represents a wallet, coin viewpoint: a snapshot of {@link Coins} objects
 * and the HD paths for their associated keys.
 * @alias module:wallet.WalletCoinView
 * @property {Object} map
 * @property {Object} paths
 * @property {UndoCoins} undo
 */
declare class WalletCoinView extends CoinView {
    /**
     * Instantiate wallet coin view from coin view.
     * @param {CoinView} view
     * @returns {WalletCoinView}
     */
    static fromCoinView(view: CoinView): WalletCoinView;
    paths: any;
    /**
     * Inject properties from coin view object.
     * @private
     * @param {CoinView} view
     */
    private fromCoinView;
    /**
     * Add paths to the collection.
     * @param {Hash} hash
     * @param {Paths} path
     * @returns {Paths|null}
     */
    addPaths(hash: Hash, paths: any): Paths | null;
    /**
     * Get paths.
     * @param {Hash} hash
     * @returns {Paths} paths
     */
    getPaths(hash: Hash): Paths;
    /**
     * Test whether the view has a paths entry.
     * @param {Hash} hash
     * @returns {Boolean}
     */
    hasPaths(hash: Hash): boolean;
    /**
     * Ensure existence of paths object in the collection.
     * @param {Hash} hash
     * @returns {Coins}
     */
    ensurePaths(hash: Hash): Coins;
    /**
     * Remove paths from the collection.
     * @param {Paths} paths
     * @returns {Paths|null}
     */
    removePaths(hash: any): Paths | null;
    /**
     * Add an HD path to the collection.
     * @param {Outpoint} prevout
     * @param {Path} path
     * @returns {Path|null}
     */
    addPath(prevout: Outpoint, path: Path): Path | null;
    /**
     * Get an HD path by prevout.
     * @param {Outpoint} prevout
     * @returns {Path|null}
     */
    getPath(prevout: Outpoint): Path | null;
    /**
     * Remove an HD path.
     * @param {Outpoint} prevout
     * @returns {Path|null}
     */
    removePath(prevout: Outpoint): Path | null;
    /**
     * Test whether the view has a path by prevout.
     * @param {Outpoint} prevout
     * @returns {Boolean}
     */
    hasPath(prevout: Outpoint): boolean;
    /**
     * Get a single path by input.
     * @param {Input} input
     * @returns {Path|null}
     */
    getPathFor(input: Input): Path | null;
}
import CoinView = require("../coins/coinview");
import Paths = require("./paths");
