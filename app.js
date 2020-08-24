// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb+srv://nicecock:NickelCerium@cluster0.bwrlq.mongodb.net/eight?retryWrites=true&w=majority',
{ useNewUrlParser: true,useUnifiedTopology: true },
() => {   console.log('connected to db');  
});

// middle ware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));


// imports
const home = require('./routes/home')
app.use('/home', home)

// redirect
app.get('/', (req,res) => {
    res.redirect('/home');
})

// port
const port = process.env.PORT || 3000;

// server
app.listen(port, () => {
    console.log('listening on port ' + port);
});