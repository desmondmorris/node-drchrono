/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatientMessage = {
    attachments?: Array<{
        attachment?: string;
        readonly created_at?: string;
        doctor?: number;
        readonly updated_at?: string;
    }>;
    body?: string;
    readonly created_at?: string;
    doctor: number;
    readonly id?: number;
    readonly message?: string;
    patient: number;
    subject: string;
    readonly updated_at?: string;
};

