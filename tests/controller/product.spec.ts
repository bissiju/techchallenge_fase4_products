// productController.spec.ts
import { ProductController } from "../../src/adapters/controllers/productController";
import ProductRepository from "~domain/repository/productRepository";
import ProductUseCase from "~domain/use_case/productUseCase";
import { ProductDTO, ProductInput } from "~domain/entity/types/productType";

const productRepositoryMock = jest.createMockFromModule<ProductRepository>(
    "~domain/repository/productRepository"
);

jest.mock("~domain/use_case/productUseCase", () => ({
    createProduct: jest.fn(),
    deleteProduct: jest.fn(),
    editProduct: jest.fn(),
    listProducts: jest.fn(),
    viewProduct: jest.fn(),
}));

describe("ProductController", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should create product", async () => {
        const productInput: ProductInput = {
            id: "1",
            name: "mock_1",
            price: 10,
            description: 'test',
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null
        };

        (ProductUseCase.createProduct as jest.Mock).mockResolvedValue(productInput);

        const result = await ProductController.createProduct(productRepositoryMock, productInput);

        expect(result).toEqual(productInput);
        expect(ProductUseCase.createProduct).toHaveBeenCalledWith(productRepositoryMock, productInput);
    });

    it("should delete product", async () => {
        const idProduct = "1";

        (ProductUseCase.deleteProduct as jest.Mock).mockResolvedValue(1);

        const result = await ProductController.deleteProduct(productRepositoryMock, idProduct);

        expect(result).toBe(1);
        expect(ProductUseCase.deleteProduct).toHaveBeenCalledWith(productRepositoryMock, idProduct);
    });

    it("should edit product", async () => {
        const idProduct = "1";
        const productInput: ProductInput = {
            id: "1",
            name: "mock_1",
            price: 10,
            description: 'test',
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null
        };

        (ProductUseCase.editProduct as jest.Mock).mockResolvedValue(productInput);

        const result = await ProductController.editProduct(productRepositoryMock, idProduct, productInput);

        expect(result).toEqual(productInput);
        expect(ProductUseCase.editProduct).toHaveBeenCalledWith(productRepositoryMock, idProduct, productInput);
    });

    it("should return product", async () => {
        const idProduct = "1";
        const productMock: ProductDTO = {
            id: "1",
            name: "mock_1",
            price: 10,
            description: 'test',
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null
        };

        (ProductUseCase.viewProduct as jest.Mock).mockResolvedValue(productMock);

        const result = await ProductController.viewProduct(productRepositoryMock, idProduct);

        expect(result).toEqual(productMock);
        expect(ProductUseCase.viewProduct).toHaveBeenCalledWith(productRepositoryMock, idProduct);
    });
});