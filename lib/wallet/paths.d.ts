export = Paths;
/**
 * Paths
 * Represents the HD paths for coins in a single transaction.
 * @alias module:wallet.Paths
 * @property {Map[]} outputs - Paths.
 */
declare class Paths {
    paths: Map<any, any>;
    /**
     * Add a single entry to the collection.
     * @param {Number} index
     * @param {Path} path
     * @returns {Path}
     */
    add(index: number, path: Path): Path;
    /**
     * Test whether the collection has a path.
     * @param {Number} index
     * @returns {Boolean}
     */
    has(index: number): boolean;
    /**
     * Get a path.
     * @param {Number} index
     * @returns {Path|null}
     */
    get(index: number): Path | null;
    /**
     * Remove a path and return it.
     * @param {Number} index
     * @returns {Path|null}
     */
    remove(index: number): Path | null;
    /**
     * Test whether there are paths.
     * @returns {Boolean}
     */
    isEmpty(): boolean;
}
