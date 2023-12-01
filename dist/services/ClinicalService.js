"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicalService = void 0;
class ClinicalService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Retrieve or search patient allergies
     * @returns any OK
     * @throws ApiError
     */
    allergiesList({ cursor, pageSize, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/allergies',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient allergy
     * @returns PatientAllergy Created
     * @throws ApiError
     */
    allergiesCreate({ patient, doctor, }) {
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
    allergiesRead({ id, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/allergies/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient allergy
     * @returns void
     * @throws ApiError
     */
    allergiesPartialUpdate({ id, patient, doctor, }) {
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
    allergiesUpdate({ id, patient, doctor, }) {
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
    amendmentsList({ cursor, pageSize, appointment, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/amendments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'appointment': appointment,
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
     * Create patient amendments to a patient's clinical records
     * @returns PatientAmendment Created
     * @throws ApiError
     */
    amendmentsCreate({ appointment, patient, doctor, }) {
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
    amendmentsDelete({ id, appointment, patient, doctor, }) {
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
    amendmentsRead({ id, appointment, patient, doctor, verbose, }) {
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
     * Update an existing patient amendment, you can only interact with amendments created by your API application
     * @returns void
     * @throws ApiError
     */
    amendmentsPartialUpdate({ id, appointment, patient, doctor, }) {
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
    amendmentsUpdate({ id, appointment, patient, doctor, }) {
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
    appointmentProfilesList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/appointment_profiles',
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
     * Create appointment profiles for a doctor's calendar
     * @returns AppointmentProfile Created
     * @throws ApiError
     */
    appointmentProfilesCreate({ doctor, }) {
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
    appointmentProfilesDelete({ id, doctor, }) {
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
    appointmentProfilesRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/appointment_profiles/{id}',
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
     * Update an existing appointment profile
     * @returns void
     * @throws ApiError
     */
    appointmentProfilesPartialUpdate({ id, doctor, }) {
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
    appointmentProfilesUpdate({ id, doctor, }) {
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
    appointmentTemplatesList({ cursor, pageSize, profile, office, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/appointment_templates',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'profile': profile,
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
     * Create appointment templates for a doctor's calendar
     * @returns AppointmentTemplate Created
     * @throws ApiError
     */
    appointmentTemplatesCreate({ profile, office, doctor, }) {
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
    appointmentTemplatesDelete({ id, profile, office, doctor, }) {
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
    appointmentTemplatesRead({ id, profile, office, doctor, verbose, }) {
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
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    appointmentTemplatesPartialUpdate({ id, profile, office, doctor, }) {
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
    appointmentTemplatesUpdate({ id, profile, office, doctor, }) {
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
    appointmentsList({ cursor, pageSize, status, patient, office, doctor, since, occurredSince, dateRange, date, verbose, }) {
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
     * Create a new appointment or break on doctor's calendar
     * @returns Appointment Created
     * @throws ApiError
     */
    appointmentsCreate({ status, patient, office, doctor, since, dateRange, date, }) {
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
    appointmentsDelete({ id, status, patient, office, doctor, since, dateRange, date, }) {
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
    appointmentsRead({ id, status, patient, office, doctor, since, dateRange, date, verbose, }) {
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
     * Update an existing appointment or break
     * @returns void
     * @throws ApiError
     */
    appointmentsPartialUpdate({ id, status, patient, office, doctor, since, dateRange, date, }) {
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
    appointmentsUpdate({ id, status, patient, office, doctor, since, dateRange, date, }) {
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
    appointmentsListList({ cursor, pageSize, status, patient, office, doctor, since, dateRange, date, verbose, }) {
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
     * @returns Appointment Created
     * @throws ApiError
     */
    appointmentsListCreate({ status, patient, office, doctor, since, dateRange, date, }) {
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
    appointmentsListDelete({ id, status, patient, office, doctor, since, dateRange, date, }) {
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
    appointmentsListRead({ id, status, patient, office, doctor, since, dateRange, date, verbose, }) {
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
    appointmentsListPartialUpdate({ id, status, patient, office, doctor, since, dateRange, date, }) {
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
    appointmentsListUpdate({ id, status, patient, office, doctor, since, dateRange, date, }) {
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
    carePlansList({ cursor, pageSize, patient, planType, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/care_plans',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'patient': patient,
                'plan_type': planType,
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
     * Retrieve an existing care plan
     * @returns CarePlan OK
     * @throws ApiError
     */
    carePlansRead({ id, patient, planType, doctor, verbose, }) {
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
    careTeamMembersList({ cursor, pageSize, patient, appointment, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/care_team_members',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'patient': patient,
                'appointment': appointment,
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
     * @returns CareTeamMember OK
     * @throws ApiError
     */
    careTeamMembersRead({ id, patient, appointment, doctor, verbose, }) {
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
     * Retrieve or search billing notes
     * @returns any OK
     * @throws ApiError
     */
    claimBillingNotesList({ cursor, pageSize, appointment, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/claim_billing_notes',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'appointment': appointment,
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
     * Create a new billing note
     * @returns ClaimBillingNotes Created
     * @throws ApiError
     */
    claimBillingNotesCreate({ appointment, doctor, }) {
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
    claimBillingNotesRead({ id, appointment, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/claim_billing_notes/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * Retrieve or search clinical note field types
     * @returns any OK
     * @throws ApiError
     */
    clinicalNoteFieldTypesList({ cursor, pageSize, clinicalNoteTemplate, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/clinical_note_field_types',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'clinical_note_template': clinicalNoteTemplate,
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
     * Retrieve an existing clinial note field type
     * @returns SoapNoteLineItemFieldType OK
     * @throws ApiError
     */
    clinicalNoteFieldTypesRead({ id, clinicalNoteTemplate, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/clinical_note_field_types/{id}',
            path: {
                'id': id,
            },
            query: {
                'clinical_note_template': clinicalNoteTemplate,
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
     * Retrieve or search clinical note field values
     * @returns any OK
     * @throws ApiError
     */
    clinicalNoteFieldValuesList({ cursor, pageSize, clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, verbose, }) {
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
     * Create clinical note field value
     * @returns SoapNoteLineItemFieldValue Created
     * @throws ApiError
     */
    clinicalNoteFieldValuesCreate({ clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, }) {
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
    clinicalNoteFieldValuesRead({ id, clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, verbose, }) {
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
     * Update an existing clinical note field value
     * @returns void
     * @throws ApiError
     */
    clinicalNoteFieldValuesPartialUpdate({ id, clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, }) {
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
    clinicalNoteFieldValuesUpdate({ id, clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, }) {
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
    clinicalNoteTemplatesList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/clinical_note_templates',
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
     * Retrieve an existing clinical note tempalte
     * @returns SoapNoteCustomReport OK
     * @throws ApiError
     */
    clinicalNoteTemplatesRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/clinical_note_templates/{id}',
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
     * @returns any OK
     * @throws ApiError
     */
    clinicalNotesList({ cursor, pageSize, patient, office, doctor, since, dateRange, date, verbose, }) {
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
     * @returns ClinicalNote OK
     * @throws ApiError
     */
    clinicalNotesRead({ id, patient, office, doctor, since, dateRange, date, verbose, }) {
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
     * Retrieve or search patient consent forms
     * @returns any OK
     * @throws ApiError
     */
    consentFormsList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/consent_forms',
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
     * Create a patient consent form
     * @returns ConsentForm Created
     * @throws ApiError
     */
    consentFormsCreate({ doctor, }) {
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
    consentFormsRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/consent_forms/{id}',
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
     * Update an existing patient consent form
     * @returns void
     * @throws ApiError
     */
    consentFormsPartialUpdate({ id, doctor, }) {
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
    consentFormsUpdate({ id, doctor, }) {
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
    consentFormsApplyToAppointment({ id, doctor, }) {
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
    consentFormsUnapplyFromAppointment({ id, doctor, }) {
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
    customAppointmentFieldsList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_appointment_fields',
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
     * Create custom appointment fields
     * @returns CustomAppointmentFieldType Created
     * @throws ApiError
     */
    customAppointmentFieldsCreate({ doctor, }) {
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
    customAppointmentFieldsRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_appointment_fields/{id}',
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
     * Update an existing custom appointment field
     * @returns void
     * @throws ApiError
     */
    customAppointmentFieldsPartialUpdate({ id, doctor, }) {
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
    customAppointmentFieldsUpdate({ id, doctor, }) {
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
    customDemographicsList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_demographics',
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
     * Create custom demographics fields
     * @returns CustomPatientFieldType Created
     * @throws ApiError
     */
    customDemographicsCreate({ doctor, }) {
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
    customDemographicsRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_demographics/{id}',
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
     * Update an existing custom demographics field
     * @returns void
     * @throws ApiError
     */
    customDemographicsPartialUpdate({ id, doctor, }) {
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
    customDemographicsUpdate({ id, doctor, }) {
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
    customVitalsList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_vitals',
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
     * Retrieve an existing custom vital type
     * @returns CustomVitalType OK
     * @throws ApiError
     */
    customVitalsRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/custom_vitals/{id}',
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
     * Retrieve or search documents
     * @returns any OK
     * @throws ApiError
     */
    documentsList({ cursor, pageSize, since, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/documents',
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
     * Create documents
     * @returns ScannedClinicalDocument Created
     * @throws ApiError
     */
    documentsCreate({ since, patient, doctor, }) {
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
    documentsDelete({ id, since, patient, doctor, }) {
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
    documentsRead({ id, since, patient, doctor, verbose, }) {
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
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    documentsPartialUpdate({ id, since, patient, doctor, }) {
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
    documentsUpdate({ id, since, patient, doctor, }) {
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
    eobsList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/eobs',
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
     * Create EOB object
     * @returns EOBObject Created
     * @throws ApiError
     */
    eobsCreate({ doctor, }) {
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
    eobsRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/eobs/{id}',
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
     * @returns any OK
     * @throws ApiError
     */
    feeSchedulesList({ cursor, pageSize, code, codeType, since, payerId, doctor, verbose, }) {
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
     * @returns DoctorFeeSchedule OK
     * @throws ApiError
     */
    feeSchedulesRead({ id, code, codeType, since, payerId, doctor, verbose, }) {
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
    feeSchedulesV2List({ cursor, pageSize, payerId, planName, specialities, assignees, assigneeType, effectiveDate, ineffectiveDate, verbose, }) {
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
     * @returns FeeSchedule OK
     * @throws ApiError
     */
    feeSchedulesV2Read({ id, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/fee_schedules_v2/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Retrieve or search implantable devices
     * @returns any OK
     * @throws ApiError
     */
    implantableDevicesList({ cursor, pageSize, muDate, patient, muDateRange, doctor, verbose, }) {
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
     * Retrieve an existing implantable device
     * @returns ImplantableDevice OK
     * @throws ApiError
     */
    implantableDevicesRead({ id, muDate, patient, muDateRange, doctor, verbose, }) {
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
    insurancesList({ payerType, cursor, pageSize, term, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/insurances',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'payer_type': payerType,
                'term': term,
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
     * @returns Insurance OK
     * @throws ApiError
     */
    insurancesRead({ id, payerType, term, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/insurances/{id}',
            path: {
                'id': id,
            },
            query: {
                'payer_type': payerType,
                'term': term,
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
     * Retrieve or search lab order documents
     * @returns any OK
     * @throws ApiError
     */
    labDocumentsList({ cursor, pageSize, since, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_documents',
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
    labDocumentsCreate({ since, doctor, }) {
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
    labDocumentsDelete({ id, since, doctor, }) {
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
    labDocumentsRead({ id, since, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_documents/{id}',
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
     * Update an existing lab order document
     * @returns void
     * @throws ApiError
     */
    labDocumentsPartialUpdate({ id, since, doctor, }) {
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
    labDocumentsUpdate({ id, since, doctor, }) {
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
    labOrdersList({ cursor, pageSize, since, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_orders',
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
    labOrdersCreate({ since, doctor, }) {
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
    labOrdersDelete({ id, since, doctor, }) {
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
    labOrdersRead({ id, since, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_orders/{id}',
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
     * Update an existing lab order
     * @returns void
     * @throws ApiError
     */
    labOrdersPartialUpdate({ id, since, doctor, }) {
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
    labOrdersUpdate({ id, since, doctor, }) {
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
    labOrdersSummaryList({ cursor, pageSize, since, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_orders_summary',
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
     * @returns LabOrder OK
     * @throws ApiError
     */
    labOrdersSummaryRead({ id, since, patient, doctor, verbose, }) {
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
     * Retrieve or search lab results
     * @returns any OK
     * @throws ApiError
     */
    labResultsList({ cursor, pageSize, order, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_results',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'order': order,
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
    labResultsCreate({ order, doctor, }) {
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
    labResultsDelete({ id, order, doctor, }) {
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
    labResultsRead({ id, order, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_results/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Update an existing lab result
     * @returns void
     * @throws ApiError
     */
    labResultsPartialUpdate({ id, order, doctor, }) {
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
    labResultsUpdate({ id, order, doctor, }) {
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
    labTestsList({ cursor, pageSize, order, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_tests',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'order': order,
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
    labTestsCreate({ order, doctor, }) {
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
    labTestsDelete({ id, order, doctor, }) {
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
    labTestsRead({ id, order, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/lab_tests/{id}',
            path: {
                'id': id,
            },
            query: {
                'order': order,
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
     * Update an existing lab test
     * @returns void
     * @throws ApiError
     */
    labTestsPartialUpdate({ id, order, doctor, }) {
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
    labTestsUpdate({ id, order, doctor, }) {
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
    medicationsList({ cursor, pageSize, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/medications',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient medications
     * @returns PatientDrug Created
     * @throws ApiError
     */
    medicationsCreate({ patient, doctor, }) {
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
    medicationsRead({ id, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/medications/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient medications
     * @returns void
     * @throws ApiError
     */
    medicationsPartialUpdate({ id, patient, doctor, }) {
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
    medicationsUpdate({ id, patient, doctor, }) {
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
    medicationsAppendToPharmacyNote({ id, patient, doctor, }) {
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
    patientCommunicationsList({ cursor, pageSize, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_communications',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient communication for CQM
     * @returns PatientCommunication Created
     * @throws ApiError
     */
    patientCommunicationsCreate({ patient, doctor, }) {
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
    patientCommunicationsRead({ id, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_communications/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient communication for CQM
     * @returns void
     * @throws ApiError
     */
    patientCommunicationsPartialUpdate({ id, patient, doctor, }) {
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
    patientCommunicationsUpdate({ id, patient, doctor, }) {
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
    patientFlagTypesList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_flag_types',
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
     * Create patient flag types
     * @returns PatientFlagType Created
     * @throws ApiError
     */
    patientFlagTypesCreate({ doctor, }) {
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
    patientFlagTypesRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_flag_types/{id}',
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
     * Update an existing patient flag type
     * @returns void
     * @throws ApiError
     */
    patientFlagTypesPartialUpdate({ id, doctor, }) {
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
    patientFlagTypesUpdate({ id, doctor, }) {
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
    patientInterventionsList({ cursor, pageSize, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_interventions',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient intervention for CQM
     * @returns PatientIntervention Created
     * @throws ApiError
     */
    patientInterventionsCreate({ patient, doctor, }) {
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
    patientInterventionsRead({ id, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_interventions/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient intervention for CQM
     * @returns void
     * @throws ApiError
     */
    patientInterventionsPartialUpdate({ id, patient, doctor, }) {
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
    patientInterventionsUpdate({ id, patient, doctor, }) {
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
    patientLabResultsList({ cursor, pageSize, orderingDoctor, since, patient, doctor, verbose, }) {
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
     * @returns PatientLabResultSet Created
     * @throws ApiError
     */
    patientLabResultsCreate({ orderingDoctor, since, patient, doctor, }) {
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
    patientLabResultsDelete({ id, orderingDoctor, since, patient, doctor, }) {
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
    patientLabResultsRead({ id, orderingDoctor, since, patient, doctor, verbose, }) {
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
    patientLabResultsPartialUpdate({ id, orderingDoctor, since, patient, doctor, }) {
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
    patientLabResultsUpdate({ id, orderingDoctor, since, patient, doctor, }) {
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
    patientMessagesList({ cursor, pageSize, since, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_messages',
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
     * @returns PatientMessage Created
     * @throws ApiError
     */
    patientMessagesCreate({ since, patient, doctor, }) {
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
    patientMessagesRead({ id, since, patient, doctor, verbose, }) {
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
    patientMessagesPartialUpdate({ id, since, patient, doctor, }) {
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
    patientMessagesUpdate({ id, since, patient, doctor, }) {
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
    patientPhysicalExamsList({ cursor, pageSize, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_physical_exams',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient physical exam for CQM
     * @returns PatientPhysicalExam Created
     * @throws ApiError
     */
    patientPhysicalExamsCreate({ patient, doctor, }) {
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
    patientPhysicalExamsRead({ id, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_physical_exams/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient physical exam for CQM
     * @returns void
     * @throws ApiError
     */
    patientPhysicalExamsPartialUpdate({ id, patient, doctor, }) {
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
    patientPhysicalExamsUpdate({ id, patient, doctor, }) {
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
    patientRiskAssessmentsList({ cursor, pageSize, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_risk_assessments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * @returns PatientRiskAssessment Created
     * @throws ApiError
     */
    patientRiskAssessmentsCreate({ patient, doctor, }) {
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
    patientRiskAssessmentsRead({ id, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/patient_risk_assessments/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * @returns void
     * @throws ApiError
     */
    patientRiskAssessmentsPartialUpdate({ id, patient, doctor, }) {
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
    patientRiskAssessmentsUpdate({ id, patient, doctor, }) {
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
    patientVaccineRecordsList({ cursor, pageSize, cvxCode, patient, since, doctor, verbose, }) {
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
     * Create patient vaccine records
     * @returns PatientVaccineRecord Created
     * @throws ApiError
     */
    patientVaccineRecordsCreate({ cvxCode, patient, since, doctor, }) {
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
    patientVaccineRecordsRead({ id, cvxCode, patient, since, doctor, verbose, }) {
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
     * Update an existing patient vaccine records
     * @returns void
     * @throws ApiError
     */
    patientVaccineRecordsPartialUpdate({ id, cvxCode, patient, since, doctor, }) {
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
    patientVaccineRecordsUpdate({ id, cvxCode, patient, since, doctor, }) {
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
    patientsList({ cursor, pageSize, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }) {
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
     * Create patient
     * @returns Patient Created
     * @throws ApiError
     */
    patientsCreate({ firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }) {
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
    patientsDelete({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }) {
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
    patientsRead({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }) {
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
     * Update an existing patient
     * @returns void
     * @throws ApiError
     */
    patientsPartialUpdate({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }) {
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
    patientsUpdate({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }) {
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
    patientsCcda({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }) {
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
     * Revoke sent onpatient invites
     * @returns void
     * @throws ApiError
     */
    patientsOnpatientAccessDelete({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }) {
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
    patientsOnpatientAccessRead({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }) {
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
     * Send new onpatient invite to patient
     * @returns Patient Created
     * @throws ApiError
     */
    patientsOnpatientAccessCreate({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }) {
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
    patientsQrda1({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }) {
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
    patientsSummaryList({ cursor, pageSize, firstName, lastName, doctor, gender, since, dateOfBirth, verbose, }) {
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
     * @returns Patient Created
     * @throws ApiError
     */
    patientsSummaryCreate({ firstName, lastName, doctor, gender, since, dateOfBirth, }) {
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
    patientsSummaryDelete({ id, firstName, lastName, doctor, gender, since, dateOfBirth, }) {
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
    patientsSummaryRead({ id, firstName, lastName, doctor, gender, since, dateOfBirth, verbose, }) {
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
    patientsSummaryPartialUpdate({ id, firstName, lastName, doctor, gender, since, dateOfBirth, }) {
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
    patientsSummaryUpdate({ id, firstName, lastName, doctor, gender, since, dateOfBirth, }) {
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
    prescriptionMessagesList({ cursor, pageSize, parentMessage, since, patient, doctor, verbose, }) {
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
     * Retrieve an existing prescription message
     * @returns PrescriptionMessage OK
     * @throws ApiError
     */
    prescriptionMessagesRead({ id, parentMessage, since, patient, doctor, verbose, }) {
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
     * Retrieve or search patient problems
     * @returns any OK
     * @throws ApiError
     */
    problemsList({ cursor, pageSize, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/problems',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
     * Create patient problems
     * @returns PatientProblem Created
     * @throws ApiError
     */
    problemsCreate({ patient, doctor, }) {
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
    problemsRead({ id, patient, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/problems/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing patient problems
     * @returns void
     * @throws ApiError
     */
    problemsPartialUpdate({ id, patient, doctor, }) {
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
    problemsUpdate({ id, patient, doctor, }) {
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
    reminderProfilesList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/reminder_profiles',
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
     * Create reminder profile
     * @returns ReminderProfile Created
     * @throws ApiError
     */
    reminderProfilesCreate({ doctor, }) {
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
    reminderProfilesDelete({ id, doctor, }) {
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
    reminderProfilesRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/reminder_profiles/{id}',
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
     * Update an existing reminder profile
     * @returns void
     * @throws ApiError
     */
    reminderProfilesPartialUpdate({ id, doctor, }) {
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
    reminderProfilesUpdate({ id, doctor, }) {
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
    staffList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/staff',
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
     * @returns Staff OK
     * @throws ApiError
     */
    staffRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/staff/{id}',
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
     * Retrieve or search sub vendors
     * @returns any OK
     * @throws ApiError
     */
    sublabsList({ cursor, pageSize, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/sublabs',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
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
    sublabsCreate() {
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
    sublabsDelete({ id, }) {
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
    sublabsRead({ id, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/sublabs/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * Update an existing sub vendor
     * @returns void
     * @throws ApiError
     */
    sublabsPartialUpdate({ id, }) {
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
    sublabsUpdate({ id, }) {
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
    telehealthAppointmentHistoryList({ cursor, pageSize, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/telehealth_appointment_history',
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
     * @returns TelemedicineAppointmentEventLog Created
     * @throws ApiError
     */
    telehealthAppointmentHistoryCreate({ doctor, }) {
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
    telehealthAppointmentHistoryRead({ id, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/telehealth_appointment_history/{id}',
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
     * @returns any OK
     * @throws ApiError
     */
    telehealthAppointmentsList({ cursor, pageSize, appointment, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/telehealth_appointments',
            query: {
                'cursor': cursor,
                'page_size': pageSize,
                'appointment': appointment,
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
     * @returns TelemedicineAppointment Created
     * @throws ApiError
     */
    telehealthAppointmentsCreate({ appointment, doctor, }) {
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
    telehealthAppointmentsRead({ id, appointment, doctor, verbose, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/telehealth_appointments/{id}',
            path: {
                'id': id,
            },
            query: {
                'appointment': appointment,
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
     * @returns void
     * @throws ApiError
     */
    telehealthAppointmentsPartialUpdate({ id, appointment, doctor, }) {
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
    telehealthAppointmentsUpdate({ id, appointment, doctor, }) {
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
exports.ClinicalService = ClinicalService;
