/**
 * Appointment templates are blocks of time during which a doctor usually sees appointments with the same profile. These may have a longer duration then the corresponding profile, in which case they may allow multiple appointments to be booked during that period.
 */
export type AppointmentTemplate = {
    /**
     * Indicats that the object has been soft-deleted and should not be used
     */
    readonly archived?: boolean;
    date_end?: string;
    date_start?: string;
    /**
     * Length of an appointment in minutes
     */
    duration?: number;
    /**
     * **1-based** index for the exam room
     */
    exam_room: number;
    readonly id?: number;
    office: number;
    /**
     * Array of time intervals during which the template is available. Only computed if the available and verbose query parameters are passed. Note that only slots long enough to fit an appointment with the corresponding profile are included.
     */
    open_slots?: Array<{
        end?: string;
        start?: string;
    }>;
    /**
     * ID of the appointment profile to default to
     */
    profile: number;
    scheduled_time: string;
    /**
     * Array of integers that indicate week days (`0` = Monday, ..., `6` = Sunday)
     */
    week_days: Array<number>;
};
