export type TaskNote = {
    /**
     * If the task note is archived or not
     */
    archived?: boolean;
    readonly created_at?: string;
    /**
     * ID of the `/api/users` who created the note
     */
    readonly created_by?: string;
    readonly id?: number;
    /**
     * ID of task this note is related with
     */
    task: number;
    /**
     * Content of the task note
     */
    text: string;
    readonly updated_at?: string;
};
