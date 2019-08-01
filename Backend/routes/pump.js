const express = require('express');
const router = express.Router();
const connection = require('../conf');


/* GET : pump listing. */
router.get('/', function (req, res) {
  connection.query('SELECT * FROM beerpump', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la récupération des pompes");
    } else {
      res.json(result);
    }
  })
});

/* POST : add a new beer type */
router.post('/', function (req, res) {
  const dataToInsert = req.body
  connection.query('INSERT INTO beerpump SET ?', dataToInsert, (err, results) => {
      if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la création d'une nouvelle bière");
      } else {
          res.json(results);
      }
  });
});

/* PUT : modify pump outflow. */
router.put('/:id', (req, res) => {
  const dataToUpdate = req.body
  const idToUpdate = req.params.id
  connection.query('UPDATE beerpump SET ? WHERE id = ?', [dataToUpdate, idToUpdate], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(`Erreur lors de la modification de la pompe n°${idToUpdate}`);
    } else {
      res.json(results);
    }
  });
});


module.exports = router;
