const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;

  pool
    .query(queryText)
    .then((responseDB) => {
      console.log("hi", responseDB.rows);
      res.send(responseDB.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const queryText = `INSERT INTO "feedback"
  (feeling, understanding, support, comments)
  VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [
      req.body.feeling,
      req.body.understanding,
      req.body.support,
      req.body.comments,
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  let reqId = req.params.id;

  const queryText = `DELETE FROM "feedback" WHERE id = $1;`;

  pool
    .query(queryText, [reqId])
    .then((responseDB) => {
      console.log("Feedback Deleted");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});
module.exports = router;
