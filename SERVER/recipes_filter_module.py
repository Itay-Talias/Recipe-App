from EXTERNAL_API.requests_to_recipe_finder_API import get_recipes_by_ingredient_name
from DB_MANAGER.my_sql_proxy import my_sql_proxy
from DB_MANAGER.QUERYS.select_querys import *
from DB_MANAGER.my_sql_auth import my_sql_auth

CONNECTOR = my_sql_proxy(my_sql_auth())


def get_recipes_filter_by_gluten_free(ingredient_name: str):
    recipes = get_recipes_by_ingredient_name(ingredient_name=ingredient_name)
    return list(filter(checks_dont_contain_gluten, recipes))


def checks_dont_contain_gluten(recipe: object):
    ingredients_list = recipe.get("ingredients")
    for ingredient in ingredients_list:
        if (CONNECTOR.execute_select_query(
                SELECT_FROM_GLUTEN_INGREDIENTS_BY_NAME, [ingredient]) != None):
            return False
    return True


def get_recipes_filter_by_daity_free(ingredient_name: str):
    recipes = get_recipes_by_ingredient_name(ingredient_name=ingredient_name)
    return list(filter(checks_dont_contain_gluten, recipes))


def checks_dont_contain_daity(recipe: object):
    ingredients_list = recipe.get("ingredients")
    for ingredient in ingredients_list:
        if (CONNECTOR.execute_select_query(
                SELECT_FROM_DAIRY_INGREDIENTS_BY_NAME, [ingredient]) != None):
            return False
    return True
