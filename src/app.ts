import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.send(
        '<h1> Hello! this application is a readme template example.</h1>'
    )
});

export { app };