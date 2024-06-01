# Innovatech VR Pro Web Application

## Description of the task

**Customer company:** TechTrek

**Task:** Develop a web application to introduce and pre-order the new "Innovatech VR Pro". The application should include the following features:
- Product Page: Display the main characteristics and features of Innovatech VR Pro. Include photos, videos, and product descriptions.
- Order Form: Form for pre-ordering the VR headset. Request the user's name, email address, and desired number of devices. Validate data on the client side.
- News Feed: Section with the latest news about Innovatech VR Pro - release dates, updates, and other important events.
- Contact Information: Section with company contact information for communicating with potential clients.
- Responsive Design: Ensure your web application is responsive to display correctly on different devices.
- Deploy to GitHub Pages: The application must be deployed to GitHub Pages to showcase your work.

**Additional requirements:**
- Use media queries to ensure responsive design.

**Restrictions:**
- The application must be built using React.js.
- The application should not include any backend logic; all data should be handled on the client side.
- The form validation must be performed on the client side without the use of external libraries (e.g., Formik, Redux Form).

**Answers to possible questions:**

- **How can I test the form validation?**
  - Enter various data into the form fields and try to submit. Errors should be displayed if the data is invalid (e.g., an invalid email format or a quantity less than 1).

- **How do I deploy the application to GitHub Pages?**
  - Follow the steps outlined in the `README.md` under the "Deployment" section. Typically, this involves using the `gh-pages` branch for deployment.

- **Can I use external libraries for styling?**
  - Yes, you can use external libraries such as Tailwind CSS or styled-components for styling your application.

## Screenshots

![Screenshot 1](https://github.com/GalliFrey7/KyrgyzText/blob/master/screeeeeeen/1.jpg)

![Screenshot 2](https://github.com/GalliFrey7/KyrgyzText/blob/master/screeeeeeen/2.jpg)

![Screenshot 3](https://github.com/GalliFrey7/KyrgyzText/blob/master/screeeeeeen/3.jpg)

![Screenshot 4](https://github.com/GalliFrey7/KyrgyzText/blob/master/screeeeeeen/4.jpg)

![Screenshot 5](https://github.com/GalliFrey7/KyrgyzText/blob/master/screeeeeeen/5.jpg)

## Video description of work

[YouTube link](https://youtu.be/TD1a50HxRJg)

## Deployment

1. Build the project:
    ```bash
    npm run build
    ```

2. Deploy to GitHub Pages:
    ```bash
    npm install --save-dev gh-pages
    ```

    Add the following scripts to your `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

    Run the deploy script:
    ```bash
    npm run deploy
    ```

