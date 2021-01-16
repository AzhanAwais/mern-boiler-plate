const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const Port = 3000;

// serve static website
app.use(express.static(path.join(__dirname,'../public')));
// set view engine
app.set('view engine', 'hbs');
// set views
app.set('views',path.join(__dirname,'../templates/views'));
// register partials
hbs.registerPartials(path.join(__dirname,'../templates/partials'));




// Listening port
app.listen(Port,()=>{
    console.log(`listen ${Port}`)
})


