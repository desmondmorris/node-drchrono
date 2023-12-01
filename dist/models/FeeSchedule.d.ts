export type FeeSchedule = {
    readonly id?: number;
    /**
     * Type of assignee
     */
    assignee_type?: 'Individual' | 'Speciality';
    /**
     * Schedule specific to these assignees, if null, then applies as default to all assignees without a more specific fee schedule.
     */
    assignees?: any[];
    /**
     * Schedule specific to these specialities, if null, then applies as default to all specialities without a more specific fee schedule.
     */
    specialities?: any[];
    /**
     * Fee Schedule pricing specific to this payer, if null, then applies as default to all payers without a more specific fee schedule.
     */
    payer_id?: string;
    /**
     * Name of insurance plan.
     */
    plan_name?: string;
    /**
     * Start date that this schedule is valid. If null, then since the beginning of time
     */
    effective_date?: string;
    /**
     * End date that this schedule is valid. If null, then it is applied until an end date is set
     */
    ineffective_date?: string;
    /**
     * Items that belong to this fee schedule (this field is only available for single requests)
     */
    items?: any[];
    readonly created_at?: string;
    readonly updated_at?: string;
};
