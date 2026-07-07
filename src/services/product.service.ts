import { ProductCreate } from '@/interfaces/product/create.interface';
import { Product } from '@/interfaces/product/product.interface';
import { ProductRepository } from '@/interfaces/product/repository.interface';
import { ProductUpdate } from '@/interfaces/product/update.interface';
import ProductRepositoryPrisma from '@/repositories/product.repository';

class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepositoryPrisma();
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async findById(id: number): Promise<Product | null> {
    return await this.productRepository.findById(id);
  }

  async create(product: ProductCreate): Promise<Product> {
    return await this.productRepository.create(product);
  }

  async update(product: ProductUpdate): Promise<Product> {
    return await this.productRepository.update(product);
  }

  async delete(id: number): Promise<boolean> {
    return await this.productRepository.delete(id);
  }
}

export default ProductService;
