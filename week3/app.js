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

app.get('/getData', (req, res) => {
    total = 0;
    let arr = req.query.number;
    for(let i=0; i<=arr; i++){
        total+=i;
    }
    res.render('getData', {total, arr});
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});


