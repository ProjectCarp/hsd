export const migrations: {
    0: typeof MigrateMigrations;
    1: typeof MigrateChainState;
    2: typeof MigrateBlockStore;
    3: typeof MigrateTreeState;
};
/**
 * Switch to new migrations layout.
 */
export class MigrateMigrations extends AbstractMigration {
    static info(): {
        name: string;
        description: string;
    };
    /**
     * Create migrations migration.
     * @param {ChainMigratorOptions} options
     */
    constructor(options: ChainMigratorOptions);
    options: ChainMigratorOptions;
    db: any;
    ldb: any;
    check(): Promise<number>;
    /**
     * Actual migration
     * @param {Batch} b
     * @returns {Promise}
     */
    migrate(b: Batch): Promise<any>;
}
/**
 * Migrate chain state and correct total supply.
 * Applies to ChainDB v1
 */
export class MigrateChainState extends AbstractMigration {
    static info(): {
        name: string;
        description: string;
    };
    /**
     * Create migration chain state
     * @constructor
     * @param {ChainMigrator} options
     */
    constructor(options: ChainMigrator);
    options: ChainMigrator;
    db: any;
    ldb: any;
    /**
     * Actual migration
     * @param {Batch} b
     * @returns {Promise}
     */
    migrate(b: Batch): Promise<any>;
    /**
     * Get Block (old layout)
     * @param {Hash} hash
     * @returns {Promise} - Block
     */
    getBlock(hash: Hash): Promise<any>;
    /**
     * Get block view (old layout)
     * @param {Hash} hash
     * @returns {Promise} - UndoCoins
     */
    getBlockView(block: any): Promise<any>;
}
/**
 * Migrate block and undo data to BlockStore from chainDB.
 */
export class MigrateBlockStore extends AbstractMigration {
    static info(): {
        name: string;
        description: string;
    };
    /**
     * Create MigrateBlockStore object.
     * @param {ChainMigratorOptions} options
     */
    constructor(options: ChainMigratorOptions);
    options: ChainMigratorOptions;
    db: any;
    ldb: any;
    blocks: any;
    /**
     * Migrate the block data.
     */
    migrateBlocks(): Promise<void>;
    /**
     * Migrate the undo data.
     */
    migrateUndoBlocks(): Promise<void>;
}
/**
 * Migrate Tree State
 */
export class MigrateTreeState extends AbstractMigration {
    static info(): {
        name: string;
        description: string;
    };
    /**
     * Create tree state migrator
     * @constructor
     * @param {ChainMigrator} options
     */
    constructor(options: ChainMigrator);
    options: ChainMigrator;
    db: any;
    ldb: any;
    network: any;
    check(): Promise<number>;
    migrate(b: any): Promise<void>;
}
import AbstractMigration = require("../migrations/migration");
/**
 * ChainMigratorOptions
 * @alias module:blockchain.ChainMigratorOptions
 */
declare class ChainMigratorOptions {
    /**
     * Create Chain Migrator Options.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    network: Network;
    logger: any;
    migrations: {
        0: typeof MigrateMigrations;
        1: typeof MigrateChainState;
        2: typeof MigrateBlockStore;
        3: typeof MigrateTreeState;
    };
    migrateFlag: number;
    dbVersion: number;
    db: any;
    ldb: any;
    layout: {
        V: any;
        O: any;
        R: any;
        D: any;
        e: any;
        h: any;
        H: any;
        n: any;
        p: any;
        b: any;
        t: any;
        c: any;
        u: any;
        v: any;
        T: any;
        C: any;
        w: any;
        s: any;
        f: any;
        M: any;
    };
    spv: boolean;
    prune: boolean;
    /**
     * Inject properties from object.
     * @param {Object} options
     * @returns {ChainMigratorOptions}
     */
    fromOptions(options: any): ChainMigratorOptions;
}
/**
 * Chain Migrator
 * @alias module:blockchain.ChainMigrator
 */
declare class ChainMigrator extends Migrator {
    _migrationsToRun: any;
}
import Network = require("../protocol/network");
import { Migrator } from "../migrations/migrator";
export {};
