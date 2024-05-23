import { ProductDTO } from "~domain/entity/types/productType";

export default interface ProductRepository {
  createProduct(product: ProductDTO): Promise<ProductDTO>;
  deleteProduct(idProduct: string): Promise<number>;
  editProduct(idProduct: string, product: ProductDTO): Promise<ProductDTO | null>;
  listProducts(query: object): Promise<ProductDTO[]>;
  viewProduct(idProduct: string): Promise<ProductDTO | null>;
}
