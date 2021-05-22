const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informar a distância a percorrer em km: ", function(distancia) {
    rl.question("Informar a velocidade média esperada em km/h: ", function(velocidade) {
        distancia = parseFloat(distancia)
        velocidade = parseFloat(velocidade)//converte string para numero
        let tempo = distancia / velocidade

        console.log(`Tempo da viagem será de ${tempo} horas`)
        rl.close();
    });
});

