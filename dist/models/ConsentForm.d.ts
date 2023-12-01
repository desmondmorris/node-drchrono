export type ConsentForm = {
    readonly archived?: boolean;
    /**
     * If true, consent form will always be automatically assigned to appointments
     */
    assign_by_default: boolean;
    readonly created_at?: string;
    doctor: number;
    readonly id?: number;
    /**
     * If true, consent form must be signed prior to appointment check in
     */
    is_mandatory: boolean;
    /**
     * The order of consent forms that will show in management screen
     */
    readonly order?: number;
    title: string;
    readonly updated_at?: string;
    /**
     * Files are passed using `multipart/form-data` encoding, but returned as URLs.
     */
    uri: string;
};
