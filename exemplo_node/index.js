import express from 'express';

const app = express();

app.get('/teste', (req,res) =>{
    return res.json({hello: 'World 4'});
});

app.listen(3333);