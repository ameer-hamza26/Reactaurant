class errorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}


export const errorMiddleware = (err, req, res, next) => {
    let message = err.message || 'Internal Server Error';
    let statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message,
        success:false,
    });
}

export default errorHandler;