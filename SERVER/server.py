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
def get_recipes_by_ingredient(ingredient_name: str):
    return get_recipes_by_ingredient_name(ingredient_name=ingredient_name)


@app.get('/recipes/{ingredient_name}/gluten_free')
def get_recipes_by_ingredient(ingredient_name: str):
    return get_recipes_filter_by_gluten_free(ingredient_name=ingredient_name)


@app.get('/recipes/{ingredient_name}/daity_free')
def get_recipes_by_ingredient(ingredient_name: str):
    return get_recipes_filter_by_daity_free(ingredient_name=ingredient_name)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
