"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
class BillingService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Retrieve or search billing profiles
     * @returns any OK
     * @throws ApiError
     */
    billingProfilesList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/billing_profiles',
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
     * Retrieve an existing billing profiles
     * @returns BillingProfile OK
     * @throws ApiError
     */
    billingProfilesRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/billing_profiles/{id}',
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
     * Retrieve or search communicatioin (phone call) logs
     * @returns any OK
     * @throws ApiError
     */
    commLogsList({ cursor, pageSize, since, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/comm_logs',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'patient': patient,
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
     * Create communication (phone call) logs
     * @returns PhoneCallLog Created
     * @throws ApiError
     */
    commLogsCreate({ since, patient, doctor, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/comm_logs',
            query: {
                'since': since,
                'patient': patient,
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
     * Retrieve an existing communication (phone call) logs
     * @returns PhoneCallLog OK
     * @throws ApiError
     */
    commLogsRead({ id, since, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/comm_logs/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'patient': patient,
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
     * Update an existing communication (phone call) logs
     * @returns void
     * @throws ApiError
     */
    commLogsPartialUpdate({ id, since, patient, doctor, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/comm_logs/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'patient': patient,
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
     * Update an existing communication (phone call) logs
     * @returns void
     * @throws ApiError
     */
    commLogsUpdate({ id, since, patient, doctor, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/comm_logs/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'patient': patient,
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
     * Retrieve or search custom insurance plan names
     * @returns any OK
     * @throws ApiError
     */
    customInsurancePlanNamesList({ cursor, pageSize, since, user, name, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_insurance_plan_names',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'user': user,
                'name': name,
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
     * Retrieve an existing custom insurance plan name
     * @returns CustomInsurancePlanName OK
     * @throws ApiError
     */
    customInsurancePlanNamesRead({ id, since, user, name, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_insurance_plan_names/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'user': user,
                'name': name,
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
     * Retrieve daysheet charges report for a given date range
     * @throws ApiError
     */
    daysheetChargesList({ startDate, endDate, chargesDateType, reportType, claimType, patientId, officeId, examroomId, pgMode, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/day_sheet_charges',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'charges_date_type': chargesDateType,
                'report_type': reportType,
                'claim_type': claimType,
                'patient_id': patientId,
                'office_id': officeId,
                'examroom_id': examroomId,
                'pg_mode': pgMode,
                'verbose': verbose,
            },
        });
    }
    /**
     * Retrieve daysheet credits/adjustments report for a given date range
     * @throws ApiError
     */
    daysheetCreditsList({ startDate, endDate, creditsDateType, reportType, claimType, patientId, officeId, examroomId, pgMode, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/day_sheet_credits',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'credits_date_type': creditsDateType,
                'report_type': reportType,
                'claim_type': claimType,
                'patient_id': patientId,
                'office_id': officeId,
                'examroom_id': examroomId,
                'pg_mode': pgMode,
                'verbose': verbose,
            },
        });
    }
    /**
     * Retrieve daysheet cash report for a given date range
     * @throws ApiError
     */
    daySheetPatientPaymentsList({ startDate, endDate, chargesDateType, reportType, claimType, patientId, office, examroomId, legacy, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/day_sheet_patient_payments',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'charges_date_type': chargesDateType,
                'report_type': reportType,
                'claim_type': claimType,
                'patient_id': patientId,
                'office': office,
                'examroom_id': examroomId,
                'legacy': legacy,
                'verbose': verbose,
            },
        });
    }
    /**
     * Retrieve daysheet totals report for a given date range
     * @throws ApiError
     */
    daysheetTotalsList({ startDate, endDate, chargesDateType, reportType, creditsDateType, groupBy, subGroupBy, tertiaryGroupBy, cashViewType, patientId, officeId, examroomId, pgMode, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/day_sheet_totals',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'charges_date_type': chargesDateType,
                'report_type': reportType,
                'credits_date_type': creditsDateType,
                'group_by': groupBy,
                'sub_group_by': subGroupBy,
                'tertiary_group_by': tertiaryGroupBy,
                'cash_view_type': cashViewType,
                'patient_id': patientId,
                'office_id': officeId,
                'examroom_id': examroomId,
                'pg_mode': pgMode,
                'verbose': verbose,
            },
        });
    }
    /**
     * Retrieve or search past eligibility checks for patient
     * @returns any OK
     * @throws ApiError
     */
    eligibilityChecksList({ cursor, pageSize, appointment, appointmentDate, doctor, queryDateRange, appointmentDateRange, queryDate, patient, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/eligibility_checks',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'appointment': appointment,
                'appointment_date': appointmentDate,
                'doctor': doctor,
                'query_date_range': queryDateRange,
                'appointment_date_range': appointmentDateRange,
                'query_date': queryDate,
                'patient': patient,
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
     * Retrieve an existing past eligibility check
     * @returns Coverage OK
     * @throws ApiError
     */
    eligibilityChecksRead({ id, appointment, appointmentDate, doctor, queryDateRange, appointmentDateRange, queryDate, patient, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/eligibility_checks/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
                'appointment_date': appointmentDate,
                'doctor': doctor,
                'query_date_range': queryDateRange,
                'appointment_date_range': appointmentDateRange,
                'query_date': queryDate,
                'patient': patient,
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
     * Retrieve or search billing line items
     * @returns any OK
     * @throws ApiError
     */
    lineItemsList({ cursor, pageSize, postedDate, patient, office, doctor, since, appointment, serviceDate, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/line_items',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'posted_date': postedDate,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'appointment': appointment,
                'service_date': serviceDate,
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
     * Create billing line item for appointments
     * @returns BillingLineItem Created
     * @throws ApiError
     */
    lineItemsCreate({ postedDate, patient, office, doctor, since, appointment, serviceDate, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/line_items',
            query: {
                'posted_date': postedDate,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'appointment': appointment,
                'service_date': serviceDate,
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
     * @returns void
     * @throws ApiError
     */
    lineItemsDelete({ id, postedDate, patient, office, doctor, since, appointment, serviceDate, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/line_items/{id}',
            path: {
                'id': id,
            },
            query: {
                'posted_date': postedDate,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'appointment': appointment,
                'service_date': serviceDate,
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
     * Retrieve an existing billing line item
     * @returns BillingLineItem OK
     * @throws ApiError
     */
    lineItemsRead({ id, postedDate, patient, office, doctor, since, appointment, serviceDate, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/line_items/{id}',
            path: {
                'id': id,
            },
            query: {
                'posted_date': postedDate,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'appointment': appointment,
                'service_date': serviceDate,
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
     * @returns void
     * @throws ApiError
     */
    lineItemsPartialUpdate({ id, postedDate, patient, office, doctor, since, appointment, serviceDate, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/line_items/{id}',
            path: {
                'id': id,
            },
            query: {
                'posted_date': postedDate,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'appointment': appointment,
                'service_date': serviceDate,
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
     * @returns void
     * @throws ApiError
     */
    lineItemsUpdate({ id, postedDate, patient, office, doctor, since, appointment, serviceDate, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/line_items/{id}',
            path: {
                'id': id,
            },
            query: {
                'posted_date': postedDate,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'appointment': appointment,
                'service_date': serviceDate,
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
     * Retrieve or search patient authorizations
     * @returns any OK
     * @throws ApiError
     */
    patientAuthorizationsList({ cursor, pageSize, patient, doctor, startDate, dateRange, endDate, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_authorizations',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'patient': patient,
                'doctor': doctor,
                'start_date': startDate,
                'date_range': dateRange,
                'end_date': endDate,
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
     * Retrieve or search patient payment logs
     * @returns any OK
     * @throws ApiError
     */
    patientPaymentLogList({ cursor, pageSize, since, office, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_payment_log',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'office': office,
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
     * Retrieve an existing patient payment log
     * @returns CashPaymentLog OK
     * @throws ApiError
     */
    patientPaymentLogRead({ id, since, office, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_payment_log/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'office': office,
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
     * Retrieve or search patient payments
     * @returns any OK
     * @throws ApiError
     */
    patientPaymentsList({ cursor, pageSize, since, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_payments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'patient': patient,
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
     * Create patient payment
     * @returns CashPayment Created
     * @throws ApiError
     */
    patientPaymentsCreate({ since, patient, doctor, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_payments',
            query: {
                'since': since,
                'patient': patient,
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
     * Retrieve an existing patient payment
     * @returns CashPayment OK
     * @throws ApiError
     */
    patientPaymentsRead({ id, since, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_payments/{id}',
            path: {
                'id': id,
            },
            query: {
                'since': since,
                'patient': patient,
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
     * @returns any OK
     * @throws ApiError
     */
    proceduresList({ cursor, pageSize, muDate, patient, doctor, muDateRange, appointment, serviceDate, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/procedures',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'mu_date': muDate,
                'patient': patient,
                'doctor': doctor,
                'mu_date_range': muDateRange,
                'appointment': appointment,
                'service_date': serviceDate,
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
     * @returns BillingLineItem OK
     * @throws ApiError
     */
    proceduresRead({ id, muDate, patient, doctor, muDateRange, appointment, serviceDate, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/procedures/{id}',
            path: {
                'id': id,
            },
            query: {
                'mu_date': muDate,
                'patient': patient,
                'doctor': doctor,
                'mu_date_range': muDateRange,
                'appointment': appointment,
                'service_date': serviceDate,
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
     * Retrieve or search insurance transactions associated with billing line items
     * @returns any OK
     * @throws ApiError
     */
    transactionsList({ cursor, pageSize, lineItem, postedDate, appointment, since, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/transactions',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'line_item': lineItem,
                'posted_date': postedDate,
                'appointment': appointment,
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
     * Retrieve an existing insurance transaction
     * @returns LineItemTransaction OK
     * @throws ApiError
     */
    transactionsRead({ id, lineItem, postedDate, appointment, since, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/transactions/{id}',
            path: {
                'id': id,
            },
            query: {
                'line_item': lineItem,
                'posted_date': postedDate,
                'appointment': appointment,
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
}
exports.BillingService = BillingService;
