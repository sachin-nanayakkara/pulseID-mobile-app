# React PulseID Project Documentation

This project is a React-based application built using Vite as the bundler. Vite offers fast development, optimized builds, and is perfect for modern web applications. This documentation will walk you through how to start the project, the folder structure, and key configuration files.

# Getting Started
## Prerequisites

Ensure you have the following installed on your system:

Node.js (v16.8 or higher)
Download and install from nodejs.org.

npm or Yarn (npm comes bundled with Node.js)

Currently, two official plugins are available:

# Installation

Clone the repository (if the project is hosted in a Git repository):

```
git clone <repository-url>
cd <project-folder>
```

Install dependencies:

Run one of the following commands depending on your preferred package manager.

Using npm:

```
npm install
```

Start the development server:

After the dependencies are installed, you can start the development server with:

Using npm:

```
npm run dev
```

This will start the project on http://localhost:5173, and any changes you make will automatically trigger a hot-reload.

# Folder Structure

```
project-root/
│
├── public/                    # Static assets (images, favicon, etc.)
│   └── index.html             # Main HTML template
│
├── src/                       # Source files
│   ├── assets/                # Static files like images, fonts, etc.
│   ├── components/            # Reusable React components
│   ├── utils/                 # Custom React classes
│   ├── pages/                 # React pages, each typically represents a route
│   ├── services/              # API or other utility services
│   ├── redux/                 # State management
│   ├── styles/                # Global styles (CSS, SCSS, etc.)
│   ├── App.jsx                # Root application component
│   └── main.jsx               # Entry point, renders the app
│
├── .gitignore                 # Specifies files to ignore in git
├── index.html                 # HTML template used by Vite
├── package.json               # Project dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

# Environment Variables

You can add environment variables by creating a .env file at the project root. These variables will be available in the code and can be accessed via import.meta.env.

Example .env file:

```
VITE_API_BASE_URL=https://stg-catalyst-external-distributor-api.pulseid.com/offer
VITE_APP_API_KEY=
VITE_APP_API_SECRET=
```

# Deployment

```
npm run build
```

This React Vite project setup ensures a fast, efficient development experience with a modern toolchain. By following the steps outlined above, you can easily get started with React development, organize your files effectively, and deploy your app seamlessly.


