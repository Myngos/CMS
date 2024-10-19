const express = require('express');
const mongoose = require('mongoose'); // Corrected the second import
const path = require('path');
const app = express(); // Changed `index` to `app` for clarity


//configure mongoose to connect to mongodb
mongoose.connect('mongodb://27017/cms_project', { useNewUrlParser: true})
     .then(response => {
        console.log("MongoDB connected successfully.");
     }).catch(err =>{
        console.log("Database connection failed!");
     })
/*Configure express */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));




/*Routes */
app.use('/', (req, res)=> {
    res.send("Welcome the CMS App");
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
