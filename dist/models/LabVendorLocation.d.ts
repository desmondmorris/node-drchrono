export type LabVendorLocation = {
    /**
     * Used for identifying the lab in orders and results
     */
    facility_code: string;
    readonly id?: number;
    name: string;
    readonly vendor_name?: string;
};
