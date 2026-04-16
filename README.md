# 🐐 Lionel Messi Tribute Web App

A fully responsive, modern, and interactive tribute web application dedicated to the greatest footballer of all time, Lionel Messi. 

This project was built from scratch using **HTML5, CSS3, and Vanilla JavaScript** (No Frameworks), demonstrating strong DOM manipulation, data handling via LocalStorage, and modern UI/UX principles.

---

## ✨ Key Features

* **Dynamic Gallery System:** Displays iconic moments injected dynamically into the DOM using a JavaScript array.
* **Detailed Article Pages:** Clicking on any moment redirects the user to a dynamically generated details page (`details.html`). Data is seamlessly passed between pages using `localStorage`.
* **YouTube Integration:** Each detailed article includes a direct link to watch the specific historic moment on YouTube.
* **Interactive Contact Form:**
  * Real-time field validation (Regex for email).
  * Error handling with UI feedback (highlighted borders and error messages).
  * Successful submissions are saved to `localStorage` (simulating a database).
  * Custom "Toast" notification for successful message delivery.
* **Modern UI/UX & Animations:**
  * Intersection Observer API used for smooth scroll-triggered "Fade-In" animations.
  * Custom "Scroll to Top" button that appears dynamically.
  * Professional Dark Theme with hover effects and transitions.
  * Fully responsive design (Mobile, Tablet, Desktop).

---

## 🛠️ Technologies Used

* **HTML5:** Semantic structuring and modern tags.
* **CSS3:** CSS Variables, Flexbox, CSS Grid, Hover Effects, and Keyframe Animations.
* **Vanilla JavaScript:** ES6+ syntax, DOM manipulation, Event Delegation, and Web Storage API (`localStorage`).

---

## 📂 File Structure

\`\`\`text
📦 Messi-Tribute-Project
 ┣ 📂 img                # Contains all high-quality background and gallery images
 ┣ 📂 icon               # Contains social media icons
 ┣ 📜 index.html         # Main landing page (Hero, Gallery, Contact)
 ┣ 📜 details.html       # Dynamic details page for specific moments
 ┣ 📜 style.css          # Global stylesheet containing all styling and media queries
 ┣ 📜 script.js          # Main logic (Gallery rendering, Form validation, Animations)
 ┗ 📜 details.js         # Logic for retrieving LocalStorage data and populating details
\`\`\`

---

## 🚀 How to Run Locally

1. Clone this repository to your local machine:
   \`\`\`bash
   git clone https://github.com/programmer-eslamyasser/Messi-Tribute-Project.git
   \`\`\`
2. Open the project folder in your preferred code editor (e.g., VS Code).
3. We recommend using the **Live Server** extension in VS Code to run the project so that local assets and routing work perfectly.
4. Open `index.html` via Live Server.

---

## 👨‍💻 Author

**Eslam Yasser** *Front-End Developer*

Feel free to connect with me or check out my other projects:

* [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin)](https://www.linkedin.com/in/eslam-yasser-a57435353/)
* [![GitHub](https://img.shields.io/badge/GitHub-Profile-black?logo=github)](https://github.com/programmer-eslamyasser)
* [![Instagram](https://img.shields.io/badge/Instagram-Profile-E4405F?logo=instagram)](https://www.instagram.com/eslamyasserfawzi/)

---
*Developed with passion for football history and clean code. © 2026*
