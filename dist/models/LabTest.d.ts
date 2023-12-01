export type LabTest = {
    code?: string;
    /**
     * The date the specimen were collected
     */
    collection_date?: string;
    /**
     * Short description of the ICD-10 code
     */
    description?: string;
    readonly id?: number;
    /**
     * Notes which are meant for, and read by, the labs
     */
    internal_notes?: string;
    /**
     * ID of associated lab order
     */
    lab_order: number;
    /**
     * Name for the test
     */
    name?: string;
    /**
     * Notes which are not meant for labs, but are copied on the results.
     */
    report_notes?: string;
    specimen_condition?: string;
    specimen_source?: string;
    specimen_total_volume?: number;
    /**
     * One of `"preliminary"`, `"pending"`, `"correction"`, `"final"` or `"canceled"`. Defaults to `"preliminary"`
     */
    status?: 'P' | 'I' | 'C' | 'F' | 'X';
};
