"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditService = void 0;
class AuditService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Retrieve or search audit logs.
     * <b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
     *
     * @returns any OK
     * @throws ApiError
     */
    auditLogList({ cursor, pageSize, since, dateRange, date, patient, doctor, user, appointment, type, action, verbose, }) {
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
}
exports.AuditService = AuditService;
