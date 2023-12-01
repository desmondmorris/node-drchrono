export type AuditLog = {
    /**
     * Appointment
     */
    appointment?: string;
    /**
     * One of `""`, `"Incomplete Information"`, `"In Process Emdeon"`, `"In Process iHCFA"`, `"In Process Gateway"`, `"Rejected Emdeon"`, `"Rejected iHCFA"`, `"Rejected Gateway"`, `"In Process Payer"`, `"Payer Acknowledged"`, `"Rejected Payer"`, `"Paid in Full"`,  `"Partially Paid"`,  `"Coordination of Benefits"`,  `"ERA Received"`,  `"ERA Denied"`
     */
    readonly billing_status?: '' | 'Incomplete Information' | 'In Process Emdeon' | 'In Process iHCFA' | 'In Process Gateway' | 'In Process Jopari' | 'In Process Waystar' | 'In Process EPS' | 'Rejected Emdeon' | 'Rejected iHCFA' | 'Rejected Gateway' | 'Rejected Jopari' | 'Rejected Waystar' | 'Rejected EPS' | 'In Process Payer' | 'Payer Acknowledged' | 'Rejected Payer' | 'Paid in Full' | 'Partially Paid' | 'Coordination of Benefits' | 'ERA Received' | 'ERA Denied';
    readonly created_at?: string;
    readonly created_by?: string;
    readonly id?: number;
    notes?: string;
    readonly updated_at?: string;
};
