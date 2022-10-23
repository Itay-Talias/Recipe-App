from typing import List
from .my_sql_auth import my_sql_auth
from .QUERYS.insert_querys import *
from .QUERYS.select_querys import *
from .my_sql_proxy import my_sql_proxy


def load_dairy_ingredients(ingredients_list: List[str], data_base: my_sql_proxy):
    try:
        for ingredient in ingredients_list:
            load_dairy_ingredient(ingredient, data_base)
    except Exception as e:
        return e


def load_gluten_ingredients(ingredients_list: List[str], data_base: my_sql_proxy):
    try:
        for ingredient in ingredients_list:
            load_gluten_ingredient(ingredient, data_base)
    except Exception as e:
        return e


def load_dairy_ingredient(ingredient: str, data_base: my_sql_proxy):
    try:
        data_base.execute_insert_query(
            INSERT_INTO_DAIRY_INGREDIENTS, [ingredient])
    except Exception as e:
        return e


def load_gluten_ingredient(ingredient: str, data_base: my_sql_proxy):
    try:
        data_base.execute_insert_query(
            INSERT_INTO_GLUTEN_INGREDIENTS, [ingredient])
    except Exception as e:
        return e


def load_ingredients():
    try:
        CONNECTOR = my_sql_proxy(my_sql_auth())
        dairy_ingredients = ["Cream", "Cheese", "Milk", "Butter",
                             "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
        gluten_ingredients = ["Flour", "Bread",
                              "spaghetti", "Biscuits", "Beer"]
        load_dairy_ingredients(dairy_ingredients, CONNECTOR)
        load_gluten_ingredients(gluten_ingredients, CONNECTOR)
        CONNECTOR.close()
    except Exception as e:
        return e
