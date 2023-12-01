import type { DoctorMessage } from '../models/DoctorMessage';
import type { InventoryCategory } from '../models/InventoryCategory';
import type { InventoryVaccine } from '../models/InventoryVaccine';
import type { Office } from '../models/Office';
import type { Task } from '../models/Task';
import type { TaskCategory } from '../models/TaskCategory';
import type { TaskNote } from '../models/TaskNote';
import type { TaskStatus } from '../models/TaskStatus';
import type { TaskTemplate } from '../models/TaskTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PracticeManagementService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Retrieve or search inventory categories
     * @returns any OK
     * @throws ApiError
     */
    inventoryCategoriesList({ cursor, pageSize, since, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<InventoryCategory>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Retrieve an existing inventory category
     * @returns InventoryCategory OK
     * @throws ApiError
     */
    inventoryCategoriesRead({ id, since, doctor, verbose, }: {
        id: string;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<InventoryCategory>;
    /**
     * Retrieve or search vaccine inventories
     * @returns any OK
     * @throws ApiError
     */
    inventoryVaccinesList({ cursor, pageSize, status, cvxCode, since, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        status?: string;
        cvxCode?: string;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<InventoryVaccine>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Create vaccine inventory
     * @returns InventoryVaccine Created
     * @throws ApiError
     */
    inventoryVaccinesCreate({ status, cvxCode, since, doctor, }: {
        status?: string;
        cvxCode?: string;
        since?: string;
        doctor?: number;
    }): CancelablePromise<InventoryVaccine>;
    /**
     * Retrieve an existing vaccine inventory
     * @returns InventoryVaccine OK
     * @throws ApiError
     */
    inventoryVaccinesRead({ id, status, cvxCode, since, doctor, verbose, }: {
        id: string;
        status?: string;
        cvxCode?: string;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<InventoryVaccine>;
    /**
     * Retrieve or search messages in doctor's message center
     * @returns any OK
     * @throws ApiError
     */
    messagesList({ cursor, pageSize, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        responsibleUser?: number;
        updatedSince?: string;
        receivedSince?: string;
        owner?: number;
        type?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<DoctorMessage>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Create messages in doctor's message center
     * @returns DoctorMessage Created
     * @throws ApiError
     */
    messagesCreate({ patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, }: {
        patient?: number;
        doctor?: number;
        responsibleUser?: number;
        updatedSince?: string;
        receivedSince?: string;
        owner?: number;
        type?: string;
    }): CancelablePromise<DoctorMessage>;
    /**
     * Delete an existing message in doctor's message center
     * @returns void
     * @throws ApiError
     */
    messagesDelete({ id, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, }: {
        id: string;
        patient?: number;
        doctor?: number;
        responsibleUser?: number;
        updatedSince?: string;
        receivedSince?: string;
        owner?: number;
        type?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing message in doctor's message center
     * @returns DoctorMessage OK
     * @throws ApiError
     */
    messagesRead({ id, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, verbose, }: {
        id: string;
        patient?: number;
        doctor?: number;
        responsibleUser?: number;
        updatedSince?: string;
        receivedSince?: string;
        owner?: number;
        type?: string;
        verbose?: number;
    }): CancelablePromise<DoctorMessage>;
    /**
     * Update an existing message in doctor's message center
     * @returns void
     * @throws ApiError
     */
    messagesPartialUpdate({ id, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, }: {
        id: string;
        patient?: number;
        doctor?: number;
        responsibleUser?: number;
        updatedSince?: string;
        receivedSince?: string;
        owner?: number;
        type?: string;
    }): CancelablePromise<void>;
    /**
     * Update an existing message in doctor's message center
     * @returns void
     * @throws ApiError
     */
    messagesUpdate({ id, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, }: {
        id: string;
        patient?: number;
        doctor?: number;
        responsibleUser?: number;
        updatedSince?: string;
        receivedSince?: string;
        owner?: number;
        type?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search offices
     * @returns any OK
     * @throws ApiError
     */
    officesList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Office>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Retrieve an existing office
     * @returns Office OK
     * @throws ApiError
     */
    officesRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<Office>;
    /**
     * Update an existing office
     * @returns void
     * @throws ApiError
     */
    officesPartialUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing office
     * @returns void
     * @throws ApiError
     */
    officesUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Add an exam room to the office
     * @returns Office Created
     * @throws ApiError
     */
    officesAddExamRoom({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<Office>;
    /**
     * Retrieve or search task categories
     * @returns any OK
     * @throws ApiError
     */
    taskCategoriesList({ cursor, pageSize, since, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<TaskCategory>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Create a task category
     * @returns TaskCategory Created
     * @throws ApiError
     */
    taskCategoriesCreate({ since, }: {
        since?: string;
    }): CancelablePromise<TaskCategory>;
    /**
     * Retrieve an existing task category
     * @returns TaskCategory OK
     * @throws ApiError
     */
    taskCategoriesRead({ id, since, verbose, }: {
        id: string;
        since?: string;
        verbose?: number;
    }): CancelablePromise<TaskCategory>;
    /**
     * Update an existing task category
     * @returns void
     * @throws ApiError
     */
    taskCategoriesPartialUpdate({ id, since, }: {
        id: string;
        since?: string;
    }): CancelablePromise<void>;
    /**
     * Update an existing task category
     * @returns void
     * @throws ApiError
     */
    taskCategoriesUpdate({ id, since, }: {
        id: string;
        since?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search task notes
     * @returns any OK
     * @throws ApiError
     */
    taskNotesList({ cursor, pageSize, task, since, verbose, }: {
        cursor?: string;
        pageSize?: number;
        task?: number;
        since?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<TaskNote>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Create a task note
     * @returns TaskNote Created
     * @throws ApiError
     */
    taskNotesCreate({ task, since, }: {
        task?: number;
        since?: string;
    }): CancelablePromise<TaskNote>;
    /**
     * Retrieve an existing task note
     * @returns TaskNote OK
     * @throws ApiError
     */
    taskNotesRead({ id, task, since, verbose, }: {
        id: string;
        task?: number;
        since?: string;
        verbose?: number;
    }): CancelablePromise<TaskNote>;
    /**
     * Update an existing task note
     * @returns void
     * @throws ApiError
     */
    taskNotesPartialUpdate({ id, task, since, }: {
        id: string;
        task?: number;
        since?: string;
    }): CancelablePromise<void>;
    /**
     * Update an existing task note
     * @returns void
     * @throws ApiError
     */
    taskNotesUpdate({ id, task, since, }: {
        id: string;
        task?: number;
        since?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search task statuses
     * @returns any OK
     * @throws ApiError
     */
    taskStatusesList({ cursor, pageSize, since, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<TaskStatus>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Create a task status
     * @returns TaskStatus Created
     * @throws ApiError
     */
    taskStatusesCreate({ since, }: {
        since?: string;
    }): CancelablePromise<TaskStatus>;
    /**
     * Retrieve an existing task status
     * @returns TaskStatus OK
     * @throws ApiError
     */
    taskStatusesRead({ id, since, verbose, }: {
        id: string;
        since?: string;
        verbose?: number;
    }): CancelablePromise<TaskStatus>;
    /**
     * Update an existing task status
     * @returns void
     * @throws ApiError
     */
    taskStatusesPartialUpdate({ id, since, }: {
        id: string;
        since?: string;
    }): CancelablePromise<void>;
    /**
     * Update an existing task status
     * @returns void
     * @throws ApiError
     */
    taskStatusesUpdate({ id, since, }: {
        id: string;
        since?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search task templates
     * @returns any OK
     * @throws ApiError
     */
    taskTemplatesList({ cursor, pageSize, assigneeUser, status, assigneeGroup, since, category, verbose, }: {
        cursor?: string;
        pageSize?: number;
        assigneeUser?: number;
        status?: number;
        assigneeGroup?: number;
        since?: string;
        category?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<TaskTemplate>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Create a task template
     * @returns TaskTemplate Created
     * @throws ApiError
     */
    taskTemplatesCreate({ assigneeUser, status, assigneeGroup, since, category, }: {
        assigneeUser?: number;
        status?: number;
        assigneeGroup?: number;
        since?: string;
        category?: number;
    }): CancelablePromise<TaskTemplate>;
    /**
     * Retrieve an existing task template
     * @returns TaskTemplate OK
     * @throws ApiError
     */
    taskTemplatesRead({ id, assigneeUser, status, assigneeGroup, since, category, verbose, }: {
        id: string;
        assigneeUser?: number;
        status?: number;
        assigneeGroup?: number;
        since?: string;
        category?: number;
        verbose?: number;
    }): CancelablePromise<TaskTemplate>;
    /**
     * Update an existing task template
     * @returns void
     * @throws ApiError
     */
    taskTemplatesPartialUpdate({ id, assigneeUser, status, assigneeGroup, since, category, }: {
        id: string;
        assigneeUser?: number;
        status?: number;
        assigneeGroup?: number;
        since?: string;
        category?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing task template
     * @returns void
     * @throws ApiError
     */
    taskTemplatesUpdate({ id, assigneeUser, status, assigneeGroup, since, category, }: {
        id: string;
        assigneeUser?: number;
        status?: number;
        assigneeGroup?: number;
        since?: string;
        category?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search tasks
     * @returns any OK
     * @throws ApiError
     */
    tasksList({ cursor, pageSize, status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, verbose, }: {
        cursor?: string;
        pageSize?: number;
        status?: number;
        category?: number;
        dueAtDate?: string;
        dueAtUnknown?: string;
        since?: string;
        dueAtSince?: string;
        assigneeUser?: number;
        assigneeGroup?: number;
        dueAtRange?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Task>;
        /**
         * Next Paginated page
         */
        next?: string;
        /**
         * Previous paginated page
         */
        previous?: string;
    }>;
    /**
     * Create a task
     * @returns Task Created
     * @throws ApiError
     */
    tasksCreate({ status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, }: {
        status?: number;
        category?: number;
        dueAtDate?: string;
        dueAtUnknown?: string;
        since?: string;
        dueAtSince?: string;
        assigneeUser?: number;
        assigneeGroup?: number;
        dueAtRange?: string;
    }): CancelablePromise<Task>;
    /**
     * Retrieve an existing task
     * @returns Task OK
     * @throws ApiError
     */
    tasksRead({ id, status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, verbose, }: {
        id: string;
        status?: number;
        category?: number;
        dueAtDate?: string;
        dueAtUnknown?: string;
        since?: string;
        dueAtSince?: string;
        assigneeUser?: number;
        assigneeGroup?: number;
        dueAtRange?: string;
        verbose?: number;
    }): CancelablePromise<Task>;
    /**
     * Update an existing task
     * @returns void
     * @throws ApiError
     */
    tasksPartialUpdate({ id, status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, }: {
        id: string;
        status?: number;
        category?: number;
        dueAtDate?: string;
        dueAtUnknown?: string;
        since?: string;
        dueAtSince?: string;
        assigneeUser?: number;
        assigneeGroup?: number;
        dueAtRange?: string;
    }): CancelablePromise<void>;
    /**
     * Update an existing task
     * @returns void
     * @throws ApiError
     */
    tasksUpdate({ id, status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, }: {
        id: string;
        status?: number;
        category?: number;
        dueAtDate?: string;
        dueAtUnknown?: string;
        since?: string;
        dueAtSince?: string;
        assigneeUser?: number;
        assigneeGroup?: number;
        dueAtRange?: string;
    }): CancelablePromise<void>;
}
