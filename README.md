
# WatchNext: React, Express, Node, MongoDB

Welcome to the WatchNext App project! This full-stack web application replicates the core features of YouTube, allowing users to upload, view, and interact with videos. Built with React on the front end, Express and Node.js on the backend, and MongoDB for data storage.


## Setup:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/WatchNext.git
   cd Youtube-Like-App
   ```

2. Install dependencies:

   ```bash
    npm install
  
   ```

3. Configure environment variables:

   - Create a `.env` file in the `server` directory and set the following variables:

     ```
         PORT = 3000
         MONGODB_URI=mongodb+srv://soniyaprasad:<your-password>@cluster0.ojkspsq.mongodb.net
         CORS_ORIGIN=*
         ACCESS_TOKEN_SECRET= chai-aur-code
         ACCESS_TOKEN_EXPIRY= 1d
         REFRESH_TOKEN_SECRET=chai-aur-backend
         REFRESH_TOKEN_EXPIRY =10d
         CLOUDINARY_CLOUD_NAME=your Cloudinary name
         CLOUDINARY_API_KEY=your Cloudinary API key
         CLOUDINARY_API_SECRET= your API secret
     ```

4. Start the application:

   ```bash
   # In the server directory
   npm run dev

   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

Feel free to contribute, report issues, or suggest improvements. Happy coding!

---

Note: Replace placeholders like `your-username`, `your_mongo_db_connection_string`, and `your_jwt_secret` with your actual information. Also, make sure to include relevant licensing information, contribution guidelines, and a code of conduct in your repository.
