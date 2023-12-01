export type TaskStatus = {
    archived?: boolean;
    readonly created_at?: string;
    readonly id?: number;
    name: string;
    practice_group: number;
    /**
     * Can be one of the following `O`(open), `P`(In progress), `H`(On hold), `C`(Complete), default to `O`(Open)
     */
    status_category?: 'O' | 'P' | 'H' | 'C';
    /**
     * ID of `/api/task_categories`
     */
    task_category?: number;
    readonly updated_at?: string;
};
