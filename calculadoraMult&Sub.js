let unidade = parseInt(prompt("Digite qual unidade você deseja (1)Volts - (2)Ampere - (3)Watt - (4)ohm)"));
let valor = parseFloat(prompt("Digite o valor que deseja converter: "));

switch(unidade){
    case 1:
        valor = valor * 1000;
        console.log(valor, " miliVolts");
        break;
    case 2:
        valor = valor * 1000;
        console.log(valor, " miliAmpere");
        break;
    case 3:
        valor = valor * 1000;
        console.log(valor, " miliWatt");
        break;
    case 4:
        valor = valor * 1000;
        console.log(valor, " miliOhm");
        break;

}
