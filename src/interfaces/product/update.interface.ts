export interface ProductUpdate {
  id: number;
  name: string | null;
  picture: string | null;
  description: string | null;
  categoryId: number | null;
  productGroupId: number | null;
}
