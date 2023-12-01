/**
 * The Telehealth Appointment endpoint is an extension of the existing Appointment endpoint.
 */
export type TelemedicineAppointment = {
    /**
     * The Appointment related to the Telehealth Appointment, analagous to the /api/appointments resource id
     */
    appointment: number;
    /**
     * UTC Timestamp for when the Telehealth Appointment was created
     */
    readonly created_at?: string;
    /**
     * Length of an appointment in minutes
     */
    readonly duration?: number;
    /**
     * The duration that counts only if patient and doctor are in the video room
     */
    overlapping_duration?: string;
    /**
     * Whether a confirmation email was sent to the Patient or not
     */
    sent_patient_email?: any;
    /**
     * URL used to access Telehealth Appointment
     */
    readonly telehealth_url?: string;
    /**
     * UTC Timestamp for when the Telehealth Appointment was updated
     */
    readonly updated_at?: string;
};
