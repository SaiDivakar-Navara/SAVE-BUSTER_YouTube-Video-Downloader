from fastapi import FastAPI, Form
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import yt_dlp
import time
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get the default Downloads folder
downloads_dir = os.path.join(os.path.expanduser("~"), "Downloads")

@app.post("/download")
async def download_video(link: str = Form(...)):
    if not os.path.exists(downloads_dir):
        os.makedirs(downloads_dir)

    # Generate a unique filename
    unique_id = uuid.uuid4().hex[:8]
    custom_filename = f"Save_Buster_Video_{unique_id}.mp4"
    output_path = os.path.join(downloads_dir, custom_filename)

    youtube_dl_options = {
        "format": "best",
        "outtmpl": output_path,
    }

    try:
        # Download the video
        with yt_dlp.YoutubeDL(youtube_dl_options) as ydl:
            ydl.extract_info(link, download=True)

        # Return the file directly for download
        return FileResponse(
            path=output_path,
            filename=custom_filename,
            media_type="video/mp4",
            headers={"Content-Disposition": f'attachment; filename="{custom_filename}"'}
        )

    except yt_dlp.utils.DownloadError as e:
        return JSONResponse(content={"status": "Failed", "error": str(e)}, status_code=400)
    except Exception as e:
        return JSONResponse(content={"status": "Error", "error": str(e)}, status_code=500)
