/***************************************************************************************
 * Objetivo: Arquivo responsavel pela interação entre o APP e a model que teremos 
 * todas as tratativas e regra de negocio para o CRUD de Filmes
 * Data: 30/01/2023
 * Autor: Ruan
 * Versão 1.0
 **************************************************************************************/

//import do arquivo de configuração do projeto
const message = require('../modulo/config')


const filmesDAO = require('../model/DAO/filme')

//Função para inserir um novo filme no bancos de dados
const setNovoFilme = async function(){


}



//Função para atualizar um filme existente
const setAtualizarFilme = async function(){

}



//Função para excluir um filme existente
const setExluirFilme = async function(){


}



//Função para retornar todos os filmes do banco de dados
const getListarFilmes = async function(){

//cria uma variavel do tipo JSON    
let filmesJSON = {}

//verifica se existem dados retornando do DAO
let dadosFilmes = await filmesDAO.selectAllFilmes()

//verifica se existem dados retornados do DAO
if (dadosFilmes){
    //montando o JSON para retornar para o APP
    filmesJSON.filmes = dadosFilmes
    filmesJSON.quantidade = dadosFilmes.lenght
    filmesJSON.status_code = 200
    //Retorna o JSON montado
    return filmesJSON
}else{
    //Return false quando não houveram dados
    return false
}

}



//Função para buscar um filme pelo ID
const getBuscarFilme = async function(id){
    //recebe o id do filme
    let idFilme = id;
    let filmeJSON = {}
   
    if(idFilme == "" || idFilme == undefined || isNaN(idFilme)){
        return message.ERROR_INVALID_ID
    }else{
        
        //solicita para o DAO a busca do filme pelo ID
        let dadosFilme = await filmesDAO.selectByIdFilme(idFilme)

        //validação para verificar se existem dados encontrados
        if(dadosFilme){
            filmeJSON.filme = dadosFilme;
            filmeJSON.status_code = 200

            return filmeJSON;
        }else{
            message.ERROR_NOT_FOUND
        }    

    }
}

module.exports = {
    setNovoFilme,
    setAtualizarFilme,
    setExluirFilme,
    getListarFilmes,
    getBuscarFilme
}

