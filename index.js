const express = require('express');
const mongoose = require('mongoose'); // Corrected the second import
const path = require('path');

const hbs = require('express-handlebars');
const app = express(); 


//configure mongoose to connect to mongodb
mongoose.connect('mongodb://localhost:27017/cms_project', { useNewUrlParser: true})
     .then(response => {
        console.log("MongoDB connected successfully.");
     }).catch(err =>{
        console.log("Database connection failed!");
     })


/*Configure express */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


/*SetUp view engine to use handle bars */
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');


/*Routes */
app.get('/', (req, res) => {
    res.send("Welcome to the CMS App");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
