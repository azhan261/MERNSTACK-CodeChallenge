require("dotenv").config();
var cors = require('cors')
const path = require('path');
const logger = require('morgan');
const express = require('express');
const app = express();
const config = require('./config');
const { ExpressPeerServer } = require('peer');
const faceapi = require("face-api.js");
const { Canvas, Image } = require("canvas");
const canvas = require("canvas");
const fileUpload = require("express-fileupload");
const users = require("./routes/users");
const auth = require("./routes/auth");
faceapi.env.monkeyPatch({ Canvas, Image });


const http = require('http')
var xss = require("xss")
var server = http.createServer(app)
var io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

app.use(cors({ origin: [  'http://localhost:3000','htpp://localhost:3001','http://localhost:3002','http://localhost:3003','http://localhost:3004','http://localhost:3005',
                          'http://localhost:3005','http://localhost:3006','http://localhost:3007','http://localhost:3008', 'http://localhost:3009',
                           ]}));




const { mongoose } = require('./config/index');


const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use("/api/users", users);
app.use("/api/auth", auth);

app.use('/public', express.static('public'));

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});



app.use(bodyParser.json());



app.set('port', (process.env.PORT || 7000))

sanitizeString = (str) => {
	return xss(str)
}

app.use("/api/users",  users);
app.use("/api/auth",  auth,);
app.use(express.static('images')); 
app.use('/images', express.static('images'));
server.listen(app.get('port'), () => {
	console.log("listening on", app.get('port'))
})