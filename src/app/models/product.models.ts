export interface ProductCategory {
    id?: number;
    name?: string;
}

export interface ProductDetails {
    name?: string;
    price?: number;
    stock?: number;
    description?: string;
    attachments?: string[];
    primaryAttachmentUrl?: string;
}

export interface ProductFilter {
    priceFrom?: number;
    priceTo?: number;
    artistId?: number;
    designerId?: number;
    mechanicsId?: number;
    categoryId?: number;
    name?: string;
    pageSize?: number;
    pageNumber?: number;
    sortOrder?: number;
}

export interface ProductListItem {
    id?: number;
    primaryAttachmentUrl?: string;
    category?: string;
    name?: string;
    price?: number;
    stock?: number;
    artist?: string;
    desigener?: string;
    mechanics?: string;
}

