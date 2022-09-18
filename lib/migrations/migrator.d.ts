/**
 * class for migrations.
 * @alias module:migrations.Migrator
 */
export class Migrator {
    /**
     * Create Migrator object.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    options: any;
    logger: any;
    migrations: {};
    migrateFlag: number;
    layout: {
        V: any;
        M: any;
    };
    db: any;
    ldb: any;
    dbVersion: number;
    pending: MigrationResult;
    flagError: string;
    lastMigration: number;
    /**
     * Recheck options
     * @private
     */
    private fromOptions;
    /**
     * Do the actual migrations
     * @returns {Promise}
     */
    migrate(): Promise<any>;
    /**
     * Get migration list
     */
    checkMigrations(): Promise<void>;
    /**
     * Do any necessary database checks
     * @returns {Promise}
     */
    verifyDB(): Promise<any>;
    /**
     * Get list of migrations to run
     * @returns {Promise<Set>}
     */
    getMigrationsToRun(): Promise<Set<any>>;
    /**
     * Ensure we have migration entry in DB.
     * @returns {Promise}
     */
    ensure(): Promise<any>;
    /**
     * Get max migration ID from the map
     * @returns {Number}
     */
    getLastMigrationID(): number;
    /**
     * Save state
     * @param {MigrationState} state
     */
    saveState(state: MigrationState): Promise<void>;
    /**
     * Write state
     * @param {Batch} b
     * @param {MigrationState} state
     */
    writeState(b: Batch, state: MigrationState): void;
    /**
     * Get state
     * @returns {Promise<MigrationState>}
     */
    getState(): Promise<MigrationState>;
}
/**
 * Store migration results.
 * @alias module:migrations.MigrationResult
 */
export class MigrationResult {
    migrated: Set<any>;
    skipped: Set<any>;
    skip(id: any): void;
    migrate(id: any): void;
}
export namespace types {
    const MIGRATE: number;
    const SKIP: number;
    const FAKE_MIGRATE: number;
}
export namespace oldLayout {
    const M: any;
}
import MigrationState = require("../migrations/state");
