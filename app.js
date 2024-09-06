const express = require('express');
const app = express();
const port = 8000;
var router = require('express').Router();
const bodyParser = require('body-parser');

const person = {
    "name": "Ashok",
    "age": 28,
    "profession": "backend dev",
    "phone": 9876543210,
    "college": "St.Johns College"
}

const persons = [
    {
        "name": "One",
        "age": 28,
        "profession": "backend dev",
        "phone": 9876543201,
        "college": "St.Johns College"
    },{
        "name": "Two",
        "age": 28,
        "profession": "backend dev",
        "phone": 9876542310,
        "college": "St.Johns College"
    },{
        "name": "Three",
        "age": 28,
        "profession": "backend dev",
        "phone": 98786543210,
        "college": "St.Johns College"
    },{
        "name": "Four",
        "age": 25,
        "profession": "backend dev",
        "phone": 9876453210,
        "college": "St.Johns College"
    }
]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth",router);
router.get('/authDetails', (req, res) => {
    res.send('Hello world!')
});

router.get('/person', (req, res) => {
    res.json(person);
});
router.post('/persons', (req, res) => {
    console.log(req.body)
    let filterPerson = persons?.filter(ele=>ele.phone == req.body?.phone);
    if(!filterPerson || !filterPerson?.length ){
        return res.json({message:"No data found",data:filterPerson});
    }
    return res.json({message:"Data found",data:filterPerson});
    
});

app.listen(port, () =>{
    console.log(`Server is listening at port ${port}`)
});

app.get('/person', (req, res) => {
    res.send("this is person route")
    // res.sent
});