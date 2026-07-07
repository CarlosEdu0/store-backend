export interface ProductCreate {
  name: string;
  picture: string;
  categoryId: number;
  description: string | null;
  productGroupId: number;
}
