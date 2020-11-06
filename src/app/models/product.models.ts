export interface ProductCategory {
    id?: number;
    name?: string;
}

export interface ProductDetails {
    categoryId?: number;
}

export interface ProductFilter {
    priceFrom?: number;
    priceTo?: number;
    artistId?: number;
    designerId?: number;
    mechanicsId?: number;
}