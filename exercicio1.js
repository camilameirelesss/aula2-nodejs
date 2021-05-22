const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o preço da mercadoria? ", function(valor) {
    rl.question("Qual porcentagem do desconto (Exemplo 20%)? ", function(desconto) {
        valor = parseFloat(valor)
        desconto = parseFloat(desconto)//converte string para numero
        let x = valor * (100-desconto) / 100
        console.log(`o desconto foi de ${desconto}%`)
        console.log(`preço final com desconto ${x}`)
        rl.close();
    });
});

