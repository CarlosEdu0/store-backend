import { Category } from './category.interface';
import { CategoryCreate } from './create.interface';
import { CategoryUpdate } from './update.interface';

export interface CategoryRepository {
  findAll(): Promise<Category[]>;
  findById(id: number): Promise<Category | null>;
  create(category: CategoryCreate): Promise<Category>;
  update(category: CategoryUpdate): Promise<Category>;
  delete(id: number): Promise<boolean>;
}
