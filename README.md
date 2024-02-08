
# YouTube Clone: React, Express, Node, MongoDB

Welcome to the YouTube Clone project! This full-stack web application replicates the core features of YouTube, allowing users to upload, view, and interact with videos. Built with React on the frontend, Express and Node.js on the backend, and MongoDB for data storage.

## Features:

- **User Authentication:** Secure user registration and login functionality using JWT tokens.
- **Video Management:** Upload, delete, and update video details seamlessly.
- **Video Playback:** Smooth video playback with a customizable video player.
- **Comments and Likes:** Engage with videos through comments and likes.
- **Responsive Design:** A mobile-friendly interface for a seamless user experience across devices.

## Tech Stack:

- **Frontend:** React, React Router, Axios
- **Backend:** Express, Node.js, JWT for authentication
- **Database:** MongoDB
- **Styling:** CSS, Bootstrap for styling components

## Setup:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
   ```

2. Install dependencies:

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `server` directory and set the following variables:

     ```
     PORT=3001
     MONGO_URI=your_mongo_db_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Start the application:

   ```bash
   # In the server directory
   npm start

   # In the client directory
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

Feel free to contribute, report issues, or suggest improvements. Happy coding!

---

Note: Replace placeholders like `your-username`, `your_mongo_db_connection_string`, and `your_jwt_secret` with your actual information. Also, make sure to include relevant licensing information, contribution guidelines, and a code of conduct in your repository.
