import { ProductUpdate } from "@/interfaces/product/update.interface";
import { prisma } from "@/lib/prisma";
import { Product } from "../../generated/prisma";
import { ProductCreate } from "@/interfaces/product/create.interface";
import { ProductRepository } from "@/interfaces/product/repository.interface";

class ProductRepositoryPrisma implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return await prisma.product.findMany({
      where: { deletedAt: null },
    });
  }

  async findById(id: number): Promise<Product | null> {
    return await prisma.product.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async create(product: ProductCreate): Promise<Product> {
    return await prisma.product.create({
      data: {
        name: product.name,
        picture: product.picture,
        categoryId: product.categoryId,
        productGroupId: product.productGroupId,
        description: product.description,
      },
    });
  }

  async update(product: ProductUpdate): Promise<Product> {
    return await prisma.product.update({
      where: { id: product.id },
      data: {
        name: product.name ?? undefined,
        picture: product.picture ?? undefined,
        description: product.description ?? undefined,
        categoryId: product.categoryId ?? undefined,
        productGroupId: product.productGroupId ?? undefined,
        deletedAt: null,
      },
    });
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.product.update({
        where: { id },
        data: { deletedAt: new Date() },
      });
      return true;
    } catch {
      return false;
    }
  }
}

export default ProductRepositoryPrisma;