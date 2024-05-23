
import Product from "../../src/domain/entity/product";
import { ProductDTO } from "../../src/domain/entity/types/productType";

describe("category", () => {
    it("should create category", () => {
        const product: ProductDTO = {
            id: "1234-1234-1234",
            name: "category unit test",
            price: 10,
            createdAt: new Date(),
            description: "unit test",
            deletedAt: null,
            updatedAt: null
        };

        const productNew = new Product(product);

        expect(productNew.id).toBeDefined();
        expect(productNew.name).toBe(product.name);
    });

    it('should generate _id', () => {
        const product: ProductDTO = {
            id: "432423-543654-3242343",
            name: "category unit test",
            price: 10,
            createdAt: new Date(),
            description: "unit test",
            deletedAt: null,
            updatedAt: null
        };

        const productNew = new Product(product);

        expect(productNew.id).toBeDefined();
        expect(typeof productNew.id).toBe("string");
    });
});
