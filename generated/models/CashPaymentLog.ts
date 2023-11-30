/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CashPaymentLog = {
    /**
     * `C`(Create), `U`(Update), `D`(Delete), `F`(Fill), `A`(Autofill)
     */
    action?: 'C' | 'U' | 'D' | 'F' | 'A';
    amount?: number;
    /**
     * ID of appointment associated with the payment
     */
    readonly appointment?: string;
    /**
     * ID of user who created the payment
     */
    readonly created_by?: string;
    readonly doctor?: string;
    readonly id?: number;
    readonly patient?: string;
    /**
     * `"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`
     */
    payment_method?: 'DRCP' | 'CASH' | 'CHCK' | 'DBIT' | 'CRDT' | 'AMEX' | 'VISA' | 'MSTR' | 'DISC' | 'SQR1' | 'SQRE' | 'PTPA' | 'ONPT' | 'OTHR';
    source?: string;
    updated_at?: string;
};

