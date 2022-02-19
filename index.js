import chalk from "chalk"
import fs from "fs"

function trataErro(erro) {
    throw new Error(chalk.red(erro))
}

function extraiLinks(texto) {
    const regex = /\[(.*?)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados = []
    let temp
    while ((temp = regex.exec(texto) ) != null){
        arrayResultados.push({ [temp[1]] : temp[2] })
    }
    return arrayResultados
}

async function pegaArquivo(path) {
    const enconding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(path, enconding)
        //console.log(chalk.green(texto))
        console.log(extraiLinks(texto))
    } catch(error){
        trataErro(error)
    }    
}

//FUNÇÃO ASSÍNCRONA COM THEN E CATCH
//function pegaArquivo(path) {
//    const encoding = 'utf-8'
//    fs.promises
//    .readFile(path, encoding)
//    .then((texto) => console.log(chalk.green(texto)))
//    .catch((erro) => trataErro(erro))
//}

pegaArquivo('./arquivos/texto1.md')