export type DoctorMessage = {
    /**
     * If true, indicates that the message has been soft-deleted
     */
    readonly archived?: boolean;
    /**
     * Files are passed using `multipart/form-data` encoding, but returned as URLs.
     */
    attachment?: string;
    doctor: number;
    /**
     * Doctor First Name
     */
    readonly doctor_first_name?: string;
    /**
     * Doctor Last Name
     */
    readonly doctor_last_name?: string;
    /**
     * Doctor Middle Name
     */
    readonly doctor_middle_name?: string;
    readonly id?: number;
    /**
     * Array of notes attached to the message
     */
    message_notes?: Array<{
        readonly created_at?: string;
        /**
         * ID of `/api/users` who created the note
         */
        readonly created_by?: string;
        /**
         * Content of the note
         */
        text?: string;
    }>;
    /**
     * Outgoing fax recipient fax number
     */
    readonly outgoing_fax_recipient_fax_number?: string;
    /**
     * Outgoing fax recipient name
     */
    readonly outgoing_fax_recipient_name?: string;
    /**
     * ID of `/api/users` who owns the message, who may be the doctor themselves or one of their staff members
     */
    owner?: string;
    /**
     * Owner First Name
     */
    readonly owner_first_name?: string;
    /**
     * Owner Last Name
     */
    readonly owner_last_name?: string;
    /**
     * ID of patient that the message concerns, if applicable
     */
    patient?: number;
    /**
     * Patient First Name
     */
    readonly patient_first_name?: string;
    /**
     * Patient Last Name
     */
    readonly patient_last_name?: string;
    /**
     * Patient Middle Name
     */
    readonly patient_middle_name?: string;
    readonly read?: boolean;
    readonly received_at?: string;
    /**
     * ID of `/api/users` who has been assigned to process the message, who may be the doctor themselves or one of their staff members
     */
    responsible_user?: string;
    /**
     * Responsible User First Name
     */
    readonly responsible_user_first_name?: string;
    /**
     * Responsible User Last Name
     */
    readonly responsible_user_last_name?: string;
    readonly starred?: boolean;
    title: string;
    /**
     *
     * Value | Description
     * ----- | -----------
     * `"GP"` | Generated PDF
     * `"GC"` | Generated CSV
     * `"GZ"` | Generated ZIP
     * `"IF"` | Incoming Fax
     * `"OF"` | Outgoing Fax
     * `"IL"` | Incoming Labs
     * `"IR"` | Inbound Referrals
     * `"OR"` | Outbound Referrals
     * `"IE"` | Incoming eRx
     * `"OA"` | Online Appointments
     * `"PO"` | Patient Onboarding
     * `"PI"` | Patient Incoming Message
     * `"PM"` | Patient Outgoing Message
     * `"OO"` | Demo Meeting Message
     * `"OD"` | Outbound Direct Message
     * `"ID"` | Inbound Direct Message
     *
     */
    type?: 'GP' | 'GC' | 'GT' | 'GZ' | 'IF' | 'OF' | 'IL' | 'IR' | 'OR' | 'IE' | 'CE' | 'CH' | 'OA' | 'PO' | 'PI' | 'PM' | 'OO' | 'OD' | 'ID' | 'DL' | 'CN';
    /**
     * Type Description
     */
    readonly type_description?: string;
    readonly updated_at?: string;
    /**
     * Used by doctors and their staff to keep track of what step of processing the message is in
     */
    readonly workflow_step?: string;
};
