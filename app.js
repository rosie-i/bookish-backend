import express from 'express';const app = express();

import booksRouter from './booksRouter.js';

app.get('/', function (req, res) {
    res.send('Hellooooo World? importtt');
});



app.use('/books', booksRouter);



app.listen(3000, () => console.log("Bookish backend: Listening on port 3000") );

