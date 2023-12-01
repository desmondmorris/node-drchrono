export type CarePlan = {
    readonly appointment?: string;
    readonly code?: string;
    readonly code_system?: string;
    readonly created_at?: string;
    readonly description?: string;
    readonly id?: number;
    readonly instructions?: string;
    readonly patient?: string;
    /**
     * Can be one of the following: `1`(Goal), `2`(Patient education), `3`(Patient decision aid), `4`(Patient clinical instruction), `5`(Referral to other doctor), `6`(Health concerns)
     */
    readonly plan_type?: '1' | '2' | '3' | '4' | '5' | '6';
    readonly scheduled_date?: string;
    readonly title?: string;
    readonly updated_at?: string;
};
