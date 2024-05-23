
import Category from "../../src/domain/entity/category";
import { CategoryInput } from "~domain/entity/types/categoryType";

describe("category", () => {
    it("should createa new instância de category", () => {
        const category: CategoryInput = {
            id: "1234-1234-1234",
            name: "category unit test",
            createdAt: new Date(),
        };

        const categoryNew = new Category(category);

        expect(categoryNew.id).toBeDefined();
        expect(categoryNew.name).toBe(category.name);
    });

    it('should generate _id', () => {
        const category: CategoryInput = {
            id: "432423-543654-3242343",
            name: "category unit test new teste",
            createdAt: new Date(),
        };

        const categoryNew = new Category(category);

        expect(categoryNew.id).toBeDefined();
        expect(typeof categoryNew.id).toBe("string");
    });
});
