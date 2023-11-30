/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ImplantableDevice = {
    readonly archived?: boolean;
    readonly brand_name?: string;
    readonly company_name?: string;
    readonly created_at?: string;
    readonly expiration_date?: string;
    /**
     * "GMDN PT Name" or "SNOMED CT Description" mapped to the attribute in  the "GMDN PT Name"
     */
    readonly gmdn_pt_name?: string;
    readonly id?: number;
    readonly manufacturing_date?: string;
    readonly patient?: string;
    /**
     * ID of `/api/procedures` object
     */
    readonly procedure?: string;
    readonly serial_number?: string;
    /**
     * One of `'active'` or `'inactive'`
     */
    readonly status?: 'active' | 'inactive';
    readonly udi?: string;
    readonly updated_at?: string;
    readonly version_or_model?: string;
};

