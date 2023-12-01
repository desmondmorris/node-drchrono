export type Coverage = {
    readonly appointment?: string;
    /**
     * The level of insurance the eligibility check was run on. Can be one of the following: `Primary Insurance` or `Secondary Insurance`
     */
    readonly cob_level?: string;
    /**
     * A variable size object containing the details of the eligibility check, if returned by the clearinghouse that ran the eligibility check
     */
    readonly coverage_details?: string;
    /**
     * A variable size object containing subscriber information, if returned by the clearinghouse that ran the eligibility check
     */
    readonly coverage_subscriber?: string;
    /**
     *
     * Value | Description
     * --- | ----
     * `'1'` | Active Coverage
     * `'2'` | Active - Full Risk Capitation
     * `'3'` | Active - Services Capitated
     * `'4'` | Active - Services Capitated to Primary Care Physician
     * `'5'` | Active - Pending Investigation
     * `'6'` | Inactive
     * `'7'` | Inactive - Pending Eligibility Update
     * `'8'` | Inactive - Pending Investigation
     * `'A'` | Co-Insurance
     * `'B'` | Co-Payment
     * `'C'` | Deductible
     * `'CB'` | Coverage Basis
     * `'D'` | Benefit Description
     * `'E'` | Exclusions
     * `'F'` | Limitations
     * `'G'` | Out of Pocket (Stop Loss)
     * `'H'` | Unlimited
     * `'I'` | Non-Covered
     * `'J'` | Cost Containment
     * `'K'` | Reserve
     * `'L'` | Primary Care Provider
     * `'M'` | Pre-existing Condition
     * `'MC'` | Managed Care Coordinator
     * `'N'` | Services Restricted to Following Provider
     * `'O'` | Not Deemed a Medical Necessity
     * `'P'` | Benefit Disclaimer
     * `'Q'` | Second Surgical Opinion Required
     * `'R'` | Other or Additional Payor
     * `'S'` | Prior Year(s) History
     * `'T'` | Card(s) Reported Lost/Stolen
     * `'U'` | Contact Following Entity for Eligibility or Benefit Information
     * `'V'` | Cannot Process
     * `'W'` | Other Source of Data
     * `'X'` | Health Care Facility
     * `'Y'` | Spend Down
     *
     */
    eligibility?: string;
    readonly patient?: string;
    /**
     * The name of the payer as returned by the clearinghouse that ran the eligibility check
     */
    payer_name?: string;
    /**
     * The time at which the request was made
     */
    readonly query_date?: string;
    /**
     *
     * Value | Description
     * --- | ----
     * `'1'` | Medical Care
     * `'2'` | Surgical
     * `'3'` | Consultation
     * `'4'` | Diagnostic X-Ray
     * `'5'` | Diagnostic Lab
     * `'6'` | Radiation Therapy
     * `'7'` | Anesthesia
     * `'8'` | Surgical Assistance
     * `'9'` | Other Medical
     * `'10'` | Blood Charges
     * `'11'` | Used Durable Medical Equipment
     * `'12'` | Durable Medical Equipment Purchase
     * `'13'` | Ambulatory Service Center Facility
     * `'14'` | Renal Supplies in the Home
     * `'15'` | Alternate Method Dialysis
     * `'16'` | Chronic Renal Disease (CRD) Equipment
     * `'17'` | Pre-Admission Testing
     * `'18'` | Durable Medical Equipment Rental
     * `'19'` | Pneumonia Vaccine
     * `'20'` | Second Surgical Opinion
     * `'21'` | Third Surgical Opinion
     * `'22'` | Social Work
     * `'23'` | Diagnostic Dental
     * `'24'` | Periodontics
     * `'25'` | Restorative
     * `'26'` | Endodontics
     * `'27'` | Maxillofacial Prosthetics
     * `'28'` | Adjunctive Dental Services
     * `'30'` | Health Benefit Plan Coverage
     * `'32'` | Plan Waiting Period
     * `'33'` | Chiropractic
     * `'34'` | Chiropractic Office Visits
     * `'35'` | Dental Care
     * `'36'` | Dental Crowns
     * `'37'` | Dental Accident
     * `'38'` | Orthodontics
     * `'39'` | Prosthodontics
     * `'40'` | Oral Surgery
     * `'41'` | Routine (Preventive) Dental
     * `'42'` | Home Health Care
     * `'43'` | Home Health Prescriptions
     * `'44'` | Home Health Visits
     * `'45'` | Hospice
     * `'46'` | Respite Care
     * `'47'` | Hospital
     * `'48'` | Hospital - Inpatient
     * `'49'` | Hospital - Room and Board
     * `'50'` | Hospital - Outpatient
     * `'51'` | Hospital - Emergency Accident
     * `'52'` | Hospital - Emergency Medical
     * `'53'` | Hospital - Ambulatory Surgical
     * `'54'` | Long Term Care
     * `'55'` | Major Medical
     * `'56'` | Medically Related Transportation
     * `'57'` | Air Transportation
     * `'58'` | Cabulance
     * `'59'` | Licensed Ambulance
     * `'60'` | General Benefits
     * `'61'` | In-vitro Fertilization
     * `'62'` | MRI/CAT Scan
     * `'63'` | Donor Procedures
     * `'64'` | Acupuncture
     * `'65'` | Newborn Care
     * `'66'` | Pathology
     * `'67'` | Smoking Cessation
     * `'68'` | Well Baby Care
     * `'69'` | Maternity
     * `'70'` | Transplants
     * `'71'` | Audiology Exam
     * `'72'` | Inhalation Therapy
     * `'73'` | Diagnostic Medical
     * `'74'` | Private Duty Nursing
     * `'75'` | Prosthetic Device
     * `'76'` | Dialysis
     * `'77'` | Otological Exam
     * `'78'` | Chemotherapy
     * `'79'` | Allergy Testing
     * `'80'` | Immunizations
     * `'81'` | Routine Physical
     * `'82'` | Family Planning
     * `'83'` | Infertility
     * `'84'` | Abortion
     * `'85'` | AIDS
     * `'86'` | Emergency Services
     * `'87'` | Cancer
     * `'88'` | Pharmacy
     * `'89'` | Free Standing Prescription Drug
     * `'90'` | Mail Order Prescription Drug
     * `'91'` | Brand Name Prescription Drug
     * `'92'` | Generic Prescription Drug
     * `'93'` | Podiatry
     * `'94'` | Podiatry - Office Visits
     * `'95'` | Podiatry - Nursing Home Visits
     * `'96'` | Professional (Physician)
     * `'97'` | Anesthesiologist
     * `'98'` | Professional (Physician) Visit - Office
     * `'99'` | Professional (Physician) Visit - Inpatient
     * `'A0'` | Professional (Physician) Visit - Outpatient
     * `'A1'` | Professional (Physician) Visit - Nursing Home
     * `'A2'` | Professional (Physician) Visit - Skilled Nursing Facility
     * `'A3'` | Professional (Physician) Visit - Home
     * `'A4'` | Psychiatric
     * `'A5'` | Psychiatric - Room and Board
     * `'A6'` | Psychotherapy
     * `'A7'` | Psychiatric - Inpatient
     * `'A8'` | Psychiatric - Outpatient
     * `'A9'` | Rehabilitation
     * `'AA'` | Rehabilitation - Room and Board
     * `'AB'` | Rehabilitation - Inpatient
     * `'AC'` | Rehabilitation - Outpatient
     * `'AD'` | Occupational Therapy
     * `'AE'` | Physical Medicine
     * `'AF'` | Speech Therapy
     * `'AG'` | Skilled Nursing Care
     * `'AH'` | Skilled Nursing Care - Room and Board
     * `'AI'` | Substance Abuse
     * `'AJ'` | Alcoholism
     * `'AK'` | Drug Addiction
     * `'AL'` | Vision (Optometry)
     * `'AM'` | Frames
     * `'AN'` | Routine Exam
     * `'AO'` | Lenses
     * `'AQ'` | Nonmedically Necessary Physical
     * `'AR'` | Experimental Drug Therapy
     * `'B1'` | Burn Care
     * `'B2'` | Brand Name Prescription Drug - Formulary
     * `'B3'` | Brand Name Prescription Drug - Non-Formulary
     * `'BA'` | Independent Medical Evaluation
     * `'BB'` | Partial Hospitalization (Psychiatric)
     * `'BC'` | Day Care (Psychiatric)
     * `'BD'` | Cognitive Therapy
     * `'BE'` | Massage Therapy
     * `'BF'` | Pulmonary Rehabilitation
     * `'BG'` | Cardiac Rehabilitation
     * `'BH'` | Pediatric
     * `'BI'` | Nursery
     * `'BJ'` | Skin
     * `'BK'` | Orthopedic
     * `'BL'` | Cardiac
     * `'BM'` | Lymphatic
     * `'BN'` | Gastrointestinal
     * `'BP'` | Endocrine
     * `'BQ'` | Neurology
     * `'BR'` | Eye
     * `'BS'` | Invasive Procedures
     * `'BT'` | Gynecological
     * `'BU'` | Obstetrical
     * `'BV'` | Obstetrical/Gynecological
     * `'BW'` | Mail Order Prescription Drug: Brand Name
     * `'BX'` | Mail Order Prescription Drug: Generic
     * `'BY'` | Physician Visit - Office: Sick
     * `'BZ'` | Physician Visit - Office: Well
     * `'C1'` | Coronary Care
     * `'CA'` | Private Duty Nursing - Inpatient
     * `'CB'` | Private Duty Nursing - Home
     * `'CC'` | Surgical Benefits - Professional (Physician)
     * `'CD'` | Surgical Benefits - Facility
     * `'CE'` | Mental Health Provider - Inpatient
     * `'CF'` | Mental Health Provider - Outpatient
     * `'CG'` | Mental Health Facility - Inpatient
     * `'CH'` | Mental Health Facility - Outpatient
     * `'CI'` | Substance Abuse Facility - Inpatient
     * `'CJ'` | Substance Abuse Facility - Outpatient
     * `'CK'` | Screening X-ray
     * `'CL'` | Screening laboratory
     * `'CM'` | Mammogram, High Risk Patient
     * `'CN'` | Mammogram, Low Risk Patient
     * `'CO'` | Flu Vaccination
     * `'CP'` | Eyewear and Eyewear Accessories
     * `'CQ'` | Case Management
     * `'DG'` | Dermatology
     * `'DM'` | Durable Medical Equipment
     * `'DS'` | Diabetic Supplies
     * `'GF'` | Generic Prescription Drug - Formulary
     * `'GN'` | Generic Prescription Drug - Non-Formulary
     * `'GY'` | Allergy
     * `'IC'` | Intensive Care
     * `'MH'` | Mental Health
     * `'NI'` | Neonatal Intensive Care
     * `'ON'` | Oncology
     * `'PT'` | Physical Therapy
     * `'PU'` | Pulmonary
     * `'RN'` | Renal
     * `'RT'` | Residential Psychiatric Treatment
     * `'TC'` | Transitional Care
     * `'TN'` | Transitional Nursery Care
     * `'UC'` | Urgent Care
     *
     */
    request_service_type?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '30' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '60' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '68' | '69' | '70' | '71' | '72' | '73' | '74' | '75' | '76' | '77' | '78' | '79' | '80' | '81' | '82' | '83' | '84' | '85' | '86' | '87' | '88' | '89' | '90' | '91' | '92' | '93' | '94' | '95' | '96' | '97' | '98' | '99' | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'AA' | 'AB' | 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AH' | 'AI' | 'AJ' | 'AK' | 'AL' | 'AM' | 'AN' | 'AO' | 'AQ' | 'AR' | 'B1' | 'B2' | 'B3' | 'BA' | 'BB' | 'BC' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BK' | 'BL' | 'BM' | 'BN' | 'BP' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BU' | 'BV' | 'BW' | 'BX' | 'BY' | 'BZ' | 'C1' | 'CA' | 'CB' | 'CC' | 'CD' | 'CE' | 'CF' | 'CG' | 'CH' | 'CI' | 'CJ' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CP' | 'CQ' | 'DG' | 'DM' | 'DS' | 'GF' | 'GN' | 'GY' | 'IC' | 'MH' | 'NI' | 'ON' | 'PT' | 'PU' | 'RN' | 'RT' | 'TC' | 'TN' | 'UC';
    readonly service_type_description?: string;
};
