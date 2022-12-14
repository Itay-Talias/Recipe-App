from typing import Optional
import pymysql as mysql


DEFAULT_HOST = "localhost"
DEFAULT_USER = "root"
DEFAULT_DB = "recipes_app"
DEFAULT_PWD = ""


class my_sql_auth:
    def __init__(self, user: str = DEFAULT_USER, pwd: str = DEFAULT_PWD, db: str = DEFAULT_DB, host: str = DEFAULT_HOST):
        self.host = host,
        self.user = user,
        self.password = pwd,
        self.db = db,
        self.charset = "utf8",
