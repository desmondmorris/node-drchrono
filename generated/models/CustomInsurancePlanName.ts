/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomInsurancePlanName = {
    archived?: boolean;
    readonly created_at?: string;
    /**
     * List custom appointment fields defined by the doctor with the given ID
     */
    readonly doctor?: string;
    readonly id?: number;
    /**
     * Custom name
     */
    insurance_plan_name?: string;
    readonly updated_at?: string;
    /**
     * User who created the custom insurance plan name
     */
    readonly user?: string;
};

