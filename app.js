var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

// Authentication
var visualRecognition = new VisualRecognitionV3({
  url: 'https://gateway.watsonplatform.net/visual-recognition/api',
  version: '2018-03-19',
  iam_apikey: 'dQi6tas_cat1GwT_aogrCOC2hCiv1KP06Oa1aYKnQUMe',
});

var images_file = fs.createReadStream('image.jpg');
var classifier_ids = ["DefaultCustomModel_1168955496"];
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
    console.log(JSON.stringify(response, null, 2));
  }
  
})

