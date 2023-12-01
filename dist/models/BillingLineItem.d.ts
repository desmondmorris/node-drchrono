export type BillingLineItem = {
    /**
     * Adjustment from total billed
     */
    readonly adjustment?: number;
    /**
     * Amount allowed by insurance
     */
    readonly allowed?: number;
    /**
     * Appointment ID
     */
    appointment: number;
    /**
     * Insurance balance
     */
    balance_ins?: number;
    /**
     * Patient balance
     */
    readonly balance_pt?: number;
    /**
     * Total balance
     */
    readonly balance_total?: string;
    /**
     * Total billed
     */
    readonly billed?: number;
    /**
     * One of `""`, `"Incomplete Information"`, `"In Process Emdeon"`, `"In Process iHCFA"`, `"In Process Gateway"`, `"Rejected Emdeon"`, `"Rejected iHCFA"`, `"Rejected Gateway"`, `"In Process Payer"`, `"Payer Acknowledged"`, `"Rejected Payer"`, `"Paid in Full"`,  `"Partially Paid"`,  `"Coordination of Benefits"`,  `"ERA Received"`,  `"ERA Denied"`
     */
    readonly billing_status?: '' | 'Incomplete Information' | 'In Process Emdeon' | 'In Process iHCFA' | 'In Process Gateway' | 'In Process Jopari' | 'In Process Waystar' | 'In Process EPS' | 'Rejected Emdeon' | 'Rejected iHCFA' | 'Rejected Gateway' | 'Rejected Jopari' | 'Rejected Waystar' | 'Rejected EPS' | 'In Process Payer' | 'Payer Acknowledged' | 'Rejected Payer' | 'Paid in Full' | 'Partially Paid' | 'Coordination of Benefits' | 'ERA Received' | 'ERA Denied';
    code: string;
    readonly denied_flag?: boolean;
    readonly description?: string;
    /**
     * List of 4 diagnosis pointers
     */
    diagnosis_pointers: Array<string>;
    /**
     * Doctor ID
     */
    readonly doctor?: string;
    readonly expected_reimbursement?: number;
    readonly id?: number;
    /**
     * Amount paid by patient's primary insurer
     */
    readonly ins1_paid?: number;
    /**
     * Amount paid by patient's secondary insurer
     */
    readonly ins2_paid?: number;
    /**
     * Amount paid by patinet's tertiary insurer
     */
    readonly ins3_paid?: number;
    /**
     * Total amount paid by patient's insurers
     */
    readonly ins_total?: string;
    /**
     * This corresponds to the "Status/Adj Type" from billing detail screen
     */
    readonly insurance_status?: string;
    /**
     * List of 4 code modifiers
     */
    modifiers?: Array<string>;
    /**
     * Total amount paid
     */
    readonly paid_total?: string;
    /**
     * Patient ID
     */
    readonly patient?: string;
    readonly posted_date?: string;
    /**
     * Price of procedure
     */
    price?: number;
    /**
     * One of `"CPT(C)"`, `"HCPCS(H)"`, `"Custom(U)"`, use 1 character identifier when using `POST`
     */
    procedure_type: 'C' | 'H' | 'U' | 'S';
    /**
     * Amount paid by patient
     */
    pt_paid?: number;
    quantity?: number;
    /**
     * Date on which the service was rendered
     */
    readonly service_date?: string;
    /**
     * Default to "UN"
     */
    units?: string;
    readonly updated_at?: string;
};
