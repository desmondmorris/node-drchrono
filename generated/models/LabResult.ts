/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LabResult = {
    /**
     *
     * Value | Notes
     * ----- | -----
     * `'L'` | `'low'`
     * `'LL'` | `'alert low'`
     * `'H'` | `'high'`
     * `'HH'` | `'alert high'`
     * `'<'` | `'panic low'`
     * `'>'` | `'panic high'`
     * `'A'` | `'abnormal'`
     * `'AA'` | `'very abnormal'`
     * `'S'` | `'susceptible'`
     * `'R'` | `'resistant'`
     * `'I'` | `'intermediate'`
     * `'NEG'` | `'negative'`
     * `'POS'` | `'positive'`
     * `'N'` | `'normal'`
     * `''` | `'no comment'`
     *
     */
    abnormal_status?: 'L' | 'LL' | 'H' | 'HH' | '<' | '>' | 'A' | 'AA' | 'S' | 'R' | 'I' | 'NEG' | 'POS' | 'N' | '';
    comments?: string;
    /**
     * ID of `/lab_documents` object for the result
     */
    document: number;
    /**
     * This is the code used for grouping result data.
     */
    group_code?: string;
    readonly id?: number;
    /**
     * If true, the result will be flagged for the doctor's attention
     */
    is_abnormal?: string;
    /**
     * ID of `/lab_orders` object the result belongs to
     */
    readonly lab_order?: string;
    /**
     * ID of `/lab_tests` object for the result
     */
    lab_test: number;
    /**
     * When ``value_is_numeric`` is True, this parameter must be a string of the form ``"<lower> <upper>", where both lower and upper are numerical``
     */
    normal_range?: string;
    observation_code?: string;
    /**
     * For example, ``"Blood Urea Nitrogen (BUN)"``
     */
    observation_description?: string;
    specimen_received?: string;
    /**
     *
     * Value | Notes
     * ----- | -----
     * `'P'` | `'preliminary'`
     * `'I'` | `'pending'`
     * `'C'` | `'correction'`
     * `'F'` | `'final'`
     * `'X'` | `'canceled'`
     *
     */
    status: 'P' | 'I' | 'C' | 'F' | 'X';
    test_performed: string;
    /**
     * Unit used for the value
     */
    unit?: string;
    value: string;
    /**
     * Default to `False`
     */
    value_is_numeric?: boolean;
};

