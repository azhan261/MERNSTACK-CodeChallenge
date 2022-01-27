require("dotenv").config();
var cors = require('cors')
const path = require('path');
const express = require('express');
const app = express();
const config = require('./BackEnd/config');
const users = require("./BackEnd/routes/users");
const auth = require("./BackEnd/routes/auth");



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




const { mongoose } = require('./BackEnd/config/index');


const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use("/api/users", users);
app.use("/api/auth", auth);


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

if(process.env.NODE_ENV==='production'){
	app.use(express.static(__dirname+"/build"))
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname+"/build/index.html"))
	})
}
else{
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}
server.listen(app.get('port'), () => {
	console.log("listening on", app.get('port'))
})