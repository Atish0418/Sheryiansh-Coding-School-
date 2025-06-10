# Friend Status Toggle UI (Event Bubbling)

This project is a simple interactive UI built using **HTML**, **CSS**, and **JavaScript**, demonstrating the concept of **Event Bubbling**. Users can toggle the status of individuals between "Stranger" and "Friends" by clicking the "Add Friend" or "Remove Friend" buttons.

Check Work : https://evnt-bubbling.netlify.app/

## 🚀 Features

- Displays a list of user cards with:
  - Profile picture
  - Name
  - Status (Stranger or Friends)
- Button to toggle status:
  - **Add Friend** → Changes status to Friends
  - **Remove Friend** → Reverts status to Stranger
- Color indication:
  - **Green** if status is *Friends*
  - **Red** if status is *Stranger*
- Efficient event handling using **event delegation (event bubbling)**.

## 🧠 Concepts Used

- DOM Manipulation
- **Event Bubbling (Event Delegation)**
- JavaScript `forEach` loop
- Conditional Rendering
- Template Literals
- CSS Flexbox for layout

## 📘 What is Event Bubbling?

**Event Bubbling** is a behavior in the DOM where an event (like a click) starts at the target element and **bubbles up** to its parent elements.

### 🔁 Example Flow:
If you click a button inside a card:
button → card → main → body → html → document

### ✅ Why it's Useful:
- Allows you to handle all events from child elements using just one listener on the parent.
- Makes it easier to manage dynamic elements (like our friend cards).
- Helps in keeping your code cleaner and more efficient.

### 🧪 Example Code:
```js
main.addEventListener('click', function (event) {
  const idx = event.target.id;
  if (arr[idx]) {
    arr[idx].isStatus = arr[idx].isStatus === 'Stranger' ? 'Friends' : 'Stranger';
    heroFunction();
  }
});
You don’t need to add a listener on every button — just use one on the parent .main div!

📁 Project Structure
pgsql
Copy
Edit
project-folder/
├── index.html
├── style.css
├── script.js
└── README.md

🔧 How to Use
Clone this repository or copy the files into your local project.

Open index.html in any modern browser.

Click the "Add Friend" or "Remove Friend" buttons to toggle status.

🧑‍💻 Author
Created by Adhav Atish Gautam