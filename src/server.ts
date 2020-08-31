import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    console.log('Acesso o post');
    const users = [
        { name: "JJ", age: 12 },
        { name: "AB", age:122 },
    ]
    return response.json(users);
});

app.get('/users', (request, response) => {
    console.log(request.body);
    const users = [
        { name: "JJ", age: 12 },
        { name: "AB", age:122 },
    ]
    return response.json(users);
});

app.listen(3333);