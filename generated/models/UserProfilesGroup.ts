/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserProfilesGroup = {
    /**
     * Group is archived or not
     */
    readonly archived?: boolean;
    created_at?: string;
    readonly id?: number;
    /**
     * Users in this user group.
     */
    readonly members?: Array<string>;
    readonly name?: string;
    /**
     * Practice group this user group belongs to
     */
    readonly practice_group?: string;
    updated_at?: string;
};

