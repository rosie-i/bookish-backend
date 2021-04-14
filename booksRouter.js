import express from 'express';

const booksRouter = express.Router();

booksRouter.get('/', (req, res) => getAllBooks(req, res));
booksRouter.get('/:id', (req, res) => getBook(req, res))


function getAllBooks(req, res) {

    let exampleBooks = [];

    for (let i = 1; i < 6; i++) {
        exampleBooks.push(
            {
                "id": i,
                "title": "Example Title " + i,
                "author": "Example Author " + i,
                "isbn": "Example ISBN " + i
            }
        );
    }

    res.status(200).send({
        "data": exampleBooks
    });
}

function getBook(req, res) {

    let inputId = req.params.id;
    // Set delimiters around the id on the console log
    // Helps users notiec if they've accidentally done an extra space or something
    console.log("Requesting data for book id = :" + inputId + ":");
    let isValidId = true;

    // Set isValid to false if not a valid ID
    // Just making up a bad ID example for time being, but when linking up to DB it will be one that doesn't exist
    if (inputId == 99) {
        console.log("We don't like this number right now!");
        isValidId = false;
    }

    // Throwing an error - results in a 500 error and sends 
    if (inputId == 100) {
        console.log("Uh oh...");
        throw new Error("Throwing an error object");
    }



    if (isValidId) {
        res.status(200).send(
            {
                "id": inputId,
                "title": "INSERT TITLE HERE",
                "author": "INSERT AUTHOR HERE",
                "isbn": "INSERT ISBN HERE"
            }
        );
    }

    // If ~BAD ID~ then send back suitable error code to the user
    else {
        res.status(404).send({
            "message": "No book found with given ID"
        });
    }
}

export default booksRouter;