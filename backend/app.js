import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRoutes from './routes/reservation.routes.js';
import rateLimit from 'express-rate-limit';

const app = express();
dotenv.config();

// Validate env vars
if (!process.env.FRONTEND_URL) {
  throw new Error("FRONTEND_URL is missing in .env");
}

// Database connection
dbConnection();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
}));
app.options('*', cors()); // Preflight handler

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRoutes);

// Error middleware (must be last)
app.use(errorMiddleware);

export default app;