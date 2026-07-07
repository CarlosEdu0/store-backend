import { ProductCreate } from './create.interface';
import { Product } from './product.interface';
import { ProductUpdate } from './update.interface';

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
  create(product: ProductCreate): Promise<Product>;
  update(product: ProductUpdate): Promise<Product>;
  delete(id: number): Promise<boolean>;
}
