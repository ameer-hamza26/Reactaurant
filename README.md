# Food Delivery Application

A full-stack food delivery application built with React, Node.js, Express, and MongoDB. This application allows users to browse restaurants, place orders, and make reservations.

## 🌟 Features

### Frontend
- Modern, responsive UI built with React and CSS
- Toast notifications for user feedback
- Smooth scrolling navigation
- Reservation system
- Mobile-friendly design

### Backend
- RESTful API architecture
- MongoDB database integration
- Secure CORS configuration
- Error handling middleware
- Request logging
- Input validation

## 🚀 Tech Stack

### Frontend
- React 19
- Vite
- React Router DOM
- Axios for API calls
- React Hot Toast for notifications
- React Icons
- React Scroll
- ESLint for code quality

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- Dotenv for environment variables
- Validator for input validation

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd food-delivery-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory:
```env
FRONTEND_URL=<your-frontend-url>
MONGODB_URI=<your-mongodb-connection-string>
PORT=5000
```

## 🚀 Running the Application

### Backend
```bash
cd backend
npm run dev  # Development mode
# or
npm start    # Production mode
```

### Frontend
```bash
cd frontend
npm run dev  # Development mode
# or
npm run build  # Build for production
npm run preview  # Preview production build
```

## 📁 Project Structure

```
food-delivery-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
└── backend/
    ├── controllers/
    ├── database/
    ├── error/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── app.js
    └── index.js
```

## 🔒 Security Features

- CORS protection
- Input validation
- Environment variable management
- Secure API endpoints
- Error handling middleware

## 🛣️ API Endpoints

### Reservations
- `POST /api/v1/reservation` - Create a new reservation
  - Required fields:
    - firstName (3-30 characters)
    - lastName (3-30 characters)
    - email (valid email format)
    - phone (10-11 digits)
    - date (YYYY-MM-DD format)
    - time (HH:MM format)

## 🧪 Development

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 📝 License

ISC

## 👨‍💻 Author

ameer hamza

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 
