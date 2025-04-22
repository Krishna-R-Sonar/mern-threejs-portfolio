Installation
To run this project locally, follow these steps:
Prerequisites
Node.js and npm installed.

MongoDB instance (local or cloud-based).

Clone the repository:
git clone https://github.com/Krishna-R-Sonar/mern-threejs-portfolio.git
cd personal-portfolio

Install frontend dependencies:
cd client
npm install

Install backend dependencies:
cd ../server
npm install

Set up environment variables:
Create a .env file in the server directory with:
env

MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
OWNER_SECRET=your-owner-secret

Run the backend server:
npm start

Run the frontend:
cd ../client
npm start
