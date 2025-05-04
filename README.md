# VibeSpace

A social media web application built using the **MEAN stack** (MongoDB, Express, AngularJS, Node.js). VibeSpace allows users to register, log in, create posts, like content, and comment. The app uses JWT-based authentication for secure login.

## 🌟 Features

- User registration and login (with JWT)
- Secure password hashing (bcrypt)
- Post creation with title and content
- Like and comment functionality
- Clean UI with responsive design
- MongoDB backend with Mongoose models
- RESTful API architecture

## 🛠️ Tech Stack

- **Frontend**: AngularJS
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **UI**: HTML, CSS

## 🚀 Setup Instructions

### 📦 Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add the following environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### 🌐 Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Open the `index.html` file in a browser, or use a local HTTP server to serve the frontend files. You can use tools like **Live Server** (VSCode extension) or **http-server**:
    ```bash
    npx http-server .
    ```

3. Ensure the backend is running on `http://localhost:5000` to handle API requests.


Made with ❤️ by [deva-04](https://github.com/deva-04)
