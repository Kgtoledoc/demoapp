//localhost:3000/

const Router = require('express').Router();


Router.get('/', (req, res) => {
  res.render('upload',{});
})
Router.post('/finish', (req, res) => {
  console.log(req.files.archivo)
  let imagen = req.files.archivo
  imagen.mv(`./public/image.jpg`, err => {
    if(err){
      return res.status(500).send({ message: err});
    }
    return res.status(200).render('finish',{});
  })
})

/*Router.post('/finish', (req, res) => {
  let imagen = req.files
  console.log(req.body);
  imagen.mv(`./public/${imagen.name}`, err => {
    if(err){
      return res.status(500).send({ message: err});
    } else {
      return res.status(200).send({ message: 'File uploaded'});
    }
  })
})
*/
module.exports = Router;