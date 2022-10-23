class FetchDetailsFromAPI {
    private static parsingJSONToRecipesArr(recipesArr: object[]): Recipe[] {
        return recipesArr.map((recipe: any) => {
            return {
                title: recipe.title,
                thumbnail: recipe.thumbnail,
                href: recipe.href,
                ingredients: recipe.ingredients,
            };
        });
    }
    public static async FetchRecipeArrByIngredient(
        ingredient_name: string
    ): Promise<Recipe[]> {
        const recipesArr = await $.get(`./recipes/${ingredient_name}`);
        return this.parsingJSONToRecipesArr(recipesArr);
    }
    public static async FetchRecipeArrByIngredientGlutenFree(
        ingredient_name: string
    ): Promise<Recipe[]> {
        const recipesArr = await $.get(
            `./recipes/${ingredient_name}/gluten_free`
        );
        return this.parsingJSONToRecipesArr(recipesArr);
    }
    public static async FetchRecipeArrByIngredientDaityFree(
        ingredient_name: string
    ): Promise<Recipe[]> {
        const recipesArr = await $.get(
            `./recipes/${ingredient_name}/daity_free`
        );
        return this.parsingJSONToRecipesArr(recipesArr);
    }
}
