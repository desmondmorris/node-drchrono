export type InventoryVaccine = {
    /**
     * ID of `/api/inventory_categories`
     */
    category?: number;
    /**
     * Base cost for consumables.
     */
    cost?: number;
    readonly created_at?: string;
    /**
     * This field can onlyu be changed by creating new patient vaccine record. Current quantity of an inventory vaccine is calculated by subtract number of records pointing to this inventory from the original quantity value.
     */
    readonly current_quantity?: number;
    cvx_code?: string;
    doctor: number;
    /**
     * When will the vaccine expire
     */
    expiry?: string;
    readonly id?: number;
    lot_number?: string;
    manufacturer?: string;
    manufacturer_code: string;
    name: string;
    note?: string;
    /**
     * Default to zero
     */
    original_quantity?: number;
    price?: number;
    price_with_tax?: number;
    /**
     * Is sales tax applicable to this service/product? Default to false
     */
    sales_tax_applicable?: boolean;
    /**
     * Status of vaccine, could be one of `active`, `inactive`, `archived`, `voided`, default to `active`
     */
    status?: 'active' | 'inactive' | 'archived' | 'voided';
    readonly updated_at?: string;
    /**
     * Default to `"standard vaccine"`
     */
    vaccination_type?: string;
};
