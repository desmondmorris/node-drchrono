"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeManagementService = void 0;
class PracticeManagementService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Retrieve or search inventory categories
     * @returns any OK
     * @throws ApiError
     */
    inventoryCategoriesList({ cursor, pageSize, since, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/inventory_categories',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'doctor': doctor,
                'verbose': verbose,
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
    inventoryCategoriesRead({ id, since, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/inventory_categories/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'doctor': doctor,
                'verbose': verbose,
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
    inventoryVaccinesList({ cursor, pageSize, status, cvxCode, since, doctor, verbose, }) {
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
                'verbose': verbose,
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
    inventoryVaccinesCreate({ status, cvxCode, since, doctor, }) {
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
    inventoryVaccinesRead({ id, status, cvxCode, since, doctor, verbose, }) {
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
                'verbose': verbose,
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
    messagesList({ cursor, pageSize, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, verbose, }) {
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
                'verbose': verbose,
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
    messagesCreate({ patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, }) {
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
    messagesDelete({ id, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, }) {
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
    messagesRead({ id, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, verbose, }) {
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
                'verbose': verbose,
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
    messagesPartialUpdate({ id, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, }) {
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
    messagesUpdate({ id, patient, doctor, responsibleUser, updatedSince, receivedSince, owner, type, }) {
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
    officesList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/offices',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'doctor': doctor,
                'verbose': verbose,
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
    officesRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/offices/{id}',
            path: {
                'id': id,
            },
            query: {
                'doctor': doctor,
                'verbose': verbose,
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
    officesPartialUpdate({ id, doctor, }) {
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
    officesUpdate({ id, doctor, }) {
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
    officesAddExamRoom({ id, doctor, }) {
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
    taskCategoriesList({ cursor, pageSize, since, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_categories',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'verbose': verbose,
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
    taskCategoriesCreate({ since, }) {
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
    taskCategoriesRead({ id, since, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_categories/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'verbose': verbose,
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
    taskCategoriesPartialUpdate({ id, since, }) {
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
    taskCategoriesUpdate({ id, since, }) {
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
    taskNotesList({ cursor, pageSize, task, since, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_notes',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'task': task,
                'since': since,
                'verbose': verbose,
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
    taskNotesCreate({ task, since, }) {
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
    taskNotesRead({ id, task, since, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_notes/{id}',
            path: {
                'id': id,
            },
            query: {
                'task': task,
                'since': since,
                'verbose': verbose,
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
    taskNotesPartialUpdate({ id, task, since, }) {
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
    taskNotesUpdate({ id, task, since, }) {
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
    taskStatusesList({ cursor, pageSize, since, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_statuses',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'verbose': verbose,
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
    taskStatusesCreate({ since, }) {
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
    taskStatusesRead({ id, since, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/task_statuses/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'verbose': verbose,
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
    taskStatusesPartialUpdate({ id, since, }) {
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
    taskStatusesUpdate({ id, since, }) {
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
    taskTemplatesList({ cursor, pageSize, assigneeUser, status, assigneeGroup, since, category, verbose, }) {
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
                'verbose': verbose,
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
    taskTemplatesCreate({ assigneeUser, status, assigneeGroup, since, category, }) {
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
    taskTemplatesRead({ id, assigneeUser, status, assigneeGroup, since, category, verbose, }) {
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
                'verbose': verbose,
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
    taskTemplatesPartialUpdate({ id, assigneeUser, status, assigneeGroup, since, category, }) {
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
    taskTemplatesUpdate({ id, assigneeUser, status, assigneeGroup, since, category, }) {
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
    tasksList({ cursor, pageSize, status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, verbose, }) {
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
                'verbose': verbose,
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
    tasksCreate({ status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, }) {
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
    tasksRead({ id, status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, verbose, }) {
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
                'verbose': verbose,
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
    tasksPartialUpdate({ id, status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, }) {
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
    tasksUpdate({ id, status, category, dueAtDate, dueAtUnknown, since, dueAtSince, assigneeUser, assigneeGroup, dueAtRange, }) {
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
exports.PracticeManagementService = PracticeManagementService;
