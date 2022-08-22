const express = require("express");
const cors = require("cors");
const path=require('path');
const signupRouter=require('./src/routes/signuproute');
const Jobdata = require("./src/model/JobsData");


const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/signup',signupRouter);

// API
app.get('/jobs', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Jobdata.find()
        .then(function (jobs) {
            res.send(jobs);
        })
});

app.post('/insert', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var job = {
        id: req.body.item.id,
        postName: req.body.item.postName,
        companyName: req.body.item.companyName,
        skills: req.body.item.skills,
        experience: req.body.item.experience,
        lastDate: req.body.item.lastDate,
        location: req.body.item.location
    }
    // var product = {
    //     productCode: req.body.productCode,
    //     productName: req.body.productName,
    //     availability: req.body.availability,
    //     price: req.body.price,
    //     rating: req.body.rating,
    //     imageURL: req.body.imageURL
    // }
    console.log("Hello");
    var jobs = new Jobdata(job);
    jobs.save();

})

app.listen(3000, () => {
    console.log("Server up in Port 3000 ");
});