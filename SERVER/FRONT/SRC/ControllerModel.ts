class ControllerModel {
    private dataOfRecipeArr: RecipeDataModel;
    constructor() {
        this.dataOfRecipeArr = new RecipeDataModel();
    }
    public AddListenersToHTML() {
        this.addOnClickToGetRecipes();
        this.addOnClickOnImge();
    }
    private addOnClickToGetRecipes() {
        $("#search-btn").on("click", () => {
            RenderModel.EmptyContainer("recipes");
            if (
                $("#dairt-check-box:checked").val() == "on" &&
                $("#gluten-check-box:checked").val() == "on"
            ) {
                this.dataOfRecipeArr
                    .FetchRecipeArrByIngredientDaityFreeAndGlutenFree(
                        String($("#ingredient-input").val())
                    )
                    .then(() => {
                        RenderModel.RenderContainer(
                            { recipesArr: this.dataOfRecipeArr.RecipesArr },
                            "recipes"
                        );
                    });
            } else if ($("#dairt-check-box:checked").val() == "on") {
                this.dataOfRecipeArr
                    .FetchRecipeArrByIngredientDaityFree(
                        String($("#ingredient-input").val())
                    )
                    .then(() => {
                        RenderModel.RenderContainer(
                            { recipesArr: this.dataOfRecipeArr.RecipesArr },
                            "recipes"
                        );
                    });
            } else if ($("#gluten-check-box:checked").val() == "on") {
                this.dataOfRecipeArr
                    .FetchRecipeArrByIngredientGlutenFree(
                        String($("#ingredient-input").val())
                    )
                    .then(() => {
                        RenderModel.RenderContainer(
                            { recipesArr: this.dataOfRecipeArr.RecipesArr },
                            "recipes"
                        );
                    });
            } else {
                this.dataOfRecipeArr
                    .FetchRecipeArrByIngredient(
                        String($("#ingredient-input").val())
                    )
                    .then(() => {
                        RenderModel.RenderContainer(
                            { recipesArr: this.dataOfRecipeArr.RecipesArr },
                            "recipes"
                        );
                    });
            }
        });
    }
    private addOnClickOnImge() {
        $(".recipes").on("click", ".card-img-top", function (event: any) {
            const card = $(this).closest(".card");
            alert(card.find(".ingredient").first().text());
        });
    }
}
