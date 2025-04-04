# 🎵 Music Bar Processor

This is a simple HTML/CSS/JavaScript project that simulates the downloading of a music file with a progress bar animation.

Check Site : https://music-process-bar.netlify.app/
---

## 🧭 Journey Log

> MERN Stack Learning Journey  
> 📅 Day 39 | 🧪 DOM Class 3  
> ✍️ Built this project as part of my DOM manipulation practice to strengthen JavaScript fundamentals and interactivity skills.

This project reflects my growing understanding of how to use DOM methods, event listeners, and dynamic styling with JavaScript.

---

## 📁 Project Structure

Music-Bar-Processor/ │ ├── index.html # Main HTML structure ├── style.css # Styling for the UI ├── script.js # JavaScript logic to control the progress bar └── README.md # Project overview

markdown
Copy
Edit

## 🚀 Features

- Smooth progress bar that fills over 10 seconds.
- Displays percentage dynamically.
- Changes button text to "Downloaded" once complete.
- Automatically resets after 3 seconds to allow replay.
- Clean, modern UI with responsive layout.

## 🧠 How it Works

- Clicking the "Download File" button starts a `setInterval()` loop.
- The progress bar (`.growth`) and percentage text update every 100ms.
- After 10 seconds, the download is marked as complete.
- After an additional 3 seconds, everything resets to the initial state.

## 🔧 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📷 Screenshot

![Screenshot of the music bar processor](/src/music%20bar.JPG) <!-- Replace with an actual screenshot file if needed -->

## 📌 To Run Locally

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Click the **Download File** button to see the animation.

## ✨ Future Enhancements

- Add audio preview once downloaded.
- Add cancel/download again features.
- Style progress bar with gradient or animations.

---

Made with ❤️ by *Atish*