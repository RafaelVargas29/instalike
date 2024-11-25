import express from "express";
import { listarPosts } from "../controllers/postsController.js";

// Cria uma função que empacota todas as funções de rota para que o server.js incorpore no servidor
const routes = (app) => {
    // Faz com que o server retorne respostas json para as requisições
    app.use(express.json());

    // Criando uma rota get. A função get recebe dois parâmentros: nome da rota ("/api") e uma função
    app.get("/posts", listarPosts);
}

// Exportando a função routes para se utilizada em outros lugares
export default routes;
