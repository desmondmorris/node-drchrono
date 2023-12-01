export type Doctor = {
    cell_phone?: string;
    /**
     * Two-letter conutry code. Default is `US`
     */
    country?: 'BD' | 'WF' | 'BF' | 'BG' | 'BA' | 'BB' | 'BE' | 'BL' | 'BM' | 'BN' | 'BO' | 'JP' | 'BI' | 'BJ' | 'BT' | 'JM' | 'BV' | 'JO' | 'WS' | 'BQ' | 'BR' | 'BS' | 'JE' | 'BY' | 'BZ' | 'RU' | 'RW' | 'RS' | 'TL' | 'RE' | 'TM' | 'TJ' | 'RO' | 'TK' | 'GW' | 'GU' | 'GT' | 'GS' | 'GR' | 'GQ' | 'GP' | 'BH' | 'GY' | 'GG' | 'GF' | 'GE' | 'GD' | 'GB' | 'GA' | 'GN' | 'GM' | 'GL' | 'KW' | 'GI' | 'GH' | 'OM' | 'TN' | 'BW' | 'HR' | 'HT' | 'HU' | 'HK' | 'HN' | 'HM' | 'KR' | 'AD' | 'PR' | 'PS' | 'PW' | 'PT' | 'KN' | 'PY' | 'AI' | 'PA' | 'PF' | 'PG' | 'PE' | 'PK' | 'PH' | 'PN' | 'PL' | 'PM' | 'ZM' | 'EH' | 'EE' | 'EG' | 'ZA' | 'EC' | 'AL' | 'AO' | 'KZ' | 'ET' | 'ZW' | 'KY' | 'ES' | 'ER' | 'ME' | 'MD' | 'MG' | 'MF' | 'MA' | 'MC' | 'UZ' | 'MM' | 'ML' | 'MO' | 'MN' | 'MH' | 'MK' | 'MU' | 'MT' | 'MW' | 'MV' | 'MQ' | 'MP' | 'MS' | 'MR' | 'AU' | 'UG' | 'MY' | 'MX' | 'MZ' | 'FR' | 'AW' | 'AF' | 'AX' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'NI' | 'NL' | 'NO' | 'NA' | 'VU' | 'NC' | 'NE' | 'NF' | 'NG' | 'NZ' | 'NP' | 'NR' | 'NU' | 'CK' | 'CI' | 'CH' | 'CO' | 'CN' | 'CM' | 'CL' | 'CC' | 'CA' | 'CG' | 'CF' | 'CD' | 'CZ' | 'CY' | 'CX' | 'CR' | 'KP' | 'CW' | 'CV' | 'CU' | 'SZ' | 'SY' | 'SX' | 'KG' | 'KE' | 'SS' | 'SR' | 'KI' | 'KH' | 'SV' | 'KM' | 'ST' | 'SK' | 'SJ' | 'SI' | 'SH' | 'SO' | 'SN' | 'SM' | 'SL' | 'SC' | 'SB' | 'SA' | 'SG' | 'SE' | 'SD' | 'DO' | 'DM' | 'DJ' | 'DK' | 'DE' | 'YE' | 'AT' | 'DZ' | 'US' | 'UY' | 'YT' | 'UM' | 'LB' | 'LC' | 'LA' | 'TV' | 'TW' | 'TT' | 'TR' | 'LK' | 'LI' | 'LV' | 'TO' | 'LT' | 'LU' | 'LR' | 'LS' | 'TH' | 'TF' | 'TG' | 'TD' | 'TC' | 'LY' | 'VA' | 'VC' | 'AE' | 'VE' | 'AG' | 'VG' | 'IQ' | 'VI' | 'IS' | 'IR' | 'AM' | 'IT' | 'VN' | 'AQ' | 'AS' | 'AR' | 'IM' | 'IL' | 'IO' | 'IN' | 'TZ' | 'AZ' | 'IE' | 'ID' | 'UA' | 'QA';
    readonly email?: string;
    first_name?: string;
    group_npi_number?: string;
    home_phone?: string;
    readonly id?: number;
    /**
     * Indicates the doctor's account is suspended or not
     */
    is_account_suspended?: boolean;
    job_title?: '' | 'Provider/Staff (Private Practice)' | 'Provider/Staff (Hospital)' | 'Patients/Interview Candidate' | 'Educator/Student' | 'API/Developer' | 'Consultant' | 'Other';
    last_name?: string;
    /**
     * If both this field and `group_npi_number` are set, prefer this field
     */
    npi_number?: string;
    office_phone?: string;
    /**
     * The ID of the practice group this user belongs to. This can be used to identify users in the same practice.
     */
    readonly practice_group?: string;
    readonly practice_group_name?: string;
    readonly profile_picture?: string;
    specialty?: string;
    suffix?: string;
    timezone?: string;
    website?: string;
};
