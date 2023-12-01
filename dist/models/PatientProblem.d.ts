export type PatientProblem = {
    appointment?: number;
    date_changed?: string;
    date_diagnosis?: string;
    date_onset?: string;
    description?: string;
    doctor: number;
    /**
     * ICD9 or ICD10 code for the problem
     */
    icd_code?: string;
    /**
     * Either `9` or `10`. If omitted in writing, default to 10.
     */
    icd_version?: '9' | '10';
    readonly id?: number;
    /**
     * External URL with more information about the problem, intended for patient education
     */
    readonly info_url?: string;
    /**
     * Name of the problem
     */
    name?: string;
    /**
     * Any additional notes by the provider
     */
    notes?: string;
    patient: number;
    /**
     * SnoMED code for the problem
     */
    snomed_ct_code?: string;
    /**
     * Either `active`, `inactive` or `resolved`. If omitted in writing, default to `active`
     */
    status?: 'active' | 'inactive' | 'resolved';
};
