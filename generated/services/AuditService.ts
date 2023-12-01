/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLog } from '../models/AuditLog';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuditService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve or search audit logs.
     * <b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
     *
     * @returns any OK
     * @throws ApiError
     */
    public auditLogList({
        cursor,
        pageSize,
        since,
        dateRange,
        date,
        patient,
        doctor,
        user,
        appointment,
        type,
        action,
    }: {
        cursor?: string,
        pageSize?: number,
        since?: string,
        dateRange?: string,
        date?: string,
        patient?: number,
        doctor?: number,
        user?: number,
        appointment?: number,
        type?: string,
        action?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<AuditLog>;
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
            url: '/api/audit_log',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'date_range': dateRange,
                'date': date,
                'patient': patient,
                'doctor': doctor,
                'user': user,
                'appointment': appointment,
                'type': type,
                'action': action,
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
