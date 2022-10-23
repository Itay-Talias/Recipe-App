class RecipeDataModel {
    private _recipes_arr: Recipe[];
    constructor() {
        this._recipes_arr = [] as Recipe[];
    }
    public get RecipesArr(): Recipe[] {
        return this._recipes_arr;
    }
    public async FetchRecipeArrByIngredient(ingredient_name: string) {
        this._recipes_arr =
            await FetchDetailsFromAPI.FetchRecipeArrByIngredient(
                ingredient_name
            );
    }
    public async FetchRecipeArrByIngredientGlutenFree(ingredient_name: string) {
        this._recipes_arr =
            await FetchDetailsFromAPI.FetchRecipeArrByIngredientGlutenFree(
                ingredient_name
            );
    }
    public async FetchRecipeArrByIngredientDaityFree(ingredient_name: string) {
        this._recipes_arr =
            await FetchDetailsFromAPI.FetchRecipeArrByIngredientDaityFree(
                ingredient_name
            );
    }
    public async FetchRecipeArrByIngredientDaityFreeAndGlutenFree(
        ingredient_name: string
    ) {
        this._recipes_arr =
            await FetchDetailsFromAPI.FetchRecipeArrByIngredientDaityFreeAndGlutenFree(
                ingredient_name
            );
    }
}
