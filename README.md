# SAVEBUSTER - YouTube Video Downloader  

SAVEBUSTER is a web application that allows users to download YouTube videos using their video URL. The project is built using **FastAPI** for the backend and includes **HTML**, **CSS**, and **JavaScript** for the frontend.  

## Features  
- Simple and intuitive interface for downloading YouTube videos.  
- Supports downloading videos by providing their URL.  
- Backend powered by FastAPI for efficient processing.  

## File Structure  
- **`index.html`**: The main HTML page for the web application.  
- **`styles.css`**: The stylesheet for styling the web application.  
- **`script.js`**: JavaScript file for frontend functionality.  
- **`backend.py`**: Python file implementing the backend API using FastAPI.  

---

## How to Run the Project Locally  

### Prerequisites  
1. Python 3.9 or later installed on your machine.  
2. Node.js installed (optional, for advanced frontend testing).  
3. `yt_dlp` Python package installed for video processing.  
4. A web browser to run the frontend application.  

---

### Steps to Run the Project  

1. **Clone the Repository**  

   
        git clone https://github.com/<your-github-username>/savebuster.git

2. **Set Up the Backend**  
   
         python -m venv env
        source env/bin/activate # On Windows: .\env\Scripts\activate

- Install the required dependencies:  
 
        pip install fastapi uvicorn yt_dlp

- Run the backend server:  

        fastapi dev backend.py   

The server will start at `http://127.0.0.1:8000`.  

1. **Set Up the Frontend**  
- Open `index.html` in a web browser.

### Download YouTube Videos
- Enter the YouTube video URL in the input box.
- Click the Download button to start downloading.
- You can find the downloaded video in your system's Downloads folder.

## Project Usage
After entering a YouTube URL and clicking "Download," the application will fetch the video using the backend API and provide the file for download. Ensure the backend server is running for proper functionality.

## Screenshots

![Home Page](https://raw.githubusercontent.com/SaiDivakar-Navara/SAVE-BUSTER_YouTube-Video-Downloader/refs/heads/main/Images/Screenshot%202025-01-01%20170004.png)



## Live Demo
[Check Out! Frontend Live Demo](https://saidivakar-navara.github.io/SAVE-BUSTER_YouTube-Video-Downloader/)
## Technologies Used
- HTML, CSS, JavaScript
- Python, FastAPI
- GitHub Pages


## Future Enhancements
- Add video quality selection.
- Support for audio-only downloads.
- Enhance the UI/UX for better user experience.

## Contributions
Contributions are welcome! Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.

## Acknowledgments
- FastAPI for backend support.
- yt-dlp for video downloading functionality.
- All the contributors who helped in the development of this project.

## Author
Developed by [ Sai Divakar Navara ]
