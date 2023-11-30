/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskCategory = {
    archived?: boolean;
    readonly created_at?: string;
    readonly id?: number;
    /**
     * Indicates that the category is a system wide (pre-defined) category
     */
    readonly is_global?: string;
    name: string;
    practice_group: number;
    readonly updated_at?: string;
};

