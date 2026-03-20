export interface Category {
    id: number;
    name: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}

export interface CategoryCreate {
    name: string;
    order: number;
}

export interface CategoryUpdate {
    id: number;
    name: string | null;
    order: number | null;
}

export interface CategoryRepository {
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category | null>;
    create(name: String): Promise<Category>;
    update(newName: String): Promise<Category>;
    delete(id: number): Promise<boolean>;
}