
import { ProductDTO } from '../../src/domain/entity/types/productType';

describe('Product Model', () => {
    it('Create product', async () => {
        const product: ProductDTO = {
            id: "1234-1234-1234",
            name: "Product unit test",
            categoryId: "10",
            price: 10,
            description: "unit test",
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null,
        };

        expect(product.name).toBe('Product unit test');
    })
});
