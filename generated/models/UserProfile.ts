/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserProfile = {
    /**
     * For staff members, this is their primary physician's ID. For doctors, it is their own ID.
     */
    readonly doctor?: string;
    readonly id?: string;
    /**
     * Mutually exclusive with `is_staff`
     */
    readonly is_doctor?: string;
    /**
     * Mutually exclusive with `is_doctor`
     */
    readonly is_staff?: string;
    /**
     * Permissions the user has.
     */
    readonly permissions?: string;
    /**
     * The ID of the practice group this user belongs to. This can be used to identify users in the same practice.
     */
    readonly practice_group?: string;
    username?: string;
};

