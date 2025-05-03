import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is already in use. Trying port ${PORT + 1}`);
        app.listen(PORT + 1, () => {
            console.log(`Server is running on port ${PORT + 1}`);
        });
    } else {
        console.error('Server error:', err);
    }
});