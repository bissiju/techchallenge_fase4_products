// categoryController.spec.ts
import { CategoryController } from "../../src/adapters/controllers/categoryController";
import CategoryRepository from "~domain/repository/categoryRepository";
import CategoryUseCase from "~domain/use_case/categoryUseCase";
import { CategoryInput } from "~domain/entity/types/categoryType";

const categoryRepositoryMock = jest.createMockFromModule<CategoryRepository>(
    "~domain/repository/categoryRepository"
);

jest.mock("~domain/use_case/categoryUseCase", () => ({
    createCategory: jest.fn(),
    deleteCategory: jest.fn(),
    editCategory: jest.fn(),
    listCategories: jest.fn(),
    viewCategory: jest.fn(),
}));

describe("CategoryController", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should create category", async () => {
        const categoryInput: CategoryInput = {
            id: "1",
            name: "category_mock_1"
        };

        (CategoryUseCase.createCategory as jest.Mock).mockResolvedValue(categoryInput);

        const result = await CategoryController.createCategory(categoryRepositoryMock, categoryInput);

        expect(result).toEqual(categoryInput);
        expect(CategoryUseCase.createCategory).toHaveBeenCalledWith(categoryRepositoryMock, categoryInput);
    });

    it("should delete category", async () => {
        const categoryId = "1";

        (CategoryUseCase.deleteCategory as jest.Mock).mockResolvedValue(1);

        const result = await CategoryController.deleteCategory(categoryRepositoryMock, categoryId);

        expect(result).toBe(1);
        expect(CategoryUseCase.deleteCategory).toHaveBeenCalledWith(categoryRepositoryMock, categoryId);
    });

    it("should edit category", async () => {
        const categoryId = "1";
        const categoryInput: CategoryInput = {
            id: "1",
            name: "category_mock_1"
        };

        (CategoryUseCase.editCategory as jest.Mock).mockResolvedValue(categoryInput);

        const result = await CategoryController.editCategory(categoryRepositoryMock, categoryId, categoryInput);

        expect(result).toEqual(categoryInput);
        expect(CategoryUseCase.editCategory).toHaveBeenCalledWith(categoryRepositoryMock, categoryId, categoryInput);
    });

    it("should return category", async () => {
        const categoryId = "1";
        const categoryMock: CategoryInput = {
            id: "1",
            name: "category_mock_1"
        };;

        (CategoryUseCase.viewCategory as jest.Mock).mockResolvedValue(categoryMock);

        const result = await CategoryController.viewCategory(categoryRepositoryMock, categoryId);

        expect(result).toEqual(categoryMock);
        expect(CategoryUseCase.viewCategory).toHaveBeenCalledWith(categoryRepositoryMock, categoryId);
    });
});