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