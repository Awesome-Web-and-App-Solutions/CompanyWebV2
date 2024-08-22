const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactUsRouter = require('./server'); // Import the contactUs router


const app = express();
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Use different routers
app.use('/api/contact', contactUsRouter); // For contact form


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
