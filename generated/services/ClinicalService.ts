/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Appointment } from '../models/Appointment';
import type { AppointmentProfile } from '../models/AppointmentProfile';
import type { AppointmentTemplate } from '../models/AppointmentTemplate';
import type { CarePlan } from '../models/CarePlan';
import type { CareTeamMember } from '../models/CareTeamMember';
import type { ClaimBillingNotes } from '../models/ClaimBillingNotes';
import type { ClinicalNote } from '../models/ClinicalNote';
import type { ConsentForm } from '../models/ConsentForm';
import type { CustomAppointmentFieldType } from '../models/CustomAppointmentFieldType';
import type { CustomPatientFieldType } from '../models/CustomPatientFieldType';
import type { CustomVitalType } from '../models/CustomVitalType';
import type { DoctorFeeSchedule } from '../models/DoctorFeeSchedule';
import type { EOBObject } from '../models/EOBObject';
import type { FeeSchedule } from '../models/FeeSchedule';
import type { ImplantableDevice } from '../models/ImplantableDevice';
import type { Insurance } from '../models/Insurance';
import type { LabOrder } from '../models/LabOrder';
import type { LabOrderDocument } from '../models/LabOrderDocument';
import type { LabResult } from '../models/LabResult';
import type { LabTest } from '../models/LabTest';
import type { LabVendorLocation } from '../models/LabVendorLocation';
import type { Patient } from '../models/Patient';
import type { PatientAllergy } from '../models/PatientAllergy';
import type { PatientAmendment } from '../models/PatientAmendment';
import type { PatientCommunication } from '../models/PatientCommunication';
import type { PatientDrug } from '../models/PatientDrug';
import type { PatientFlagType } from '../models/PatientFlagType';
import type { PatientIntervention } from '../models/PatientIntervention';
import type { PatientLabResultSet } from '../models/PatientLabResultSet';
import type { PatientMessage } from '../models/PatientMessage';
import type { PatientPhysicalExam } from '../models/PatientPhysicalExam';
import type { PatientProblem } from '../models/PatientProblem';
import type { PatientRiskAssessment } from '../models/PatientRiskAssessment';
import type { PatientVaccineRecord } from '../models/PatientVaccineRecord';
import type { PrescriptionMessage } from '../models/PrescriptionMessage';
import type { ReminderProfile } from '../models/ReminderProfile';
import type { ScannedClinicalDocument } from '../models/ScannedClinicalDocument';
import type { SoapNoteCustomReport } from '../models/SoapNoteCustomReport';
import type { SoapNoteLineItemFieldType } from '../models/SoapNoteLineItemFieldType';
import type { SoapNoteLineItemFieldValue } from '../models/SoapNoteLineItemFieldValue';
import type { Staff } from '../models/Staff';
import type { TelemedicineAppointment } from '../models/TelemedicineAppointment';
import type { TelemedicineAppointmentEventLog } from '../models/TelemedicineAppointmentEventLog';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ClinicalService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve or search patient allergies
     * @returns any OK
     * @throws ApiError
     */
    public allergiesList({
        cursor,
        pageSize,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientAllergy>;
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
            url: '/api/allergies',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient allergy
     * @returns PatientAllergy Created
     * @throws ApiError
     */
    public allergiesCreate({
        patient,
        doctor,
    }: {
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientAllergy> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/allergies',
            query: {
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
     * Retrieve an existing patient allergy
     * @returns PatientAllergy OK
     * @throws ApiError
     */
    public allergiesRead({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientAllergy> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/allergies/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient allergy
     * @returns void
     * @throws ApiError
     */
    public allergiesPartialUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/allergies/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient allergy
     * @returns void
     * @throws ApiError
     */
    public allergiesUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/allergies/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Retrieve or search patient amendments. You can only interact with amendments created by your API application
     * @returns any OK
     * @throws ApiError
     */
    public amendmentsList({
        cursor,
        pageSize,
        appointment,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        appointment?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientAmendment>;
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
            url: '/api/amendments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'appointment': appointment,
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
     * Create patient amendments to a patient's clinical records
     * @returns PatientAmendment Created
     * @throws ApiError
     */
    public amendmentsCreate({
        appointment,
        patient,
        doctor,
    }: {
        appointment?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientAmendment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/amendments',
            query: {
                'appointment': appointment,
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
     * Delete an existing patient amendment, you can only interact with amendments created by your API application
     * @returns void
     * @throws ApiError
     */
    public amendmentsDelete({
        id,
        appointment,
        patient,
        doctor,
    }: {
        id: string,
        appointment?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/amendments/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * Retrieve an existing patient amendment, you can only interact with amendments created by your API application
     * @returns PatientAmendment OK
     * @throws ApiError
     */
    public amendmentsRead({
        id,
        appointment,
        patient,
        doctor,
    }: {
        id: string,
        appointment?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientAmendment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/amendments/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * Update an existing patient amendment, you can only interact with amendments created by your API application
     * @returns void
     * @throws ApiError
     */
    public amendmentsPartialUpdate({
        id,
        appointment,
        patient,
        doctor,
    }: {
        id: string,
        appointment?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/amendments/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * Update an existing patient amendment, you can only interact with amendments created by your API application
     * @returns void
     * @throws ApiError
     */
    public amendmentsUpdate({
        id,
        appointment,
        patient,
        doctor,
    }: {
        id: string,
        appointment?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/amendments/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * Retrieve or search appointment profiles for a doctor's calendar
     * @returns any OK
     * @throws ApiError
     */
    public appointmentProfilesList({
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
        data?: Array<AppointmentProfile>;
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
            url: '/api/appointment_profiles',
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
     * Create appointment profiles for a doctor's calendar
     * @returns AppointmentProfile Created
     * @throws ApiError
     */
    public appointmentProfilesCreate({
        doctor,
    }: {
        doctor?: number,
    }): CancelablePromise<AppointmentProfile> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/appointment_profiles',
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
     * Delete an existing appointment profile
     * @returns void
     * @throws ApiError
     */
    public appointmentProfilesDelete({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/appointment_profiles/{id}',
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
     * Retrieve an existing appointment profile
     * @returns AppointmentProfile OK
     * @throws ApiError
     */
    public appointmentProfilesRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<AppointmentProfile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/appointment_profiles/{id}',
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
     * Update an existing appointment profile
     * @returns void
     * @throws ApiError
     */
    public appointmentProfilesPartialUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/appointment_profiles/{id}',
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
     * Update an existing appointment profile
     * @returns void
     * @throws ApiError
     */
    public appointmentProfilesUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/appointment_profiles/{id}',
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
     * Retrieve or search appointment templates for a doctor's calendar
     * @returns any OK
     * @throws ApiError
     */
    public appointmentTemplatesList({
        cursor,
        pageSize,
        profile,
        office,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        profile?: number,
        office?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<AppointmentTemplate>;
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
            url: '/api/appointment_templates',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'profile': profile,
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
     * Create appointment templates for a doctor's calendar
     * @returns AppointmentTemplate Created
     * @throws ApiError
     */
    public appointmentTemplatesCreate({
        profile,
        office,
        doctor,
    }: {
        profile?: number,
        office?: number,
        doctor?: number,
    }): CancelablePromise<AppointmentTemplate> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/appointment_templates',
            query: {
                'profile': profile,
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
     * Delete an existing appointment template
     * @returns void
     * @throws ApiError
     */
    public appointmentTemplatesDelete({
        id,
        profile,
        office,
        doctor,
    }: {
        id: string,
        profile?: number,
        office?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/appointment_templates/{id}',
            path: {
                'id': id,
            },
            query: {
                'profile': profile,
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
     * Retrieve an existing appointment template
     * @returns AppointmentTemplate OK
     * @throws ApiError
     */
    public appointmentTemplatesRead({
        id,
        profile,
        office,
        doctor,
    }: {
        id: string,
        profile?: number,
        office?: number,
        doctor?: number,
    }): CancelablePromise<AppointmentTemplate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/appointment_templates/{id}',
            path: {
                'id': id,
            },
            query: {
                'profile': profile,
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
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    public appointmentTemplatesPartialUpdate({
        id,
        profile,
        office,
        doctor,
    }: {
        id: string,
        profile?: number,
        office?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/appointment_templates/{id}',
            path: {
                'id': id,
            },
            query: {
                'profile': profile,
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
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    public appointmentTemplatesUpdate({
        id,
        profile,
        office,
        doctor,
    }: {
        id: string,
        profile?: number,
        office?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/appointment_templates/{id}',
            path: {
                'id': id,
            },
            query: {
                'profile': profile,
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
     * Retrieve or search appointment or breaks.
     * <b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
     *
     * @returns any OK
     * @throws ApiError
     */
    public appointmentsList({
        cursor,
        pageSize,
        status,
        patient,
        office,
        doctor,
        since,
        occurredSince,
        dateRange,
        date,
    }: {
        cursor?: string,
        pageSize?: number,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        /**
         * Filter appointments based on scheduled time
         */
        occurredSince?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<Appointment>;
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
            url: '/api/appointments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'occurred_since': occurredSince,
                'date_range': dateRange,
                'date': date,
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
     * Create a new appointment or break on doctor's calendar
     * @returns Appointment Created
     * @throws ApiError
     */
    public appointmentsCreate({
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<Appointment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/appointments',
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                409: `Scheduled time overlaps with an existing appointment`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Delete an existing appointment or break
     * @returns void
     * @throws ApiError
     */
    public appointmentsDelete({
        id,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/appointments/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
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
     * Retrieve an existing appointment or break
     * @returns Appointment OK
     * @throws ApiError
     */
    public appointmentsRead({
        id,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<Appointment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/appointments/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
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
     * Update an existing appointment or break
     * @returns void
     * @throws ApiError
     */
    public appointmentsPartialUpdate({
        id,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/appointments/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                409: `Scheduled time overlaps with an existing appointment`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update an existing appointment or break
     * @returns void
     * @throws ApiError
     */
    public appointmentsUpdate({
        id,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/appointments/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                409: `Scheduled time overlaps with an existing appointment`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns any OK
     * @throws ApiError
     */
    public appointmentsListList({
        cursor,
        pageSize,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        cursor?: string,
        pageSize?: number,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<Appointment>;
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
            url: '/api/appointments_list',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
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
     * @returns Appointment Created
     * @throws ApiError
     */
    public appointmentsListCreate({
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<Appointment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/appointments_list',
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                409: `Scheduled time overlaps with an existing appointment`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public appointmentsListDelete({
        id,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/appointments_list/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
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
     * @returns Appointment OK
     * @throws ApiError
     */
    public appointmentsListRead({
        id,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<Appointment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/appointments_list/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
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
    public appointmentsListPartialUpdate({
        id,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/appointments_list/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                409: `Scheduled time overlaps with an existing appointment`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public appointmentsListUpdate({
        id,
        status,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        status?: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/appointments_list/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Permission Denied`,
                404: `Not Found`,
                405: `Method Not Allowed`,
                409: `Scheduled time overlaps with an existing appointment`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Retrieve or search care plans
     * @returns any OK
     * @throws ApiError
     */
    public carePlansList({
        cursor,
        pageSize,
        patient,
        planType,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        planType?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<CarePlan>;
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
            url: '/api/care_plans',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'patient': patient,
                'plan_type': planType,
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
     * Retrieve an existing care plan
     * @returns CarePlan OK
     * @throws ApiError
     */
    public carePlansRead({
        id,
        patient,
        planType,
        doctor,
    }: {
        id: string,
        patient?: number,
        planType?: number,
        doctor?: number,
    }): CancelablePromise<CarePlan> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/care_plans/{id}',
            path: {
                'id': id,
            },
            query: {
                'patient': patient,
                'plan_type': planType,
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
    public careTeamMembersList({
        cursor,
        pageSize,
        patient,
        appointment,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<CareTeamMember>;
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
            url: '/api/care_team_members',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'patient': patient,
                'appointment': appointment,
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
     * @returns CareTeamMember OK
     * @throws ApiError
     */
    public careTeamMembersRead({
        id,
        patient,
        appointment,
        doctor,
    }: {
        id: string,
        patient?: number,
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<CareTeamMember> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/care_team_members/{id}',
            path: {
                'id': id,
            },
            query: {
                'patient': patient,
                'appointment': appointment,
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
     * Retrieve or search billing notes
     * @returns any OK
     * @throws ApiError
     */
    public claimBillingNotesList({
        cursor,
        pageSize,
        appointment,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<ClaimBillingNotes>;
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
            url: '/api/claim_billing_notes',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'appointment': appointment,
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
     * Create a new billing note
     * @returns ClaimBillingNotes Created
     * @throws ApiError
     */
    public claimBillingNotesCreate({
        appointment,
        doctor,
    }: {
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<ClaimBillingNotes> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/claim_billing_notes',
            query: {
                'appointment': appointment,
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
     * Retrieve an existing billing note
     * @returns ClaimBillingNotes OK
     * @throws ApiError
     */
    public claimBillingNotesRead({
        id,
        appointment,
        doctor,
    }: {
        id: string,
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<ClaimBillingNotes> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/claim_billing_notes/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * Retrieve or search clinical note field types
     * @returns any OK
     * @throws ApiError
     */
    public clinicalNoteFieldTypesList({
        cursor,
        pageSize,
        clinicalNoteTemplate,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        clinicalNoteTemplate?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<SoapNoteLineItemFieldType>;
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
            url: '/api/clinical_note_field_types',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'clinical_note_template': clinicalNoteTemplate,
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
     * Retrieve an existing clinial note field type
     * @returns SoapNoteLineItemFieldType OK
     * @throws ApiError
     */
    public clinicalNoteFieldTypesRead({
        id,
        clinicalNoteTemplate,
        doctor,
    }: {
        id: string,
        clinicalNoteTemplate?: number,
        doctor?: number,
    }): CancelablePromise<SoapNoteLineItemFieldType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/clinical_note_field_types/{id}',
            path: {
                'id': id,
            },
            query: {
                'clinical_note_template': clinicalNoteTemplate,
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
     * Retrieve or search clinical note field values
     * @returns any OK
     * @throws ApiError
     */
    public clinicalNoteFieldValuesList({
        cursor,
        pageSize,
        clinicalNoteField,
        since,
        appointment,
        clinicalNoteTemplate,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        clinicalNoteField?: number,
        since?: string,
        appointment?: number,
        clinicalNoteTemplate?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<SoapNoteLineItemFieldValue>;
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
            url: '/api/clinical_note_field_values',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'clinical_note_field': clinicalNoteField,
                'since': since,
                'appointment': appointment,
                'clinical_note_template': clinicalNoteTemplate,
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
     * Create clinical note field value
     * @returns SoapNoteLineItemFieldValue Created
     * @throws ApiError
     */
    public clinicalNoteFieldValuesCreate({
        clinicalNoteField,
        since,
        appointment,
        clinicalNoteTemplate,
        doctor,
    }: {
        clinicalNoteField?: number,
        since?: string,
        appointment?: number,
        clinicalNoteTemplate?: number,
        doctor?: number,
    }): CancelablePromise<SoapNoteLineItemFieldValue> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/clinical_note_field_values',
            query: {
                'clinical_note_field': clinicalNoteField,
                'since': since,
                'appointment': appointment,
                'clinical_note_template': clinicalNoteTemplate,
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
     * Retrieve an existing clinical note field value
     * @returns SoapNoteLineItemFieldValue OK
     * @throws ApiError
     */
    public clinicalNoteFieldValuesRead({
        id,
        clinicalNoteField,
        since,
        appointment,
        clinicalNoteTemplate,
        doctor,
    }: {
        id: string,
        clinicalNoteField?: number,
        since?: string,
        appointment?: number,
        clinicalNoteTemplate?: number,
        doctor?: number,
    }): CancelablePromise<SoapNoteLineItemFieldValue> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/clinical_note_field_values/{id}',
            path: {
                'id': id,
            },
            query: {
                'clinical_note_field': clinicalNoteField,
                'since': since,
                'appointment': appointment,
                'clinical_note_template': clinicalNoteTemplate,
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
     * Update an existing clinical note field value
     * @returns void
     * @throws ApiError
     */
    public clinicalNoteFieldValuesPartialUpdate({
        id,
        clinicalNoteField,
        since,
        appointment,
        clinicalNoteTemplate,
        doctor,
    }: {
        id: string,
        clinicalNoteField?: number,
        since?: string,
        appointment?: number,
        clinicalNoteTemplate?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/clinical_note_field_values/{id}',
            path: {
                'id': id,
            },
            query: {
                'clinical_note_field': clinicalNoteField,
                'since': since,
                'appointment': appointment,
                'clinical_note_template': clinicalNoteTemplate,
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
     * Update an existing clinical note field value
     * @returns void
     * @throws ApiError
     */
    public clinicalNoteFieldValuesUpdate({
        id,
        clinicalNoteField,
        since,
        appointment,
        clinicalNoteTemplate,
        doctor,
    }: {
        id: string,
        clinicalNoteField?: number,
        since?: string,
        appointment?: number,
        clinicalNoteTemplate?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/clinical_note_field_values/{id}',
            path: {
                'id': id,
            },
            query: {
                'clinical_note_field': clinicalNoteField,
                'since': since,
                'appointment': appointment,
                'clinical_note_template': clinicalNoteTemplate,
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
     * Retrieve or search clinical note templates
     * @returns any OK
     * @throws ApiError
     */
    public clinicalNoteTemplatesList({
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
        data?: Array<SoapNoteCustomReport>;
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
            url: '/api/clinical_note_templates',
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
     * Retrieve an existing clinical note tempalte
     * @returns SoapNoteCustomReport OK
     * @throws ApiError
     */
    public clinicalNoteTemplatesRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<SoapNoteCustomReport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/clinical_note_templates/{id}',
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
     * @returns any OK
     * @throws ApiError
     */
    public clinicalNotesList({
        cursor,
        pageSize,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<ClinicalNote>;
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
            url: '/api/clinical_notes',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
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
     * @returns ClinicalNote OK
     * @throws ApiError
     */
    public clinicalNotesRead({
        id,
        patient,
        office,
        doctor,
        since,
        dateRange,
        date,
    }: {
        id: string,
        patient?: number,
        office?: number,
        doctor?: number,
        since?: string,
        dateRange?: string,
        date?: string,
    }): CancelablePromise<ClinicalNote> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/clinical_notes/{id}',
            path: {
                'id': id,
            },
            query: {
                'patient': patient,
                'office': office,
                'doctor': doctor,
                'since': since,
                'date_range': dateRange,
                'date': date,
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
     * Retrieve or search patient consent forms
     * @returns any OK
     * @throws ApiError
     */
    public consentFormsList({
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
        data?: Array<ConsentForm>;
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
            url: '/api/consent_forms',
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
     * Create a patient consent form
     * @returns ConsentForm Created
     * @throws ApiError
     */
    public consentFormsCreate({
        doctor,
    }: {
        doctor?: number,
    }): CancelablePromise<ConsentForm> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/consent_forms',
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
     * Retrieve an existing patient consent form
     * @returns ConsentForm OK
     * @throws ApiError
     */
    public consentFormsRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<ConsentForm> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/consent_forms/{id}',
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
     * Update an existing patient consent form
     * @returns void
     * @throws ApiError
     */
    public consentFormsPartialUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/consent_forms/{id}',
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
     * Update an existing patient consent form
     * @returns void
     * @throws ApiError
     */
    public consentFormsUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/consent_forms/{id}',
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
     * Assign (apply) a consent form to appointment
     * @returns void
     * @throws ApiError
     */
    public consentFormsApplyToAppointment({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/consent_forms/{id}/apply_to_appointment',
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
     * Unassign (unapply) a consent form from appointment
     * @returns void
     * @throws ApiError
     */
    public consentFormsUnapplyFromAppointment({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/consent_forms/{id}/unapply_from_appointment',
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
     * Retrieve or search custom appointment fields
     * @returns any OK
     * @throws ApiError
     */
    public customAppointmentFieldsList({
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
        data?: Array<CustomAppointmentFieldType>;
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
            url: '/api/custom_appointment_fields',
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
     * Create custom appointment fields
     * @returns CustomAppointmentFieldType Created
     * @throws ApiError
     */
    public customAppointmentFieldsCreate({
        doctor,
    }: {
        doctor?: number,
    }): CancelablePromise<CustomAppointmentFieldType> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/custom_appointment_fields',
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
     * Retrieve an existing custom appointment field
     * @returns CustomAppointmentFieldType OK
     * @throws ApiError
     */
    public customAppointmentFieldsRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<CustomAppointmentFieldType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_appointment_fields/{id}',
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
     * Update an existing custom appointment field
     * @returns void
     * @throws ApiError
     */
    public customAppointmentFieldsPartialUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/custom_appointment_fields/{id}',
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
     * Update an existing custom appointment field
     * @returns void
     * @throws ApiError
     */
    public customAppointmentFieldsUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/custom_appointment_fields/{id}',
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
     * Retrieve or search custom demographics fields
     * @returns any OK
     * @throws ApiError
     */
    public customDemographicsList({
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
        data?: Array<CustomPatientFieldType>;
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
            url: '/api/custom_demographics',
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
     * Create custom demographics fields
     * @returns CustomPatientFieldType Created
     * @throws ApiError
     */
    public customDemographicsCreate({
        doctor,
    }: {
        doctor?: number,
    }): CancelablePromise<CustomPatientFieldType> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/custom_demographics',
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
     * Retrieve an existing custom demographics field
     * @returns CustomPatientFieldType OK
     * @throws ApiError
     */
    public customDemographicsRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<CustomPatientFieldType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_demographics/{id}',
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
     * Update an existing custom demographics field
     * @returns void
     * @throws ApiError
     */
    public customDemographicsPartialUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/custom_demographics/{id}',
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
     * Update an existing custom demographics field
     * @returns void
     * @throws ApiError
     */
    public customDemographicsUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/custom_demographics/{id}',
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
     * Retrieve or search custom vital types
     * @returns any OK
     * @throws ApiError
     */
    public customVitalsList({
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
        data?: Array<CustomVitalType>;
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
            url: '/api/custom_vitals',
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
     * Retrieve an existing custom vital type
     * @returns CustomVitalType OK
     * @throws ApiError
     */
    public customVitalsRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<CustomVitalType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_vitals/{id}',
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
     * Retrieve or search documents
     * @returns any OK
     * @throws ApiError
     */
    public documentsList({
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
        data?: Array<ScannedClinicalDocument>;
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
            url: '/api/documents',
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
     * Create documents
     * @returns ScannedClinicalDocument Created
     * @throws ApiError
     */
    public documentsCreate({
        since,
        patient,
        doctor,
    }: {
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<ScannedClinicalDocument> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/documents',
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
     * Delete an existing appointment template
     * @returns void
     * @throws ApiError
     */
    public documentsDelete({
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
            method: 'DELETE',
            url: '/api/documents/{id}',
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
     * Retrieve an existing appointment template
     * @returns ScannedClinicalDocument OK
     * @throws ApiError
     */
    public documentsRead({
        id,
        since,
        patient,
        doctor,
    }: {
        id: string,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<ScannedClinicalDocument> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/documents/{id}',
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
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    public documentsPartialUpdate({
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
            url: '/api/documents/{id}',
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
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    public documentsUpdate({
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
            url: '/api/documents/{id}',
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
     * Retrieve or search EOB objects
     * @returns any OK
     * @throws ApiError
     */
    public eobsList({
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
        data?: Array<EOBObject>;
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
            url: '/api/eobs',
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
     * Create EOB object
     * @returns EOBObject Created
     * @throws ApiError
     */
    public eobsCreate({
        doctor,
    }: {
        doctor?: number,
    }): CancelablePromise<EOBObject> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/eobs',
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
     * Retrieve an existing EOB object
     * @returns EOBObject OK
     * @throws ApiError
     */
    public eobsRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<EOBObject> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/eobs/{id}',
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
     * @returns any OK
     * @throws ApiError
     */
    public feeSchedulesList({
        cursor,
        pageSize,
        code,
        codeType,
        since,
        payerId,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        code?: string,
        codeType?: string,
        since?: string,
        payerId?: string,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<DoctorFeeSchedule>;
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
            url: '/api/fee_schedules',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'code': code,
                'code_type': codeType,
                'since': since,
                'payer_id': payerId,
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
     * @returns DoctorFeeSchedule OK
     * @throws ApiError
     */
    public feeSchedulesRead({
        id,
        code,
        codeType,
        since,
        payerId,
        doctor,
    }: {
        id: string,
        code?: string,
        codeType?: string,
        since?: string,
        payerId?: string,
        doctor?: number,
    }): CancelablePromise<DoctorFeeSchedule> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/fee_schedules/{id}',
            path: {
                'id': id,
            },
            query: {
                'code': code,
                'code_type': codeType,
                'since': since,
                'payer_id': payerId,
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
    public feeSchedulesV2List({
        cursor,
        pageSize,
        payerId,
        planName,
        specialities,
        assignees,
        assigneeType,
        effectiveDate,
        ineffectiveDate,
    }: {
        cursor?: string,
        pageSize?: number,
        payerId?: string,
        planName?: string,
        specialities?: string,
        assignees?: string,
        assigneeType?: string,
        effectiveDate?: string,
        ineffectiveDate?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<FeeSchedule>;
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
            url: '/api/fee_schedules_v2',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'payer_id': payerId,
                'plan_name': planName,
                'specialities': specialities,
                'assignees': assignees,
                'assignee_type': assigneeType,
                'effective_date': effectiveDate,
                'ineffective_date': ineffectiveDate,
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
     * @returns FeeSchedule OK
     * @throws ApiError
     */
    public feeSchedulesV2Read({
        id,
    }: {
        id: string,
    }): CancelablePromise<FeeSchedule> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/fee_schedules_v2/{id}',
            path: {
                'id': id,
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
     * Retrieve or search implantable devices
     * @returns any OK
     * @throws ApiError
     */
    public implantableDevicesList({
        cursor,
        pageSize,
        muDate,
        patient,
        muDateRange,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        muDate?: string,
        patient?: number,
        muDateRange?: string,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<ImplantableDevice>;
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
            url: '/api/implantable_devices',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'mu_date': muDate,
                'patient': patient,
                'mu_date_range': muDateRange,
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
     * Retrieve an existing implantable device
     * @returns ImplantableDevice OK
     * @throws ApiError
     */
    public implantableDevicesRead({
        id,
        muDate,
        patient,
        muDateRange,
        doctor,
    }: {
        id: string,
        muDate?: string,
        patient?: number,
        muDateRange?: string,
        doctor?: number,
    }): CancelablePromise<ImplantableDevice> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/implantable_devices/{id}',
            path: {
                'id': id,
            },
            query: {
                'mu_date': muDate,
                'patient': patient,
                'mu_date_range': muDateRange,
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
    public insurancesList({
        payerType,
        cursor,
        pageSize,
        term,
    }: {
        /**
         * One of `"emdeon"`, `"gateway"`, `"ihcfa"`
         */
        payerType: string,
        cursor?: string,
        pageSize?: number,
        /**
         * Search term, which can be either a partial name, partial ID or the state.
         */
        term?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<Insurance>;
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
            url: '/api/insurances',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'payer_type': payerType,
                'term': term,
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
     * @returns Insurance OK
     * @throws ApiError
     */
    public insurancesRead({
        id,
        payerType,
        term,
    }: {
        id: string,
        /**
         * One of `"emdeon"`, `"gateway"`, `"ihcfa"`
         */
        payerType: string,
        /**
         * Search term, which can be either a partial name, partial ID or the state.
         */
        term?: string,
    }): CancelablePromise<Insurance> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/insurances/{id}',
            path: {
                'id': id,
            },
            query: {
                'payer_type': payerType,
                'term': term,
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
     * Retrieve or search lab order documents
     * @returns any OK
     * @throws ApiError
     */
    public labDocumentsList({
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
        data?: Array<LabOrderDocument>;
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
            url: '/api/lab_documents',
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
     * Create lab order documents. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     * @returns LabOrderDocument Created
     * @throws ApiError
     */
    public labDocumentsCreate({
        since,
        doctor,
    }: {
        since?: string,
        doctor?: number,
    }): CancelablePromise<LabOrderDocument> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/lab_documents',
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
     * Delete an existing lab order document
     * @returns void
     * @throws ApiError
     */
    public labDocumentsDelete({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/lab_documents/{id}',
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
     * Retrieve an existing lab order document
     * @returns LabOrderDocument OK
     * @throws ApiError
     */
    public labDocumentsRead({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<LabOrderDocument> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_documents/{id}',
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
     * Update an existing lab order document
     * @returns void
     * @throws ApiError
     */
    public labDocumentsPartialUpdate({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/lab_documents/{id}',
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
     * Update an existing lab order document
     * @returns void
     * @throws ApiError
     */
    public labDocumentsUpdate({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/lab_documents/{id}',
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
     * Retrieve or search lab orders
     * @returns any OK
     * @throws ApiError
     */
    public labOrdersList({
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
        data?: Array<LabOrder>;
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
            url: '/api/lab_orders',
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
     * Create lab orders. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     * @returns LabOrder Created
     * @throws ApiError
     */
    public labOrdersCreate({
        since,
        doctor,
    }: {
        since?: string,
        doctor?: number,
    }): CancelablePromise<LabOrder> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/lab_orders',
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
     * Delete an existing lab order
     * @returns void
     * @throws ApiError
     */
    public labOrdersDelete({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/lab_orders/{id}',
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
     * Retrieve an existing lab order
     * @returns LabOrder OK
     * @throws ApiError
     */
    public labOrdersRead({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<LabOrder> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_orders/{id}',
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
     * Update an existing lab order
     * @returns void
     * @throws ApiError
     */
    public labOrdersPartialUpdate({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/lab_orders/{id}',
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
     * Update an existing lab order
     * @returns void
     * @throws ApiError
     */
    public labOrdersUpdate({
        id,
        since,
        doctor,
    }: {
        id: string,
        since?: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/lab_orders/{id}',
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
     * @returns any OK
     * @throws ApiError
     */
    public labOrdersSummaryList({
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
        data?: Array<LabOrder>;
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
            url: '/api/lab_orders_summary',
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
     * @returns LabOrder OK
     * @throws ApiError
     */
    public labOrdersSummaryRead({
        id,
        since,
        patient,
        doctor,
    }: {
        id: string,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<LabOrder> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_orders_summary/{id}',
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
     * Retrieve or search lab results
     * @returns any OK
     * @throws ApiError
     */
    public labResultsList({
        cursor,
        pageSize,
        order,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        order?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<LabResult>;
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
            url: '/api/lab_results',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'order': order,
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
     * Create lab results. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     * @returns LabResult Created
     * @throws ApiError
     */
    public labResultsCreate({
        order,
        doctor,
    }: {
        order?: number,
        doctor?: number,
    }): CancelablePromise<LabResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/lab_results',
            query: {
                'order': order,
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
     * Delete an existing lab result
     * @returns void
     * @throws ApiError
     */
    public labResultsDelete({
        id,
        order,
        doctor,
    }: {
        id: string,
        order?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Retrieve an existing lab result
     * @returns LabResult OK
     * @throws ApiError
     */
    public labResultsRead({
        id,
        order,
        doctor,
    }: {
        id: string,
        order?: number,
        doctor?: number,
    }): CancelablePromise<LabResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Update an existing lab result
     * @returns void
     * @throws ApiError
     */
    public labResultsPartialUpdate({
        id,
        order,
        doctor,
    }: {
        id: string,
        order?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Update an existing lab result
     * @returns void
     * @throws ApiError
     */
    public labResultsUpdate({
        id,
        order,
        doctor,
    }: {
        id: string,
        order?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Retrieve or search lab tests
     * @returns any OK
     * @throws ApiError
     */
    public labTestsList({
        cursor,
        pageSize,
        order,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        order?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<LabTest>;
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
            url: '/api/lab_tests',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'order': order,
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
     * Create lab tests. An example lab workflow is as following:
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     * @returns LabTest Created
     * @throws ApiError
     */
    public labTestsCreate({
        order,
        doctor,
    }: {
        order?: number,
        doctor?: number,
    }): CancelablePromise<LabTest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/lab_tests',
            query: {
                'order': order,
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
     * Delete an existing lab test
     * @returns void
     * @throws ApiError
     */
    public labTestsDelete({
        id,
        order,
        doctor,
    }: {
        id: string,
        order?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/lab_tests/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Retrieve an existing lab test
     * @returns LabTest OK
     * @throws ApiError
     */
    public labTestsRead({
        id,
        order,
        doctor,
    }: {
        id: string,
        order?: number,
        doctor?: number,
    }): CancelablePromise<LabTest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_tests/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Update an existing lab test
     * @returns void
     * @throws ApiError
     */
    public labTestsPartialUpdate({
        id,
        order,
        doctor,
    }: {
        id: string,
        order?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/lab_tests/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Update an existing lab test
     * @returns void
     * @throws ApiError
     */
    public labTestsUpdate({
        id,
        order,
        doctor,
    }: {
        id: string,
        order?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/lab_tests/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Retrieve or search patient medications
     * @returns any OK
     * @throws ApiError
     */
    public medicationsList({
        cursor,
        pageSize,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientDrug>;
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
            url: '/api/medications',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient medications
     * @returns PatientDrug Created
     * @throws ApiError
     */
    public medicationsCreate({
        patient,
        doctor,
    }: {
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientDrug> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/medications',
            query: {
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
     * Retrieve an existing patient medications
     * @returns PatientDrug OK
     * @throws ApiError
     */
    public medicationsRead({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientDrug> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/medications/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient medications
     * @returns void
     * @throws ApiError
     */
    public medicationsPartialUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/medications/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient medications
     * @returns void
     * @throws ApiError
     */
    public medicationsUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/medications/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
     * @returns void
     * @throws ApiError
     */
    public medicationsAppendToPharmacyNote({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/medications/{id}/append_to_pharmacy_note',
            path: {
                'id': id,
            },
            query: {
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
     * Retrieve or search patient communications for CQM
     * @returns any OK
     * @throws ApiError
     */
    public patientCommunicationsList({
        cursor,
        pageSize,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientCommunication>;
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
            url: '/api/patient_communications',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient communication for CQM
     * @returns PatientCommunication Created
     * @throws ApiError
     */
    public patientCommunicationsCreate({
        patient,
        doctor,
    }: {
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientCommunication> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_communications',
            query: {
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
     * Retrieve an existing patient communication for CQM
     * @returns PatientCommunication OK
     * @throws ApiError
     */
    public patientCommunicationsRead({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientCommunication> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_communications/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient communication for CQM
     * @returns void
     * @throws ApiError
     */
    public patientCommunicationsPartialUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patient_communications/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient communication for CQM
     * @returns void
     * @throws ApiError
     */
    public patientCommunicationsUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patient_communications/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Retrieve or search patient flag types
     * @returns any OK
     * @throws ApiError
     */
    public patientFlagTypesList({
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
        data?: Array<PatientFlagType>;
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
            url: '/api/patient_flag_types',
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
     * Create patient flag types
     * @returns PatientFlagType Created
     * @throws ApiError
     */
    public patientFlagTypesCreate({
        doctor,
    }: {
        doctor?: number,
    }): CancelablePromise<PatientFlagType> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_flag_types',
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
     * Retrieve an existing patient flag type
     * @returns PatientFlagType OK
     * @throws ApiError
     */
    public patientFlagTypesRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<PatientFlagType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_flag_types/{id}',
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
     * Update an existing patient flag type
     * @returns void
     * @throws ApiError
     */
    public patientFlagTypesPartialUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patient_flag_types/{id}',
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
     * Update an existing patient flag type
     * @returns void
     * @throws ApiError
     */
    public patientFlagTypesUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patient_flag_types/{id}',
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
     * Retrieve or search patient interventions for CQM
     * @returns any OK
     * @throws ApiError
     */
    public patientInterventionsList({
        cursor,
        pageSize,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientIntervention>;
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
            url: '/api/patient_interventions',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient intervention for CQM
     * @returns PatientIntervention Created
     * @throws ApiError
     */
    public patientInterventionsCreate({
        patient,
        doctor,
    }: {
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientIntervention> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_interventions',
            query: {
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
     * Retrieve an existing patient intervention for CQM
     * @returns PatientIntervention OK
     * @throws ApiError
     */
    public patientInterventionsRead({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientIntervention> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_interventions/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient intervention for CQM
     * @returns void
     * @throws ApiError
     */
    public patientInterventionsPartialUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patient_interventions/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient intervention for CQM
     * @returns void
     * @throws ApiError
     */
    public patientInterventionsUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patient_interventions/{id}',
            path: {
                'id': id,
            },
            query: {
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
    public patientLabResultsList({
        cursor,
        pageSize,
        orderingDoctor,
        since,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        orderingDoctor?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientLabResultSet>;
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
            url: '/api/patient_lab_results',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'ordering_doctor': orderingDoctor,
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
     * @returns PatientLabResultSet Created
     * @throws ApiError
     */
    public patientLabResultsCreate({
        orderingDoctor,
        since,
        patient,
        doctor,
    }: {
        orderingDoctor?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientLabResultSet> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_lab_results',
            query: {
                'ordering_doctor': orderingDoctor,
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
     * @returns void
     * @throws ApiError
     */
    public patientLabResultsDelete({
        id,
        orderingDoctor,
        since,
        patient,
        doctor,
    }: {
        id: string,
        orderingDoctor?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/patient_lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'ordering_doctor': orderingDoctor,
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
     * @returns PatientLabResultSet OK
     * @throws ApiError
     */
    public patientLabResultsRead({
        id,
        orderingDoctor,
        since,
        patient,
        doctor,
    }: {
        id: string,
        orderingDoctor?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientLabResultSet> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'ordering_doctor': orderingDoctor,
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
     * @returns void
     * @throws ApiError
     */
    public patientLabResultsPartialUpdate({
        id,
        orderingDoctor,
        since,
        patient,
        doctor,
    }: {
        id: string,
        orderingDoctor?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patient_lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'ordering_doctor': orderingDoctor,
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
     * @returns void
     * @throws ApiError
     */
    public patientLabResultsUpdate({
        id,
        orderingDoctor,
        since,
        patient,
        doctor,
    }: {
        id: string,
        orderingDoctor?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patient_lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'ordering_doctor': orderingDoctor,
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
    public patientMessagesList({
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
        data?: Array<PatientMessage>;
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
            url: '/api/patient_messages',
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
     * @returns PatientMessage Created
     * @throws ApiError
     */
    public patientMessagesCreate({
        since,
        patient,
        doctor,
    }: {
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientMessage> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_messages',
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
     * @returns PatientMessage OK
     * @throws ApiError
     */
    public patientMessagesRead({
        id,
        since,
        patient,
        doctor,
    }: {
        id: string,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientMessage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_messages/{id}',
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
     * @returns void
     * @throws ApiError
     */
    public patientMessagesPartialUpdate({
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
            url: '/api/patient_messages/{id}',
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
     * @returns void
     * @throws ApiError
     */
    public patientMessagesUpdate({
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
            url: '/api/patient_messages/{id}',
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
     * Retrieve or search patient physical exams for CQM
     * @returns any OK
     * @throws ApiError
     */
    public patientPhysicalExamsList({
        cursor,
        pageSize,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientPhysicalExam>;
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
            url: '/api/patient_physical_exams',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient physical exam for CQM
     * @returns PatientPhysicalExam Created
     * @throws ApiError
     */
    public patientPhysicalExamsCreate({
        patient,
        doctor,
    }: {
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientPhysicalExam> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_physical_exams',
            query: {
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
     * Retrieve an existing patient physical exam for CQM
     * @returns PatientPhysicalExam OK
     * @throws ApiError
     */
    public patientPhysicalExamsRead({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientPhysicalExam> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_physical_exams/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient physical exam for CQM
     * @returns void
     * @throws ApiError
     */
    public patientPhysicalExamsPartialUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patient_physical_exams/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient physical exam for CQM
     * @returns void
     * @throws ApiError
     */
    public patientPhysicalExamsUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patient_physical_exams/{id}',
            path: {
                'id': id,
            },
            query: {
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
    public patientRiskAssessmentsList({
        cursor,
        pageSize,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientRiskAssessment>;
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
            url: '/api/patient_risk_assessments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * @returns PatientRiskAssessment Created
     * @throws ApiError
     */
    public patientRiskAssessmentsCreate({
        patient,
        doctor,
    }: {
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientRiskAssessment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_risk_assessments',
            query: {
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
     * @returns PatientRiskAssessment OK
     * @throws ApiError
     */
    public patientRiskAssessmentsRead({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientRiskAssessment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_risk_assessments/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * @returns void
     * @throws ApiError
     */
    public patientRiskAssessmentsPartialUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patient_risk_assessments/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * @returns void
     * @throws ApiError
     */
    public patientRiskAssessmentsUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patient_risk_assessments/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Retrieve or search patient vaccine records
     * @returns any OK
     * @throws ApiError
     */
    public patientVaccineRecordsList({
        cursor,
        pageSize,
        cvxCode,
        patient,
        since,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        cvxCode?: string,
        patient?: number,
        since?: string,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientVaccineRecord>;
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
            url: '/api/patient_vaccine_records',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'cvx_code': cvxCode,
                'patient': patient,
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
     * Create patient vaccine records
     * @returns PatientVaccineRecord Created
     * @throws ApiError
     */
    public patientVaccineRecordsCreate({
        cvxCode,
        patient,
        since,
        doctor,
    }: {
        cvxCode?: string,
        patient?: number,
        since?: string,
        doctor?: number,
    }): CancelablePromise<PatientVaccineRecord> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patient_vaccine_records',
            query: {
                'cvx_code': cvxCode,
                'patient': patient,
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
     * Retrieve an existing patient vaccine records
     * @returns PatientVaccineRecord OK
     * @throws ApiError
     */
    public patientVaccineRecordsRead({
        id,
        cvxCode,
        patient,
        since,
        doctor,
    }: {
        id: string,
        cvxCode?: string,
        patient?: number,
        since?: string,
        doctor?: number,
    }): CancelablePromise<PatientVaccineRecord> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_vaccine_records/{id}',
            path: {
                'id': id,
            },
            query: {
                'cvx_code': cvxCode,
                'patient': patient,
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
     * Update an existing patient vaccine records
     * @returns void
     * @throws ApiError
     */
    public patientVaccineRecordsPartialUpdate({
        id,
        cvxCode,
        patient,
        since,
        doctor,
    }: {
        id: string,
        cvxCode?: string,
        patient?: number,
        since?: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patient_vaccine_records/{id}',
            path: {
                'id': id,
            },
            query: {
                'cvx_code': cvxCode,
                'patient': patient,
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
     * Update an existing patient vaccine records
     * @returns void
     * @throws ApiError
     */
    public patientVaccineRecordsUpdate({
        id,
        cvxCode,
        patient,
        since,
        doctor,
    }: {
        id: string,
        cvxCode?: string,
        patient?: number,
        since?: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patient_vaccine_records/{id}',
            path: {
                'id': id,
            },
            query: {
                'cvx_code': cvxCode,
                'patient': patient,
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
     * Retrieve or search patients
     * @returns any OK
     * @throws ApiError
     */
    public patientsList({
        cursor,
        pageSize,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        cursor?: string,
        pageSize?: number,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<Patient>;
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
            url: '/api/patients',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Create patient
     * @returns Patient Created
     * @throws ApiError
     */
    public patientsCreate({
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<Patient> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patients',
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Delete an existing patient
     * @returns void
     * @throws ApiError
     */
    public patientsDelete({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/patients/{id}',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Retrieve an existing patient
     * @returns Patient OK
     * @throws ApiError
     */
    public patientsRead({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<Patient> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patients/{id}',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Update an existing patient
     * @returns void
     * @throws ApiError
     */
    public patientsPartialUpdate({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patients/{id}',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Update an existing patient
     * @returns void
     * @throws ApiError
     */
    public patientsUpdate({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patients/{id}',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Retrieve patient CCDA
     * @returns any OK
     * @throws ApiError
     */
    public patientsCcda({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patients/{id}/ccda',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Revoke sent onpatient invites
     * @returns void
     * @throws ApiError
     */
    public patientsOnpatientAccessDelete({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/patients/{id}/onpatient_access',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Retrieve or search existing onpatient access invites
     * @returns Patient OK
     * @throws ApiError
     */
    public patientsOnpatientAccessRead({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<Patient> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patients/{id}/onpatient_access',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Send new onpatient invite to patient
     * @returns Patient Created
     * @throws ApiError
     */
    public patientsOnpatientAccessCreate({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<Patient> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patients/{id}/onpatient_access',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
     * Retrieve patient QRDA1
     * @returns any OK
     * @throws ApiError
     */
    public patientsQrda1({
        id,
        firstName,
        lastName,
        preferredLanguage,
        doctor,
        gender,
        since,
        dateOfBirth,
        race,
        chartId,
        email,
        ethnicity,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        preferredLanguage?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
        race?: string,
        chartId?: string,
        email?: string,
        ethnicity?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patients/{id}/qrda1',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'preferred_language': preferredLanguage,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
                'race': race,
                'chart_id': chartId,
                'email': email,
                'ethnicity': ethnicity,
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
    public patientsSummaryList({
        cursor,
        pageSize,
        firstName,
        lastName,
        doctor,
        gender,
        since,
        dateOfBirth,
    }: {
        cursor?: string,
        pageSize?: number,
        firstName?: string,
        lastName?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<Patient>;
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
            url: '/api/patients_summary',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'first_name': firstName,
                'last_name': lastName,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
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
     * @returns Patient Created
     * @throws ApiError
     */
    public patientsSummaryCreate({
        firstName,
        lastName,
        doctor,
        gender,
        since,
        dateOfBirth,
    }: {
        firstName?: string,
        lastName?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
    }): CancelablePromise<Patient> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/patients_summary',
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
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
    public patientsSummaryDelete({
        id,
        firstName,
        lastName,
        doctor,
        gender,
        since,
        dateOfBirth,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/patients_summary/{id}',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
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
     * @returns Patient OK
     * @throws ApiError
     */
    public patientsSummaryRead({
        id,
        firstName,
        lastName,
        doctor,
        gender,
        since,
        dateOfBirth,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
    }): CancelablePromise<Patient> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patients_summary/{id}',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
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
    public patientsSummaryPartialUpdate({
        id,
        firstName,
        lastName,
        doctor,
        gender,
        since,
        dateOfBirth,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/patients_summary/{id}',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
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
    public patientsSummaryUpdate({
        id,
        firstName,
        lastName,
        doctor,
        gender,
        since,
        dateOfBirth,
    }: {
        id: string,
        firstName?: string,
        lastName?: string,
        doctor?: number,
        gender?: string,
        since?: string,
        dateOfBirth?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/patients_summary/{id}',
            path: {
                'id': id,
            },
            query: {
                'first_name': firstName,
                'last_name': lastName,
                'doctor': doctor,
                'gender': gender,
                'since': since,
                'date_of_birth': dateOfBirth,
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
     * Retrieve or search prescription messages
     * @returns any OK
     * @throws ApiError
     */
    public prescriptionMessagesList({
        cursor,
        pageSize,
        parentMessage,
        since,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        parentMessage?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PrescriptionMessage>;
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
            url: '/api/prescription_messages',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'parent_message': parentMessage,
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
     * Retrieve an existing prescription message
     * @returns PrescriptionMessage OK
     * @throws ApiError
     */
    public prescriptionMessagesRead({
        id,
        parentMessage,
        since,
        patient,
        doctor,
    }: {
        id: string,
        parentMessage?: number,
        since?: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PrescriptionMessage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/prescription_messages/{id}',
            path: {
                'id': id,
            },
            query: {
                'parent_message': parentMessage,
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
     * Retrieve or search patient problems
     * @returns any OK
     * @throws ApiError
     */
    public problemsList({
        cursor,
        pageSize,
        patient,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<PatientProblem>;
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
            url: '/api/problems',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient problems
     * @returns PatientProblem Created
     * @throws ApiError
     */
    public problemsCreate({
        patient,
        doctor,
    }: {
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientProblem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/problems',
            query: {
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
     * Retrieve an existing patient problems
     * @returns PatientProblem OK
     * @throws ApiError
     */
    public problemsRead({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<PatientProblem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/problems/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient problems
     * @returns void
     * @throws ApiError
     */
    public problemsPartialUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/problems/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient problems
     * @returns void
     * @throws ApiError
     */
    public problemsUpdate({
        id,
        patient,
        doctor,
    }: {
        id: string,
        patient?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/problems/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Retrieve or search reminder profiles
     * @returns any OK
     * @throws ApiError
     */
    public reminderProfilesList({
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
        data?: Array<ReminderProfile>;
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
            url: '/api/reminder_profiles',
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
     * Create reminder profile
     * @returns ReminderProfile Created
     * @throws ApiError
     */
    public reminderProfilesCreate({
        doctor,
    }: {
        doctor?: number,
    }): CancelablePromise<ReminderProfile> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/reminder_profiles',
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
     * Delete an existing reminder profile
     * @returns void
     * @throws ApiError
     */
    public reminderProfilesDelete({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/reminder_profiles/{id}',
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
     * Retrieve an existing reminder profile
     * @returns ReminderProfile OK
     * @throws ApiError
     */
    public reminderProfilesRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<ReminderProfile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/reminder_profiles/{id}',
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
     * Update an existing reminder profile
     * @returns void
     * @throws ApiError
     */
    public reminderProfilesPartialUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/reminder_profiles/{id}',
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
     * Update an existing reminder profile
     * @returns void
     * @throws ApiError
     */
    public reminderProfilesUpdate({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/reminder_profiles/{id}',
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
     * @returns any OK
     * @throws ApiError
     */
    public staffList({
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
        data?: Array<Staff>;
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
            url: '/api/staff',
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
     * @returns Staff OK
     * @throws ApiError
     */
    public staffRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<Staff> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/staff/{id}',
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
     * Retrieve or search sub vendors
     * @returns any OK
     * @throws ApiError
     */
    public sublabsList({
        cursor,
        pageSize,
    }: {
        cursor?: string,
        pageSize?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<LabVendorLocation>;
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
            url: '/api/sublabs',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create sub-vendors
     *
     * - When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.
     *
     * - When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`
     *
     * - Update `/api/lab_orders` status
     *
     * @returns LabVendorLocation Created
     * @throws ApiError
     */
    public sublabsCreate(): CancelablePromise<LabVendorLocation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/sublabs',
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
     * Delete an existing sub vendor
     * @returns void
     * @throws ApiError
     */
    public sublabsDelete({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/sublabs/{id}',
            path: {
                'id': id,
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
     * Retrieve an existing sub vendor
     * @returns LabVendorLocation OK
     * @throws ApiError
     */
    public sublabsRead({
        id,
    }: {
        id: number,
    }): CancelablePromise<LabVendorLocation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/sublabs/{id}',
            path: {
                'id': id,
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
     * Update an existing sub vendor
     * @returns void
     * @throws ApiError
     */
    public sublabsPartialUpdate({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/sublabs/{id}',
            path: {
                'id': id,
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
     * Update an existing sub vendor
     * @returns void
     * @throws ApiError
     */
    public sublabsUpdate({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/sublabs/{id}',
            path: {
                'id': id,
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
    public telehealthAppointmentHistoryList({
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
        data?: Array<TelemedicineAppointmentEventLog>;
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
            url: '/api/telehealth_appointment_history',
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
     * @returns TelemedicineAppointmentEventLog Created
     * @throws ApiError
     */
    public telehealthAppointmentHistoryCreate({
        doctor,
    }: {
        doctor?: number,
    }): CancelablePromise<TelemedicineAppointmentEventLog> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/telehealth_appointment_history',
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
     * @returns TelemedicineAppointmentEventLog OK
     * @throws ApiError
     */
    public telehealthAppointmentHistoryRead({
        id,
        doctor,
    }: {
        id: string,
        doctor?: number,
    }): CancelablePromise<TelemedicineAppointmentEventLog> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/telehealth_appointment_history/{id}',
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
     * @returns any OK
     * @throws ApiError
     */
    public telehealthAppointmentsList({
        cursor,
        pageSize,
        appointment,
        doctor,
    }: {
        cursor?: string,
        pageSize?: number,
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<{
        /**
         * result data
         */
        data?: Array<TelemedicineAppointment>;
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
            url: '/api/telehealth_appointments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'appointment': appointment,
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
     * @returns TelemedicineAppointment Created
     * @throws ApiError
     */
    public telehealthAppointmentsCreate({
        appointment,
        doctor,
    }: {
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<TelemedicineAppointment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/telehealth_appointments',
            query: {
                'appointment': appointment,
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
     * @returns TelemedicineAppointment OK
     * @throws ApiError
     */
    public telehealthAppointmentsRead({
        id,
        appointment,
        doctor,
    }: {
        id: string,
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<TelemedicineAppointment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/telehealth_appointments/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * @returns void
     * @throws ApiError
     */
    public telehealthAppointmentsPartialUpdate({
        id,
        appointment,
        doctor,
    }: {
        id: string,
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/telehealth_appointments/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * @returns void
     * @throws ApiError
     */
    public telehealthAppointmentsUpdate({
        id,
        appointment,
        doctor,
    }: {
        id: string,
        appointment?: number,
        doctor?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/telehealth_appointments/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
