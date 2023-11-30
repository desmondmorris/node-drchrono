/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingLineItem } from '../models/BillingLineItem';
import type { BillingProfile } from '../models/BillingProfile';
import type { CashPayment } from '../models/CashPayment';
import type { CashPaymentLog } from '../models/CashPaymentLog';
import type { Coverage } from '../models/Coverage';
import type { CustomInsurancePlanName } from '../models/CustomInsurancePlanName';
import type { LineItemTransaction } from '../models/LineItemTransaction';
import type { PatientAuthorization } from '../models/PatientAuthorization';
import type { PhoneCallLog } from '../models/PhoneCallLog';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BillingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve or search billing profiles
     * @returns any OK
     * @throws ApiError
     */
    public billingProfilesList({
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
        data?: Array<BillingProfile>;
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
            url: '/api/billing_profiles',
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
     * Retrieve an existing billing profiles
     * @returns BillingProfile OK
     * @throws ApiError
     */
    public billingProfilesRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<BillingProfile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/billing_profiles/{id}',
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
     * Retrieve or search communicatioin (phone call) logs
     * @returns any OK
     * @throws ApiError
     */
    public commLogsList({
        cursor,
        pageSize,
        since,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PhoneCallLog>;
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
            url: '/api/comm_logs',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create communication (phone call) logs
     * @returns PhoneCallLog Created
     * @throws ApiError
     */
    public commLogsCreate({
        since,
        patient,
        doctor,
    }: {
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PhoneCallLog> {
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
    public commLogsRead({
        id,
        since,
        patient,
        doctor,
    }: {
        id: string,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PhoneCallLog> {
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
    public commLogsPartialUpdate({
        id,
        since,
        patient,
        doctor,
    }: {
        id: string,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
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
    public commLogsUpdate({
        id,
        since,
        patient,
        doctor,
    }: {
        id: string,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
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
    public customInsurancePlanNamesList({
        cursor,
        pageSize,
        since,
        user,
        name,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        since?: string,
        user?: number,
        name?: string,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<CustomInsurancePlanName>;
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
            url: '/api/custom_insurance_plan_names',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'user': user,
                'name': name,
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
     * Retrieve an existing custom insurance plan name
     * @returns CustomInsurancePlanName OK
     * @throws ApiError
     */
    public customInsurancePlanNamesRead({
        id,
        since,
        user,
        name,
        doctor,
    }: {
        id: string,
        since?: string,
        user?: number,
        name?: string,
        doctor?: number,
    }): CancelablePromise<CustomInsurancePlanName> {
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
    public daysheetChargesList({
        startDate,
        endDate,
        chargesDateType,
        reportType,
        claimType,
        patientId,
        officeId,
        examroomId,
        pgMode,
    }: {
        startDate: string,
        endDate: string,
        chargesDateType?: string,
        reportType?: string,
        claimType?: string,
        patientId?: number,
        officeId?: string,
        examroomId?: number,
        pgMode?: boolean,
    }): CancelablePromise<void> {
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
            },
        });
    }

    /**
     * Retrieve daysheet credits/adjustments report for a given date range
     * @throws ApiError
     */
    public daysheetCreditsList({
        startDate,
        endDate,
        creditsDateType,
        reportType,
        claimType,
        patientId,
        officeId,
        examroomId,
        pgMode,
    }: {
        startDate: string,
        endDate: string,
        creditsDateType?: string,
        reportType?: string,
        claimType?: string,
        patientId?: number,
        officeId?: string,
        examroomId?: number,
        pgMode?: boolean,
    }): CancelablePromise<void> {
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
            },
        });
    }

    /**
     * Retrieve daysheet cash report for a given date range
     * @throws ApiError
     */
    public daySheetPatientPaymentsList({
        startDate,
        endDate,
        chargesDateType,
        reportType,
        claimType,
        patientId,
        office,
        examroomId,
        legacy,
    }: {
        startDate: string,
        endDate: string,
        chargesDateType?: string,
        reportType?: string,
        claimType?: string,
        patientId?: number,
        office?: string,
        examroomId?: number,
        legacy?: boolean,
    }): CancelablePromise<void> {
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
            },
        });
    }

    /**
     * Retrieve daysheet totals report for a given date range
     * @throws ApiError
     */
    public daysheetTotalsList({
        startDate,
        endDate,
        chargesDateType,
        reportType,
        creditsDateType,
        groupBy,
        subGroupBy,
        tertiaryGroupBy,
        cashViewType,
        patientId,
        officeId,
        examroomId,
        pgMode,
    }: {
        startDate: string,
        endDate: string,
        chargesDateType?: string,
        reportType?: string,
        creditsDateType?: string,
        groupBy?: string,
        subGroupBy?: string,
        tertiaryGroupBy?: string,
        cashViewType?: string,
        patientId?: number,
        officeId?: string,
        examroomId?: number,
        pgMode?: boolean,
    }): CancelablePromise<void> {
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
            },
        });
    }

    /**
     * Retrieve or search past eligibility checks for patient
     * @returns any OK
     * @throws ApiError
     */
    public eligibilityChecksList({
        cursor,
        pageSize,
        appointment,
        appointmentDate,
        doctor,
        queryDateRange,
        appointmentDateRange,
        queryDate,
        patient,
    }: {
        cursor?: string,
        pageSize?: number,
        appointment?: number,
        appointmentDate?: string,
        doctor?: number,
        queryDateRange?: string,
        appointmentDateRange?: string,
        queryDate?: string,
        patient?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<Coverage>;
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
    public eligibilityChecksRead({
        id,
        appointment,
        appointmentDate,
        doctor,
        queryDateRange,
        appointmentDateRange,
        queryDate,
        patient,
    }: {
        id: string,
        appointment?: number,
        appointmentDate?: string,
        doctor?: number,
        queryDateRange?: string,
        appointmentDateRange?: string,
        queryDate?: string,
        patient?: number,
    }): CancelablePromise<Coverage> {
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
    public lineItemsList({
        cursor,
        pageSize,
        postedDate,
        patient,
        office,
        doctor,
        since,
        appointment,
        serviceDate,
    }: {
        cursor?: string,
        pageSize?: number,
        postedDate?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        appointment?: number,
        serviceDate?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<BillingLineItem>;
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
    public lineItemsCreate({
        postedDate,
        patient,
        office,
        doctor,
        since,
        appointment,
        serviceDate,
    }: {
        postedDate?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        appointment?: number,
        serviceDate?: string,
    }): CancelablePromise<BillingLineItem> {
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
    public lineItemsDelete({
        id,
        postedDate,
        patient,
        office,
        doctor,
        since,
        appointment,
        serviceDate,
    }: {
        id: string,
        postedDate?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        appointment?: number,
        serviceDate?: string,
    }): CancelablePromise<void> {
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
    public lineItemsRead({
        id,
        postedDate,
        patient,
        office,
        doctor,
        since,
        appointment,
        serviceDate,
    }: {
        id: string,
        postedDate?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        appointment?: number,
        serviceDate?: string,
    }): CancelablePromise<BillingLineItem> {
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
    public lineItemsPartialUpdate({
        id,
        postedDate,
        patient,
        office,
        doctor,
        since,
        appointment,
        serviceDate,
    }: {
        id: string,
        postedDate?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        appointment?: number,
        serviceDate?: string,
    }): CancelablePromise<void> {
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
    public lineItemsUpdate({
        id,
        postedDate,
        patient,
        office,
        doctor,
        since,
        appointment,
        serviceDate,
    }: {
        id: string,
        postedDate?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        appointment?: number,
        serviceDate?: string,
    }): CancelablePromise<void> {
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
    public patientAuthorizationsList({
        cursor,
        pageSize,
        patient,
        doctor,
        startDate,
        dateRange,
        endDate,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
        startDate?: string,
        dateRange?: string,
        endDate?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientAuthorization>;
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
            url: '/api/patient_authorizations',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'patient': patient,
                'doctor': doctor,
                'start_date': startDate,
                'date_range': dateRange,
                'end_date': endDate,
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
    public patientPaymentLogList({
        cursor,
        pageSize,
        since,
        office,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        since?: string,
        office?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<CashPaymentLog>;
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
            url: '/api/patient_payment_log',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'since': since,
                'office': office,
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
     * Retrieve an existing patient payment log
     * @returns CashPaymentLog OK
     * @throws ApiError
     */
    public patientPaymentLogRead({
        id,
        since,
        office,
        doctor,
    }: {
        id: string,
        since?: string,
        office?: number,
        doctor?: number,
    }): CancelablePromise<CashPaymentLog> {
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
    public patientPaymentsList({
        cursor,
        pageSize,
        since,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<CashPayment>;
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
            url: '/api/patient_payments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient payment
     * @returns CashPayment Created
     * @throws ApiError
     */
    public patientPaymentsCreate({
        since,
        patient,
        doctor,
    }: {
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<CashPayment> {
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
    public patientPaymentsRead({
        id,
        since,
        patient,
        doctor,
    }: {
        id: string,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<CashPayment> {
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
    public proceduresList({
        cursor,
        pageSize,
        muDate,
        patient,
        doctor,
        muDateRange,
        appointment,
        serviceDate,
    }: {
        cursor?: string,
        pageSize?: number,
        muDate?: string,
        patient?: number,
        doctor?: number,
        muDateRange?: string,
        appointment?: number,
        serviceDate?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<BillingLineItem>;
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
    public proceduresRead({
        id,
        muDate,
        patient,
        doctor,
        muDateRange,
        appointment,
        serviceDate,
    }: {
        id: string,
        muDate?: string,
        patient?: number,
        doctor?: number,
        muDateRange?: string,
        appointment?: number,
        serviceDate?: string,
    }): CancelablePromise<BillingLineItem> {
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
    public transactionsList({
        cursor,
        pageSize,
        lineItem,
        postedDate,
        appointment,
        since,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        lineItem?: number,
        postedDate?: string,
        appointment?: number,
        since?: string,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<LineItemTransaction>;
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
            url: '/api/transactions',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'line_item': lineItem,
                'posted_date': postedDate,
                'appointment': appointment,
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
     * Retrieve an existing insurance transaction
     * @returns LineItemTransaction OK
     * @throws ApiError
     */
    public transactionsRead({
        id,
        lineItem,
        postedDate,
        appointment,
        since,
        doctor,
    }: {
        id: string,
        lineItem?: number,
        postedDate?: string,
        appointment?: number,
        since?: string,
        doctor?: number,
    }): CancelablePromise<LineItemTransaction> {
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
