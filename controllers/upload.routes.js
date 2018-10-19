//localhost:3000/

const Router = require('express').Router();

Router.get('/', (req, res) => {
  res.render('upload',{});
})

module.exports = Router;