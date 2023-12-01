export type PatientVaccineRecord = {
    /**
     * ID of `/api/offices` where the administration happened
     */
    administered_at?: number;
    /**
     * ID of `/api/users` who performs the administration
     */
    administered_by?: string;
    /**
     * Datetime when the administration starts
     */
    administration_start?: string;
    /**
     * Amount of vaccine administered
     */
    amount?: number;
    comments?: string;
    /**
     * Vaccination status, can be `CP`(Complete), `RE`(Refused), `NA`(Not administered), `PA`(Partially administered)
     */
    completion_status?: 'CP' | 'RE' | 'NA' | 'PA';
    /**
     * Consent form related with vaccine record
     */
    consent_form?: number;
    /**
     * Vaccine cpt code
     */
    cpt_code?: string;
    readonly created_at?: string;
    /**
     * Vaccine cvx code
     */
    cvx_code: string;
    /**
     * Vaccine dose IDs received in consent form signed hook
     */
    doses?: Array<{
        readonly id?: number;
        max_age_months?: number;
        min_age_months?: number;
        title?: string;
    }>;
    /**
     * ID of user who created the record
     */
    readonly entered_by?: string;
    /**
     * The funding program that should pay for a given immunization
     */
    funding_eligibility?: 'V01' | 'V02' | 'V03' | 'V04' | 'V05' | 'V07';
    readonly id?: number;
    name: string;
    /**
     * Date for next dose of vaccine
     */
    next_dose_date?: string;
    observed_immunity?: '398102009' | '409498004' | '397428000' | '18624000' | '91428005' | '271511000' | '240532009' | '6142004' | '52947006' | '14189004' | '23511006' | '36989005' | '27836007' | '16814004' | '14168008' | '36653000' | '76902006' | '66071002' | '4834000' | '111852003' | '38907003' | '40468003' | '16541001';
    ordering_doctor?: number;
    patient: number;
    record_source?: '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08';
    route?: string;
    site?: string;
    units?: string;
    readonly updated_at?: string;
    /**
     * ID of `/api/vaccine_inventories` the vaccine is from
     */
    vaccine_inventory?: number;
    /**
     * Related vaccine information statement
     */
    readonly vis?: string;
};
