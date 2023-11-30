/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SoapNoteLineItemFieldType = {
    /**
     * Value options the field type relies on if applicable, otherwise it will be an empty array
     */
    allowed_values?: Array<string>;
    /**
     * Indicates that the field has been soft-deleted by the doctor and will not be used in future notes
     */
    archived?: boolean;
    /**
     * ID of the `/api/clinical_note_templates` object that the field belongs to
     */
    readonly clinical_note_template?: string;
    /**
     * Comment
     */
    comment?: string;
    /**
     * One of `""`, `"Checkbox"`, `"NullCheckbox"`, `"String"`, `"TwoStrings"`, `"FreeDraw"`, `"Photo"`, `"Header"`, `"Subheader"`
     */
    data_type?: string;
    readonly id?: number;
    name?: string;
    /**
     * Indicates that a note should not be locked unless a value is provided for this field
     */
    required?: boolean;
};

