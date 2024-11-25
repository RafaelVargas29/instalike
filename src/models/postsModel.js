import conectarAoBanco from "../config/dbconfig.js";

// Chamando a função que conecta o servidor com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO_DB);

// função assíncrona que busca todos os posts do banco de dados
export default async function getTodosOsPosts() {
    // Acessa um banco de dados
    const db = conexao.db("instalikes");
    
    // Acessa uma coleção do banco de dados
    const colecao = db.collection("posts");

    // Retorna a coleção em forma de array
    return colecao.find().toArray();
}
