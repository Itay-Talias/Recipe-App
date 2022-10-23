from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()

app.mount("/FRONT", StaticFiles(directory="FRONT"), name="FRONT")


@app.get('/')
def root():
    return FileResponse('./FRONT/index.html')


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
