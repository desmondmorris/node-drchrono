/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Appointment profiles are for common kinds of appointments a doctor might have, such as "physical exam", which have a standard duration and should show up as the same color on the calendar.
 */
export type AppointmentProfile = {
    /**
     * Indicates that the object has been soft-deleted and should not be used
     */
    readonly archived?: boolean;
    color: string;
    doctor?: number;
    /**
     * Length of an appointment in minutes
     */
    duration?: number;
    readonly id?: number;
    name: string;
    /**
     * Whether this profile should be available for online scheduling
     */
    online_scheduling: boolean;
    reason?: string;
    /**
     * Override the usual ordering ordering of appointments in the patient's appointments page. Lower values are shown at the top
     */
    sort_order?: number;
};

