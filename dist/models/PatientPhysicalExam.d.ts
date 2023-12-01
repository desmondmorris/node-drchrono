export type PatientPhysicalExam = {
    readonly appointment?: string;
    /**
     * Code from different code system
     */
    code?: string;
    /**
     * Can be `SNOMEDCT`, `LOINC`
     */
    code_system?: string;
    readonly created_at?: string;
    doctor: number;
    effective_time?: string;
    readonly id?: number;
    /**
     * Description of physical exam
     */
    readonly name?: string;
    patient: number;
    /**
     * Code from different code system represent physical exam value
     */
    value_code?: string;
    /**
     * Can be `SNOMEDCT`, `ICD10CM`, `LOINC`
     */
    value_code_system?: string;
    /**
     * Description of value
     */
    readonly value_name?: string;
};
