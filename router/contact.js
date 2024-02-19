const express = require("express")
const db = require("../database/db")
const utils = require("../utils")

const router = express.Router()

//get all the contact list
router.get("/", (request, response) => {
    const sql = "SELECT * FROM contacts";
    db.query(sql, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

//search by first name
router.get("/fname/:fname", (request, response) => {
    const fname = request.params.fname;
    const sql = "SELECT * FROM contacts WHERE fname = ?";
    db.query(sql, [fname], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

//search by last name
router.get("/lname/:lname", (request, response) => {
    const lname = request.params.lname;
    const sql = "SELECT * FROM contacts WHERE lname = ?";
    db.query(sql, [lname], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

//search by mobile number
router.get("/mobile/:mobile", (request, response) => {
    const mobile = request.params.mobile;
    const sql = "SELECT * FROM contacts WHERE mobile = ?";
    db.query(sql, [mobile], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

//add contacts
router.post("/", (request, response) => {
    const { fname, lname, mobile } = request.body
    const sql = 
        "INSERT INTO contacts( fname, lname, mobile ) VALUES(?,?,?)"
    db.query(sql, [fname, lname, mobile], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

//update contacts
router.put("/:id", (request, response) => {
    const id = request.params.id;
    const { fname, lname, mobile } = request.body;
    const sql = 
        "UPDATE contacts SET fname=?, lname=?, mobile=? WHERE id=?";
    db.query(sql, [fname, lname, mobile, id], (error, data) => {
        response.send(utils.createResult(error, data));
    });
});

//delete contacts
router.delete("/:id", (request, response) => {
    const id = request.params.id;

    const sql = 
        "DELETE FROM contacts WHERE id=?";

    db.query(sql, [id], (error, data) => {

        response.send(utils.createResult(error, data));
    });
});



module.exports = router