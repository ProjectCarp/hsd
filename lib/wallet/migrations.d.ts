export const migrations: {
    0: typeof MigrateMigrations;
    1: typeof MigrateChangeAddress;
};
/**
 * Wallet migration results.
 * @alias module:blockchain.WalletMigrationResult
 */
export class WalletMigrationResult extends MigrationResult {
    rescan: boolean;
}
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
     * @param {WalletMigratorOptions} options
     */
    constructor(options: WalletMigratorOptions);
    options: WalletMigratorOptions;
    db: any;
    ldb: any;
    layout: {
        V: any;
        O: any;
        R: any;
        D: any;
        p: any;
        P: any;
        r: any;
        w: any;
        W: any;
        l: any;
        a: any;
        i: any;
        n: any;
        h: any;
        b: any;
        o: any;
        T: any;
        t: any;
        N: any;
        M: any;
    };
    check(): Promise<number>;
    /**
     * Actual migration
     * @param {Batch} b
     * @returns {Promise}
     */
    migrate(b: Batch): Promise<any>;
}
/**
 * Run change address migration.
 * Applies to WalletDB v0
 */
export class MigrateChangeAddress extends AbstractMigration {
    /**
     * Return info about the migration.
     * @returns {String}
     */
    static info(): string;
    /**
     * Create change address migration object.
     * @constructor
     * @param {WalletMigratorOptions} options
     */
    constructor(options: WalletMigratorOptions);
    options: WalletMigratorOptions;
    db: any;
    ldb: any;
    /**
     * Migration and check for the change address
     * are done in the same step.
     */
    check(): Promise<number>;
    /**
     * Actual migration
     * @param {Batch} b
     * @param {WalletMigrationResult} pending
     * @returns {Promise}
     */
    migrate(b: Batch, pending: WalletMigrationResult): Promise<any>;
    migrateWallet(b: any, wallet: any): Promise<number>;
}
import { MigrationResult } from "../migrations/migrator";
import AbstractMigration = require("../migrations/migration");
/**
 * WalletMigratorOptions
 * @alias module:wallet.WalletMigratorOptions
 */
declare class WalletMigratorOptions {
    /**
     * Create Wallet Migrator Options.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    network: Network;
    logger: any;
    migrations: {
        0: typeof MigrateMigrations;
        1: typeof MigrateChangeAddress;
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
        p: any;
        P: any;
        r: any;
        w: any;
        W: any;
        l: any;
        a: any;
        i: any;
        n: any;
        h: any;
        b: any;
        o: any;
        T: any;
        t: any;
        N: any;
        M: any;
    };
    /**
     * Inject properties from object.
     * @param {Object} options
     * @returns {WalletMigratorOptions}
     */
    fromOptions(options: any): WalletMigratorOptions;
}
import Network = require("../protocol/network");
export {};
