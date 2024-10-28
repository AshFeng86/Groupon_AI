# Groupon-chatbot-ui

This project is an AI-powered chatbot for Groupon, designed to help users navigate products and services by providing recommendations and answering questions. The chatbot integrates with a custom backend to load product data, deliver product images, and manage responses. The backend leverages the Groq API to process messages, making the bot responsive and user-friendly.

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Future Improvements](#future-improvements)
7. [License](#license)

---

## Features
- **Product Recommendations**: Suggests products to users based on predefined categories.
- **Image Display**: Displays product images and formatted responses within the chat.
- **Error Handling**: Manages errors gracefully with user-friendly error messages.
- **Responsive Design**: Adapts to different screen sizes for a seamless experience.
- **Loading Indicator**: Informs the user when the chatbot is retrieving data.
- **Backend Integration**: Communicates with the backend to retrieve and respond with dynamic data.

## Technologies Used
- **Frontend**: React, Tailwind CSS for styling, Axios for HTTP requests.
- **Backend**: Express.js, Groq SDK for AI-powered responses, JSON for storing dummy data.
- **Database (for demo data)**: Uses a local JSON file for product listings.
- **Version Control**: Git & GitHub.
- **Deployment**: GitHub Desktop for managing version control.

## Project Structure
```plaintext
Groupon_AI/
├── backend/                  # Backend server and API logic
│   ├── index.js              # Express server and API endpoints
│   ├── products.json         # JSON file with product dummy data
│   └── .env                  # Environment variables (not included in repo)
├── public/                   # Static files like images
│   ├── images/               # Product images
│   └── favicon.ico           # Favicon
├── src/                      # Frontend source files
│   ├── components/           # React components for the chatbot
│   ├── data/                 # Local data (e.g., product data)
│   └── App.js                # Main React component
├── .gitignore                # Specifies which files and directories to ignore
├── README.md                 # Project documentation
└── package.json              # Project dependencies and scripts
