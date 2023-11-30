/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EOBObject = {
    /**
     * Date of check. If missing, default to the date when the request is made
     */
    check_date?: string;
    /**
     * Date when EOB gets deposited.
     */
    deposit_date?: string;
    doctor: number;
    readonly id?: number;
    insurance_payer_id: string;
    insurance_payer_name: string;
    insurance_payer_trace_number: string;
    /**
     * `""` - Unknown, `"ACH"` - Automated Clearing House (ACH), `"BOPCCP"` - Cash Concentration/Disbursement plus Addenda (CCD+) (ACH), `"BOPCTX"` - Corporate Trade Exchange (CTX) (ACH), `"CHK"` - Check, `"FWT"` - Federal Reserve Funds/Wire Transfer - Nonrepetitive, `"VPAY"` - vPayment, `"NON"` - Non-Payment Data
     */
    payment_method?: '' | 'ACH' | 'BOPCCP' | 'BOPCTX' | 'CHK' | 'FWT' | 'VPAY' | 'NON';
    readonly posted_date?: string;
    scanned_eob?: string;
    /**
     * Total amount paid. If missing, default to 0.00
     */
    total_paid?: number;
    readonly updated_at?: string;
};

