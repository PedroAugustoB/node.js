//intanciando o Express dentro da variavel express 
const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    return res.json({
        msg : "Pedro A"
    })
});

app.post("/post", (req,res) => {
    const nome, idade = req.body;

    return res.json(nome);
});

app.listen(6969, () => (
    console.log('Server runnig on port 6969')
));