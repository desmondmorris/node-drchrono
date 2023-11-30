/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatientDrug = {
    /**
     * Appointment ID corresponding to the initial prescription
     */
    appointment?: number;
    date_prescribed?: string;
    date_started_taking?: string;
    date_stopped_taking?: string;
    /**
     * If true, the prescription should be dispensed as written and not substituted
     */
    daw?: boolean;
    dispense_quantity?: number;
    /**
     * Prescribing doctor ID
     */
    doctor: number;
    /**
     * Please note, this used to be an decimal field, you can still pass decimal value to it. Or you can pass in some formatted string if needed.
     */
    dosage_quantity?: string;
    dosage_units?: string;
    /**
     * Frequency pf administration
     */
    frequency?: string;
    readonly id?: number;
    indication?: string;
    name?: string;
    ndc?: string;
    /**
     * Any additional notes from the provider
     */
    notes?: string;
    number_refills?: number;
    /**
     * One of `""`, `"Ordered"`, `"Administered during visit"`, `"Electronic eRx Sent"`, `"Phoned into Pharmacy"`, `"Faxed to Pharmacy"`, `"Paper Rx"`, `"Prescription Printed"`, `"Discontinued"`, `"Prescribed by other Dr"` or `"Over the Counter"`. If omitted in writing, default to `""`
     */
    order_status?: '' | 'Administered during visit' | 'Discontinued' | 'Electronic eRx Sent' | 'Faxed to Pharmacy' | 'Ordered' | 'Over the Counter' | 'Paper Rx' | 'Phoned into Pharmacy' | 'Prescribed by other Dr' | 'Prescription Printed';
    patient: number;
    pharmacy_note?: string;
    /**
     * If `True`, the medication should be taken when necessary
     */
    prn?: boolean;
    /**
     * Route of administration
     */
    route?: string;
    /**
     * RxNorm code for the medication
     */
    rxnorm?: string;
    signature_note?: string;
    /**
     * If present, one of `"active"` or `"inactive"`. If omitted in writing, default to `"active"`
     */
    status?: 'active' | 'inactive';
};

