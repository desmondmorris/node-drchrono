/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReminderProfile = {
    /**
     * Doctor who created the profile. Other doctors in the practice group may have access to their profiles
     */
    doctor: number;
    readonly id?: number;
    name?: string;
    /**
     * Reminders set in the profile
     */
    reminders: Array<{
        amount?: number;
        /**
         * One of `"email"`, `"sms"` or `"auto_call"`
         */
        type?: 'email' | 'sms' | 'phone' | 'auto_call';
        /**
         * One of `"email"`, `"sms"` or `"auto_call"`
         */
        unit?: 'minutes' | 'hours' | 'days' | 'weeks';
    }>;
};

