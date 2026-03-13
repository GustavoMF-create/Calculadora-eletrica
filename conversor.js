function conversao() {

    const prefixos = {
        giga: 9,
        mega: 6,
        quilo: 3,
        hecto: 2,
        deca: 1,
        base: 0,
        deci: -1,
        centi: -2,
        mili: -3,
        micro: -6,
        nano: -9
    };

    let unidadeBase = prompt("Digite a unidade base:");
    let origem = prompt("Prefixo de origem:").toLowerCase();
    let destino = prompt("Prefixo de destino:").toLowerCase();
    let valor = Number(prompt("Digite o valor:"));

    if (!(origem in prefixos) || !(destino in prefixos)) {
        console.log("Erro: prefixo inválido.");
        return;
    }

    if (isNaN(valor)) {
        console.log("Erro: valor inválido.");
        return;
    }
    
    let diferenca = prefixos[origem] - prefixos[destino];
    
    let resultado = valor * Math.pow(10, diferenca);

    let unidadeOrigem = (origem === "base" ? "" : origem) + unidadeBase;
    let unidadeDestino = (destino === "base" ? "" : destino) + unidadeBase;

    console.log(`${valor} ${unidadeOrigem} = ${resultado} ${unidadeDestino}`);
}

conversao();