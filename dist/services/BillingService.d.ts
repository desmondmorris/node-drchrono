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
export declare class BillingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Retrieve or search billing profiles
     * @returns any OK
     * @throws ApiError
     */
    billingProfilesList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<BillingProfile>;
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
     * Retrieve an existing billing profiles
     * @returns BillingProfile OK
     * @throws ApiError
     */
    billingProfilesRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<BillingProfile>;
    /**
     * Retrieve or search communicatioin (phone call) logs
     * @returns any OK
     * @throws ApiError
     */
    commLogsList({ cursor, pageSize, since, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PhoneCallLog>;
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
     * Create communication (phone call) logs
     * @returns PhoneCallLog Created
     * @throws ApiError
     */
    commLogsCreate({ since, patient, doctor, }: {
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PhoneCallLog>;
    /**
     * Retrieve an existing communication (phone call) logs
     * @returns PhoneCallLog OK
     * @throws ApiError
     */
    commLogsRead({ id, since, patient, doctor, verbose, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PhoneCallLog>;
    /**
     * Update an existing communication (phone call) logs
     * @returns void
     * @throws ApiError
     */
    commLogsPartialUpdate({ id, since, patient, doctor, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing communication (phone call) logs
     * @returns void
     * @throws ApiError
     */
    commLogsUpdate({ id, since, patient, doctor, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search custom insurance plan names
     * @returns any OK
     * @throws ApiError
     */
    customInsurancePlanNamesList({ cursor, pageSize, since, user, name, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        user?: number;
        name?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<CustomInsurancePlanName>;
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
     * Retrieve an existing custom insurance plan name
     * @returns CustomInsurancePlanName OK
     * @throws ApiError
     */
    customInsurancePlanNamesRead({ id, since, user, name, doctor, verbose, }: {
        id: string;
        since?: string;
        user?: number;
        name?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<CustomInsurancePlanName>;
    /**
     * Retrieve daysheet charges report for a given date range
     * @throws ApiError
     */
    daysheetChargesList({ startDate, endDate, chargesDateType, reportType, claimType, patientId, officeId, examroomId, pgMode, verbose, }: {
        startDate: string;
        endDate: string;
        chargesDateType?: string;
        reportType?: string;
        claimType?: string;
        patientId?: number;
        officeId?: string;
        examroomId?: number;
        pgMode?: boolean;
        verbose?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve daysheet credits/adjustments report for a given date range
     * @throws ApiError
     */
    daysheetCreditsList({ startDate, endDate, creditsDateType, reportType, claimType, patientId, officeId, examroomId, pgMode, verbose, }: {
        startDate: string;
        endDate: string;
        creditsDateType?: string;
        reportType?: string;
        claimType?: string;
        patientId?: number;
        officeId?: string;
        examroomId?: number;
        pgMode?: boolean;
        verbose?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve daysheet cash report for a given date range
     * @throws ApiError
     */
    daySheetPatientPaymentsList({ startDate, endDate, chargesDateType, reportType, claimType, patientId, office, examroomId, legacy, verbose, }: {
        startDate: string;
        endDate: string;
        chargesDateType?: string;
        reportType?: string;
        claimType?: string;
        patientId?: number;
        office?: string;
        examroomId?: number;
        legacy?: boolean;
        verbose?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve daysheet totals report for a given date range
     * @throws ApiError
     */
    daysheetTotalsList({ startDate, endDate, chargesDateType, reportType, creditsDateType, groupBy, subGroupBy, tertiaryGroupBy, cashViewType, patientId, officeId, examroomId, pgMode, verbose, }: {
        startDate: string;
        endDate: string;
        chargesDateType?: string;
        reportType?: string;
        creditsDateType?: string;
        groupBy?: string;
        subGroupBy?: string;
        tertiaryGroupBy?: string;
        cashViewType?: string;
        patientId?: number;
        officeId?: string;
        examroomId?: number;
        pgMode?: boolean;
        verbose?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search past eligibility checks for patient
     * @returns any OK
     * @throws ApiError
     */
    eligibilityChecksList({ cursor, pageSize, appointment, appointmentDate, doctor, queryDateRange, appointmentDateRange, queryDate, patient, verbose, }: {
        cursor?: string;
        pageSize?: number;
        appointment?: number;
        appointmentDate?: string;
        doctor?: number;
        queryDateRange?: string;
        appointmentDateRange?: string;
        queryDate?: string;
        patient?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Coverage>;
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
     * Retrieve an existing past eligibility check
     * @returns Coverage OK
     * @throws ApiError
     */
    eligibilityChecksRead({ id, appointment, appointmentDate, doctor, queryDateRange, appointmentDateRange, queryDate, patient, verbose, }: {
        id: string;
        appointment?: number;
        appointmentDate?: string;
        doctor?: number;
        queryDateRange?: string;
        appointmentDateRange?: string;
        queryDate?: string;
        patient?: number;
        verbose?: number;
    }): CancelablePromise<Coverage>;
    /**
     * Retrieve or search billing line items
     * @returns any OK
     * @throws ApiError
     */
    lineItemsList({ cursor, pageSize, postedDate, patient, office, doctor, since, appointment, serviceDate, verbose, }: {
        cursor?: string;
        pageSize?: number;
        postedDate?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        appointment?: number;
        serviceDate?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<BillingLineItem>;
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
     * Create billing line item for appointments
     * @returns BillingLineItem Created
     * @throws ApiError
     */
    lineItemsCreate({ postedDate, patient, office, doctor, since, appointment, serviceDate, }: {
        postedDate?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        appointment?: number;
        serviceDate?: string;
    }): CancelablePromise<BillingLineItem>;
    /**
     * @returns void
     * @throws ApiError
     */
    lineItemsDelete({ id, postedDate, patient, office, doctor, since, appointment, serviceDate, }: {
        id: string;
        postedDate?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        appointment?: number;
        serviceDate?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing billing line item
     * @returns BillingLineItem OK
     * @throws ApiError
     */
    lineItemsRead({ id, postedDate, patient, office, doctor, since, appointment, serviceDate, verbose, }: {
        id: string;
        postedDate?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        appointment?: number;
        serviceDate?: string;
        verbose?: number;
    }): CancelablePromise<BillingLineItem>;
    /**
     * @returns void
     * @throws ApiError
     */
    lineItemsPartialUpdate({ id, postedDate, patient, office, doctor, since, appointment, serviceDate, }: {
        id: string;
        postedDate?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        appointment?: number;
        serviceDate?: string;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    lineItemsUpdate({ id, postedDate, patient, office, doctor, since, appointment, serviceDate, }: {
        id: string;
        postedDate?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        appointment?: number;
        serviceDate?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patient authorizations
     * @returns any OK
     * @throws ApiError
     */
    patientAuthorizationsList({ cursor, pageSize, patient, doctor, startDate, dateRange, endDate, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        startDate?: string;
        dateRange?: string;
        endDate?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientAuthorization>;
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
     * Retrieve or search patient payment logs
     * @returns any OK
     * @throws ApiError
     */
    patientPaymentLogList({ cursor, pageSize, since, office, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        office?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<CashPaymentLog>;
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
     * Retrieve an existing patient payment log
     * @returns CashPaymentLog OK
     * @throws ApiError
     */
    patientPaymentLogRead({ id, since, office, doctor, verbose, }: {
        id: string;
        since?: string;
        office?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<CashPaymentLog>;
    /**
     * Retrieve or search patient payments
     * @returns any OK
     * @throws ApiError
     */
    patientPaymentsList({ cursor, pageSize, since, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<CashPayment>;
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
     * Create patient payment
     * @returns CashPayment Created
     * @throws ApiError
     */
    patientPaymentsCreate({ since, patient, doctor, }: {
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<CashPayment>;
    /**
     * Retrieve an existing patient payment
     * @returns CashPayment OK
     * @throws ApiError
     */
    patientPaymentsRead({ id, since, patient, doctor, verbose, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<CashPayment>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    proceduresList({ cursor, pageSize, muDate, patient, doctor, muDateRange, appointment, serviceDate, verbose, }: {
        cursor?: string;
        pageSize?: number;
        muDate?: string;
        patient?: number;
        doctor?: number;
        muDateRange?: string;
        appointment?: number;
        serviceDate?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<BillingLineItem>;
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
     * @returns BillingLineItem OK
     * @throws ApiError
     */
    proceduresRead({ id, muDate, patient, doctor, muDateRange, appointment, serviceDate, verbose, }: {
        id: string;
        muDate?: string;
        patient?: number;
        doctor?: number;
        muDateRange?: string;
        appointment?: number;
        serviceDate?: string;
        verbose?: number;
    }): CancelablePromise<BillingLineItem>;
    /**
     * Retrieve or search insurance transactions associated with billing line items
     * @returns any OK
     * @throws ApiError
     */
    transactionsList({ cursor, pageSize, lineItem, postedDate, appointment, since, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        lineItem?: number;
        postedDate?: string;
        appointment?: number;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<LineItemTransaction>;
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
     * Retrieve an existing insurance transaction
     * @returns LineItemTransaction OK
     * @throws ApiError
     */
    transactionsRead({ id, lineItem, postedDate, appointment, since, doctor, verbose, }: {
        id: string;
        lineItem?: number;
        postedDate?: string;
        appointment?: number;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<LineItemTransaction>;
}
