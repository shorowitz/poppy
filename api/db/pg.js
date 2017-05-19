const pgp = require('pg-promise')({});
const dotenv = require('dotenv');
dotenv.load();

var cn =
{
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

var db = pgp(cn);

function getPlants (req, res, next) {
  if (req.body.waterid == 3 ) {
    db.any(`SELECT * FROM plants p
      INNER JOIN water w
      ON p.water_id = w.id
      INNER JOIN light_type lt
      ON p.light_id = lt.id
      INNER JOIN light_options lo
      ON lt.id = lo.type_id
      WHERE lo.id = $1
      AND w.id = $2`, [parseInt(req.body.lightid), parseInt(req.body.waterid)])
    .then(function (data) {
      res.data = data
      next();
    })
    .catch(function(error) {
      console.log(error)
    })
  } else if (req.body.waterid == 2){
    db.any(`SELECT * FROM plants p
      INNER JOIN water w
      ON p.water_id = w.id
      INNER JOIN light_type lt
      ON p.light_id = lt.id
      INNER JOIN light_options lo
      ON lt.id = lo.type_id
      WHERE lo.id = $1
      AND w.id != 1`, [parseInt(req.body.lightid)])
    .then(function (data) {
      res.data = data
      next();
    })
    .catch(function(error) {
      console.log(error)
    })
  } else {
    db.any(`SELECT * FROM plants p
      INNER JOIN water w
      ON p.water_id = w.id
      INNER JOIN light_type lt
      ON p.light_id = lt.id
      INNER JOIN light_options lo
      ON lt.id = lo.type_id
      WHERE lo.id = $1`, [parseInt(req.body.lightid)])
    .then(function (data) {
      res.data = data
      next();
    })
    .catch(function(error) {
      console.log(error)
    })
  }
}

module.exports.getPlants = getPlants;
