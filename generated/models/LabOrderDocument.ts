/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LabOrderDocument = {
    document: string;
    readonly id?: number;
    /**
     * ID of the order this document is associated with
     */
    lab_order: number;
    /**
     * Time at which the document was uploaded
     */
    readonly timestamp?: string;
    /**
     *
     * Value | Notes
     * ----- | -----
     * `"REQ"` | requisition form                                              |
     * `"ABN"` | `ABN (Advance Beneficiary Notice)`                            |
     * `"R-A"` | requisition form and :abbr:`ABN (Advance Beneficiary Notice)` |
     * `"RES"` | lab results                                                   |
     *
     */
    type: 'REQ' | 'ABN' | 'R-A' | 'RES';
};

