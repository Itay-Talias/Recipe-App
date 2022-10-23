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
class RecipeDataModel {
    constructor() {
        this._recipes_arr = [];
    }
    get playerArr() {
        return this._recipes_arr;
    }
    FetchRecipeArrByIngredient(ingredient_name) {
        return __awaiter(this, void 0, void 0, function* () {
            this._recipes_arr =
                yield FetchDetailsFromAPI.FetchRecipeArrByIngredient(ingredient_name);
        });
    }
    FetchRecipeArrByIngredientGlutenFree(ingredient_name) {
        return __awaiter(this, void 0, void 0, function* () {
            this._recipes_arr =
                yield FetchDetailsFromAPI.FetchRecipeArrByIngredientGlutenFree(ingredient_name);
        });
    }
    FetchRecipeArrByIngredientDaityFree(ingredient_name) {
        return __awaiter(this, void 0, void 0, function* () {
            this._recipes_arr =
                yield FetchDetailsFromAPI.FetchRecipeArrByIngredientDaityFree(ingredient_name);
        });
    }
}
