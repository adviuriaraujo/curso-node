import axios from "axios"

async function checaURLs(arrayURLs) {
    const arrayStatus = Promise.all(arrayURLs.map( async url => {
        const result = await axios.get(url)
        //console.log(result.status)
        return result.status
    }))
    return arrayStatus
}

function geraArrayDeLinks (arrayDeLinks) {
    return arrayDeLinks.map((objeto) => Object.values(objeto).join())
}

async function validaUrl(arrayDeLinks) {
    var arrayDeURLs = geraArrayDeLinks(arrayDeLinks)
    const arrayStatus = await checaURLs(arrayDeURLs)
    let arrayMsgStatus = []
    
    arrayStatus.forEach( status => {
        if(status < 300) arrayMsgStatus.push('--Link Válido--')
        else arrayMsgStatus.push('--Link Inválido--')
    })

    for (let i = 0; i < arrayDeURLs.length; i++) {
        arrayDeURLs[i] = arrayMsgStatus[i] + " " + arrayDeURLs[i]
    }
    /*for (let i = 0; i < arrayDeURLs.length; i++) {
        if (arrayStatus[i] >=200 && arrayStatus[i] < 300) {
            return msgStatus = "--Link Válido--"
        }
        if (arrayStatus[i] >=300 && arrayStatus[i] < 400) {
            return msgStatus = "--Link Redirecionado--"
        }
        if (arrayStatus[i] >=400 && arrayStatus[i] < 500) {
            return msgStatus = "--Link não encontrado--"
        }
        if (arrayStatus[i] > 500) {
            return msgStatus = "--Erro no servidor--"
        }
        
        arrayDeURLs[i] = msgStatus + " " + arrayDeURLs[i]
        console.log(arrayDeURLs[i], arrayStatus[i])
    }*/
    //console.log(arrayStatus)
    return arrayDeURLs
}

export default validaUrl