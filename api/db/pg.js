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
  db.any(`SELECT * FROM plants
    WHERE id = $1`, [2])
  .then(function (data) {
    console.log(data)
    res.data = data
    next();
  })
  .catch(function(error) {
    console.log(error)
  })
}

module.exports.getPlants = getPlants;
