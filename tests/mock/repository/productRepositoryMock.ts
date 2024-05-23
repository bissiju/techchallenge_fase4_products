import ProductRepository from "../../../src/domain/repository/productRepository";

export default class ProductRepositoryMock {
    createdAt: Date
    deletedAt: null | Date
    updatedAt: null | Date
    
    constructor(createdAt: Date) {
        this.createdAt = createdAt
        this.deletedAt = null
        this.updatedAt = null
    }

    repository() {
        const productRepositoryMock: ProductRepository = {
            createProduct: jest.fn().mockResolvedValue({
              id: "1",
              name: "mock_1",
              price: 10,
              description: null,
              createdAt: this.createdAt,
              deletedAt: this.deletedAt,
              updatedAt: this.updatedAt
            }),
            deleteProduct: jest.fn().mockResolvedValue(1),
            editProduct: jest.fn().mockResolvedValue({
              id: "1",
              name: "mock_1_editdo",
              price: 1.1,
              description: "test",
              createdAt: this.createdAt,
              deletedAt: this.deletedAt,
              updatedAt: this.updatedAt
            }),
            listProducts: jest.fn().mockResolvedValue([
              {
                id: "1",
                name: "mock_1",
                price: 10,
                description: null,
                createdAt: this.createdAt,
                deletedAt: this.deletedAt,
                updatedAt: this.updatedAt
              },
              {
                id: "2",
                name: "mock_2",
                price: 101,
                description: null,
                createdAt: this.createdAt,
                deletedAt: this.deletedAt,
                updatedAt: this.updatedAt
              },
              {
                id: "3",
                name: "mock_4",
                price: 10,
                description: null,
                createdAt: this.createdAt,
                deletedAt: this.deletedAt,
                updatedAt: this.updatedAt
              }
            ]),
            viewProduct: jest.fn().mockResolvedValue({
              id: "1",
              name: "mock_1",
              price: 10,
              description: null,
              createdAt: this.createdAt,
              deletedAt: this.deletedAt,
              updatedAt: this.updatedAt
            }),
          };

          return productRepositoryMock;
    }
}
