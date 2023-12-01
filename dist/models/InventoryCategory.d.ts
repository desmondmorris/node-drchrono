export type InventoryCategory = {
    /**
     * If the category is archived or not
     */
    archived?: boolean;
    /**
     * Can be one of `"vaccine"`, `"product"` or `"service"`
     */
    category_type?: 'vaccine' | 'product' | 'service';
    readonly created_at?: string;
    readonly doctor?: string;
    readonly id?: number;
    /**
     * Name of the inventory category
     */
    name?: string;
    readonly updated_at?: string;
};
