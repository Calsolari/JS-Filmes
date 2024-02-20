/***************************************************************************************
 * Objetivo: Criar a interação com o banco de dados MySQl para fazer o CRUD de Filmes
 * Data: 30/01/2023
 * Autor: Ruan
 * Versão 1.0
 **************************************************************************************/

//Import da biblioteca do Prisma Client
const { PrismaClient } = require('@prisma/client')

//Instanciando o objeto Prisma com as caracteristicas do prisma client
const prisma = new PrismaClient


//Inserir um novo filme
const insertFilme = async function(){


}


//Atualizar um filme existente filtrando pelo ID
const updateFilme = async function(id){


}


//Excluir um filme existente filtrando pelo ID
const deleteFilme = async function(id){


}


//Listar todos os filmes existentes na tabela
const selectAllFilmes = async function(){

let sql = 'select * from tbl_filme'

let rsFilmes = await prisma.$queryRawUnsafe(sql)

if (rsFilmes.length > 0)
return rsFilmes

else
return false

}

const selectByNameFilme = async function(nome){
    let sql = ` select * from tbl_filme where nome like "${nome}%"`
    

    let nomeFilme = await prisma.$queryRawUnsafe(sql)

    if(nomeFilme.length > 0) {
        return nomeFilme
    } else {
        return false
    }
}



//Buscar um filme existente filtrando pelo ID
const selectByIdFilme = async function(id){

    //realiza a busca do filme pelo id
    let sql = 'select * from tbl_filme where id=${id}'

    let rsFilme = await prisma.$queryRawUnsafe(sql)

    if (rsFilme.length > 0)
        return rsFilme
    else
        return false;    
}

module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme
}