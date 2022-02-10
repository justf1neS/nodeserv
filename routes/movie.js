const express = require('express');
const router = express.Router();

const pool = require('../helpers/db');

router.get('/movies', async function(req, res){
    try{
        const sqlQuery = `SELECT * FROM movies;`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    }catch(error){
        res.status(400).send(error.message)
    }
});

router.post('/addmovie', async function(req, res){
    try{
        const {name, time, rating} = req.body;

        const sqlQuery = `INSERT INTO movies (name, time, rating) VALUES ('${name}', '${time}', '${rating}');`;

        const result = await pool.query(sqlQuery);

        res.status(200).json({movieID: result.id});
    }catch(error){
        res.status(400).send(error.message);
    }
})

module.exports = router;