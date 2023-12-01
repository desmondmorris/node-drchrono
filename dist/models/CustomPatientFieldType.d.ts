export type CustomPatientFieldType = {
    /**
     * Allowed values if needed. Values must be separated by comma `,`
     */
    allowed_values?: string;
    /**
     * Indicates that the object has been soft-deleted, and should not be used
     */
    archived?: boolean;
    description?: string;
    doctor: number;
    readonly id?: number;
    name: string;
    /**
     * Custom Patient Demographics with `template_name` set can be inserted into clinical notes via Form Builder. Only letters (a-z or A-Z), numbers (0-9) or underscore(_) are allowed for template name.
     */
    template_name?: string;
};
