import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
            'https://www.foodista.com/sites/default/files/Spicy-Mexican-Rice-Tequila-Lime-Chicken-9.jpg'
            , [{ name: 'Meat', amount: 1 }, { name: 'French Fries', amount: 20 }]),
        new Recipe('Another Test Recipe', 'This is simply a test2',
            'https://www.foodista.com/sites/default/files/Spicy-Mexican-Rice-Tequila-Lime-Chicken-9.jpg',
            [{ name: 'Buns', amount: 2 }, { name: 'Meat', amount: 1 }]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipeById(id: number) {
        return this.recipes[id];
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
    }
}