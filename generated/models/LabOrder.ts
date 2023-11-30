/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LabOrder = {
    /**
     * For external use only
     */
    accession_number?: string;
    doctor: number;
    /**
     * Associated `/lab_documents` objects
     */
    readonly documents?: Array<string>;
    /**
     * ICD-10 codes of the conditions which the tests concerns.
     */
    icd10_codes?: Array<{
        /**
         * The numeric ICD-10 code
         */
        code?: string;
        /**
         * Short description  of the ICD-10 code
         */
        readonly description?: string;
    }>;
    readonly id?: number;
    notes?: string;
    patient: number;
    /**
     * `"Normal"` or `"STAT"`. Default `"Normal"`
     */
    priority?: 'N' | 'S';
    /**
     * The ID printed on the requisition PDF. Generally the same as id.
     */
    readonly requisition_id?: string;
    /**
     * Equivalent to HL7's ORC.5. Defaults to `"N"`.
     * Value | Notes
     * ----- | -----
     * `"N"` | not sent                                          |
     * `"Q"` | queued for processing                             |
     * `"A"` | `ABN (Advance Beneficiary Notice)` required       |
     * `"S"` | send                                              |
     * `"R"` | results received                                  |
     * `"E"` | error                                             |
     *
     */
    status?: string;
    sublab: number;
    /**
     * Time at which the order was submitted. Defaults to now
     */
    readonly timestamp?: string;
};

