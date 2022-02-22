import pegaArquivo from './index.js';
import chalk from 'chalk';
import validaUrl from './http-validation.js';

const caminho = process.argv

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('Links validados'), await validaUrl(resultado))
    } else
    console.log(chalk.yellow('Lista de links:'), resultado)
}

processaTexto(caminho)