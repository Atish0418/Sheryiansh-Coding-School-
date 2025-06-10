# 💼 Creative Team Profile Cards

This is a simple and responsive web layout that displays profile cards for a team of professionals using HTML, CSS, and JavaScript.

Check work : https://profile-cards04.netlify.app/

## ✨ Features

- Dynamically generated profile cards from a JavaScript array of objects
- Modern card design with shadows, rounded corners, and profile images
- Status indicators (`available` or `not available`)
- Skill tags with highlighting for "+extra" skills
- Responsive flexbox layout
- Interactive `View Profile` button
- Icons using Remix Icons (`ri-*` classes)

> All HTML elements are dynamically injected using JavaScript based on the provided array of user data.

---

## 📜 How It Works

- JavaScript loops through an array of user objects (`arr`).
- For each user, a styled HTML card is generated and inserted into the DOM.
- Each card includes:
  - Status and hourly charge
  - Profile image
  - Name, role, company, and icon
  - Skills (with special styling for extra skills like `+4`)
  - Short bio
  - Call-to-action button

---

## 🧑‍💻 Technologies Used

- HTML5
- CSS3 (Flexbox, Box Shadows, Responsive Styling)
- JavaScript (DOM Manipulation)
- [Remix Icon](https://remixicon.com/) (For icons in profile cards)

---

## 🚀 How to Use

1. Clone this repo or copy the code.
2. Make sure your `index.html` loads the script and CSS files.
3. Open the HTML file in any modern browser.
4. You’ll see beautifully styled profile cards rendered dynamically.

---

## 📦 Customization

To customize:
- Add more users in the `arr` array in the `script.js`.
- Replace image URLs with real photos.
- Add or remove skills as needed.
- Tweak the CSS for colors, layout spacing, and animations.

---