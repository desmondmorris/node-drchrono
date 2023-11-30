/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Values entered by doctor when charting a particular appointment
 */
export type SoapNoteLineItemFieldValue = {
    /**
     * ID of appointment that the value applies to
     */
    appointment: number;
    /**
     * ID of `/api/clinical_note_field_types` object that indicates type of the value
     */
    clinical_note_field: number;
    readonly created_at?: string;
    readonly id?: number;
    readonly updated_at?: string;
    /**
     * Value of the field. Interpretation varies by field type.
     * `clinical_note_field.data_type` | Value | Description
     * ------------------------------- | ----- | -----------
     * `"Header"` | string |
     * `"SubHeader"` | string |
     * `"String"` | string | If field is single/multiple select field, make sure value presents in allowed values set.
     * `"TwoStrings"` | string | String is seperated by `"/"`
     * `"NullCheckbox"` | string | Can be `"0"`, `"1"`, `"2"`, `"0"`-`Not selected`, `"1"`-`No`, `"2"`-`Yes`
     * `"Checkbox"` | string | Can be `"True"`, `"False"`
     *
     */
    value: string;
};

