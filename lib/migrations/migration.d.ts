export = AbstractMigration;
/**
 * Abstract class for single migration.
 * @alias module:migrations.AbstractMigration
 */
declare class AbstractMigration {
    /**
     * Return information about the migraiton
     * @returns {Object}
     */
    static info(): any;
    /**
     * Create migration object.
     * @constructor
     * @param {Object} options
     */
    constructor(options: any);
    logger: any;
    /**
     * Check if the migration applies to the database
     * @returns {Promise}
     */
    check(): Promise<any>;
    /**
     * Run the actual migration
     * @param {Batch} batch
     * @returns {Promise}
     */
    migrate(): Promise<any>;
    /**
     * Log warnings for skipped migrations.
     */
    warning(): void;
}
