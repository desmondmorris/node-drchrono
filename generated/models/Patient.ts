/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Patient = {
    address?: string;
    auto_accident_insurance?: {
        auto_accident_case_number?: string;
        auto_accident_claim_rep_address?: string;
        auto_accident_claim_rep_city?: string;
        /**
         * Is the insurer's claim representative the insurer?
         */
        auto_accident_claim_rep_is_insurer?: boolean;
        auto_accident_claim_rep_name?: string;
        auto_accident_claim_rep_state?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        auto_accident_claim_rep_zip?: string;
        auto_accident_company?: string;
        auto_accident_date_of_accident?: string;
        /**
         * Patient was disabled (unable to work) from
         */
        auto_accident_disabled_from_date?: string;
        /**
         * Patient was disabled (unable to work) to
         */
        auto_accident_disabled_to_date?: string;
        /**
         * Has the patient had same or similar condition?
         */
        auto_accident_had_similar_condition?: boolean;
        /**
         * True if the insurance policy is under patient's own name.
         */
        auto_accident_is_subscriber_the_patient?: boolean;
        auto_accident_notes?: string;
        auto_accident_patient_relationship_to_subscriber?: '' | '01' | '04' | '05' | '07' | '10' | '15' | '17' | '19' | '20' | '21' | '22' | '23' | '24' | '29' | '32' | '33' | '36' | '39' | '40' | '41' | '43' | '53' | '76' | 'G8';
        auto_accident_payer_address?: string;
        auto_accident_payer_city?: string;
        /**
         * Auto Accident Payer ID
         */
        auto_accident_payer_id?: string;
        auto_accident_payer_state?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        auto_accident_payer_zip?: string;
        auto_accident_policy_number?: string;
        /**
         * If still disabled, patient should be able to return to work on
         */
        auto_accident_return_to_work_date?: string;
        auto_accident_significant_injury?: 'YES' | 'NO' | 'N\A';
        auto_accident_significant_injury_notes?: string;
        /**
         * Date of same or similar condition
         */
        auto_accident_similar_condition_date?: string;
        auto_accident_similar_condition_notes?: string;
        auto_accident_state_of_occurrence?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        /**
         * Is patient still under your care for this condition?
         */
        auto_accident_still_under_care?: boolean;
        auto_accident_subscriber_address?: string;
        auto_accident_subscriber_city?: string;
        auto_accident_subscriber_date_of_birth?: string;
        auto_accident_subscriber_first_name?: string;
        auto_accident_subscriber_last_name?: string;
        auto_accident_subscriber_middle_name?: string;
        auto_accident_subscriber_phone_number?: string;
        auto_accident_subscriber_social_security?: string;
        auto_accident_subscriber_state?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        auto_accident_subscriber_suffix?: string;
        auto_accident_subscriber_zip_code?: string;
        auto_accident_treatment_duration?: string;
        /**
         * Will the patient require rehabilitation and/or occupational therapy as a result of the injuries sustained in this accident?
         */
        auto_accident_will_require_therapy?: boolean;
        auto_accident_will_require_therapy_rec?: string;
    };
    cell_phone?: string;
    /**
     * Automatically set using first & last name if absent
     */
    chart_id?: string;
    city?: string;
    copay?: string;
    readonly created_at?: string;
    custom_demographics?: Array<{
        /**
         * ID of the `/api/custom_demographics` object
         */
        field_type?: number;
        readonly updated_at?: string;
        value?: string;
    }>;
    date_of_birth?: string;
    /**
     * Date of first patient visit.
     */
    date_of_first_appointment?: string;
    /**
     * Date of previous patient visit
     */
    date_of_last_appointment?: string;
    /**
     * ncpdp id of patient's default pharmacy
     */
    default_pharmacy?: string;
    /**
     * If True, suppress SMS/Txt messages to this patient even if we have a cell phone # for them.
     */
    disable_sms_messages?: boolean;
    doctor: number;
    email?: string;
    emergency_contact_name?: string;
    emergency_contact_phone?: string;
    emergency_contact_relation?: string;
    employer?: string;
    employer_address?: string;
    employer_city?: string;
    /**
     * Two-letter abbreviation
     */
    employer_state?: string;
    employer_zip_code?: string;
    /**
     * One of `"blank"`, `"hispanic"`, `"not_hispanic"` or `"declined"`
     */
    ethnicity?: 'blank' | 'hispanic' | 'not_hispanic' | 'declined';
    first_name?: string;
    /**
     * One of `"Male"`, `"Female"`, or `"Other"`
     */
    gender: '' | 'Male' | 'Female' | 'Other' | 'UNK' | 'ASKU';
    home_phone?: string;
    readonly id?: number;
    last_name?: string;
    middle_name?: string;
    /**
     * Common name for patient, should be used instead of first name if supplied.
     */
    nick_name?: string;
    office_phone?: string;
    /**
     * IDs of every office this patient has been to
     */
    offices?: Array<number>;
    /**
     * Possible patient flag type that can be attached to the patient
     */
    readonly patient_flags?: Array<{
        readonly archived?: boolean;
        color?: string;
        readonly created_at?: string;
        /**
         * ID of doctor who owns the flag
         */
        doctor?: number;
        readonly id?: number;
        name?: string;
        priority?: number;
        readonly updated_at?: string;
    }>;
    /**
     * Patient flags attached to the patient
     */
    patient_flags_attached?: Array<{
        readonly archived?: boolean;
        readonly created_at?: string;
        /**
         * Description of the patient flag
         */
        flag_text?: string;
        /**
         * ID of the associated `/api/patient_flag_types` object
         */
        flag_type?: number;
        readonly id?: number;
        readonly updated_at?: string;
    }>;
    /**
     * One of `""`, `"Cash"`, `"Insurance"`, `"Insurance Out of Network"`, `"Auto Accident"` or `"Worker's Comp"`.<br>**Note:** Patient must already have either `primary_insurance` or `secondary_insurance` or new `primary_insurance` or `secondary_insurance` is passed in request if `Insurance`, `Auto Accident` or `Worker's Comp` payment profiles are chosen.
     */
    patient_payment_profile?: '' | 'Cash' | 'Insurance' | 'Insurance Out of Network' | 'Auto Accident' | 'Worker\'s Comp';
    patient_photo?: string;
    /**
     * Cannot be passed without `patient_photo`
     */
    patient_photo_date?: string;
    /**
     * One of `"A"` (active), `"I"` (inactive), `"D"` (inactive-deceased)
     */
    patient_status?: 'A' | 'I' | 'D';
    /**
     * Use ISO 639 alpha-3 codes
     */
    preferred_language?: 'blank' | 'eng' | 'zho' | 'fra' | 'ita' | 'jpn' | 'por' | 'rus' | 'spa' | 'other' | 'unknown' | 'declined';
    /**
     * ncpdp id of patient's preferred pharmacies
     */
    preferred_pharmacies?: Array<string>;
    /**
     * Referring doctor for this patient
     */
    primary_care_physician?: string;
    /**
     * **Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.
     */
    primary_insurance?: {
        /**
         * Insurance office phone number
         */
        insurance_claim_office_number?: string;
        insurance_company?: string;
        insurance_group_name?: string;
        insurance_group_number?: string;
        insurance_id_number?: string;
        insurance_payer_id?: string;
        /**
         * Name of insurance plan.
         */
        insurance_plan_name?: string;
        insurance_plan_type?: '' | 'AM' | 'BL' | 'CH' | 'CI' | '17' | 'DS' | '14' | 'FI' | 'HM' | '16' | '15' | 'LM' | 'MC' | 'MA' | 'MB' | 'ZZ' | 'OF' | '11' | '13' | '12' | 'TV' | 'VA' | 'WC';
        /**
         * True if the insurance policy is under patient's own name. Defaults to true
         */
        is_subscriber_the_patient?: boolean;
        /**
         * HCFA/1500 individual relationship code
         */
        patient_relationship_to_subscriber?: '' | '01' | '04' | '05' | '07' | '10' | '15' | '17' | '19' | '20' | '21' | '22' | '23' | '24' | '29' | '32' | '33' | '36' | '39' | '40' | '41' | '43' | '53' | '76' | 'G8';
        /**
         * Photo of back of insurance card
         */
        photo_back?: string;
        /**
         * Photo of front of insurance card
         */
        photo_front?: string;
        subscriber_address?: string;
        subscriber_city?: string;
        /**
         * Two-letter country code
         */
        subscriber_country?: '' | 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'CYM' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'XK' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
        subscriber_date_of_birth?: string;
        subscriber_first_name?: string;
        /**
         * One of `"Male"` or `"Female"`
         */
        subscriber_gender?: '' | 'Male' | 'Female' | 'Other' | 'UNK' | 'ASKU';
        subscriber_last_name?: string;
        subscriber_middle_name?: string;
        subscriber_social_security?: string;
        /**
         * Two-letter state code
         */
        subscriber_state?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        /**
         * E.g. `"II"` or `"III"`
         */
        subscriber_suffix?: string;
        subscriber_zip_code?: string;
    };
    /**
     * One of `"blank"`, `"indian"`, `"asian"`, `"black"`, `"hawaiian"`, `"white"` or `"declined"`
     */
    race?: 'blank' | 'indian' | 'asian' | 'black' | 'hawaiian' | 'white' | 'other' | 'declined';
    referring_doctor?: {
        address?: string;
        email?: string;
        /**
         * Should follow format "xxx-xx-xxxx"
         */
        fax?: string;
        first_name?: string;
        last_name?: string;
        middle_name?: string;
        npi?: string;
        /**
         * Should follow format "xxx-xx-xxxx"
         */
        phone?: string;
        provider_number?: string;
        /**
         * Can be one of following, `''`, `'0B'`(State License #), `'1G'`(Provider UPIN #), `'G2'`(Provider Commercial #)
         */
        provider_qualifier?: '' | '0B' | '1G' | 'G2';
        /**
         * Can be one of following, `''`, `'Acupuncture'`, `'Advanced Practice Midwife'`, `'Aesthetic Medicine'`, `'Aesthetician'`, `'Allergist/Immunologist'`, `'Anesthesiologist'`, `'Cardiac Electrophysiologist'`, `'Cardiologist'`, `'Cardiothoracic Surgeon'`, `'Child/Adolescent Psychiatry'`, `'Chiropractor'`, `'Clinical Social Worker'`, `'Colorectal Surgeon'`, `'Correactology'`, `'Cosmetic Medicine'`, `'Counselor Mental Health'`, `'Counselor Professional'`, `'Counselor'`, `'Dentist'`, `'Diabetology'`, `'Dermatologist'`, `'Diagnostic Medical Sonographer'`, `'Dietitian, Registered'`, `'Ear-Nose-Throat Specialist (ENT)'`, `'Emergency Medicine Physician'`, `'Endocrinologist'`, `'Endodontist'`, `'Epidemiologist'`, `'Family Practitioner'`, `'Gastroenterologist'`, `'General Practice'`, `'General Surgeon'`, `'Geneticist'`, `'Geriatrician'`, `'Gerontologist'`, `'Gynecologist (no OB)'`, `'Gynegologic Oncologist'`, `'Hand Surgeon'`, `'Hematologist'`, `'Home Care'`, `'Hospice'`, `'Hospitalist'`, `'Infectious Disease Specialist'`, `'Integrative and Functional Medicine'`, `'Integrative Medicine'`, `'Internist'`, `'Interventional Radiology'`, `'Laboratory Medicine Specialist'`, `'Laser Surgery'`, `'Massage Therapist'`, `'Naturopathic Physician'`, `'Neonatologist'`, `'Nephrologist'`, `'Neurologist'`, `'Neuropsychology'`, `'Neurosurgeon'`, `'Not Actively Practicing'`, `'Nuclear Medicine Specialist'`, `'Nurse Practitioner'`, `'Nursing'`, `'Nutritionist'`, `'Obstetrician/Gynecologist'`, `'Occupational Medicine'`, `'Occupational Therapist'`, `'Oncologist'`, `'Ophthalmologist'`, `'Optometrist'`, `'Oral Surgeon'`, `'Orofacial Pain'`, `'Orthodontist'`, `'Orthopedic Surgeon'`, `'Orthotist'`, `'Other'`, `'Pain Management Specialist'`, `'Pathologist'`, `'Pediatric Dentist'`, `'Pediatric Gastroenterology'`, `'Pediatric Surgeon'`, `'Pediatrician'`, `'Perinatologist'`, `'Periodontist'`, `'Physical Medicine and Rehab Specialist'`, `'Physical Therapist'`, `'Physician Assistant'`, `'Plastic Surgeon'`, `'Podiatrist'`, `'Preventive-Aging Medicine'`, `'Preventive Medicine/Occupational-Environmental Medicine'`, `'Primary Care Physician'`, `'Prosthetist'`, `'Prosthodontist'`, `'Psychiatrist'`, `'Psychologist'`, `'Public Health Professional'`, `'Pulmonologist'`, `'Radiation Oncologist'`, `'Radiologist'`, `'Registered Nurse'`, `'Religious Nonmedical Practitioner'`, `'Reproductive Endocrinologist'`, `'Reproductive Medicine'`, `'Rheumatologist'`, `'Sleep Medicine'`, `'Speech-Language Pathologist'`, `'Sports Medicine Specialist'`, `'Urologist'`, `'Urgent Care'`, `'Vascular Surgeon'`
         */
        specialty?: '' | 'Acupuncture' | 'Advanced Practice Midwife' | 'Aesthetic Medicine' | 'Aesthetician' | 'Allergist/Immunologist' | 'Anesthesiologist' | 'Cardiac Electrophysiologist' | 'Cardiologist' | 'Cardiothoracic Surgeon' | 'Child/Adolescent Psychiatry' | 'Chiropractor' | 'Clinical Social Worker' | 'Colorectal Surgeon' | 'Correactology' | 'Cosmetic Medicine' | 'Counselor Mental Health' | 'Counselor Professional' | 'Counselor' | 'Dentist' | 'Diabetology' | 'Dermatologist' | 'Diagnostic Medical Sonographer' | 'Dietitian, Registered' | 'Ear-Nose-Throat Specialist (ENT)' | 'Emergency Medicine Physician' | 'Endocrinologist' | 'Endodontist' | 'Epidemiologist' | 'Family Practitioner' | 'Gastroenterologist' | 'General Practice' | 'General Surgeon' | 'Geneticist' | 'Geriatrician' | 'Gerontologist' | 'Gynecologist (no OB)' | 'Gynegologic Oncologist' | 'Hand Surgeon' | 'Hematologist' | 'Home Care' | 'Hospice' | 'Hospitalist' | 'Infectious Disease Specialist' | 'Integrative and Functional Medicine' | 'Integrative Medicine' | 'Internist' | 'Interventional Radiology' | 'Laboratory Medicine Specialist' | 'Laser Surgery' | 'Massage Therapist' | 'Naturopathic Physician' | 'Neonatologist' | 'Nephrologist' | 'Neurologist' | 'Neuropsychology' | 'Neurosurgeon' | 'Not Actively Practicing' | 'Nuclear Medicine Specialist' | 'Nurse Practitioner' | 'Nursing' | 'Nutritionist' | 'Obstetrician/Gynecologist' | 'Occupational Medicine' | 'Occupational Therapist' | 'Oncologist' | 'Ophthalmologist' | 'Optometrist' | 'Oral Surgeon' | 'Orofacial Pain' | 'Orthodontist' | 'Orthopedic Surgeon' | 'Orthotist' | 'Other' | 'Pain Management Specialist' | 'Pathologist' | 'Pediatric Dentist' | 'Pediatric Gastroenterology' | 'Pediatric Surgeon' | 'Pediatrician' | 'Perinatologist' | 'Periodontist' | 'Physical Medicine and Rehab Specialist' | 'Physical Therapist' | 'Physician Assistant' | 'Plastic Surgeon' | 'Podiatrist' | 'Preventive-Aging Medicine' | 'Preventive Medicine/Occupational-Environmental Medicine' | 'Primary Care Physician' | 'Prosthetist' | 'Prosthodontist' | 'Psychiatrist' | 'Psychologist' | 'Public Health Professional' | 'Pulmonologist' | 'Radiation Oncologist' | 'Radiologist' | 'Registered Nurse' | 'Religious Nonmedical Practitioner' | 'Reproductive Endocrinologist' | 'Reproductive Medicine' | 'Rheumatologist' | 'Sleep Medicine' | 'Speech-Language Pathologist' | 'Sports Medicine Specialist' | 'Urologist' | 'Urgent Care' | 'Vascular Surgeon';
        suffix?: string;
    };
    /**
     * Referring source.
     */
    referring_source?: string;
    responsible_party_email?: string;
    responsible_party_name?: string;
    responsible_party_phone?: string;
    responsible_party_relation?: string;
    /**
     * **Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.
     */
    secondary_insurance?: {
        /**
         * Insurance office phone number
         */
        insurance_claim_office_number?: string;
        insurance_company?: string;
        insurance_group_name?: string;
        insurance_group_number?: string;
        insurance_id_number?: string;
        insurance_payer_id?: string;
        /**
         * Name of insurance plan.
         */
        insurance_plan_name?: string;
        insurance_plan_type?: '' | 'AM' | 'BL' | 'CH' | 'CI' | '17' | 'DS' | '14' | 'FI' | 'HM' | '16' | '15' | 'LM' | 'MC' | 'MA' | 'MB' | 'ZZ' | 'OF' | '11' | '13' | '12' | 'TV' | 'VA' | 'WC';
        /**
         * True if the insurance policy is under patient's own name. Defaults to true
         */
        is_subscriber_the_patient?: boolean;
        /**
         * HCFA/1500 individual relationship code
         */
        patient_relationship_to_subscriber?: '' | '01' | '04' | '05' | '07' | '10' | '15' | '17' | '19' | '20' | '21' | '22' | '23' | '24' | '29' | '32' | '33' | '36' | '39' | '40' | '41' | '43' | '53' | '76' | 'G8';
        /**
         * Photo of back of insurance card
         */
        photo_back?: string;
        /**
         * Photo of front of insurance card
         */
        photo_front?: string;
        subscriber_address?: string;
        subscriber_city?: string;
        /**
         * Two-letter country code
         */
        subscriber_country?: '' | 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'CYM' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'XK' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
        subscriber_date_of_birth?: string;
        subscriber_first_name?: string;
        /**
         * One of `"Male"` or `"Female"`
         */
        subscriber_gender?: '' | 'Male' | 'Female' | 'Other' | 'UNK' | 'ASKU';
        subscriber_last_name?: string;
        subscriber_middle_name?: string;
        subscriber_social_security?: string;
        /**
         * Two-letter state code
         */
        subscriber_state?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        /**
         * E.g. `"II"` or `"III"`
         */
        subscriber_suffix?: string;
        subscriber_zip_code?: string;
    };
    social_security_number?: string;
    /**
     * Two-letter abbreviation
     */
    state?: string;
    /**
     * **Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.
     */
    tertiary_insurance?: {
        /**
         * Insurance office phone number
         */
        insurance_claim_office_number?: string;
        insurance_company?: string;
        insurance_group_name?: string;
        insurance_group_number?: string;
        insurance_id_number?: string;
        insurance_payer_id?: string;
        /**
         * Name of insurance plan.
         */
        insurance_plan_name?: string;
        insurance_plan_type?: '' | 'AM' | 'BL' | 'CH' | 'CI' | '17' | 'DS' | '14' | 'FI' | 'HM' | '16' | '15' | 'LM' | 'MC' | 'MA' | 'MB' | 'ZZ' | 'OF' | '11' | '13' | '12' | 'TV' | 'VA' | 'WC';
        /**
         * True if the insurance policy is under patient's own name. Defaults to true
         */
        is_subscriber_the_patient?: boolean;
        /**
         * HCFA/1500 individual relationship code
         */
        patient_relationship_to_subscriber?: '' | '01' | '04' | '05' | '07' | '10' | '15' | '17' | '19' | '20' | '21' | '22' | '23' | '24' | '29' | '32' | '33' | '36' | '39' | '40' | '41' | '43' | '53' | '76' | 'G8';
        /**
         * Photo of back of insurance card
         */
        photo_back?: string;
        /**
         * Photo of front of insurance card
         */
        photo_front?: string;
        subscriber_address?: string;
        subscriber_city?: string;
        /**
         * Two-letter country code
         */
        subscriber_country?: '' | 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'CYM' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'XK' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
        subscriber_date_of_birth?: string;
        subscriber_first_name?: string;
        /**
         * One of `"Male"` or `"Female"`
         */
        subscriber_gender?: '' | 'Male' | 'Female' | 'Other' | 'UNK' | 'ASKU';
        subscriber_last_name?: string;
        subscriber_middle_name?: string;
        subscriber_social_security?: string;
        /**
         * Two-letter state code
         */
        subscriber_state?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        /**
         * E.g. `"II"` or `"III"`
         */
        subscriber_suffix?: string;
        subscriber_zip_code?: string;
    };
    readonly updated_at?: string;
    workers_comp_insurance?: {
        property_and_casualty_agency_claim_number?: string;
        workers_comp_carrier_code?: string;
        workers_comp_case_number?: string;
        workers_comp_company?: string;
        workers_comp_date_of_accident?: string;
        workers_comp_group_name?: string;
        workers_comp_group_number?: string;
        workers_comp_notes?: string;
        workers_comp_payer_address?: string;
        workers_comp_payer_city?: string;
        workers_comp_payer_id?: string;
        workers_comp_payer_state?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        workers_comp_payer_zip?: string;
        workers_comp_state_of_occurrence?: 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'AA' | 'AE' | 'AP' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';
        workers_comp_wcb?: string;
        workers_comp_wcb_rating_code?: string;
    };
    zip_code?: string;
};

