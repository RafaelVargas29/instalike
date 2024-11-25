import express from "express";
import routes from "./src/routes/postRoutes.js";

// iniciando a função do express para subir o server
const app = express();

//Chama a função de rotas e passa o express como parâmetro
routes(app);

// Ativando o servidor na porta local (3000)
app.listen(3000, () => {
    console.log("Servidor escutando ...");
});

