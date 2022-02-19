import chalk from "chalk"
import fs from "fs"

function trataErro(erro) {
    throw new Error(chalk.red(erro))
}

function pegaArquivo(path) {
    const encoding = 'utf-8'
    fs.promises
    .readFile(path, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => trataErro(erro))
}

pegaArquivo('./arquivos/texto1.md')