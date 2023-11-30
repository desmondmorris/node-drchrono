/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SoapNoteCustomReport = {
    /**
     * Indicates that the doctor has soft-deleted this template, and will not use it for future appointments
     */
    readonly archived?: boolean;
    /**
     * clinical note fields
     */
    clinical_note_fields?: Array<{
        allowed_values?: Array<string>;
        /**
         * Indicates that the field has been soft-deleted by the doctor
         */
        archived?: boolean;
        clinical_note_template?: number;
        /**
         * One of `""`, `"Checkbox"`, `"NullCheckbox"`, `"String"`, `"TwoStrings"`, `"FreeDraw"`, `"Photo"`, `"Header"`, `"Subheader"`
         */
        data_type?: string;
        name?: string;
        /**
         * Indicates that a note should not be locked unless a value is provided for this field
         */
        required?: boolean;
    }>;
    readonly doctor?: string;
    readonly id?: number;
    is_onpatient?: boolean;
    /**
     * If this is true, this report will be the same across all notes
     */
    is_persistent?: boolean;
    name?: string;
    /**
     * Order of templates
     */
    order?: {
        /**
         * Order of the template on complete notes
         */
        on_complete_note?: number;
        /**
         * Order of the template on iPad
         */
        on_ipad?: number;
    };
    readonly updated_at?: string;
};

