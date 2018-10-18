const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true,
 }));

app.use(express.static('public'));
app.set('view engine', 'ejs');



// Authentication
var visualRecognition = new VisualRecognitionV3({
  url: 'https://gateway.watsonplatform.net/visual-recognition/api',
  version: '2018-03-19',
  iam_apikey: 'Sxf9Lf7l9KCI3kCyHviyKwD1d1ahL5Snkd7pNU8Z2sB0',
});

var images_file = fs.createReadStream('image.jpg');
var classifier_ids = ["Car_Model_2032301616"];
var threshold = 0.2;

var params = {
  images_file: images_file,
  classifier_ids: classifier_ids,
  threshold: threshold
};

app.get('/', (req, res) => {
  console.log("Otra petición")
  var visualRecognition = new VisualRecognitionV3({
    url: 'https://gateway.watsonplatform.net/visual-recognition/api',
    version: '2018-03-19',
    iam_apikey: 'Sxf9Lf7l9KCI3kCyHviyKwD1d1ahL5Snkd7pNU8Z2sB0',
  });
  
  var images_file = fs.createReadStream('image.jpg');
  var classifier_ids = ["Car_Model_2032301616"];
  var threshold = 0.2;
  
  var params = {
    images_file: images_file,
    classifier_ids: classifier_ids,
    threshold: threshold
  };
  visualRecognition.classify(params, function(err, response){
    if (err) {
      console.log(err);
    } else {
      console.log('"ASDADADS"');
      let url = response.images[0].classifiers[0].classes[0].class;
      res.render('index', {url, });
    } 
  })
})

app.listen(3000, (err) => {
  if(err){
    console.log("Something is wrong");
  } else {
    console.log("Listening in port 3000");
  }
})


