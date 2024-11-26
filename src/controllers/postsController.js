import { getTodosOsPosts, criarPost, atualizarPost} from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts (req, res) {
    // Recebe o retorno da função
    const posts = await getTodosOsPosts();

    //Enviando uma resposta com status 200 em formato json para quem acessa essa rota
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    // Criando constante que recebe o corpo da requisição (conteúdo da requsição)
    const novoPost = req.body;

    try {
        // enviando corpo da requisição para a função (na model) que vai criar o post 
        const postCriado = await criarPost(novoPost);
        // Pega a resposta que o banco de dados vai devolver
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(erro.message);
        // Não é bom retornar o erro com muitos detalhes
        res.status(500).json({"Erro": "Falha na requsição"});
    }
}

export async function uploadImagem(req, res) {
    // Criando um novo objeto que faz o upload de uma referência da imagem
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(erro.message);
        // Não é bom retornar o erro com muitos detalhes
        res.status(500).json({"Erro": "Falha na requsição"});
    }
}

export async function atualizarNovoPost(req, res) {
    // Criando constante que recebe o id do corpo da requisição (conteúdo da requsição)
    const id = req.params.id;

    // Criando uma nova url para imagem com o id dela
    const urlImagem = `http://localhost:3000/${id}.png`;

    const post = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt
    }

    try {
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(erro.message);
        // Não é bom retornar o erro com muitos detalhes
        res.status(500).json({"Erro": "Falha na requsição"});
    }
}
