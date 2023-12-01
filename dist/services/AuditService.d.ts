import type { AuditLog } from '../models/AuditLog';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AuditService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Retrieve or search audit logs.
     * <b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
     *
     * @returns any OK
     * @throws ApiError
     */
    auditLogList({ cursor, pageSize, since, dateRange, date, patient, doctor, user, appointment, type, action, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        dateRange?: string;
        date?: string;
        patient?: number;
        doctor?: number;
        user?: number;
        appointment?: number;
        type?: string;
        action?: string;
        verbose?: number;
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
    }>;
}
