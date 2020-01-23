const child = require('child_process');

module.exports = {

    carregaJar() {
        // loginca de carregar o jar aqui
        return new Promise((resolve, reject) => {

            const retorno = child.exec('java -jar demo-biometria.jar "Jar is invoked by Node js"', function (err, res, stderr) {
                if (err) {
                    console.log(err)
                    reject(err);
                }
                resolve(res);
            })
        });
    },
    salvarDados() {

    }
}