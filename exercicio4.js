const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe quantos KMs foram percorridos na locação: ", function(distancia) {
    rl.question("Informe quantos dias de locação? ", function(dias) {
        distancia = parseFloat(distancia)
        dias = parseFloat(dias)//converte string para numero
        
        valorDiaria = 60
        valorPorKMs = 0.15

        let preco = (dias * valorDiaria) + (distancia * valorPorKMs)
        console.log(`O valor da locação ficou em ${preco} reais`)

        rl.close();
    });
});

