/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Task = {
    archived?: boolean;
    /**
     * ID of `/api/users/` who assigned the task
     */
    readonly assigned_by?: string;
    /**
     * Either `assignee_user` or `assignee_group` should be set
     */
    assignee_group?: number;
    /**
     * Either `assignee_user` or `assignee_group` should be set
     */
    assignee_user?: string;
    /**
     * Associated task items
     */
    associated_items?: Array<{
        task?: number;
        /**
         * Can be one of `"Appointment"`, `"Patient"`, `"Message"`, `"Document"`, `"Lab order"`
         */
        type?: 'Document' | 'Message' | 'Lab result' | 'Lab order' | 'Patient' | 'Appointment' | 'Lab document' | 'Communication';
        /**
         * ID of the specified type object
         */
        value?: number;
    }>;
    category?: number;
    readonly created_at?: string;
    /**
     * ID of `/api/users` who created the task
     */
    readonly created_by?: string;
    /**
     * When the task is due
     */
    due_date?: {
        /**
         * Due date time
         */
        time?: string;
    };
    readonly id?: number;
    /**
     * Additional notes of the task
     */
    notes?: Array<{
        archived?: boolean;
        readonly created_at?: string;
        readonly created_by?: string;
        readonly id?: number;
        /**
         * ID of `/api/tasks`
         */
        task?: number;
        text?: string;
        readonly updated_at?: string;
    }>;
    /**
     * Can be one of the following 10(Low), 20(Medium), 30(High), 40(Urgent)
     */
    priority?: '10' | '20' | '30' | '40';
    status: number;
    title: string;
    readonly updated_at?: string;
};

