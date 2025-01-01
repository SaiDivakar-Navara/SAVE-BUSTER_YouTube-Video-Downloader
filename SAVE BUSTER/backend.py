from fastapi import FastAPI, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import yt_dlp

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins. Specify allowed origins if needed.
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Get the default Downloads folder
downloads_dir = os.path.join(os.path.expanduser("~"), "Downloads")

@app.post("/download")
async def download_video(link: str = Form(...)):
    # Ensure Downloads folder exists
    if not os.path.exists(downloads_dir):
        os.makedirs(downloads_dir)

    # Set options for yt-dlp
    youtube_dl_options = {
        "format": "best",  # Selects the best quality available
        "outtmpl": os.path.join(downloads_dir, f"Video-{link[-11:]}.mp4"),  # Save in Downloads folder
    }

    try:
        # Download the video
        with yt_dlp.YoutubeDL(youtube_dl_options) as ydl:
            ydl.download([link])
        return {"status": "Download Successful", "location": youtube_dl_options["outtmpl"]}
    except yt_dlp.utils.DownloadError as e:
        return JSONResponse(content={"status": "Failed", "error": str(e)}, status_code=400)
    except Exception as e:
        return JSONResponse(content={"status": "Error", "error": str(e)}, status_code=500)
