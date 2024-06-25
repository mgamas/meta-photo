# MetaPhoto Application

MetaPhoto is a web application that helps photographers organize their photo libraries. This project consists of a frontend application built with React and a backend API built with Fastify.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Getting Started

### Backend (meta-photo-api)

1. Navigate to the `meta-photo-api` directory:
   ```sh
   cd meta-photo-api
   
2. Install the dependencies:
   ```sh
   npm install
    # or
   yarn install
   
3. Start the backend server:
    ```sh
   npm run dev
    # or
   yarn dev

The server should be running on http://localhost:3000.

Frontend (meta-photo)

Navigate to the meta-photo directory:

    cd meta-photo

Install the dependencies:

      npm install
      # or
      yarn install

Start the frontend development server:

    npm start
    # or
    yarn start

The application should be running on http://localhost:3001.

Special Instructions

    Ensure that both the frontend and backend servers are running simultaneously.
    You can configure the backend API URL in the frontend by modifying the src/services/api.ts file in the meta-photo directory.

Scripts
Backend

    npm run dev or yarn dev: Start the development server.
    npm run build or yarn build: Build the project for production.
    npm run start or yarn start: Start the production server.

Frontend

    npm start or yarn start: Start the development server.
    npm run build or yarn build: Build the project for production.
    npm run test or yarn test: Run tests.

Project Details
Backend

   The Fastify backend provides API endpoints to fetch photo data, enriched with album and user information. It also supports filtering and pagination.

Frontend

   The React frontend displays the photo library with options to filter by title, album title, and user email. It also supports pagination to navigate through the photos.

GET /externalapi/photos/

      Returns a photo enriched with album and user information.

      ### Get Filtered Photos

      Query parameters:
      - `title`: Filter by photo title (contains)
      - `albumTitle`: Filter by album title (contains)
      - `email`: Filter by user email (equals)
      - `limit`: Maximum number of items to retrieve (default: 25)
      - `offset`: Starting offset into the collection (default: 0)

      ## Example Queries
      - Get a photo with enrichment: `http://localhost:3000/externalapi/photos/1`
      - Get filtered photos: `http://localhost:3000/externalapi/photos?title=accusamus&limit=10&offset=0`



   
