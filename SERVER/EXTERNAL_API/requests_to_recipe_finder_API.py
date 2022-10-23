import requests


def get_recipes_by_ingredient_name(ingredient_name: str):
    res = requests.get(
        f"https://recipes-goodness.herokuapp.com/recipes/{ingredient_name}")
    return res.json().get("results")
