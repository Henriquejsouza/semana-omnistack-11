const express = require('express');
const cors = require('cors');
const routes=require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end 
 * DELETE: Deletar uma informação no back-end
 */
/**
 * TIPOS DE PARÂMETROS
 * QUERY PARAMS: Parâmetros nomeados enviados na rota após"?" (Filtros,paginação)
 * ROUTE PARAMS: Parâmetros utilizados para identificar recursos
 * REQUEST BODY: Corpo da requisição utilizado para criar ou alterar recursos 
 * 
 */