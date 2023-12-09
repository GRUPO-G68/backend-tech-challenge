import { Injectable } from "@nestjs/common";
import { IProductRepository } from "../../application/ports/product.repository";
import { IProduct } from "src/domain/entities/product.entity";

@Injectable()
export class ProductRepositoryAdapter implements IProductRepository {
  delete(productId: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<IProduct> {
    return Promise.resolve(undefined);
  }

  findByCategory(categoryId: string): Promise<IProduct[]> {
    return Promise.resolve([]);
  }

  findById(productId: string): Promise<IProduct[]> {
    return Promise.resolve([]);
  }

  save(product: IProduct): Promise<{ productId: string }> {
    return Promise.resolve({ productId: "" });
  }

  update(product: IProduct): Promise<void> {
    return Promise.resolve(undefined);
  }
}
