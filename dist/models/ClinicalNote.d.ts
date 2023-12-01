export type ClinicalNote = {
    readonly appointment?: string;
    archived?: boolean;
    clinical_note_sections?: Array<{
        clinical_note_template?: number;
        name?: string;
        values?: Array<{
            clinical_note_field?: number;
            id?: number;
            value?: string;
        }>;
    }>;
    readonly patient?: string;
};
