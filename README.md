# My Main Website – Lorenzo Sottile

This repository contains the source code of my main personal website. I am a Developer & IT Consultant specialized in web development, digital advertising, video making, and 3D modeling for real estate. The website is designed to showcase my projects, services, résumé, and provide a way to get in touch. 

**The website is entirely in Italian, as it serves as a business card for clients based in Italy, where I live.**


---

## 🚀 Project Overview

This project represents a static personal website, entirely built using HTML, CSS (with Sass), and the Bootstrap 5 framework. The main goal is to showcase my front-end web development skills and provide a professional contact point for collaborations and consulting.

The site includes the following main sections:

* **Homepage:** A welcome page introducing services and portfolio.
* **About Me:** A section dedicated to my background and passion for IT, music, and electronics, which drive my work as a developer and IT consultant.
* **Project Portfolio:** A gallery of completed projects, such as websites for "Casa Vacanze Ribocchi" and "Studio Ca'Bella", and 3D modeling/rendering projects for real estate.
* **Curriculum Vitae:** A detailed section on my professional background, including experience as IT Consultant and ICT Developer, technical skills, education, and certifications (e.g., Java Junior Developer course, Google Analytics Advanced).
* **Contact Me:** A contact form to facilitate communication and requests.
* **Privacy Policy & Cookies:** Information about privacy management, cookie usage, and links to external sites.

---

## ✨ Key Features

* **Responsive Design:** Adaptive and optimized layout for various screen sizes (desktop, tablet, mobile) thanks to Bootstrap 5.
* **Semantic HTML:** Clear, clean, and semantically correct HTML structure.
* **Advanced Styling with Sass:** Efficient and modular CSS management using the Sass preprocessor.
* **Simple Contact Form:** The contact form is handled client-side and displays a confirmation message after submission. It is ready for future integration with external email services.
* **Intuitive Navigation:** Clear and easy-to-use navigation menu to access all site sections.
* **Professional Icons:** Use of icons to enhance the user interface.

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **Sass (SCSS)**
* **Bootstrap 5** (version 5.3.6)
* **JavaScript** (for basic functionality and UI interactions, including contact form handling)

---

## 📦 Installation & Setup

To configure and run the project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sadsotti/main-website.git
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd main-website
    ```
3.  **Install npm dependencies:**
    This command installs Sass and Bootstrap, required for the project.
    ```bash
    npm install
    ```
4.  **Start Sass in "watch" mode:**
    This command will monitor changes to your `.scss` files and automatically compile CSS, updating `assets/css/style.css`.
    ```bash
    npm run sass:watch
    ```
5.  **View the site:**
    Open the `index.html` file in your favorite web browser to view the site in action.

---

## 📧 Contact Form Setup (Optional)

The contact form in `contatti.html` is currently configured to display a “success” message on the client side when submitted. If you'd like the form to actually send emails, you’ll need to integrate a third-party service (e.g., EmailJS, Formspree, Netlify Forms, etc.).

* **Example with EmailJS:**
    If you decide to use EmailJS in the future, you'll need to:
    1.  Create an account on [EmailJS](https://www.emailjs.com/).
    2.  Obtain your **Public Key** from your EmailJS account.
    3.  Configure a **Service ID** and **Template ID** in your account.
    4.  Update your JavaScript code (probably in the script inside `contattami.html` or an external `main.js` file) with these credentials, following EmailJS documentation.

---

## 🔗 Useful Links

* **View the Live Project:** [https://www.lorenzosottile.it/](https://www.lorenzosottile.it/)
* **My LinkedIn:** [https://www.linkedin.com/in/lorenzo-sottile/](https://www.linkedin.com/in/lorenzo-sottile/)

---

## 📄 License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).
