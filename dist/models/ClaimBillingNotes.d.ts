export type ClaimBillingNotes = {
    appointment: number;
    readonly created_at?: string;
    /**
     * ID of `/users` when created the note
     */
    readonly created_by?: string;
    readonly id?: number;
    text?: string;
};
