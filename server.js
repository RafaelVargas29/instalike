import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Gato 1",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato 2",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gato 3",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gato 4",
        imagem: "https://placecats.com/millie/300/150"
    },
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

function buscaPostPorId(id) {
    // Busca o id passado dentro do array de objetos post
    return posts.findIndex((post) => {
        return post.id === Number(id) // converte o id para number caso chegue como uma string
    })
}

// Criando rota que vai receber o id de um post como parâmetro e retroná-lo
app.get("/posts/:id", (req, res) => {

    // pega o id passado nos parâmentros requisição (req) e envia para a função buscar
    const index = buscaPostPorId(req.params.id);

    //Enviando uma resposta com status 200 em formato json para quem acessa essa rota
    res.status(200).json(posts[index]);
});
