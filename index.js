import chalk from "chalk"
import fs from "fs"

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não foi possível ler seu arquivo!'))
}

function extraiLinks(texto) {
    const regex = /\[(.*?)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados = []
    let temp
    while ((temp = regex.exec(texto) ) != null){
        arrayResultados.push({ [temp[1]] : temp[2] })
    }
    
    return arrayResultados.length === 0 ? 'Nenhum link encontrado!' : arrayResultados
}

async function pegaArquivo(caminho) {
    const enconding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminho, enconding)
        //console.log(chalk.green(texto))
        return extraiLinks(texto)
    } catch(error){
        trataErro(error)
    }    
}

//FUNÇÃO ASSÍNCRONA COM THEN E CATCH
//function pegaArquivo(caminho) {
//    const encoding = 'utf-8'
//    fs.promises
//    .readFile(caminho, encoding)
//    .then((texto) => console.log(chalk.green(texto)))
//    .catch((erro) => trataErro(erro))
//}

//pegaArquivo('./arquivos/texto1.md')

export default pegaArquivo