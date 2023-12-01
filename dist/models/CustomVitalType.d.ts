export type CustomVitalType = {
    /**
     * If `data_type` is `single_sel`, this is the array of values in the select's dropdown.
     */
    allowed_values?: Array<string>;
    /**
     * Indicates that the object has been soft-deleted and should not be used
     */
    archived?: boolean;
    /**
     * One of `text`, `number`, or `single_sel`
     */
    data_type?: 'text' | 'number' | 'single_sel';
    description?: string;
    /**
     * ID of the doctor who created the custom vital
     */
    readonly doctor?: string;
    /**
     * If `is_fraction_field` is true, this is the character separating the numerator and denominator
     */
    fraction_delimiter?: string;
    readonly id?: number;
    is_fraction_field?: boolean;
    name?: string;
    unit?: string;
};
