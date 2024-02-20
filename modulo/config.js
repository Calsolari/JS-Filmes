/*********************************************************************************************************
 * Objetivo: Arquivo responsavel pelas configuraçoes globais de mensagem valores e conteudo para o projeto
 * Data: 20/02/2024
 * Autor: Ruan
 * Versão: 1.0
 *********************************************************************************************************/

/**************************************** MENSAGENS DE ERRO  ****************************************/
const ERROR_INVALID_ID = {status: false, status_code: 400 ,message: 'O ID encaminhado na requisição não é valido!!!'}

const ERROR_NOT_FOUND = {status: false, status_code: 404 ,message: 'Nenhum item encontrado na requisição'}




module.exports = {
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND
}