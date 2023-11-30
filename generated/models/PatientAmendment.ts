/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatientAmendment = {
    /**
     * A PDF file containing the amended information for the patient's record
     */
    amendment_file: string;
    amendment_name: string;
    /**
     * ID of the appointment to which the amendment applies, if any. If present, the `amendment_file` will be appended to the clinical note for this appointment.
     */
    appointment?: number;
    comments?: string;
    /**
     * ID of the doctor who owns the amendment
     */
    doctor: number;
    readonly id?: number;
    /**
     * ID of the patient to whom the amendment applies
     */
    patient: number;
};

