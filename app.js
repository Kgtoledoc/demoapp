const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const formidable = require('express-formidable');
const responseRoutes = require('./controllers/response.routes');
const baseRoutes = require('./controllers/base.routes');
const uploadRoutes = require('./controllers/upload.routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true,
 }));
app.use(fileUpload());

app.use("/public", express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', baseRoutes);
app.use('/upload', uploadRoutes);
app.use('/response', responseRoutes);



app.listen(3000, (err) => {
  if(err){
    console.log("Something is wrong");
  } else {
    console.log("Listening in port 3000");
  }
})


