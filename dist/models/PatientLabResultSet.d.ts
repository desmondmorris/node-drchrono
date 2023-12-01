export type PatientLabResultSet = {
    readonly created_at?: string;
    /**
     * Date of lab test.
     */
    date_test_performed?: string;
    /**
     * Comment from the doctor on lab result.
     */
    doctor_comments?: string;
    /**
     * Check this box when the doctor has reviewed the lab result and taken appropriate action.
     */
    doctor_signoff?: boolean;
    readonly id?: number;
    /**
     * HL7 codified abnormal flag for the result.
     */
    lab_abnormal_flag?: '' | 'L' | 'H' | 'LL' | 'HH' | '<' | '>' | 'N' | 'A' | 'AA' | 'null' | 'U' | 'D' | 'B' | 'W' | 'S' | 'R' | 'I' | 'MS' | 'VS';
    /**
     * Imported CCR document that contains lab results.
     */
    readonly lab_imported_from_ccr?: string;
    lab_normal_range?: string;
    lab_normal_range_units?: string;
    /**
     * Status of the lab order.
     */
    lab_order_status?: '' | 'Order Entered' | 'Discontinued' | 'In Progress' | 'Results Received' | 'Results Reviewed with Patient' | 'Paper Order';
    lab_result_value?: string;
    lab_result_value_as_float?: number;
    lab_result_value_units?: string;
    loinc_code?: string;
    ordering_doctor: number;
    patient: number;
    /**
     * Scanned in PDF for this lab result (optional).
     */
    readonly scanned_in_result?: string;
    title?: string;
    readonly updated_at?: string;
};
