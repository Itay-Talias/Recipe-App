"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FetchDetailsFromAPI {
    static parsingJSONToRecipesArr(recipesArr) {
        return recipesArr.map((recipe) => {
            return {
                title: recipe.title,
                thumbnail: recipe.thumbnail,
                href: recipe.href,
                ingredients: recipe.ingredients,
            };
        });
    }
    static FetchRecipeArrByIngredient(ingredient_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipesArr = yield $.get(`./recipes/${ingredient_name}`);
            return this.parsingJSONToRecipesArr(recipesArr);
        });
    }
    static FetchRecipeArrByIngredientGlutenFree(ingredient_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipesArr = yield $.get(`./recipes/gluten_free/${ingredient_name}`);
            return this.parsingJSONToRecipesArr(recipesArr);
        });
    }
    static FetchRecipeArrByIngredientDaityFree(ingredient_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipesArr = yield $.get(`./recipes/daity_free/${ingredient_name}`);
            return this.parsingJSONToRecipesArr(recipesArr);
        });
    }
}
