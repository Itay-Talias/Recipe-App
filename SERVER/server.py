from xmlrpc.client import Boolean, boolean
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
from DB_MANAGER.my_sql_auth import my_sql_auth
from DB_MANAGER.my_sql_proxy import my_sql_proxy
from EXTERNAL_API.requests_to_recipe_finder_API import get_recipes_by_ingredient_name
from DB_MANAGER.load_data_script import load_ingredients
from recipes_filter_module import get_recipes_filter_by_gluten_free, get_recipes_filter_by_daity_free


# load_ingredients() - init DataBase

app = FastAPI()

app.mount("/FRONT", StaticFiles(directory="FRONT"), name="FRONT")


@app.get('/')
def root():
    return FileResponse('./FRONT/index.html')


@app.get('/sanity')
def check():
    return "OK"


@app.get('/recipes/{ingredient_name}')
def get_recipes_by_ingredient(ingredient_name: str, daity_free: boolean = False, gluten_free: boolean = False):
    recipes_list = get_recipes_by_ingredient_name(
        ingredient_name=ingredient_name)
    if (daity_free == True and gluten_free == True):
        recipes_list = get_recipes_filter_by_daity_free(recipes_list)
        recipes_list = get_recipes_filter_by_gluten_free(recipes_list)
    elif (daity_free == True):
        recipes_list = get_recipes_filter_by_daity_free(recipes_list)
    elif (gluten_free == True):
        recipes_list = get_recipes_filter_by_gluten_free(recipes_list)
    return recipes_list


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
