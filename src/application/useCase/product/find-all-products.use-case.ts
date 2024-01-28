import { ProductRepositoryAdapter } from "src/adapters/product/product.repository";

export class FindAllProductsUseCase{
    constructor(private productRepository: ProductRepositoryAdapter){}

    execute(){
        return this.productRepository.findAll()
    }
}