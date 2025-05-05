import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRoutes from './routes/reservation.routes.js';

const app = express();
dotenv.config();

// Validate env vars
if (!process.env.FRONTEND_URL) {
  throw new Error("FRONTEND_URL is missing in .env");
}

// Database connection
dbConnection();

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:3000",
  "https://reactaurant-7fmx.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Preflight handler
app.options('*', cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/v1/reservation', reservationRoutes);

// Error middleware (must be last)
app.use(errorMiddleware);

export default app;