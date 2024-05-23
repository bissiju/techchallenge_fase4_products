import { ProductInput } from "../../src/domain/entity/types/productType";
import ProductRepository from "../../src/domain/repository/productRepository";
import ProductUseCase from "../../src/domain/use_case/productUseCase";
import ProductRepositoryMock from "../mock/repository/productRepositoryMock";


describe('ProductUseCase', () => {
  let productRepositoryMock: ProductRepository;
  const createdAt = new Date();
  const updatedAt = null;
  beforeEach(() => {
    productRepositoryMock = new ProductRepositoryMock(createdAt).repository();
  })


  it('Test create product', async () => {

    const productInput: ProductInput = {
      id: "1",
      name: "mock_1",
      price: 10,
      description: 'test',
      createdAt,
      deletedAt: null,
      updatedAt: null
    }

    const newProduct = await ProductUseCase.createProduct(productRepositoryMock, productInput)

    expect(newProduct.id).toBe(productInput.id);
    expect(newProduct.name).toBe(productInput.name);
  });

  it('Testa a validacao do valor do product > 0', async () => {

    const productInput: ProductInput = {
      id: "1",
      name: "mock_1",
      price: 0,
      description: 'test',
      createdAt: new Date(),
      deletedAt: null,
      updatedAt: null
    }

    expect(async () => {
      await ProductUseCase.createProduct(productRepositoryMock, productInput)
    }).rejects.toThrow()
  });

  it('Test delete product', async () => {
    const productdeletedo = await ProductUseCase.deleteProduct(productRepositoryMock, "1")

    expect(productdeletedo).toBe(1);

  });

  it('Test update product', async () => {

    const productAtt: ProductInput = {
      id: "1",
      name: "mock_1_editdo",
      price: 1.1,
      description: "test",
      createdAt,
      deletedAt: null,
      updatedAt
    }

    const productAtualizado = await ProductUseCase.editProduct(productRepositoryMock, "1", productAtt)

    expect(productAtualizado?.id).toBe(productAtt.id);
    expect(productAtualizado?.name).toBe("mock_1_editdo");
    expect(productAtualizado?.price).toBe(1.1);
    expect(productAtualizado?.description).toBe("test");

  });

  it('Test return product', async () => {

    const expected = {
      id: "1",
      name: "mock_1",
      price: 10,
      description: null,
      createdAt,
      deletedAt: null,
      updatedAt: null
    }
    const viewProduct = await ProductUseCase.viewProduct(productRepositoryMock, "1")
    expect(viewProduct).toStrictEqual(expected)

  });

  it('Test list products', async () => {
    const listProduct = await ProductUseCase.listProducts(productRepositoryMock, {})

    expect(listProduct).toHaveLength(3)
  });
});
