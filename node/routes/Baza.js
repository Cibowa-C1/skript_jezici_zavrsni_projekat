const express = require('express');
const Joi = require('joi');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'music_store'
});

var admin = false;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const route = express.Router();
const bcrypt = require('bcrypt');


const sema = Joi.object().keys({
    title: Joi.string().trim().required(),
    artist: Joi.string().trim().required(),
    rating: Joi.string().trim().required(),
});

const usrnmVal = Joi.object().keys({
    username : Joi.string().min(2).max(40).required()
});

const link = Joi.object().keys({
    id: Joi.number().min(1).max(50).required()
});

const userSema = Joi.object().keys({
    username : Joi.string().min(2).max(40).required(),
    password : Joi.string().min(2).max(15).required()
})

const loginSema = Joi.object().keys({
    username : Joi.string().min(2).max(40).required(),
    password : Joi.string().min(2).max(15).required()
})

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    console.log(hash)
}

route.get('/isAdmin/:username',(req ,res)=>{
    let {error} = Joi.validate(req.params, usrnmVal);
    console.log(req.params.username);
    if(error){
        res.status(400).send(error.details[0].message);
    }else {
        let query = 'select * from users where username=?';
        let formated = mysql.format(query, [req.params.username]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else
                if (rows[0].admin==1){
                    admin = true;
                    res.send(true);
                }else{
                    admin = false;
                    res.send(false);
                }
        });
    }
});


route.post('/register',jsonParser, (req,res)=>{
    let { error } = Joi.validate(req.body, userSema);
    if (error)
        res.status(400).send(error.details[0].message);

    else {
        let query = "insert into users (username,password,admin) values (?,?,?)";
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password,salt);
        let formated = mysql.format(query, [req.body.username,hash, false]);
        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                query = 'select * from users where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }

});
route.post('/login',jsonParser, (req, res)=> {
    let { error } = Joi.validate(req.body, loginSema);

    if (error)
        res.status(400).send(error.details[0].message);

    else {
        let query = 'select * from users where username=?';
        let formated = mysql.format(query, [req.body.username]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else{
                if (rows.length == 0){
                    res.status(400);
                }
                else{
                    const valPassword = bcrypt.compareSync(req.body.password,rows[0].password);
                    if (valPassword){
                        if (rows[0].admin==1){
                            admin = true;
                            res.send(rows[0]);
                        }else{
                            admin = false;
                            res.send(rows[0]);
                        }
                    }else
                    res.status(400);
                }
            }
                

        });
    }
});


route.use(express.json());


route.get('/cds', (req, res) => {
    pool.query('select * from app_cd', (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else
            res.send(rows);
    });
});


route.post('/cd', (req, res) => {
    let { error } = Joi.validate(req.body, sema);

    if (error)
        res.status(400).send(error.details[0].message);

    else {
        let query = "insert into app_cd (title, artist, rating) values (?, ?, ?)";
        let formated = mysql.format(query, [req.body.title, req.body.artist, req.body.rating]);

        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                query = 'select * from app_cd where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});

route.get('/cd/:id', (req, res) => {
    let {error} = Joi.validate(req.params, link);

    if(error){
        res.status(400).send(error.details[0].message);
    }else {
        let query = 'select * from app_cd where id=?';
        let formated = mysql.format(query, [req.params.id]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else
                res.send(rows[0]);

        });
    }
});

route.put('/cd/:id', (req, res) => {

    let { error } = Joi.validate(req.params, link);

    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        let { error } = Joi.validate(req.body, sema);
        if(error){
            res.status(400).send(error.details[0].message);
        }
        else {
            let query = "update app_cd set title=?, artist=?, rating = ? where id=?";
            let formated = mysql.format(query, [req.body.title, req.body.artist, req.body.rating, req.params.id]);

            pool.query(formated, (err, response) => {
                if (err)
                    res.status(500).send(err.sqlMessage);
                else {
                    query = 'select * from app_cd where id=?';
                    formated = mysql.format(query, [req.params.id]);

                    pool.query(formated, (err, rows) => {
                        if (err)
                            res.status(500).send(err.sqlMessage);
                        else
                            res.send(rows[0]);
                    });
                }
            });
        }
    }

});


route.delete('/cd/:id', (req, res) => {
    let {error} = Joi.validate(req.params, link);
    if(error)
        res.status(400).send(error.details[0].message);
    else
    {
        let query = 'select * from app_cd where id=?';
        let formated = mysql.format(query, [req.params.id]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                let cd_disk = rows[0];

                let query = 'delete from app_cd where id=?';
                let formated = mysql.format(query, [req.params.id]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(cd_disk);
                });
            }
        });
    }
});


//////Vinyl


route.get('/vinyls', (req, res) => {
    pool.query('select * from app_vinyl', (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else
            res.send(rows);
    });
});


route.post('/vinyl', (req, res) => {
    let { error } = Joi.validate(req.body, sema);

    if (error)
        res.status(400).send(error.details[0].message);

    else {
        let query = "insert into app_vinyl (title, artist, rating) values (?, ?, ?)";
        let formated = mysql.format(query, [req.body.title, req.body.artist, req.body.rating]);

        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                query = 'select * from app_vinyl where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});

route.get('/vinyl/:id', (req, res) => {
    let {error} = Joi.validate(req.params, link);

    if(error){
        res.status(400).send(error.details[0].message);
    }else {
        let query = 'select * from app_vinyl where id=?';
        let formated = mysql.format(query, [req.params.id]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else
                res.send(rows[0]);

        });
    }
});

route.put('/vinyl/:id', (req, res) => {

    let { error } = Joi.validate(req.params, link);

    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        let { error } = Joi.validate(req.body, sema);
        if(error){
            res.status(400).send(error.details[0].message);
        }
        else {
            console.log(req.body.title + "BEKIC")
            let query = "update app_vinyl set title=?, artist=?, rating = ? where id=?";
            let formated = mysql.format(query, [req.body.title, req.body.artist, req.body.rating, req.params.id]);

            pool.query(formated, (err, response) => {
                if (err)
                    res.status(500).send(err.sqlMessage);
                else {
                    query = 'select * from app_vinyl where id=?';
                    formated = mysql.format(query, [req.params.id]);

                    pool.query(formated, (err, rows) => {
                        if (err)
                            res.status(500).send(err.sqlMessage);
                        else
                            res.send(rows[0]);
                    });
                }
            });
        }
    }

});


route.delete('/vinyl/:id', (req, res) => {
    let {error} = Joi.validate(req.params, link);
    if(error)
        res.status(400).send(error.details[0].message);
    else
    {
        let query = 'select * from app_vinyl where id=?';
        let formated = mysql.format(query, [req.params.id]);

        pool.query(formated, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                let vinyl_disk = rows[0];

                let query = 'delete from app_vinyl where id=?';
                let formated = mysql.format(query, [req.params.id]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(vinyl_disk);
                });
            }
        });
    }
});

module.exports = route;