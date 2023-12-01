export type PhoneCallLog = {
    /**
     * Appointment related with the phone call log
     */
    appointment?: number;
    /**
     * If this phone call log is archived or not
     */
    readonly archived?: boolean;
    /**
     * Author of post.
     */
    readonly author?: string;
    /**
     * Amount of cash needs to be charged
     */
    cash_charged?: number;
    readonly created_at?: string;
    doctor: number;
    /**
     * Duration of the phone call
     */
    duration?: number;
    readonly id?: number;
    /**
     * Additional message for the phone call
     */
    message?: string;
    patient: number;
    /**
     * Date of phone call, if `appointment` is set, this field will be set as the `scheduled_time` of that appointment
     */
    scheduled_time?: string;
    /**
     * Title of this log
     */
    title?: string;
    /**
     * Type of phone call log
     */
    type?: string;
    readonly updated_at?: string;
};
