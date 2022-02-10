const express = require('express');
const router = express.Router();

const pool = require('../helpers/db');
const bcrypt = require('bcrypt');

router.get('/:id', async function(req,res){
    try {
        const sqlQuery = 'SELECT id, name, surname, pass, email FROM users WHERE id=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }

    res.status(200).json({id:req.params.id})
});

router.post('/register', async function(req,res) {
    try {
        const {name, surname, email, pass} = req.body;
        
        const encryptedPassword = await bcrypt.hash(pass,10)

        const sqlQuery = 'INSERT INTO users (name, surname, pass, email) VALUES (?,?,?,?)';
        const result = await pool.query(sqlQuery, [name, surname, email, encryptedPassword]);

        res.status(200).json({userId: result.insertId});
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/login', async function(req,res) {
    try {
        const {email,pass} = req.body;

        const sqlGetUser = 'SELECT pass FROM users WHERE email=?';
        const rows = await pool.query(sqlGetUser,email);
        if(rows){
            
            const isValid = await bcrypt.compare(pass,rows[0].pass)
            res.status(200).json({valid_password: isValid});
        }
        res.status(200).send(`User with email ${email} was not found`);
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;