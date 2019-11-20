const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');
let total;

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sum.html', (req, res) => {

});

app.get('/getData', (req, res) => {
    total = 0;
    let arr = req.query.number;
    for(let i=0; i<=arr; i++){
        total+=i;
    }
    res.render('getData', {total, arr});
});

app.post('/getData', (req, res) => {
    total2= 0;
    let arr = req.body.yourNumber;
    for(let i=0; i<=arr; i++){
        total2+=i;
    }
    res.render('result',{total2})
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});


