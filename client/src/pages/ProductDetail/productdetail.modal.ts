export interface ProductDetail {
    id: number;
    name: string;
    brand: string;
    price: string;
    storage: {
        value: number;
        unit: string;
    };
    ram: {
        value: number;
        unit: string;
    };
    processor: string;
    size: string;
    color: string;
    description: string;
}
