// Setup  and configure cookie-parser dependency



const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies.newCookie);
    res.send('Cookies logged in console');
});

app.get('/set-cookie', (req, res) => {
    res.cookie('newCookie', 'Cookievalue', { maxAge: 900000, httpOnly: true });
    res.send('Cookie set successfully');
});


app.listen(4000);