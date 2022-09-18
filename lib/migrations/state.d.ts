export = MigrationState;
/**
 * State of database migrations.
 * Because migration IDs are only increasing, we only need
 * to store the last one.
 * @alias module.migrations.MigrationState
 * @property {Boolean} inProgress - is/was migration in progress
 * NOTE: If inProgress is true, we know lastMigration + 1 was the one in
 *       progress.
 * @property {Number} lastMigration - last migration
 * NOTE: Migration numbers start from 1.
 *       0 - means there is no migration.
 */
declare class MigrationState {
    inProgress: boolean;
    nextMigration: number;
    skipped: any[];
    get lastMigration(): number;
    /**
     * Inject properties from another state.
     * @param {MigrationState} obj
     * @returns MigrationState;
     */
    inject(obj: MigrationState): MigrationState;
    /**
     * Get size of the encoded migration state object.
     * @returns {Number}
     */
    getSize(): number;
    /**
     * Serialize migration state.
     * @param {BufferWriter} bw
     * @returns {BufferWriter}
     */
    write(bw: BufferWriter): BufferWriter;
    /**
     * Deserialize migration state.
     * @param {BufferReader}
     * @returns {MigrationState}
     */
    read(br: any): MigrationState;
}
