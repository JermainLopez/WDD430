// Get dependencies
var express = require("express");
const dotenv = require('dotenv');
var path = require("path");
var http = require("http");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require("morgan");
var mongoose = require("mongoose");
const connectDB = require('./config/db');


dotenv.config()
    // ROUTES
const index = require("./server/routes/app");
const ceremonyRoutes = require("./server/routes/ceremonies");
const memoryRoutes = require("./server/routes/memories");
const peopleRoutes = require("./server/routes/peoplemessages");


var app = express(); // create an instance of express

// Tell express to use the following parsers for POST data
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(cookieParser());

app.use(logger("dev")); // Tell express to use the Morgan logger

// Add support for CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

// Tell express to use the specified director as the
// root directory for your web site
app.use(express.static(path.join(__dirname, "dist/proyect")));

//#region "ROUTING"
// ROUTES
app.use("/", index);

app.use("/ceremonies", ceremonyRoutes);
app.use("/memories", memoryRoutes);
app.use("/messages", peopleRoutes);

// Tell express to map all other non-defined routes back to the index page
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/proyect/index.html"));
});
//#endregion "ROUTING"
mongoose.set('strictQuery', false);
connectDB()


//#endregion "MONGO"
require('events').EventEmitter.defaultMaxListeners = 15;
// Define the port address and tell express to use this port
const port = process.env.PORT || "3000";
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});