const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const path = require('path');
const browserSync = require('browser-sync');

const isProduction = 'production' === process.env.NODE_ENV; // * == Boolean to check if project is in production or development ==

/*
 * ========================================= 
 * Setup the express app
 * ========================================= 
 */

const app = express(); // * == Initialize express ==

app.use(express.static(path.join(__dirname, '/public'))); // * == Setting up public folder ==

/*
 * ========================================= 
 * Setup Handlebars as the view engine
 * ========================================= 
 */

app.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/*
 * ========================================= 
 * Connect to MongoDB
 * ========================================= 
 */

mongoose.connect('mongodb://localhost/BlogMEN'); // ! == Change the adress when deploying ==
mongoose.Promise = global.Promise;

/*
 * ========================================= 
 * Setup MIDDLEWARE
 * ========================================= 
 */

// * == Body - Parser ==

app.use(bodyParser.urlencoded({
        extended: true
}));

// * == Routes ==

app.use('/admin', require('./routes/admin'));

// * == Error Handling ==

app.use((err, req, res, next) => {
        res.status(422).send({
                error: err.message
        });
});