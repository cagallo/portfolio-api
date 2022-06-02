import express from "express";
import dotenv from 'dotenv';

const port = process.env.PORT;
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`The application is listening on port ${port}!`);
})