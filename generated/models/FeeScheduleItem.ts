/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FeeScheduleItem = {
    /**
     * Typical allowed amount for payer. Not used if blank.
     */
    allowed_amount?: number;
    base_price?: number;
    billing_description?: string;
    cash_price?: number;
    code?: string;
    code_type?: 'CPT' | 'HCPCS' | 'Custom' | 'ICD9' | 'ICD10' | 'Revenue';
    cpt_hcpcs_modifier1?: string;
    cpt_hcpcs_modifier2?: '' | '17' | '1D' | '22' | '23' | '24' | '25' | '26' | '27' | '29' | '32' | '33' | '47' | '50' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '62' | '63' | '66' | '73' | '74' | '76' | '77' | '78' | '79' | '80' | '81' | '82' | '83' | '90' | '91' | '92' | '93' | '95' | '96' | '97' | '99' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'AA' | 'AB' | 'AD' | 'AE' | 'AF' | 'AG' | 'AH' | 'AI' | 'AJ' | 'AK' | 'AM' | 'AO' | 'AP' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AV' | 'AW' | 'AX' | 'AY' | 'AZ' | 'BA' | 'BL' | 'BO' | 'BP' | 'BR' | 'BU' | 'CA' | 'CB' | 'CC' | 'CD' | 'CE' | 'CF' | 'CG' | 'CH' | 'CI' | 'CJ' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CP' | 'CQ' | 'CR' | 'CS' | 'CT' | 'DA' | 'E1' | 'E2' | 'E3' | 'E4' | 'EA' | 'EB' | 'EC' | 'ED' | 'EE' | 'EJ' | 'EM' | 'EP' | 'ER' | 'ET' | 'EX' | 'EY' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'FA' | 'FB' | 'FC' | 'FS' | 'FP' | 'FQ' | 'FR' | 'FX' | 'FY' | 'G0' | 'G1' | 'G2' | 'G3' | 'G4' | 'G5' | 'G6' | 'G7' | 'G8' | 'G9' | 'GA' | 'GB' | 'GC' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GJ' | 'GK' | 'GL' | 'GM' | 'GN' | 'GO' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GV' | 'GW' | 'GX' | 'GY' | 'GZ' | 'H9' | 'HA' | 'HB' | 'HC' | 'HD' | 'HE' | 'HF' | 'HG' | 'HH' | 'HI' | 'HJ' | 'HK' | 'HL' | 'HM' | 'HN' | 'HO' | 'HP' | 'HQ' | 'HR' | 'HS' | 'HT' | 'HU' | 'HV' | 'HW' | 'HX' | 'HY' | 'HZ' | 'J1' | 'J2' | 'J3' | 'J4' | 'JA' | 'JB' | 'JC' | 'JD' | 'JE' | 'JF' | 'JG' | 'JW' | 'JZ' | 'K0' | 'K1' | 'K2' | 'K3' | 'K4' | 'KA' | 'KB' | 'KC' | 'KD' | 'KE' | 'KF' | 'KG' | 'KH' | 'KI' | 'KJ' | 'KK' | 'KL' | 'KM' | 'KN' | 'KO' | 'KP' | 'KQ' | 'KR' | 'KS' | 'KT' | 'KU' | 'KV' | 'KW' | 'KX' | 'KY' | 'KZ' | 'L1' | 'LC' | 'LD' | 'LL' | 'LM' | 'LR' | 'LS' | 'LT' | 'LU' | 'M2' | 'ME' | 'MI' | 'MR' | 'MS' | 'N1' | 'N2' | 'N3' | 'NB' | 'NH' | 'NM' | 'NR' | 'NU' | 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'PA' | 'PB' | 'PC' | 'PD' | 'PE' | 'PI' | 'PL' | 'PM' | 'PN' | 'PO' | 'PS' | 'PT' | 'Q0' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5' | 'Q6' | 'Q7' | 'Q8' | 'Q9' | 'QA' | 'QB' | 'QC' | 'QD' | 'QE' | 'QF' | 'QG' | 'QH' | 'QJ' | 'QK' | 'QL' | 'QM' | 'QN' | 'QP' | 'QQ' | 'QR' | 'QS' | 'QT' | 'QU' | 'QV' | 'QW' | 'QX' | 'QY' | 'QZ' | 'RA' | 'RB' | 'RC' | 'RD' | 'RE' | 'RI' | 'RP' | 'RR' | 'RT' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SF' | 'SG' | 'SH' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SP' | 'SQ' | 'SS' | 'ST' | 'SU' | 'SV' | 'SW' | 'SY' | 'SZ' | 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7' | 'T8' | 'T9' | 'TA' | 'TB' | 'TC' | 'TD' | 'TE' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TP' | 'TQ' | 'TR' | 'TS' | 'TT' | 'TU' | 'TV' | 'TW' | 'TX' | 'U1' | 'U2' | 'U3' | 'U4' | 'U5' | 'U6' | 'U7' | 'U8' | 'U9' | 'UA' | 'UB' | 'UC' | 'UD' | 'UE' | 'UF' | 'UG' | 'UH' | 'UJ' | 'UK' | 'UN' | 'UP' | 'UQ' | 'UR' | 'US' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6' | 'V7' | 'V8' | 'V9' | 'VP' | 'VR' | 'W1' | 'W5' | 'W6' | 'W7' | 'W8' | 'W9' | 'WC' | 'WH' | 'WP' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'XE' | 'XP' | 'XS' | 'XU' | 'VM' | 'ZA' | 'ZB' | 'ZL' | 'ZS' | '1P' | '2P' | '3P' | '8P';
    cpt_hcpcs_modifier3?: '' | '17' | '1D' | '22' | '23' | '24' | '25' | '26' | '27' | '29' | '32' | '33' | '47' | '50' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '62' | '63' | '66' | '73' | '74' | '76' | '77' | '78' | '79' | '80' | '81' | '82' | '83' | '90' | '91' | '92' | '93' | '95' | '96' | '97' | '99' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'AA' | 'AB' | 'AD' | 'AE' | 'AF' | 'AG' | 'AH' | 'AI' | 'AJ' | 'AK' | 'AM' | 'AO' | 'AP' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AV' | 'AW' | 'AX' | 'AY' | 'AZ' | 'BA' | 'BL' | 'BO' | 'BP' | 'BR' | 'BU' | 'CA' | 'CB' | 'CC' | 'CD' | 'CE' | 'CF' | 'CG' | 'CH' | 'CI' | 'CJ' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CP' | 'CQ' | 'CR' | 'CS' | 'CT' | 'DA' | 'E1' | 'E2' | 'E3' | 'E4' | 'EA' | 'EB' | 'EC' | 'ED' | 'EE' | 'EJ' | 'EM' | 'EP' | 'ER' | 'ET' | 'EX' | 'EY' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'FA' | 'FB' | 'FC' | 'FS' | 'FP' | 'FQ' | 'FR' | 'FX' | 'FY' | 'G0' | 'G1' | 'G2' | 'G3' | 'G4' | 'G5' | 'G6' | 'G7' | 'G8' | 'G9' | 'GA' | 'GB' | 'GC' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GJ' | 'GK' | 'GL' | 'GM' | 'GN' | 'GO' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GV' | 'GW' | 'GX' | 'GY' | 'GZ' | 'H9' | 'HA' | 'HB' | 'HC' | 'HD' | 'HE' | 'HF' | 'HG' | 'HH' | 'HI' | 'HJ' | 'HK' | 'HL' | 'HM' | 'HN' | 'HO' | 'HP' | 'HQ' | 'HR' | 'HS' | 'HT' | 'HU' | 'HV' | 'HW' | 'HX' | 'HY' | 'HZ' | 'J1' | 'J2' | 'J3' | 'J4' | 'JA' | 'JB' | 'JC' | 'JD' | 'JE' | 'JF' | 'JG' | 'JW' | 'JZ' | 'K0' | 'K1' | 'K2' | 'K3' | 'K4' | 'KA' | 'KB' | 'KC' | 'KD' | 'KE' | 'KF' | 'KG' | 'KH' | 'KI' | 'KJ' | 'KK' | 'KL' | 'KM' | 'KN' | 'KO' | 'KP' | 'KQ' | 'KR' | 'KS' | 'KT' | 'KU' | 'KV' | 'KW' | 'KX' | 'KY' | 'KZ' | 'L1' | 'LC' | 'LD' | 'LL' | 'LM' | 'LR' | 'LS' | 'LT' | 'LU' | 'M2' | 'ME' | 'MI' | 'MR' | 'MS' | 'N1' | 'N2' | 'N3' | 'NB' | 'NH' | 'NM' | 'NR' | 'NU' | 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'PA' | 'PB' | 'PC' | 'PD' | 'PE' | 'PI' | 'PL' | 'PM' | 'PN' | 'PO' | 'PS' | 'PT' | 'Q0' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5' | 'Q6' | 'Q7' | 'Q8' | 'Q9' | 'QA' | 'QB' | 'QC' | 'QD' | 'QE' | 'QF' | 'QG' | 'QH' | 'QJ' | 'QK' | 'QL' | 'QM' | 'QN' | 'QP' | 'QQ' | 'QR' | 'QS' | 'QT' | 'QU' | 'QV' | 'QW' | 'QX' | 'QY' | 'QZ' | 'RA' | 'RB' | 'RC' | 'RD' | 'RE' | 'RI' | 'RP' | 'RR' | 'RT' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SF' | 'SG' | 'SH' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SP' | 'SQ' | 'SS' | 'ST' | 'SU' | 'SV' | 'SW' | 'SY' | 'SZ' | 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7' | 'T8' | 'T9' | 'TA' | 'TB' | 'TC' | 'TD' | 'TE' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TP' | 'TQ' | 'TR' | 'TS' | 'TT' | 'TU' | 'TV' | 'TW' | 'TX' | 'U1' | 'U2' | 'U3' | 'U4' | 'U5' | 'U6' | 'U7' | 'U8' | 'U9' | 'UA' | 'UB' | 'UC' | 'UD' | 'UE' | 'UF' | 'UG' | 'UH' | 'UJ' | 'UK' | 'UN' | 'UP' | 'UQ' | 'UR' | 'US' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6' | 'V7' | 'V8' | 'V9' | 'VP' | 'VR' | 'W1' | 'W5' | 'W6' | 'W7' | 'W8' | 'W9' | 'WC' | 'WH' | 'WP' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'XE' | 'XP' | 'XS' | 'XU' | 'VM' | 'ZA' | 'ZB' | 'ZL' | 'ZS' | '1P' | '2P' | '3P' | '8P';
    cpt_hcpcs_modifier4?: '' | '17' | '1D' | '22' | '23' | '24' | '25' | '26' | '27' | '29' | '32' | '33' | '47' | '50' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '62' | '63' | '66' | '73' | '74' | '76' | '77' | '78' | '79' | '80' | '81' | '82' | '83' | '90' | '91' | '92' | '93' | '95' | '96' | '97' | '99' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'AA' | 'AB' | 'AD' | 'AE' | 'AF' | 'AG' | 'AH' | 'AI' | 'AJ' | 'AK' | 'AM' | 'AO' | 'AP' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AV' | 'AW' | 'AX' | 'AY' | 'AZ' | 'BA' | 'BL' | 'BO' | 'BP' | 'BR' | 'BU' | 'CA' | 'CB' | 'CC' | 'CD' | 'CE' | 'CF' | 'CG' | 'CH' | 'CI' | 'CJ' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CP' | 'CQ' | 'CR' | 'CS' | 'CT' | 'DA' | 'E1' | 'E2' | 'E3' | 'E4' | 'EA' | 'EB' | 'EC' | 'ED' | 'EE' | 'EJ' | 'EM' | 'EP' | 'ER' | 'ET' | 'EX' | 'EY' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'FA' | 'FB' | 'FC' | 'FS' | 'FP' | 'FQ' | 'FR' | 'FX' | 'FY' | 'G0' | 'G1' | 'G2' | 'G3' | 'G4' | 'G5' | 'G6' | 'G7' | 'G8' | 'G9' | 'GA' | 'GB' | 'GC' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GJ' | 'GK' | 'GL' | 'GM' | 'GN' | 'GO' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GV' | 'GW' | 'GX' | 'GY' | 'GZ' | 'H9' | 'HA' | 'HB' | 'HC' | 'HD' | 'HE' | 'HF' | 'HG' | 'HH' | 'HI' | 'HJ' | 'HK' | 'HL' | 'HM' | 'HN' | 'HO' | 'HP' | 'HQ' | 'HR' | 'HS' | 'HT' | 'HU' | 'HV' | 'HW' | 'HX' | 'HY' | 'HZ' | 'J1' | 'J2' | 'J3' | 'J4' | 'JA' | 'JB' | 'JC' | 'JD' | 'JE' | 'JF' | 'JG' | 'JW' | 'JZ' | 'K0' | 'K1' | 'K2' | 'K3' | 'K4' | 'KA' | 'KB' | 'KC' | 'KD' | 'KE' | 'KF' | 'KG' | 'KH' | 'KI' | 'KJ' | 'KK' | 'KL' | 'KM' | 'KN' | 'KO' | 'KP' | 'KQ' | 'KR' | 'KS' | 'KT' | 'KU' | 'KV' | 'KW' | 'KX' | 'KY' | 'KZ' | 'L1' | 'LC' | 'LD' | 'LL' | 'LM' | 'LR' | 'LS' | 'LT' | 'LU' | 'M2' | 'ME' | 'MI' | 'MR' | 'MS' | 'N1' | 'N2' | 'N3' | 'NB' | 'NH' | 'NM' | 'NR' | 'NU' | 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'PA' | 'PB' | 'PC' | 'PD' | 'PE' | 'PI' | 'PL' | 'PM' | 'PN' | 'PO' | 'PS' | 'PT' | 'Q0' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5' | 'Q6' | 'Q7' | 'Q8' | 'Q9' | 'QA' | 'QB' | 'QC' | 'QD' | 'QE' | 'QF' | 'QG' | 'QH' | 'QJ' | 'QK' | 'QL' | 'QM' | 'QN' | 'QP' | 'QQ' | 'QR' | 'QS' | 'QT' | 'QU' | 'QV' | 'QW' | 'QX' | 'QY' | 'QZ' | 'RA' | 'RB' | 'RC' | 'RD' | 'RE' | 'RI' | 'RP' | 'RR' | 'RT' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SF' | 'SG' | 'SH' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SP' | 'SQ' | 'SS' | 'ST' | 'SU' | 'SV' | 'SW' | 'SY' | 'SZ' | 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7' | 'T8' | 'T9' | 'TA' | 'TB' | 'TC' | 'TD' | 'TE' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TP' | 'TQ' | 'TR' | 'TS' | 'TT' | 'TU' | 'TV' | 'TW' | 'TX' | 'U1' | 'U2' | 'U3' | 'U4' | 'U5' | 'U6' | 'U7' | 'U8' | 'U9' | 'UA' | 'UB' | 'UC' | 'UD' | 'UE' | 'UF' | 'UG' | 'UH' | 'UJ' | 'UK' | 'UN' | 'UP' | 'UQ' | 'UR' | 'US' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6' | 'V7' | 'V8' | 'V9' | 'VP' | 'VR' | 'W1' | 'W5' | 'W6' | 'W7' | 'W8' | 'W9' | 'WC' | 'WH' | 'WP' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'XE' | 'XP' | 'XS' | 'XU' | 'VM' | 'ZA' | 'ZB' | 'ZL' | 'ZS' | '1P' | '2P' | '3P' | '8P';
    readonly created_at?: string;
    description?: string;
    doctor?: number;
    readonly id?: number;
    insured_out_of_network_price?: number;
    insured_price?: number;
    ndc_code?: string;
    ndc_quantity?: number;
    ndc_units?: 'F2' | 'GR' | 'ME' | 'ML' | 'UN';
    /**
     * Fee Schedule pricing specific to this payer, if null, then applies as default to all payers without a more specific fee schedule.
     */
    payer_id?: string;
    /**
     * Optional: Category to organize the code into.
     */
    picklist_category?: string;
    /**
     * Name of insurance plan.
     */
    plan_name?: string;
    readonly updated_at?: string;
};
