from fastapi import FastAPI, Form
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import uuid
import yt_dlp

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

downloads_dir = os.path.join(
    os.path.expanduser("~"),
    "Downloads"
)


@app.get("/")
async def home():
    return FileResponse("index.html")


@app.get("/styles.css")
async def css():
    return FileResponse("styles.css", media_type="text/css")


@app.get("/script.js")
async def js():
    return FileResponse(
        "script.js",
        media_type="application/javascript"
    )


@app.get("/Images/{filename}")
async def images(filename: str):
    return FileResponse(f"Images/{filename}")


@app.post("/download")
async def download_video(link: str = Form(...)):

    os.makedirs(downloads_dir, exist_ok=True)

    unique_id = uuid.uuid4().hex[:8]

    custom_filename = (
        f"Save_Buster_Video_{unique_id}.mp4"
    )

    output_path = os.path.join(
        downloads_dir,
        custom_filename
    )

    youtube_dl_options = {
        "format": "best[ext=mp4]/best",
        "outtmpl": output_path,
    }

    try:

        with yt_dlp.YoutubeDL(youtube_dl_options) as ydl:
            ydl.extract_info(link, download=True)

        return FileResponse(
            path=output_path,
            filename=custom_filename,
            media_type="video/mp4",
        )

    except yt_dlp.utils.DownloadError as e:

        return JSONResponse(
            content={
                "status": "Failed",
                "error": str(e)
            },
            status_code=400
        )

    except Exception as e:

        return JSONResponse(
            content={
                "status": "Error",
                "error": str(e)
            },
            status_code=500
        )
