"use strict";
class ControllerModel {
    constructor() {
        this.dataOfRecipeArr = new RecipeDataModel();
    }
    AddListenersToHTML() {
        this.addOnClickToGetRecipes();
        this.addOnClickOnImge();
    }
    addOnClickToGetRecipes() {
        $("#search-btn").on("click", () => {
            RenderModel.EmptyContainer("recipes");
            if ($("#dairt-check-box:checked").val() == "on") {
                this.dataOfRecipeArr
                    .FetchRecipeArrByIngredientDaityFree(String($("#ingredient-input").val()))
                    .then(() => {
                    RenderModel.RenderContainer({ recipesArr: this.dataOfRecipeArr.RecipesArr }, "recipes");
                });
            }
            else if ($("#gluten-check-box:checked").val() == "on") {
                this.dataOfRecipeArr
                    .FetchRecipeArrByIngredientGlutenFree(String($("#ingredient-input").val()))
                    .then(() => {
                    RenderModel.RenderContainer({ recipesArr: this.dataOfRecipeArr.RecipesArr }, "recipes");
                });
            }
            else {
                this.dataOfRecipeArr
                    .FetchRecipeArrByIngredient(String($("#ingredient-input").val()))
                    .then(() => {
                    RenderModel.RenderContainer({ recipesArr: this.dataOfRecipeArr.RecipesArr }, "recipes");
                });
            }
        });
    }
    addOnClickOnImge() {
        $(".recipes").on("click", ".card-img-top", function (event) {
            const card = $(this).closest(".card");
            console.log(card.find(".card-body").find(".ingredient"));
            alert(card.find(".card-body").find(".ingredient").text());
        });
    }
}
