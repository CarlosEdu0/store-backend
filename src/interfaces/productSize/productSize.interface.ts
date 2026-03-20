export interface ProductSize {
    id: number;
    productId: number;
    sizeId: number;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}