var express = require('express');
var app = express();

app.use('/store', function (req, res, next) {                   //pośrednik  żądania do /store. Dodatkowy parametr next. Jest to funkcja wykonująca kolejny krok w cyklu żądania-odpowiedź.
    console.log('Jestem pośrednikiem przy żądaniu do /store!');
    next();     //funkcja powoduje, że cykl żądania-odpowiedź może odbywać się płynnie.
});

app.get('/', function(req, res) {
    res.send('Hello world!');
});

app.get('/store', function(req, res) {
    res.send('To jest sklep!');
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});


/*var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile('/index.html');
    
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na ' + host + ':' + port);
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.get('/:id', function(req, res) {    
    res.send('Identyfikator, który został dopisany to ' + req.params.id);
});

app.post('/', function(req, res) {
    console.log('Otzrymałem żądanie POST do strony głównej.');
    res.send('Hello POST!')
});

app.delete('/del_user', function(req, res) {
    console.log('Otrzymałem żądanie DELETE do strony /del_user.');
    res.send('Hello Delete!');
});

app.get('/list_user', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

app.get('/ab*cd', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});*/