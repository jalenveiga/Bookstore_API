import { UUID } from "bson";
import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const books = [];

// all routes in here are starting with /books
router.get('/', (req, res) => {
    res.send(books);
});

router.post('/', (req, res) => {
    const book = req.body;

    const bookID = uuidv4();

    const bookWithID = { ...book, id: bookID }

    books.push(bookWithID);

    res.send('Book was added to the database');
});

export default router;