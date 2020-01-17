
const carregaJar = () => {
    // loginca de carregar o jar aqui
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolvido com sucesso!')
        }, 3000);
    })
}


module.exports = {
    carregaJar
}