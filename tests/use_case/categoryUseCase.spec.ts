import { CategoryInput } from "../../src/domain/entity/types/categoryType";
import CategoryRepository from "../../src/domain/repository/categoryRepository";
import CategoryUseCase from "../../src/domain/use_case/categoryUseCase";
import CategoryRepositoryMock from "../mock/repository/categoryRepositoryMock";


describe('CategoryUseCase', () => {
  let categoryRepositoryMock: CategoryRepository;
  const createdAt = new Date();
  const updatedAt = null;

  beforeEach(() => {
    categoryRepositoryMock = new CategoryRepositoryMock(createdAt).repository();
  })

  it('Test create category', async () => {

    const categoryInput: CategoryInput = {
      id: "1",
      name: "category_mock_1"
    }

    const newCategory = await CategoryUseCase.createCategory(categoryRepositoryMock, categoryInput)

    expect(newCategory.id).toBe(categoryInput.id);
    expect(newCategory.name).toBe(categoryInput.name);
    expect(newCategory.createdAt).toBeTruthy();
  });

  it('Test delete category', async () => {

    const categorydeleteda = await CategoryUseCase.deleteCategory(categoryRepositoryMock, "1")

    expect(categorydeleteda).toBe(1);

  });


  it('Test update category', async () => {

    const categoryAtualizada = await CategoryUseCase.editCategory(categoryRepositoryMock, "1", {
      id: "1",
      name: "category_mock_att"
    })

    expect(categoryAtualizada?.id).toBe("1");
    expect(categoryAtualizada?.name).toBe("category_mock_att");
    expect(categoryAtualizada?.updatedAt).toBe(updatedAt);

  });

  it('Test return category', async () => {

    const categoryInput = {
      id: "1",
      name: "category_mock_1",
      createdAt,
      deletedAt: null,
      updatedAt: null
    }
    const viewCategory = await CategoryUseCase.viewCategory(categoryRepositoryMock, categoryInput.id)
    expect(viewCategory).toEqual(categoryInput)

  });

  it('Test list categories', async () => {


    const categoryInput1: CategoryInput = {
      id: "1",
      name: "category_mock_1"
    }
    const categoryInput2: CategoryInput = {
      id: "2",
      name: "category_mock_2"
    }
    const categoryInput3: CategoryInput = {
      id: "3",
      name: "category_mock_3"
    }


    await CategoryUseCase.createCategory(categoryRepositoryMock, categoryInput1)
    await CategoryUseCase.createCategory(categoryRepositoryMock, categoryInput2)
    await CategoryUseCase.createCategory(categoryRepositoryMock, categoryInput3)


    const getCategory1 = await CategoryUseCase.listCategories(categoryRepositoryMock)

    expect(getCategory1).toHaveLength(3)
  });
});
