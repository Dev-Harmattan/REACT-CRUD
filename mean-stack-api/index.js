require("./db");
const express = require("express");
const postMessageRoutes = require('./controller/postMessageController');
const cors = require('cors')

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}))
app.use('/postmessages', postMessageRoutes);

app.listen(4000, () => console.log("Server started at port: 4000"));
