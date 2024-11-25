import express from "express";

// iniciando a função do express para subir o server
const app = express();

// Ativando o servidor na porta local (3000)
app.listen(3000, () => {
    console.log("Servidor escutando ...");
});

// Criando uma rota. A função get recebe doi parâmentros: nome da rota ("/api") e uma arrow function ((req, res) =>{})
app.get("/api", (req, res) => {
    //Enviando uma resposta com status 200 pra quem acessa essa rota
    res.status(200).send("Rota inicial");
});


