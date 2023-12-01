export type Appointment = {
    /**
     * Bypass overlap check.
     */
    allow_overlapping?: boolean;
    appt_is_break?: boolean;
    /**
     * ID of base appointment of a recurrign series
     */
    readonly base_recurring_appointment?: string;
    /**
     * Billing notes of the appointment. For writing, check `/api/claim_billing_notes`
     */
    readonly billing_notes?: Array<{
        appointment?: number;
        readonly created_at?: string;
        readonly created_by?: string;
        /**
         * ID of the billing note
         */
        readonly id?: number;
        /**
         * Content of the note
         */
        text?: string;
    }>;
    readonly billing_provider?: string;
    /**
     * Should be one of `Auto Accident Claim`, `Balance Due`, `Bill Insurance`, `Bill Secondary Insurance`, `Durable Medical Equipment Claim`, `Internal Review`, `Paid In Full`, `Settled`, `Worker's Comp Claim` or one of the custom billing status
     */
    billing_status?: string;
    /**
     * Associated clinical note object
     */
    clinical_note?: {
        locked?: boolean;
        readonly pdf?: string;
        updated_at?: string;
    };
    /**
     * ID of the original appointment which this appointment cloned from. Will be null if the appointment is not cloned.
     */
    cloned_from?: number;
    color?: string;
    readonly created_at?: string;
    readonly created_by?: string;
    /**
     * Custom appointment fields
     */
    custom_fields?: Array<{
        readonly created_at?: string;
        field_type?: number;
        field_value?: string;
        readonly updated_at?: string;
    }>;
    /**
     * Custom vitals associated with this appointment.
     */
    custom_vitals?: Array<{
        value?: string;
        vital_type?: number;
    }>;
    /**
     * Whether the appointment is deleted.
     */
    readonly deleted_flag?: boolean;
    /**
     * Doctor ID
     */
    doctor: number;
    /**
     * Length of the appointment in minutes. Optional if `profile` is provided.
     */
    duration?: number;
    /**
     * Index of the exam room that this appointment occurs in. See `/api/offices`
     */
    exam_room: number;
    /**
     * The most recent update time among appointment itself, its vitals and its custom vitals
     */
    readonly extended_updated_at?: string;
    readonly first_billed_date?: string;
    readonly first_edi_date?: string;
    icd10_codes?: Array<string>;
    icd9_codes?: Array<string>;
    /**
     * Unique identifier. Usually numeric, but not always
     */
    readonly id?: string;
    /**
     * Billing status of primary insurer
     */
    readonly ins1_status?: '' | 'Incomplete Information' | 'In Process Emdeon' | 'Rejected Emdeon' | 'Rejected EPS' | 'Rejected Jopari' | 'In Process Payor' | 'Rejected Waystar Professional' | 'Rejected Waystar Institutional' | 'In Process Payer' | 'Payer Acknowledged' | 'Rejected Payor' | 'Rejected Payer' | 'Paid in Full' | 'Partially Paid' | 'Coordination of Benefits' | 'ERA Received' | 'ERA Denied' | 'HCFA Form Faxed';
    /**
     * Billing status of secondary insurer
     */
    readonly ins2_status?: '' | 'Incomplete Information' | 'In Process Emdeon' | 'Rejected Emdeon' | 'Rejected EPS' | 'Rejected Jopari' | 'In Process Payor' | 'Rejected Waystar Professional' | 'Rejected Waystar Institutional' | 'In Process Payer' | 'Payer Acknowledged' | 'Rejected Payor' | 'Rejected Payer' | 'Paid in Full' | 'Partially Paid' | 'Coordination of Benefits' | 'ERA Received' | 'ERA Denied' | 'HCFA Form Faxed';
    readonly is_virtual_base?: boolean;
    /**
     * Whether the appointment is a walk-in appointment
     */
    is_walk_in?: boolean;
    readonly last_billed_date?: string;
    readonly last_edi_date?: string;
    notes?: string;
    /**
     * Office ID
     */
    office: number;
    /**
     * ID of this appointment's patient. Breaks have a null patient field.
     */
    patient: number;
    /**
     * Appointment Payment Profile
     */
    payment_profile?: string;
    readonly primary_insurance_id_number?: string;
    readonly primary_insurer_name?: string;
    readonly primary_insurer_payer_id?: string;
    /**
     * ID of an `/api/appointment_profiles` instance. The profile sets default values for `color`, `duration`, and `reason` on creation, which can be overriden by setting these values explicitly.
     */
    profile?: number;
    /**
     * Default to `""`
     */
    reason?: string;
    /**
     * Whether the appointment is a recurring appointment or not
     */
    readonly recurring_appointment?: boolean;
    /**
     * Write-only. ID of an `/api/reminder_profiles` instance. Set this to apply a reminder profile to the appointment. Cannot be applied to an appointment with reminders.
     */
    reminder_profile?: string;
    /**
     * Scheduled reminders of the appointment
     */
    readonly reminders?: Array<{
        readonly id?: number;
        readonly scheduled_time?: string;
        type?: 'email' | 'sms' | 'phone' | 'auto_call';
    }>;
    /**
     * ID of this claim id.
     */
    resubmit_claim_original_id?: number;
    /**
     * The starting time of the appointment
     */
    scheduled_time: string;
    readonly secondary_insurance_id_number?: string;
    readonly secondary_insurer_name?: string;
    readonly secondary_insurer_payer_id?: string;
    /**
     * One of ``, `Arrived`, `Checked In`, `In Room`, `Cancelled`, `Complete`, `Confirmed`, `In Session`, `No Show`, `Not Confirmed`, or `Rescheduled`. Or one of the custom statuses.
     */
    status?: '' | 'Arrived' | 'Checked In' | 'Checked In Online' | 'In Room' | 'In Session' | 'Complete' | 'Confirmed' | 'Not Confirmed' | 'Rescheduled' | 'Cancelled' | 'No Show';
    readonly status_transitions?: Array<{
        readonly appointment?: string;
        readonly datetime?: string;
        readonly from_status?: string;
        readonly to_status?: string;
    }>;
    /**
     * Supervising provider of appointment if set.
     */
    readonly supervising_provider?: string;
    readonly updated_at?: string;
    /**
     * Clinical vitals associated with the appointment
     */
    vitals?: {
        blood_pressure_1?: number;
        blood_pressure_2?: number;
        readonly bmi?: string;
        head_circumference?: number;
        head_circumference_units?: string;
        height?: number;
        height_units?: string;
        oxygen_saturation?: number;
        /**
         * 0-10 pain scale.
         */
        pain?: string;
        /**
         * Beats per minute.
         */
        pulse?: number;
        /**
         * Breathes per minute.
         */
        respiratory_rate?: number;
        smoking_status?: 'blank' | '449868002' | '428041000124106' | '8517006' | '266919005' | '77176002' | '266927001' | '428071000124103' | '428061000124105';
        temperature?: number;
        temperature_units?: string;
        weight?: number;
        weight_units?: string;
    };
};
