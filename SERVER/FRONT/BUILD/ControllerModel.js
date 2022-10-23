"use strict";
class ControllerModel {
    constructor() {
        this.dataOfRecipeArr = new RecipeDataModel();
    }
    AddListenersToHTML() {
        this.addOnClickToGetRecipes();
    }
    addOnClickToGetRecipes() {
        $("#search-btn").on("click", () => {
            this.dataOfRecipeArr
                .FetchRecipeArrByIngredient(String($("#ingredient-input").val()))
                .then(() => {
                RenderModel.RenderContainer({ recipesArr: this.dataOfRecipeArr.RecipesArr }, "recipes");
            });
        });
    }
}
