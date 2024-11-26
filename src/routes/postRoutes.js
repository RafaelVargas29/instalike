import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Iniciando o multer e dizendo onde o multer vai guardar a imagens
const upload = multer({ dest:"./uploads" });   

// Cria uma função que empacota todas as funções de rota para que o server.js incorpore no servidor
const routes = (app) => {
    // Faz com que o server retorne respostas json para as requisições
    app.use(express.json());

    // Criando uma rota get. A função get recebe dois parâmentros: nome da rota ("/api") e uma função
    app.get("/posts", listarPosts);

    // Rota pra criar um post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

// Exportando a função routes para se utilizada em outros lugares
export default routes;
