const express = require('express');
const insta = express.Router();
const dotenv = require('dotenv');
dotenv.load();
const request = require('request');


insta.post('/', callInsta, (req, res) => {
  res.send(res.data)
})

function getConcise(word) {
  const str = word.replace(/\s+/g, '')
  return str;
}

function callInsta (req, result, next) {

  const plant = getConcise(req.body.plant);
  const token = process.env.INSTA_TOKEN;

  request.get({url : 'https://api.instagram.com/v1/tags/' + plant + '/media/recent?access_token=' + token + '&count=5' }, function(error, response, body) {
    var results = JSON.parse(body);
    var data = [];
     for (var i = 0; i < results.data.length; i++) {
       var obj = {
         image: results.data[i].images.standard_resolution.url,
         link: results.data[i].link,
         id: results.data[i].id
       }
       data.push(obj)
     }
   result.data = data;
   next();
  })

}


module.exports = insta;
