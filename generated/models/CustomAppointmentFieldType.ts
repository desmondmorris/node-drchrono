/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomAppointmentFieldType = {
    /**
     * Indicates that the object has been soft-deleted and should not be used
     */
    readonly archived?: boolean;
    readonly created_at?: string;
    readonly doctor?: string;
    /**
     * Description of the custom field
     */
    field_desc?: string;
    field_name?: string;
    readonly id?: number;
    /**
     * displayed order in patient's demographic page
     */
    readonly order?: number;
    readonly updated_at?: string;
};

