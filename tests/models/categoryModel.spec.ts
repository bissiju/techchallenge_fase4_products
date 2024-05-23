
import { CategoryInput } from '~domain/entity/types/categoryType';

describe('Category Model', () => {
    it('Create category', async () => {
        const category: CategoryInput = {
            id: "1234-1234-1234",
            name: "category unit test",
            createdAt: new Date(),
        };

        expect(category.name).toBe('category unit test');
    })
});
