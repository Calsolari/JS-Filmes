/******************************************************************************************
 * Para realizar a conexão com o Banco de dados precisamos utilizar uma dependencia
 *   - SEQUELIZE ORM
 *   - PRISMA    ORM 
 *   - FASTFY    ORM 
 * 
 * Prisma
 *     npm install prisma --save
 *     npm install @prisma/client --save
 * 
 *     npx prisma init
 *****************************************************************************************/




const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Objeto que vai manipular as restrições
const app = express()

//Manipulando as restrições da API
app.use((request, response, next)=>{
    // Quem  vai acessar a API
    response.header('Access-Control-Allow-Origin', '*')
    // como a API vai ser requisitada 
    response.header('Access-Control-Allow-Methods', 'GET')
    // Ativa as configurações de permissoe do Cors
    app.use(cors())

    next();
})

//import de arquivos e bibliotecas do projeto
const controllerFilmes = require('./controller/controller_filme')

//Endpoint
app.get('/v1/AcmeFilmes/filmes', cors(), async function(request, response, next){
    let controleFIlmes = require('./controller/funcoes')
    let listaFilmes = controleFIlmes.getListaDeFilmes();

    if(listaFilmes){
        response.json(listaFilmes)
        response.status(200)

    }else
        response.status(404)
});


app.get('/v2/acmeFilmes/filme', cors(), async function(request,response,next){

    let dadosFilmes = await controllerFilmes.getListarFilmes()

    if (dadosFilmes){
    response.json(dadosFilmes)
    response.status(200)
    } else
    response.json({message: 'Nenhum registro encontrado'})
    response.status(404)
})

//Endpoint: retorna os dados do filme pelo ID
app.get('/v2/acmeFilmes/filme/:id',cors(), async function(request, response, next){
    
    //recebe o id da requisição do filme
    let idFilme = request.params.id

    let dadosFilme = await controllerFilmes.getBuscarFilme(idFilme)

    response.json(dadosFilme)
    response.status(dadosFilme.status_code)
})



app.listen('8080', function(){
    console.log('API funcionando 🙈')
})