import express from "express";

const posts = [
    {
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gato brincando com um novelo de lã",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gatinho dormindo em uma caixa",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gatos se olhando no espelho",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gatinho curioso olhando para a câmera",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gato tomando sol na janela",
      imagem: "https://placecats.com/millie/300/150"
    }
];

// iniciando a função do express para subir o server
const app = express();

// Faz com que o server retorne respostas json para as requisições
app.use(express.json());

// Ativando o servidor na porta local (3000)
app.listen(3000, () => {
    console.log("Servidor escutando ...");
});

// Criando uma rota. A função get recebe doi parâmentros: nome da rota ("/api") e uma arrow function ((req, res) =>{})
app.get("/posts", (req, res) => {
    //Enviando uma resposta com status 200 em formato json para quem acessa essa rota
    res.status(200).json(posts);
});


