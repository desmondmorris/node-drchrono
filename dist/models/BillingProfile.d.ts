export type BillingProfile = {
    readonly archived?: boolean;
    /**
     * Array of CPT Code objects
     */
    readonly cpt_codes?: Array<{
        code?: string;
        /**
         * ICD10 codes represented in strings
         */
        diagnosis_pointers_icd10?: Array<string>;
        /**
         * ICD9 codes represented in strings
         */
        diagnosis_pointers_icd9?: Array<string>;
        /**
         * Modifiers represented in strings
         */
        modifiers?: Array<string>;
        /**
         * Array of NDC Code objects
         */
        ndc_code?: Array<{
            ndc_package_code?: string;
            quantity?: string;
            /**
             * Can be one of `F2`(International Unit), `GR`(Gram), `ME`(Milligram), `ML`(Millimeter) or `UN`(Unit)
             */
            units?: 'F2' | 'GR' | 'ME' | 'ML' | 'UN';
        }>;
        /**
         * This field is represented in string format
         */
        price?: string;
        /**
         * This field is represented in string format
         */
        quantity?: string;
    }>;
    readonly created_at?: string;
    /**
     * Array of custom procedure code objects
     */
    readonly custom_procedure_codes?: Array<{
        code?: string;
        /**
         * This field is represented in string format
         */
        price?: string;
        /**
         * This field is represented in string format
         */
        quantity?: string;
    }>;
    readonly doctor?: string;
    /**
     * Array of HCPCS Code objects
     */
    readonly hcpcs_codes?: Array<{
        code?: string;
        /**
         * ICD10 codes represented in array of strings
         */
        diagnosis_pointers_icd10?: Array<string>;
        /**
         * ICD9 codes represented in array of strings
         */
        diagnosis_pointers_icd9?: Array<string>;
        /**
         * Modifiers represented in array of strings
         */
        modifiers?: Array<string>;
        /**
         * Array of NDC Code objects
         */
        ndc_code?: Array<{
            ndc_package_code?: string;
            quantity?: string;
            /**
             * Can be one of `F2`(International Unit), `GR`(Gram), `ME`(Milligram), `ML`(Millimeter) or `UN`(Unit)
             */
            units?: 'F2' | 'GR' | 'ME' | 'ML' | 'UN';
        }>;
        /**
         * This field is represented in string format
         */
        price?: string;
        /**
         * This field is represented in string format
         */
        quantity?: string;
    }>;
    /**
     * ICD10 Codes represented in string format
     */
    readonly icd10_codes?: Array<string>;
    /**
     * ICD9 Codes represented in string format
     */
    readonly icd9_codes?: Array<string>;
    readonly id?: number;
    name?: string;
    readonly updated_at?: string;
};
