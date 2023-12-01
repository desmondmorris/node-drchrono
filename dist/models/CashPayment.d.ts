export type CashPayment = {
    /**
     * Amount of cash for this payment, cannot be zero
     */
    amount?: number;
    /**
     * If this is absent, the apponitment will be inferred from line item
     */
    appointment?: number;
    readonly created_at?: string;
    readonly created_by?: string;
    doctor?: number;
    readonly id?: number;
    line_item?: number;
    notes?: string;
    patient: number;
    /**
     * `"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`
     */
    payment_method?: 'DRCP' | 'CASH' | 'CHCK' | 'DBIT' | 'CRDT' | 'AMEX' | 'VISA' | 'MSTR' | 'DISC' | 'SQR1' | 'SQRE' | 'PTPA' | 'ONPT' | 'OTHR';
    /**
     * `"" for Credit, "REF" for Refund, "COR" for Correction, "COPAY" for Copay, "COINSR" for Coinsurance, "OTHR" for Other`
     */
    payment_transaction_type?: '' | 'REF' | 'COR' | 'COPAY' | 'COINSR' | 'OTHR';
    readonly posted_date?: string;
    received_date?: string;
    trace_number?: string;
    readonly updated_at?: string;
};
