import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './database/dbConnection.js';
import errorMiddleware from './error/error.js';
import reservationRoutes from './routes/reservation.routes.js';

const app = express();
dotenv.config();
dbConnection();

// CORS configuration
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRoutes);

// Error middleware
app.use(errorMiddleware);

export default app;