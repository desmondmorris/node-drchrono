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
export declare class ClinicalService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Retrieve or search patient allergies
     * @returns any OK
     * @throws ApiError
     */
    allergiesList({ cursor, pageSize, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientAllergy>;
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
     * Create patient allergy
     * @returns PatientAllergy Created
     * @throws ApiError
     */
    allergiesCreate({ patient, doctor, }: {
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientAllergy>;
    /**
     * Retrieve an existing patient allergy
     * @returns PatientAllergy OK
     * @throws ApiError
     */
    allergiesRead({ id, patient, doctor, verbose, }: {
        id: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientAllergy>;
    /**
     * Update an existing patient allergy
     * @returns void
     * @throws ApiError
     */
    allergiesPartialUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient allergy
     * @returns void
     * @throws ApiError
     */
    allergiesUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patient amendments. You can only interact with amendments created by your API application
     * @returns any OK
     * @throws ApiError
     */
    amendmentsList({ cursor, pageSize, appointment, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        appointment?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientAmendment>;
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
     * Create patient amendments to a patient's clinical records
     * @returns PatientAmendment Created
     * @throws ApiError
     */
    amendmentsCreate({ appointment, patient, doctor, }: {
        appointment?: number;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientAmendment>;
    /**
     * Delete an existing patient amendment, you can only interact with amendments created by your API application
     * @returns void
     * @throws ApiError
     */
    amendmentsDelete({ id, appointment, patient, doctor, }: {
        id: string;
        appointment?: number;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing patient amendment, you can only interact with amendments created by your API application
     * @returns PatientAmendment OK
     * @throws ApiError
     */
    amendmentsRead({ id, appointment, patient, doctor, verbose, }: {
        id: string;
        appointment?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientAmendment>;
    /**
     * Update an existing patient amendment, you can only interact with amendments created by your API application
     * @returns void
     * @throws ApiError
     */
    amendmentsPartialUpdate({ id, appointment, patient, doctor, }: {
        id: string;
        appointment?: number;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient amendment, you can only interact with amendments created by your API application
     * @returns void
     * @throws ApiError
     */
    amendmentsUpdate({ id, appointment, patient, doctor, }: {
        id: string;
        appointment?: number;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search appointment profiles for a doctor's calendar
     * @returns any OK
     * @throws ApiError
     */
    appointmentProfilesList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<AppointmentProfile>;
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
     * Create appointment profiles for a doctor's calendar
     * @returns AppointmentProfile Created
     * @throws ApiError
     */
    appointmentProfilesCreate({ doctor, }: {
        doctor?: number;
    }): CancelablePromise<AppointmentProfile>;
    /**
     * Delete an existing appointment profile
     * @returns void
     * @throws ApiError
     */
    appointmentProfilesDelete({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing appointment profile
     * @returns AppointmentProfile OK
     * @throws ApiError
     */
    appointmentProfilesRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<AppointmentProfile>;
    /**
     * Update an existing appointment profile
     * @returns void
     * @throws ApiError
     */
    appointmentProfilesPartialUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing appointment profile
     * @returns void
     * @throws ApiError
     */
    appointmentProfilesUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search appointment templates for a doctor's calendar
     * @returns any OK
     * @throws ApiError
     */
    appointmentTemplatesList({ cursor, pageSize, profile, office, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        profile?: number;
        office?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<AppointmentTemplate>;
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
     * Create appointment templates for a doctor's calendar
     * @returns AppointmentTemplate Created
     * @throws ApiError
     */
    appointmentTemplatesCreate({ profile, office, doctor, }: {
        profile?: number;
        office?: number;
        doctor?: number;
    }): CancelablePromise<AppointmentTemplate>;
    /**
     * Delete an existing appointment template
     * @returns void
     * @throws ApiError
     */
    appointmentTemplatesDelete({ id, profile, office, doctor, }: {
        id: string;
        profile?: number;
        office?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing appointment template
     * @returns AppointmentTemplate OK
     * @throws ApiError
     */
    appointmentTemplatesRead({ id, profile, office, doctor, verbose, }: {
        id: string;
        profile?: number;
        office?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<AppointmentTemplate>;
    /**
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    appointmentTemplatesPartialUpdate({ id, profile, office, doctor, }: {
        id: string;
        profile?: number;
        office?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    appointmentTemplatesUpdate({ id, profile, office, doctor, }: {
        id: string;
        profile?: number;
        office?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search appointment or breaks.
     * <b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
     *
     * @returns any OK
     * @throws ApiError
     */
    appointmentsList({ cursor, pageSize, status, patient, office, doctor, since, occurredSince, dateRange, date, verbose, }: {
        cursor?: string;
        pageSize?: number;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        /**
         * Filter appointments based on scheduled time
         */
        occurredSince?: string;
        dateRange?: string;
        date?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Appointment>;
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
     * Create a new appointment or break on doctor's calendar
     * @returns Appointment Created
     * @throws ApiError
     */
    appointmentsCreate({ status, patient, office, doctor, since, dateRange, date, }: {
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
    }): CancelablePromise<Appointment>;
    /**
     * Delete an existing appointment or break
     * @returns void
     * @throws ApiError
     */
    appointmentsDelete({ id, status, patient, office, doctor, since, dateRange, date, }: {
        id: string;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing appointment or break
     * @returns Appointment OK
     * @throws ApiError
     */
    appointmentsRead({ id, status, patient, office, doctor, since, dateRange, date, verbose, }: {
        id: string;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
        verbose?: number;
    }): CancelablePromise<Appointment>;
    /**
     * Update an existing appointment or break
     * @returns void
     * @throws ApiError
     */
    appointmentsPartialUpdate({ id, status, patient, office, doctor, since, dateRange, date, }: {
        id: string;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
    }): CancelablePromise<void>;
    /**
     * Update an existing appointment or break
     * @returns void
     * @throws ApiError
     */
    appointmentsUpdate({ id, status, patient, office, doctor, since, dateRange, date, }: {
        id: string;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
    }): CancelablePromise<void>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    appointmentsListList({ cursor, pageSize, status, patient, office, doctor, since, dateRange, date, verbose, }: {
        cursor?: string;
        pageSize?: number;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Appointment>;
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
     * @returns Appointment Created
     * @throws ApiError
     */
    appointmentsListCreate({ status, patient, office, doctor, since, dateRange, date, }: {
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
    }): CancelablePromise<Appointment>;
    /**
     * @returns void
     * @throws ApiError
     */
    appointmentsListDelete({ id, status, patient, office, doctor, since, dateRange, date, }: {
        id: string;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
    }): CancelablePromise<void>;
    /**
     * @returns Appointment OK
     * @throws ApiError
     */
    appointmentsListRead({ id, status, patient, office, doctor, since, dateRange, date, verbose, }: {
        id: string;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
        verbose?: number;
    }): CancelablePromise<Appointment>;
    /**
     * @returns void
     * @throws ApiError
     */
    appointmentsListPartialUpdate({ id, status, patient, office, doctor, since, dateRange, date, }: {
        id: string;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    appointmentsListUpdate({ id, status, patient, office, doctor, since, dateRange, date, }: {
        id: string;
        status?: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search care plans
     * @returns any OK
     * @throws ApiError
     */
    carePlansList({ cursor, pageSize, patient, planType, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        planType?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<CarePlan>;
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
     * Retrieve an existing care plan
     * @returns CarePlan OK
     * @throws ApiError
     */
    carePlansRead({ id, patient, planType, doctor, verbose, }: {
        id: string;
        patient?: number;
        planType?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<CarePlan>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    careTeamMembersList({ cursor, pageSize, patient, appointment, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        appointment?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<CareTeamMember>;
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
     * @returns CareTeamMember OK
     * @throws ApiError
     */
    careTeamMembersRead({ id, patient, appointment, doctor, verbose, }: {
        id: string;
        patient?: number;
        appointment?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<CareTeamMember>;
    /**
     * Retrieve or search billing notes
     * @returns any OK
     * @throws ApiError
     */
    claimBillingNotesList({ cursor, pageSize, appointment, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        appointment?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<ClaimBillingNotes>;
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
     * Create a new billing note
     * @returns ClaimBillingNotes Created
     * @throws ApiError
     */
    claimBillingNotesCreate({ appointment, doctor, }: {
        appointment?: number;
        doctor?: number;
    }): CancelablePromise<ClaimBillingNotes>;
    /**
     * Retrieve an existing billing note
     * @returns ClaimBillingNotes OK
     * @throws ApiError
     */
    claimBillingNotesRead({ id, appointment, doctor, verbose, }: {
        id: string;
        appointment?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<ClaimBillingNotes>;
    /**
     * Retrieve or search clinical note field types
     * @returns any OK
     * @throws ApiError
     */
    clinicalNoteFieldTypesList({ cursor, pageSize, clinicalNoteTemplate, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        clinicalNoteTemplate?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<SoapNoteLineItemFieldType>;
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
     * Retrieve an existing clinial note field type
     * @returns SoapNoteLineItemFieldType OK
     * @throws ApiError
     */
    clinicalNoteFieldTypesRead({ id, clinicalNoteTemplate, doctor, verbose, }: {
        id: string;
        clinicalNoteTemplate?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<SoapNoteLineItemFieldType>;
    /**
     * Retrieve or search clinical note field values
     * @returns any OK
     * @throws ApiError
     */
    clinicalNoteFieldValuesList({ cursor, pageSize, clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        clinicalNoteField?: number;
        since?: string;
        appointment?: number;
        clinicalNoteTemplate?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<SoapNoteLineItemFieldValue>;
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
     * Create clinical note field value
     * @returns SoapNoteLineItemFieldValue Created
     * @throws ApiError
     */
    clinicalNoteFieldValuesCreate({ clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, }: {
        clinicalNoteField?: number;
        since?: string;
        appointment?: number;
        clinicalNoteTemplate?: number;
        doctor?: number;
    }): CancelablePromise<SoapNoteLineItemFieldValue>;
    /**
     * Retrieve an existing clinical note field value
     * @returns SoapNoteLineItemFieldValue OK
     * @throws ApiError
     */
    clinicalNoteFieldValuesRead({ id, clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, verbose, }: {
        id: string;
        clinicalNoteField?: number;
        since?: string;
        appointment?: number;
        clinicalNoteTemplate?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<SoapNoteLineItemFieldValue>;
    /**
     * Update an existing clinical note field value
     * @returns void
     * @throws ApiError
     */
    clinicalNoteFieldValuesPartialUpdate({ id, clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, }: {
        id: string;
        clinicalNoteField?: number;
        since?: string;
        appointment?: number;
        clinicalNoteTemplate?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing clinical note field value
     * @returns void
     * @throws ApiError
     */
    clinicalNoteFieldValuesUpdate({ id, clinicalNoteField, since, appointment, clinicalNoteTemplate, doctor, }: {
        id: string;
        clinicalNoteField?: number;
        since?: string;
        appointment?: number;
        clinicalNoteTemplate?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search clinical note templates
     * @returns any OK
     * @throws ApiError
     */
    clinicalNoteTemplatesList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<SoapNoteCustomReport>;
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
     * Retrieve an existing clinical note tempalte
     * @returns SoapNoteCustomReport OK
     * @throws ApiError
     */
    clinicalNoteTemplatesRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<SoapNoteCustomReport>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    clinicalNotesList({ cursor, pageSize, patient, office, doctor, since, dateRange, date, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<ClinicalNote>;
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
     * @returns ClinicalNote OK
     * @throws ApiError
     */
    clinicalNotesRead({ id, patient, office, doctor, since, dateRange, date, verbose, }: {
        id: string;
        patient?: number;
        office?: number;
        doctor?: number;
        since?: string;
        dateRange?: string;
        date?: string;
        verbose?: number;
    }): CancelablePromise<ClinicalNote>;
    /**
     * Retrieve or search patient consent forms
     * @returns any OK
     * @throws ApiError
     */
    consentFormsList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<ConsentForm>;
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
     * Create a patient consent form
     * @returns ConsentForm Created
     * @throws ApiError
     */
    consentFormsCreate({ doctor, }: {
        doctor?: number;
    }): CancelablePromise<ConsentForm>;
    /**
     * Retrieve an existing patient consent form
     * @returns ConsentForm OK
     * @throws ApiError
     */
    consentFormsRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<ConsentForm>;
    /**
     * Update an existing patient consent form
     * @returns void
     * @throws ApiError
     */
    consentFormsPartialUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient consent form
     * @returns void
     * @throws ApiError
     */
    consentFormsUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Assign (apply) a consent form to appointment
     * @returns void
     * @throws ApiError
     */
    consentFormsApplyToAppointment({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Unassign (unapply) a consent form from appointment
     * @returns void
     * @throws ApiError
     */
    consentFormsUnapplyFromAppointment({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search custom appointment fields
     * @returns any OK
     * @throws ApiError
     */
    customAppointmentFieldsList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<CustomAppointmentFieldType>;
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
     * Create custom appointment fields
     * @returns CustomAppointmentFieldType Created
     * @throws ApiError
     */
    customAppointmentFieldsCreate({ doctor, }: {
        doctor?: number;
    }): CancelablePromise<CustomAppointmentFieldType>;
    /**
     * Retrieve an existing custom appointment field
     * @returns CustomAppointmentFieldType OK
     * @throws ApiError
     */
    customAppointmentFieldsRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<CustomAppointmentFieldType>;
    /**
     * Update an existing custom appointment field
     * @returns void
     * @throws ApiError
     */
    customAppointmentFieldsPartialUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing custom appointment field
     * @returns void
     * @throws ApiError
     */
    customAppointmentFieldsUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search custom demographics fields
     * @returns any OK
     * @throws ApiError
     */
    customDemographicsList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<CustomPatientFieldType>;
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
     * Create custom demographics fields
     * @returns CustomPatientFieldType Created
     * @throws ApiError
     */
    customDemographicsCreate({ doctor, }: {
        doctor?: number;
    }): CancelablePromise<CustomPatientFieldType>;
    /**
     * Retrieve an existing custom demographics field
     * @returns CustomPatientFieldType OK
     * @throws ApiError
     */
    customDemographicsRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<CustomPatientFieldType>;
    /**
     * Update an existing custom demographics field
     * @returns void
     * @throws ApiError
     */
    customDemographicsPartialUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing custom demographics field
     * @returns void
     * @throws ApiError
     */
    customDemographicsUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search custom vital types
     * @returns any OK
     * @throws ApiError
     */
    customVitalsList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<CustomVitalType>;
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
     * Retrieve an existing custom vital type
     * @returns CustomVitalType OK
     * @throws ApiError
     */
    customVitalsRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<CustomVitalType>;
    /**
     * Retrieve or search documents
     * @returns any OK
     * @throws ApiError
     */
    documentsList({ cursor, pageSize, since, patient, doctor, verbose, }: {
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
        results?: Array<ScannedClinicalDocument>;
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
     * Create documents
     * @returns ScannedClinicalDocument Created
     * @throws ApiError
     */
    documentsCreate({ since, patient, doctor, }: {
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<ScannedClinicalDocument>;
    /**
     * Delete an existing appointment template
     * @returns void
     * @throws ApiError
     */
    documentsDelete({ id, since, patient, doctor, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing appointment template
     * @returns ScannedClinicalDocument OK
     * @throws ApiError
     */
    documentsRead({ id, since, patient, doctor, verbose, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<ScannedClinicalDocument>;
    /**
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    documentsPartialUpdate({ id, since, patient, doctor, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing appointment template
     * @returns void
     * @throws ApiError
     */
    documentsUpdate({ id, since, patient, doctor, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search EOB objects
     * @returns any OK
     * @throws ApiError
     */
    eobsList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<EOBObject>;
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
     * Create EOB object
     * @returns EOBObject Created
     * @throws ApiError
     */
    eobsCreate({ doctor, }: {
        doctor?: number;
    }): CancelablePromise<EOBObject>;
    /**
     * Retrieve an existing EOB object
     * @returns EOBObject OK
     * @throws ApiError
     */
    eobsRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<EOBObject>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    feeSchedulesList({ cursor, pageSize, code, codeType, since, payerId, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        code?: string;
        codeType?: string;
        since?: string;
        payerId?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<DoctorFeeSchedule>;
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
     * @returns DoctorFeeSchedule OK
     * @throws ApiError
     */
    feeSchedulesRead({ id, code, codeType, since, payerId, doctor, verbose, }: {
        id: string;
        code?: string;
        codeType?: string;
        since?: string;
        payerId?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<DoctorFeeSchedule>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    feeSchedulesV2List({ cursor, pageSize, payerId, planName, specialities, assignees, assigneeType, effectiveDate, ineffectiveDate, verbose, }: {
        cursor?: string;
        pageSize?: number;
        payerId?: string;
        planName?: string;
        specialities?: string;
        assignees?: string;
        assigneeType?: string;
        effectiveDate?: string;
        ineffectiveDate?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<FeeSchedule>;
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
     * @returns FeeSchedule OK
     * @throws ApiError
     */
    feeSchedulesV2Read({ id, verbose, }: {
        id: string;
        verbose?: number;
    }): CancelablePromise<FeeSchedule>;
    /**
     * Retrieve or search implantable devices
     * @returns any OK
     * @throws ApiError
     */
    implantableDevicesList({ cursor, pageSize, muDate, patient, muDateRange, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        muDate?: string;
        patient?: number;
        muDateRange?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<ImplantableDevice>;
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
     * Retrieve an existing implantable device
     * @returns ImplantableDevice OK
     * @throws ApiError
     */
    implantableDevicesRead({ id, muDate, patient, muDateRange, doctor, verbose, }: {
        id: string;
        muDate?: string;
        patient?: number;
        muDateRange?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<ImplantableDevice>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    insurancesList({ payerType, cursor, pageSize, term, verbose, }: {
        /**
         * One of `"emdeon"`, `"gateway"`, `"ihcfa"`
         */
        payerType: string;
        cursor?: string;
        pageSize?: number;
        /**
         * Search term, which can be either a partial name, partial ID or the state.
         */
        term?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Insurance>;
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
     * @returns Insurance OK
     * @throws ApiError
     */
    insurancesRead({ id, payerType, term, verbose, }: {
        id: string;
        /**
         * One of `"emdeon"`, `"gateway"`, `"ihcfa"`
         */
        payerType: string;
        /**
         * Search term, which can be either a partial name, partial ID or the state.
         */
        term?: string;
        verbose?: number;
    }): CancelablePromise<Insurance>;
    /**
     * Retrieve or search lab order documents
     * @returns any OK
     * @throws ApiError
     */
    labDocumentsList({ cursor, pageSize, since, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<LabOrderDocument>;
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
    labDocumentsCreate({ since, doctor, }: {
        since?: string;
        doctor?: number;
    }): CancelablePromise<LabOrderDocument>;
    /**
     * Delete an existing lab order document
     * @returns void
     * @throws ApiError
     */
    labDocumentsDelete({ id, since, doctor, }: {
        id: string;
        since?: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing lab order document
     * @returns LabOrderDocument OK
     * @throws ApiError
     */
    labDocumentsRead({ id, since, doctor, verbose, }: {
        id: string;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<LabOrderDocument>;
    /**
     * Update an existing lab order document
     * @returns void
     * @throws ApiError
     */
    labDocumentsPartialUpdate({ id, since, doctor, }: {
        id: string;
        since?: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing lab order document
     * @returns void
     * @throws ApiError
     */
    labDocumentsUpdate({ id, since, doctor, }: {
        id: string;
        since?: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search lab orders
     * @returns any OK
     * @throws ApiError
     */
    labOrdersList({ cursor, pageSize, since, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<LabOrder>;
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
    labOrdersCreate({ since, doctor, }: {
        since?: string;
        doctor?: number;
    }): CancelablePromise<LabOrder>;
    /**
     * Delete an existing lab order
     * @returns void
     * @throws ApiError
     */
    labOrdersDelete({ id, since, doctor, }: {
        id: string;
        since?: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing lab order
     * @returns LabOrder OK
     * @throws ApiError
     */
    labOrdersRead({ id, since, doctor, verbose, }: {
        id: string;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<LabOrder>;
    /**
     * Update an existing lab order
     * @returns void
     * @throws ApiError
     */
    labOrdersPartialUpdate({ id, since, doctor, }: {
        id: string;
        since?: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing lab order
     * @returns void
     * @throws ApiError
     */
    labOrdersUpdate({ id, since, doctor, }: {
        id: string;
        since?: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    labOrdersSummaryList({ cursor, pageSize, since, patient, doctor, verbose, }: {
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
        results?: Array<LabOrder>;
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
     * @returns LabOrder OK
     * @throws ApiError
     */
    labOrdersSummaryRead({ id, since, patient, doctor, verbose, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<LabOrder>;
    /**
     * Retrieve or search lab results
     * @returns any OK
     * @throws ApiError
     */
    labResultsList({ cursor, pageSize, order, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        order?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<LabResult>;
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
    labResultsCreate({ order, doctor, }: {
        order?: number;
        doctor?: number;
    }): CancelablePromise<LabResult>;
    /**
     * Delete an existing lab result
     * @returns void
     * @throws ApiError
     */
    labResultsDelete({ id, order, doctor, }: {
        id: string;
        order?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing lab result
     * @returns LabResult OK
     * @throws ApiError
     */
    labResultsRead({ id, order, doctor, verbose, }: {
        id: string;
        order?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<LabResult>;
    /**
     * Update an existing lab result
     * @returns void
     * @throws ApiError
     */
    labResultsPartialUpdate({ id, order, doctor, }: {
        id: string;
        order?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing lab result
     * @returns void
     * @throws ApiError
     */
    labResultsUpdate({ id, order, doctor, }: {
        id: string;
        order?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search lab tests
     * @returns any OK
     * @throws ApiError
     */
    labTestsList({ cursor, pageSize, order, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        order?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<LabTest>;
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
    labTestsCreate({ order, doctor, }: {
        order?: number;
        doctor?: number;
    }): CancelablePromise<LabTest>;
    /**
     * Delete an existing lab test
     * @returns void
     * @throws ApiError
     */
    labTestsDelete({ id, order, doctor, }: {
        id: string;
        order?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing lab test
     * @returns LabTest OK
     * @throws ApiError
     */
    labTestsRead({ id, order, doctor, verbose, }: {
        id: string;
        order?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<LabTest>;
    /**
     * Update an existing lab test
     * @returns void
     * @throws ApiError
     */
    labTestsPartialUpdate({ id, order, doctor, }: {
        id: string;
        order?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing lab test
     * @returns void
     * @throws ApiError
     */
    labTestsUpdate({ id, order, doctor, }: {
        id: string;
        order?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patient medications
     * @returns any OK
     * @throws ApiError
     */
    medicationsList({ cursor, pageSize, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientDrug>;
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
     * Create patient medications
     * @returns PatientDrug Created
     * @throws ApiError
     */
    medicationsCreate({ patient, doctor, }: {
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientDrug>;
    /**
     * Retrieve an existing patient medications
     * @returns PatientDrug OK
     * @throws ApiError
     */
    medicationsRead({ id, patient, doctor, verbose, }: {
        id: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientDrug>;
    /**
     * Update an existing patient medications
     * @returns void
     * @throws ApiError
     */
    medicationsPartialUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient medications
     * @returns void
     * @throws ApiError
     */
    medicationsUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Append a message to the "pharmacy_note" section of the prescription, in a new paragraph
     * @returns void
     * @throws ApiError
     */
    medicationsAppendToPharmacyNote({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patient communications for CQM
     * @returns any OK
     * @throws ApiError
     */
    patientCommunicationsList({ cursor, pageSize, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientCommunication>;
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
     * Create patient communication for CQM
     * @returns PatientCommunication Created
     * @throws ApiError
     */
    patientCommunicationsCreate({ patient, doctor, }: {
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientCommunication>;
    /**
     * Retrieve an existing patient communication for CQM
     * @returns PatientCommunication OK
     * @throws ApiError
     */
    patientCommunicationsRead({ id, patient, doctor, verbose, }: {
        id: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientCommunication>;
    /**
     * Update an existing patient communication for CQM
     * @returns void
     * @throws ApiError
     */
    patientCommunicationsPartialUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient communication for CQM
     * @returns void
     * @throws ApiError
     */
    patientCommunicationsUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patient flag types
     * @returns any OK
     * @throws ApiError
     */
    patientFlagTypesList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientFlagType>;
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
     * Create patient flag types
     * @returns PatientFlagType Created
     * @throws ApiError
     */
    patientFlagTypesCreate({ doctor, }: {
        doctor?: number;
    }): CancelablePromise<PatientFlagType>;
    /**
     * Retrieve an existing patient flag type
     * @returns PatientFlagType OK
     * @throws ApiError
     */
    patientFlagTypesRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientFlagType>;
    /**
     * Update an existing patient flag type
     * @returns void
     * @throws ApiError
     */
    patientFlagTypesPartialUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient flag type
     * @returns void
     * @throws ApiError
     */
    patientFlagTypesUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patient interventions for CQM
     * @returns any OK
     * @throws ApiError
     */
    patientInterventionsList({ cursor, pageSize, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientIntervention>;
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
     * Create patient intervention for CQM
     * @returns PatientIntervention Created
     * @throws ApiError
     */
    patientInterventionsCreate({ patient, doctor, }: {
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientIntervention>;
    /**
     * Retrieve an existing patient intervention for CQM
     * @returns PatientIntervention OK
     * @throws ApiError
     */
    patientInterventionsRead({ id, patient, doctor, verbose, }: {
        id: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientIntervention>;
    /**
     * Update an existing patient intervention for CQM
     * @returns void
     * @throws ApiError
     */
    patientInterventionsPartialUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient intervention for CQM
     * @returns void
     * @throws ApiError
     */
    patientInterventionsUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    patientLabResultsList({ cursor, pageSize, orderingDoctor, since, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        orderingDoctor?: number;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientLabResultSet>;
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
     * @returns PatientLabResultSet Created
     * @throws ApiError
     */
    patientLabResultsCreate({ orderingDoctor, since, patient, doctor, }: {
        orderingDoctor?: number;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientLabResultSet>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientLabResultsDelete({ id, orderingDoctor, since, patient, doctor, }: {
        id: string;
        orderingDoctor?: number;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns PatientLabResultSet OK
     * @throws ApiError
     */
    patientLabResultsRead({ id, orderingDoctor, since, patient, doctor, verbose, }: {
        id: string;
        orderingDoctor?: number;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientLabResultSet>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientLabResultsPartialUpdate({ id, orderingDoctor, since, patient, doctor, }: {
        id: string;
        orderingDoctor?: number;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientLabResultsUpdate({ id, orderingDoctor, since, patient, doctor, }: {
        id: string;
        orderingDoctor?: number;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    patientMessagesList({ cursor, pageSize, since, patient, doctor, verbose, }: {
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
        results?: Array<PatientMessage>;
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
     * @returns PatientMessage Created
     * @throws ApiError
     */
    patientMessagesCreate({ since, patient, doctor, }: {
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientMessage>;
    /**
     * @returns PatientMessage OK
     * @throws ApiError
     */
    patientMessagesRead({ id, since, patient, doctor, verbose, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientMessage>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientMessagesPartialUpdate({ id, since, patient, doctor, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientMessagesUpdate({ id, since, patient, doctor, }: {
        id: string;
        since?: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patient physical exams for CQM
     * @returns any OK
     * @throws ApiError
     */
    patientPhysicalExamsList({ cursor, pageSize, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientPhysicalExam>;
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
     * Create patient physical exam for CQM
     * @returns PatientPhysicalExam Created
     * @throws ApiError
     */
    patientPhysicalExamsCreate({ patient, doctor, }: {
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientPhysicalExam>;
    /**
     * Retrieve an existing patient physical exam for CQM
     * @returns PatientPhysicalExam OK
     * @throws ApiError
     */
    patientPhysicalExamsRead({ id, patient, doctor, verbose, }: {
        id: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientPhysicalExam>;
    /**
     * Update an existing patient physical exam for CQM
     * @returns void
     * @throws ApiError
     */
    patientPhysicalExamsPartialUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient physical exam for CQM
     * @returns void
     * @throws ApiError
     */
    patientPhysicalExamsUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    patientRiskAssessmentsList({ cursor, pageSize, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientRiskAssessment>;
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
     * @returns PatientRiskAssessment Created
     * @throws ApiError
     */
    patientRiskAssessmentsCreate({ patient, doctor, }: {
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientRiskAssessment>;
    /**
     * @returns PatientRiskAssessment OK
     * @throws ApiError
     */
    patientRiskAssessmentsRead({ id, patient, doctor, verbose, }: {
        id: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientRiskAssessment>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientRiskAssessmentsPartialUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientRiskAssessmentsUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patient vaccine records
     * @returns any OK
     * @throws ApiError
     */
    patientVaccineRecordsList({ cursor, pageSize, cvxCode, patient, since, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        cvxCode?: string;
        patient?: number;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientVaccineRecord>;
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
     * Create patient vaccine records
     * @returns PatientVaccineRecord Created
     * @throws ApiError
     */
    patientVaccineRecordsCreate({ cvxCode, patient, since, doctor, }: {
        cvxCode?: string;
        patient?: number;
        since?: string;
        doctor?: number;
    }): CancelablePromise<PatientVaccineRecord>;
    /**
     * Retrieve an existing patient vaccine records
     * @returns PatientVaccineRecord OK
     * @throws ApiError
     */
    patientVaccineRecordsRead({ id, cvxCode, patient, since, doctor, verbose, }: {
        id: string;
        cvxCode?: string;
        patient?: number;
        since?: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientVaccineRecord>;
    /**
     * Update an existing patient vaccine records
     * @returns void
     * @throws ApiError
     */
    patientVaccineRecordsPartialUpdate({ id, cvxCode, patient, since, doctor, }: {
        id: string;
        cvxCode?: string;
        patient?: number;
        since?: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient vaccine records
     * @returns void
     * @throws ApiError
     */
    patientVaccineRecordsUpdate({ id, cvxCode, patient, since, doctor, }: {
        id: string;
        cvxCode?: string;
        patient?: number;
        since?: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search patients
     * @returns any OK
     * @throws ApiError
     */
    patientsList({ cursor, pageSize, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }: {
        cursor?: string;
        pageSize?: number;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Patient>;
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
     * Create patient
     * @returns Patient Created
     * @throws ApiError
     */
    patientsCreate({ firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }: {
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
    }): CancelablePromise<Patient>;
    /**
     * Delete an existing patient
     * @returns void
     * @throws ApiError
     */
    patientsDelete({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing patient
     * @returns Patient OK
     * @throws ApiError
     */
    patientsRead({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
        verbose?: number;
    }): CancelablePromise<Patient>;
    /**
     * Update an existing patient
     * @returns void
     * @throws ApiError
     */
    patientsPartialUpdate({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient
     * @returns void
     * @throws ApiError
     */
    patientsUpdate({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve patient CCDA
     * @returns any OK
     * @throws ApiError
     */
    patientsCcda({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
        verbose?: number;
    }): CancelablePromise<Record<string, any>>;
    /**
     * Revoke sent onpatient invites
     * @returns void
     * @throws ApiError
     */
    patientsOnpatientAccessDelete({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search existing onpatient access invites
     * @returns Patient OK
     * @throws ApiError
     */
    patientsOnpatientAccessRead({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
        verbose?: number;
    }): CancelablePromise<Patient>;
    /**
     * Send new onpatient invite to patient
     * @returns Patient Created
     * @throws ApiError
     */
    patientsOnpatientAccessCreate({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
    }): CancelablePromise<Patient>;
    /**
     * Retrieve patient QRDA1
     * @returns any OK
     * @throws ApiError
     */
    patientsQrda1({ id, firstName, lastName, preferredLanguage, doctor, gender, since, dateOfBirth, race, chartId, email, ethnicity, verbose, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        preferredLanguage?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        race?: string;
        chartId?: string;
        email?: string;
        ethnicity?: string;
        verbose?: number;
    }): CancelablePromise<Record<string, any>>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    patientsSummaryList({ cursor, pageSize, firstName, lastName, doctor, gender, since, dateOfBirth, verbose, }: {
        cursor?: string;
        pageSize?: number;
        firstName?: string;
        lastName?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Patient>;
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
     * @returns Patient Created
     * @throws ApiError
     */
    patientsSummaryCreate({ firstName, lastName, doctor, gender, since, dateOfBirth, }: {
        firstName?: string;
        lastName?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
    }): CancelablePromise<Patient>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientsSummaryDelete({ id, firstName, lastName, doctor, gender, since, dateOfBirth, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
    }): CancelablePromise<void>;
    /**
     * @returns Patient OK
     * @throws ApiError
     */
    patientsSummaryRead({ id, firstName, lastName, doctor, gender, since, dateOfBirth, verbose, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
        verbose?: number;
    }): CancelablePromise<Patient>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientsSummaryPartialUpdate({ id, firstName, lastName, doctor, gender, since, dateOfBirth, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    patientsSummaryUpdate({ id, firstName, lastName, doctor, gender, since, dateOfBirth, }: {
        id: string;
        firstName?: string;
        lastName?: string;
        doctor?: number;
        gender?: string;
        since?: string;
        dateOfBirth?: string;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search prescription messages
     * @returns any OK
     * @throws ApiError
     */
    prescriptionMessagesList({ cursor, pageSize, parentMessage, since, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        parentMessage?: number;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PrescriptionMessage>;
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
     * Retrieve an existing prescription message
     * @returns PrescriptionMessage OK
     * @throws ApiError
     */
    prescriptionMessagesRead({ id, parentMessage, since, patient, doctor, verbose, }: {
        id: string;
        parentMessage?: number;
        since?: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PrescriptionMessage>;
    /**
     * Retrieve or search patient problems
     * @returns any OK
     * @throws ApiError
     */
    problemsList({ cursor, pageSize, patient, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<PatientProblem>;
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
     * Create patient problems
     * @returns PatientProblem Created
     * @throws ApiError
     */
    problemsCreate({ patient, doctor, }: {
        patient?: number;
        doctor?: number;
    }): CancelablePromise<PatientProblem>;
    /**
     * Retrieve an existing patient problems
     * @returns PatientProblem OK
     * @throws ApiError
     */
    problemsRead({ id, patient, doctor, verbose, }: {
        id: string;
        patient?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<PatientProblem>;
    /**
     * Update an existing patient problems
     * @returns void
     * @throws ApiError
     */
    problemsPartialUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing patient problems
     * @returns void
     * @throws ApiError
     */
    problemsUpdate({ id, patient, doctor, }: {
        id: string;
        patient?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve or search reminder profiles
     * @returns any OK
     * @throws ApiError
     */
    reminderProfilesList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<ReminderProfile>;
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
     * Create reminder profile
     * @returns ReminderProfile Created
     * @throws ApiError
     */
    reminderProfilesCreate({ doctor, }: {
        doctor?: number;
    }): CancelablePromise<ReminderProfile>;
    /**
     * Delete an existing reminder profile
     * @returns void
     * @throws ApiError
     */
    reminderProfilesDelete({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing reminder profile
     * @returns ReminderProfile OK
     * @throws ApiError
     */
    reminderProfilesRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<ReminderProfile>;
    /**
     * Update an existing reminder profile
     * @returns void
     * @throws ApiError
     */
    reminderProfilesPartialUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing reminder profile
     * @returns void
     * @throws ApiError
     */
    reminderProfilesUpdate({ id, doctor, }: {
        id: string;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    staffList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<Staff>;
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
     * @returns Staff OK
     * @throws ApiError
     */
    staffRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<Staff>;
    /**
     * Retrieve or search sub vendors
     * @returns any OK
     * @throws ApiError
     */
    sublabsList({ cursor, pageSize, verbose, }: {
        cursor?: string;
        pageSize?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<LabVendorLocation>;
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
    sublabsCreate(): CancelablePromise<LabVendorLocation>;
    /**
     * Delete an existing sub vendor
     * @returns void
     * @throws ApiError
     */
    sublabsDelete({ id, }: {
        id: number;
    }): CancelablePromise<void>;
    /**
     * Retrieve an existing sub vendor
     * @returns LabVendorLocation OK
     * @throws ApiError
     */
    sublabsRead({ id, verbose, }: {
        id: number;
        verbose?: number;
    }): CancelablePromise<LabVendorLocation>;
    /**
     * Update an existing sub vendor
     * @returns void
     * @throws ApiError
     */
    sublabsPartialUpdate({ id, }: {
        id: number;
    }): CancelablePromise<void>;
    /**
     * Update an existing sub vendor
     * @returns void
     * @throws ApiError
     */
    sublabsUpdate({ id, }: {
        id: number;
    }): CancelablePromise<void>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    telehealthAppointmentHistoryList({ cursor, pageSize, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<TelemedicineAppointmentEventLog>;
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
     * @returns TelemedicineAppointmentEventLog Created
     * @throws ApiError
     */
    telehealthAppointmentHistoryCreate({ doctor, }: {
        doctor?: number;
    }): CancelablePromise<TelemedicineAppointmentEventLog>;
    /**
     * @returns TelemedicineAppointmentEventLog OK
     * @throws ApiError
     */
    telehealthAppointmentHistoryRead({ id, doctor, verbose, }: {
        id: string;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<TelemedicineAppointmentEventLog>;
    /**
     * @returns any OK
     * @throws ApiError
     */
    telehealthAppointmentsList({ cursor, pageSize, appointment, doctor, verbose, }: {
        cursor?: string;
        pageSize?: number;
        appointment?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<{
        /**
         * result data
         */
        results?: Array<TelemedicineAppointment>;
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
     * @returns TelemedicineAppointment Created
     * @throws ApiError
     */
    telehealthAppointmentsCreate({ appointment, doctor, }: {
        appointment?: number;
        doctor?: number;
    }): CancelablePromise<TelemedicineAppointment>;
    /**
     * @returns TelemedicineAppointment OK
     * @throws ApiError
     */
    telehealthAppointmentsRead({ id, appointment, doctor, verbose, }: {
        id: string;
        appointment?: number;
        doctor?: number;
        verbose?: number;
    }): CancelablePromise<TelemedicineAppointment>;
    /**
     * @returns void
     * @throws ApiError
     */
    telehealthAppointmentsPartialUpdate({ id, appointment, doctor, }: {
        id: string;
        appointment?: number;
        doctor?: number;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    telehealthAppointmentsUpdate({ id, appointment, doctor, }: {
        id: string;
        appointment?: number;
        doctor?: number;
    }): CancelablePromise<void>;
}
