import getTodosOsPosts from "../models/postsModel.js";

export async function listarPosts (req, res) {
    // Recebe o retorno da função
    const posts = await getTodosOsPosts();

    //Enviando uma resposta com status 200 em formato json para quem acessa essa rota
    res.status(200).json(posts);
}
