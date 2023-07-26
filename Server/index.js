const express = require('express');

const mongoose = require('mongoose')
const dotenv = require('dotenv');
const jwt = require ('jsonwebtoken')
const cors = require('cors')
const User = require('./models/User')
const { MongoClient } = require('mongodb');

const app = express();

dotenv.config()
mongoose.connect(process.env.MONGO_URL
    // , (err) => {
    //     if (err) throw err;
    // }
);

const client = new MongoClient(process.env.Mongo_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const jwtSecret = process.env.JWT_SECRET;

const http = require("http");
const { Server } = require('socket.io')

app.use(express.json());
app.use(cors({
    origin: 'localhost://127.0.0.1:3000/register',
    credentials: true,
}));

const server = http.createServer(app);

const port = 3001;

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000/app",
        methods: ["GET", "POST"],
    },
});

const user = [
    {username : 'Ryan', email : 'ryan@gmail.com', password: '12345678'}
]

app.get('/test', (req, res) => {
    res.json('test ok')
});

app.get('/register', (req, res) => {
    res.status(200).json(user);
});

app.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    const createdUser = await User.create({username, email, password});
    // jwt.sign({userId:createdUser._id}, jwtSecret), (err, token) => {
    //     if (err) throw err;
    //     res.cookie('token', token).status(201).json('ok')
    // };
    
    try{
        const createdUser = await User.create({username, password, email});
        jwt.sign({userId:createdUser._id}, jwtSecret, {}, (err, token) =>{
            if (err) throw err;
            res.cookie('token', token).status(201).json({
                id: createdUser._id,
            });
        });
    } catch(err) {
        if (err) throw err;
        res.status(500).json('error');
    }
});

server.listen(port, () => {
    console.log(`Server is Running At Port ${port}`)
})