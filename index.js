import express from 'express';
import bodyParser from 'body-parser';
//import mongoose from 'mongoose';

import booksRoutes from './routes/books.js';

const url = 'mongodb://locslhost:5000'
const app = express();
const PORT = 5000;

/**app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
**/
//mongoose.connect(url, { useNewUrlParser: true })


app.use(bodyParser.json());

app.use('/books', booksRoutes);

app.get('/', (req, res) => res.send('Bookstore API'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));



