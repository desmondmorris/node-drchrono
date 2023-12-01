export type PatientFlagType = {
    /**
     * Indicates the flag type is soft-deleted and should not be used
     */
    readonly archived?: boolean;
    color?: string;
    readonly created_at?: string;
    /**
     * Doctor who owns the flag type
     */
    doctor: number;
    readonly id?: number;
    /**
     * Name of the patient flag type
     */
    name: string;
    /**
     * Priority of the flag type
     */
    priority?: number;
    readonly updated_at?: string;
};
