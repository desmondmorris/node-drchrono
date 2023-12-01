export type TaskTemplate = {
    archived?: boolean;
    readonly created_at?: string;
    default_assignee_group?: number;
    default_assignee_user?: string;
    default_category?: number;
    /**
     * Offset due date, format should follow `"[DD] [HH:[MM:]]ss[.uuuuuu]"`
     */
    default_due_date_offset?: string;
    default_note?: string;
    /**
     * Can be one of the following 10(Low), 20(Medium), 30(High), 40(Urgent)
     */
    default_priority?: '10' | '20' | '30' | '40';
    default_status?: number;
    default_title?: string;
    readonly id?: number;
    name: string;
    readonly practice_group?: string;
    readonly updated_at?: string;
};
