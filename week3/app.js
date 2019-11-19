// Assignment 1

const express = require('express');
const bodyParser = require('body-parser');

const app = express();



const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Assignment 3
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

let total;

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sum', (req, res) => {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
           // console.log('haha');
        }
    };
    xhr.open('GET','http://localhost:3000/getData?number=10');
    xhr.send();
    res.render('sum', {total});
});

// Assignment 2

app.get('/getData', (req, res) => {

    total= 0;
    let arr = req.query.number;
    for(let i=0; i<=arr; i++){
        total+=i;
    }
    res.render('getData', {total});
});

app.post('/getData', (req, res) => {
//I should build a route of getData, otherwise I can't access it in this function @ @
    total2= 0;
    let arr = req.body.yourNumber;
    for(let i=0; i<=arr; i++){
        total2+=i;
    }
console.log('haha')
    res.render('sum',{resultNum: total2});
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});


