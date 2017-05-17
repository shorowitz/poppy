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
  if (req.body.waterid != 3) {
    db.any(`SELECT * FROM plants
      WHERE id = $1`, [parseInt(req.body.lightid)])
    .then(function (data) {
      res.data = data
      next();
    })
    .catch(function(error) {
      console.log(error)
    })
  } else {
    
  }
}


module.exports.getPlants = getPlants;
