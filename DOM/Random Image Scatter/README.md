# 🎯 Random Image Scatter

This is a fun and interactive JavaScript-based web project where clicking a button randomly places an image anywhere on the screen. Each click adds a new image with random position (and optionally rotation) using DOM manipulation.

## 📸 Demo

## 🚀 Features

- Click the button to generate and place a random image.
- Images are chosen randomly from a predefined list.
- Images are placed at random positions on the screen.
- Clean UI with a dark theme.
- Responsive and animated button.

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

## 📁 Folder Structure

/project-root │ ├── index.html ├── style.css ├── script.js └── /src ├── img1.png ├── img2.png ├── img3.png └── ... (other images)

vbnet
Copy
Edit

## 🧠 How it Works

1. A button is displayed on the center of the page.
2. On each button click:
   - A random image is selected from the `/src` folder.
   - A new `<img>` element is created and added to the DOM.
   - It's styled with random `left` and `top` positions using `position: absolute`.




## 🔧 To Do / Optional Enhancements

- Add rotation (`transform: rotate()`).
- Add animation when image appears.
- Add a "Clear" button to remove all images.
- Limit number of images to avoid memory issues.

---

Made with 💻 and ☕ by Atish Adhav