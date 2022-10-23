from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
from DB_MANAGER.my_sql_auth import my_sql_auth
from DB_MANAGER.my_sql_proxy import my_sql_proxy
from DB_MANAGER.load_data_script import load_ingredients

AUTH = my_sql_auth()
CONNECTOR = my_sql_proxy(AUTH)
load_ingredients(CONNECTOR)

app = FastAPI()

app.mount("/FRONT", StaticFiles(directory="FRONT"), name="FRONT")


@app.get('/')
def root():
    return FileResponse('./FRONT/index.html')


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
