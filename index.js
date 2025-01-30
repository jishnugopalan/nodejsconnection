require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes=require('./routes/user-routes');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("db connected");
    })
    .catch(err => {
        console.error("db connection error:", err);
    });

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api',userRoutes);



app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/login', (req, res) => {
    res.send("Login Successful");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});