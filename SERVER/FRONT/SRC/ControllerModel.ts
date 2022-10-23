class ControllerModel {
    private dataOfRecipeArr: RecipeDataModel;
    constructor() {
        this.dataOfRecipeArr = new RecipeDataModel();
    }
    public AddListenersToHTML() {
        this.addOnClickToGetRecipes();
    }
    private addOnClickToGetRecipes() {
        $("#search-btn").on("click", () => {
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
        });
    }
    // private addRemoveStatsLisener() {
    //     $(".players").on("mouseleave", ".player-card", function () {});
    // }
}
