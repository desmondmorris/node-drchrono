/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatientAuthorization = {
    /**
     * Authorization Number
     */
    auth_number?: string;
    readonly created_at?: string;
    readonly doctor: string;
    readonly end_date?: string;
    readonly expired?: boolean;
    readonly id?: number;
    /**
     * Notes
     */
    notes?: string;
    readonly number_of_visits?: number;
    patient: number;
    /**
     * Array of procedure code objects
     */
    readonly procedure_codes?: Array<{
        code?: string;
        /**
         * This field is represented in string format
         */
        price?: string;
        /**
         * This field is represented in string format
         */
        quantity?: string;
    }>;
    /**
     * Specialty
     */
    specialty?: string;
    readonly start_date?: string;
    /**
     * Status
     */
    status?: string;
    readonly visits_remaining?: number;
    readonly updated_at?: string;
};

