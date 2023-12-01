/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

export class PracticeManagementService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve or search inventory categories
     * @returns any OK
     * @throws ApiError
     */
    public inventoryCategoriesList({
        cursor,
        pageSize,
        since,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        since?: string,
        doctor?: number,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/inventory_categories',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing inventory category
     * @returns InventoryCategory OK
     * @throws ApiError
     */
    public inventoryCategoriesRead({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<InventoryCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/inventory_categories/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search vaccine inventories
     * @returns any OK
     * @throws ApiError
     */
    public inventoryVaccinesList({
        cursor,
        pageSize,
        status,
        cvxCode,
        since,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        status?: string,
        cvxCode?: string,
        since?: string,
        doctor?: number,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/inventory_vaccines',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'status': status,
                'cvx_code': cvxCode,
                'since': since,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create vaccine inventory
     * @returns InventoryVaccine Created
     * @throws ApiError
     */
    public inventoryVaccinesCreate({
        status,
        cvxCode,
        since,
        doctor,
    }: {
        status?: string,
        cvxCode?: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<InventoryVaccine> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/inventory_vaccines',
            query: {
                'status': status,
                'cvx_code': cvxCode,
                'since': since,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing vaccine inventory
     * @returns InventoryVaccine OK
     * @throws ApiError
     */
    public inventoryVaccinesRead({
        id,
        status,
        cvxCode,
        since,
        doctor,
    }: {
        id: string,
        status?: string,
        cvxCode?: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<InventoryVaccine> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/inventory_vaccines/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'cvx_code': cvxCode,
                'since': since,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search messages in doctor's message center
     * @returns any OK
     * @throws ApiError
     */
    public messagesList({
        cursor,
        pageSize,
        patient,
        doctor,
        responsibleUser,
        updatedSince,
        receivedSince,
        owner,
        type,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
        responsibleUser?: number,
        updatedSince?: string,
        receivedSince?: string,
        owner?: number,
        type?: string,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/messages',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'patient': patient,
                'doctor': doctor,
                'responsible_user': responsibleUser,
                'updated_since': updatedSince,
                'received_since': receivedSince,
                'owner': owner,
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create messages in doctor's message center
     * @returns DoctorMessage Created
     * @throws ApiError
     */
    public messagesCreate({
        patient,
        doctor,
        responsibleUser,
        updatedSince,
        receivedSince,
        owner,
        type,
    }: {
        patient?: number,
        doctor?: number,
        responsibleUser?: number,
        updatedSince?: string,
        receivedSince?: string,
        owner?: number,
        type?: string,
    }): CancelablePromise<DoctorMessage> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/messages',
            query: {
                'patient': patient,
                'doctor': doctor,
                'responsible_user': responsibleUser,
                'updated_since': updatedSince,
                'received_since': receivedSince,
                'owner': owner,
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Delete an existing message in doctor's message center
     * @returns void
     * @throws ApiError
     */
    public messagesDelete({
        id,
        patient,
        doctor,
        responsibleUser,
        updatedSince,
        receivedSince,
        owner,
        type,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
        responsibleUser?: number,
        updatedSince?: string,
        receivedSince?: string,
        owner?: number,
        type?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/messages/{id}',
            path: {
                'id': id,
            },
            query: {
                'patient': patient,
                'doctor': doctor,
                'responsible_user': responsibleUser,
                'updated_since': updatedSince,
                'received_since': receivedSince,
                'owner': owner,
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing message in doctor's message center
     * @returns DoctorMessage OK
     * @throws ApiError
     */
    public messagesRead({
        id,
        patient,
        doctor,
        responsibleUser,
        updatedSince,
        receivedSince,
        owner,
        type,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
        responsibleUser?: number,
        updatedSince?: string,
        receivedSince?: string,
        owner?: number,
        type?: string,
    }): CancelablePromise<DoctorMessage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/messages/{id}',
            path: {
                'id': id,
            },
            query: {
                'patient': patient,
                'doctor': doctor,
                'responsible_user': responsibleUser,
                'updated_since': updatedSince,
                'received_since': receivedSince,
                'owner': owner,
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing message in doctor's message center
     * @returns void
     * @throws ApiError
     */
    public messagesPartialUpdate({
        id,
        patient,
        doctor,
        responsibleUser,
        updatedSince,
        receivedSince,
        owner,
        type,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
        responsibleUser?: number,
        updatedSince?: string,
        receivedSince?: string,
        owner?: number,
        type?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/messages/{id}',
            path: {
                'id': id,
            },
            query: {
                'patient': patient,
                'doctor': doctor,
                'responsible_user': responsibleUser,
                'updated_since': updatedSince,
                'received_since': receivedSince,
                'owner': owner,
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing message in doctor's message center
     * @returns void
     * @throws ApiError
     */
    public messagesUpdate({
        id,
        patient,
        doctor,
        responsibleUser,
        updatedSince,
        receivedSince,
        owner,
        type,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
        responsibleUser?: number,
        updatedSince?: string,
        receivedSince?: string,
        owner?: number,
        type?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/messages/{id}',
            path: {
                'id': id,
            },
            query: {
                'patient': patient,
                'doctor': doctor,
                'responsible_user': responsibleUser,
                'updated_since': updatedSince,
                'received_since': receivedSince,
                'owner': owner,
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search offices
     * @returns any OK
     * @throws ApiError
     */
    public officesList({
        cursor,
        pageSize,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        doctor?: number,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/offices',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing office
     * @returns Office OK
     * @throws ApiError
     */
    public officesRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<Office> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/offices/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing office
     * @returns void
     * @throws ApiError
     */
    public officesPartialUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/offices/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing office
     * @returns void
     * @throws ApiError
     */
    public officesUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/offices/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Add an exam room to the office
     * @returns Office Created
     * @throws ApiError
     */
    public officesAddExamRoom({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<Office> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/offices/{id}/add_exam_room',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search task categories
     * @returns any OK
     * @throws ApiError
     */
    public taskCategoriesList({
        cursor,
        pageSize,
        since,
    }: {
        cursor?: string,
        pageSize?: number,
        since?: string,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_categories',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create a task category
     * @returns TaskCategory Created
     * @throws ApiError
     */
    public taskCategoriesCreate({
        since,
    }: {
        since?: string,
    }): CancelablePromise<TaskCategory> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/task_categories',
            query: {
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing task category
     * @returns TaskCategory OK
     * @throws ApiError
     */
    public taskCategoriesRead({
        id,
        since,
    }: {
        id: string,
        since?: string,
    }): CancelablePromise<TaskCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_categories/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task category
     * @returns void
     * @throws ApiError
     */
    public taskCategoriesPartialUpdate({
        id,
        since,
    }: {
        id: string,
        since?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/task_categories/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task category
     * @returns void
     * @throws ApiError
     */
    public taskCategoriesUpdate({
        id,
        since,
    }: {
        id: string,
        since?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/task_categories/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search task notes
     * @returns any OK
     * @throws ApiError
     */
    public taskNotesList({
        cursor,
        pageSize,
        task,
        since,
    }: {
        cursor?: string,
        pageSize?: number,
        task?: number,
        since?: string,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_notes',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'task': task,
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create a task note
     * @returns TaskNote Created
     * @throws ApiError
     */
    public taskNotesCreate({
        task,
        since,
    }: {
        task?: number,
        since?: string,
    }): CancelablePromise<TaskNote> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/task_notes',
            query: {
                'task': task,
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing task note
     * @returns TaskNote OK
     * @throws ApiError
     */
    public taskNotesRead({
        id,
        task,
        since,
    }: {
        id: string,
        task?: number,
        since?: string,
    }): CancelablePromise<TaskNote> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_notes/{id}',
            path: {
                'id': id,
            },
            query: {
                'task': task,
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task note
     * @returns void
     * @throws ApiError
     */
    public taskNotesPartialUpdate({
        id,
        task,
        since,
    }: {
        id: string,
        task?: number,
        since?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/task_notes/{id}',
            path: {
                'id': id,
            },
            query: {
                'task': task,
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task note
     * @returns void
     * @throws ApiError
     */
    public taskNotesUpdate({
        id,
        task,
        since,
    }: {
        id: string,
        task?: number,
        since?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/task_notes/{id}',
            path: {
                'id': id,
            },
            query: {
                'task': task,
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search task statuses
     * @returns any OK
     * @throws ApiError
     */
    public taskStatusesList({
        cursor,
        pageSize,
        since,
    }: {
        cursor?: string,
        pageSize?: number,
        since?: string,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_statuses',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create a task status
     * @returns TaskStatus Created
     * @throws ApiError
     */
    public taskStatusesCreate({
        since,
    }: {
        since?: string,
    }): CancelablePromise<TaskStatus> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/task_statuses',
            query: {
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing task status
     * @returns TaskStatus OK
     * @throws ApiError
     */
    public taskStatusesRead({
        id,
        since,
    }: {
        id: string,
        since?: string,
    }): CancelablePromise<TaskStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_statuses/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task status
     * @returns void
     * @throws ApiError
     */
    public taskStatusesPartialUpdate({
        id,
        since,
    }: {
        id: string,
        since?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/task_statuses/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task status
     * @returns void
     * @throws ApiError
     */
    public taskStatusesUpdate({
        id,
        since,
    }: {
        id: string,
        since?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/task_statuses/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search task templates
     * @returns any OK
     * @throws ApiError
     */
    public taskTemplatesList({
        cursor,
        pageSize,
        assigneeUser,
        status,
        assigneeGroup,
        since,
        category,
    }: {
        cursor?: string,
        pageSize?: number,
        assigneeUser?: number,
        status?: number,
        assigneeGroup?: number,
        since?: string,
        category?: number,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_templates',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'assignee_user': assigneeUser,
                'status': status,
                'assignee_group': assigneeGroup,
                'since': since,
                'category': category,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create a task template
     * @returns TaskTemplate Created
     * @throws ApiError
     */
    public taskTemplatesCreate({
        assigneeUser,
        status,
        assigneeGroup,
        since,
        category,
    }: {
        assigneeUser?: number,
        status?: number,
        assigneeGroup?: number,
        since?: string,
        category?: number,
    }): CancelablePromise<TaskTemplate> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/task_templates',
            query: {
                'assignee_user': assigneeUser,
                'status': status,
                'assignee_group': assigneeGroup,
                'since': since,
                'category': category,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing task template
     * @returns TaskTemplate OK
     * @throws ApiError
     */
    public taskTemplatesRead({
        id,
        assigneeUser,
        status,
        assigneeGroup,
        since,
        category,
    }: {
        id: string,
        assigneeUser?: number,
        status?: number,
        assigneeGroup?: number,
        since?: string,
        category?: number,
    }): CancelablePromise<TaskTemplate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_templates/{id}',
            path: {
                'id': id,
            },
            query: {
                'assignee_user': assigneeUser,
                'status': status,
                'assignee_group': assigneeGroup,
                'since': since,
                'category': category,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task template
     * @returns void
     * @throws ApiError
     */
    public taskTemplatesPartialUpdate({
        id,
        assigneeUser,
        status,
        assigneeGroup,
        since,
        category,
    }: {
        id: string,
        assigneeUser?: number,
        status?: number,
        assigneeGroup?: number,
        since?: string,
        category?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/task_templates/{id}',
            path: {
                'id': id,
            },
            query: {
                'assignee_user': assigneeUser,
                'status': status,
                'assignee_group': assigneeGroup,
                'since': since,
                'category': category,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task template
     * @returns void
     * @throws ApiError
     */
    public taskTemplatesUpdate({
        id,
        assigneeUser,
        status,
        assigneeGroup,
        since,
        category,
    }: {
        id: string,
        assigneeUser?: number,
        status?: number,
        assigneeGroup?: number,
        since?: string,
        category?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/task_templates/{id}',
            path: {
                'id': id,
            },
            query: {
                'assignee_user': assigneeUser,
                'status': status,
                'assignee_group': assigneeGroup,
                'since': since,
                'category': category,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search tasks
     * @returns any OK
     * @throws ApiError
     */
    public tasksList({
        cursor,
        pageSize,
        status,
        category,
        dueAtDate,
        dueAtUnknown,
        since,
        dueAtSince,
        assigneeUser,
        assigneeGroup,
        dueAtRange,
    }: {
        cursor?: string,
        pageSize?: number,
        status?: number,
        category?: number,
        dueAtDate?: string,
        dueAtUnknown?: string,
        since?: string,
        dueAtSince?: string,
        assigneeUser?: number,
        assigneeGroup?: number,
        dueAtRange?: string,
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
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/tasks',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'status': status,
                'category': category,
                'due_at_date': dueAtDate,
                'due_at_unknown': dueAtUnknown,
                'since': since,
                'due_at_since': dueAtSince,
                'assignee_user': assigneeUser,
                'assignee_group': assigneeGroup,
                'due_at_range': dueAtRange,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create a task
     * @returns Task Created
     * @throws ApiError
     */
    public tasksCreate({
        status,
        category,
        dueAtDate,
        dueAtUnknown,
        since,
        dueAtSince,
        assigneeUser,
        assigneeGroup,
        dueAtRange,
    }: {
        status?: number,
        category?: number,
        dueAtDate?: string,
        dueAtUnknown?: string,
        since?: string,
        dueAtSince?: string,
        assigneeUser?: number,
        assigneeGroup?: number,
        dueAtRange?: string,
    }): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/tasks',
            query: {
                'status': status,
                'category': category,
                'due_at_date': dueAtDate,
                'due_at_unknown': dueAtUnknown,
                'since': since,
                'due_at_since': dueAtSince,
                'assignee_user': assigneeUser,
                'assignee_group': assigneeGroup,
                'due_at_range': dueAtRange,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve an existing task
     * @returns Task OK
     * @throws ApiError
     */
    public tasksRead({
        id,
        status,
        category,
        dueAtDate,
        dueAtUnknown,
        since,
        dueAtSince,
        assigneeUser,
        assigneeGroup,
        dueAtRange,
    }: {
        id: string,
        status?: number,
        category?: number,
        dueAtDate?: string,
        dueAtUnknown?: string,
        since?: string,
        dueAtSince?: string,
        assigneeUser?: number,
        assigneeGroup?: number,
        dueAtRange?: string,
    }): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/tasks/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'category': category,
                'due_at_date': dueAtDate,
                'due_at_unknown': dueAtUnknown,
                'since': since,
                'due_at_since': dueAtSince,
                'assignee_user': assigneeUser,
                'assignee_group': assigneeGroup,
                'due_at_range': dueAtRange,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task
     * @returns void
     * @throws ApiError
     */
    public tasksPartialUpdate({
        id,
        status,
        category,
        dueAtDate,
        dueAtUnknown,
        since,
        dueAtSince,
        assigneeUser,
        assigneeGroup,
        dueAtRange,
    }: {
        id: string,
        status?: number,
        category?: number,
        dueAtDate?: string,
        dueAtUnknown?: string,
        since?: string,
        dueAtSince?: string,
        assigneeUser?: number,
        assigneeGroup?: number,
        dueAtRange?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/tasks/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'category': category,
                'due_at_date': dueAtDate,
                'due_at_unknown': dueAtUnknown,
                'since': since,
                'due_at_since': dueAtSince,
                'assignee_user': assigneeUser,
                'assignee_group': assigneeGroup,
                'due_at_range': dueAtRange,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing task
     * @returns void
     * @throws ApiError
     */
    public tasksUpdate({
        id,
        status,
        category,
        dueAtDate,
        dueAtUnknown,
        since,
        dueAtSince,
        assigneeUser,
        assigneeGroup,
        dueAtRange,
    }: {
        id: string,
        status?: number,
        category?: number,
        dueAtDate?: string,
        dueAtUnknown?: string,
        since?: string,
        dueAtSince?: string,
        assigneeUser?: number,
        assigneeGroup?: number,
        dueAtRange?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/tasks/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'category': category,
                'due_at_date': dueAtDate,
                'due_at_unknown': dueAtUnknown,
                'since': since,
                'due_at_since': dueAtSince,
                'assignee_user': assigneeUser,
                'assignee_group': assigneeGroup,
                'due_at_range': dueAtRange,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                500: `Internal Server Error`,
            },
        });
    }

}
