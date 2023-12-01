export type PatientRiskAssessment = {
    readonly appointment?: string;
    code?: string;
    code_system?: string;
    readonly created_at?: string;
    doctor: number;
    effective_time?: string;
    readonly id?: number;
    readonly name?: string;
    patient: number;
    value_code?: string;
    value_code_system?: string;
    readonly value_name?: string;
};
