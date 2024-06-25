MetaPhoto Application
Description

MetaPhoto is an application designed to help photographers organize their photo libraries. It includes a frontend built with React and a backend built with Fastify.
Setup Instructions
Prerequisites

    Node.js (>=14.x)
    npm (>=6.x) or yarn (>=1.x)

Clone the repository

bash

git clone https://github.com/yourusername/metaphoto.git
cd metaphoto

Install dependencies for the frontend and backend

Navigate to the frontend directory and install the dependencies:

bash

cd meta-photo
npm install

Navigate to the backend directory and install the dependencies:

bash

cd ../meta-photo-api
npm install

Running the Application
Running the backend server

In the meta-photo-api directory, run the following command:

sql

npm start

The backend server will start on http://localhost:3000.
Running the frontend application

In the meta-photo directory, run the following command:

sql

npm start

The frontend application will start on http://localhost:3001.
API Endpoints
Get Enriched Photo

bash

GET /externalapi/photos/:id

Returns a photo enriched with album and user information.
Get Filtered Photos

bash

GET /externalapi/photos

Query parameters:

    title: Filter by photo title (contains)
    albumTitle: Filter by album title (contains)
    email: Filter by user email (equals)
    limit: Maximum number of items to retrieve (default: 25)
    offset: Starting offset into the collection (default: 0)

Example Queries

    Get a photo with enrichment: http://localhost:3000/externalapi/photos/1
    Get filtered photos: http://localhost:3000/externalapi/photos?title=accusamus&limit=10&offset=0

Contact

For any inquiries, please contact support@metaphoto.com.
