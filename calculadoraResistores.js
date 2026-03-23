var tipo = parseInt(prompt("Digite o tipo de resistor (4 ou 5 faixas):"));

var valor = 0;
var tolerancia = "";


if (tipo === 4) {

  var cor1 = prompt("1ª cor:");
  var cor2 = prompt("2ª cor:");
  var cor3 = prompt("Multiplicador:");
  var cor4 = prompt("Tolerância:");

  var d1, d2, mult;

  if (cor1 === "preto") d1 = 0;
  if (cor1 === "marrom") d1 = 1;
  if (cor1 === "vermelho") d1 = 2;
  if (cor1 === "laranja") d1 = 3;
  if (cor1 === "amarelo") d1 = 4;
  if (cor1 === "verde") d1 = 5;
  if (cor1 === "azul") d1 = 6;
  if (cor1 === "violeta") d1 = 7;
  if (cor1 === "cinza") d1 = 8;
  if (cor1 === "branco") d1 = 9;

  if (cor2 === "preto") d2 = 0;
  if (cor2 === "marrom") d2 = 1;
  if (cor2 === "vermelho") d2 = 2;
  if (cor2 === "laranja") d2 = 3;
  if (cor2 === "amarelo") d2 = 4;
  if (cor2 === "verde") d2 = 5;
  if (cor2 === "azul") d2 = 6;
  if (cor2 === "violeta") d2 = 7;
  if (cor2 === "cinza") d2 = 8;
  if (cor2 === "branco") d2 = 9;

  if (cor3 === "preto") mult = 1;
  if (cor3 === "marrom") mult = 10;
  if (cor3 === "vermelho") mult = 100;
  if (cor3 === "laranja") mult = 1000;
  if (cor3 === "amarelo") mult = 10000;
  if (cor3 === "verde") mult = 100000;
  if (cor3 === "azul") mult = 1000000;
  if (cor3 === "violeta") mult = 10000000;
  if (cor3 === "cinza") mult = 100000000;
  if (cor3 === "branco") mult = 1000000000;
  if (cor3 === "dourado") mult = 0.1;
  if (cor3 === "prateado") mult = 0.01;  

  valor = (d1 * 10 + d2) * mult;
}


if (tipo === 5) {

  var cor1 = prompt("1ª cor:");
  var cor2 = prompt("2ª cor:");
  var cor3 = prompt("3ª cor:");
  var cor4 = prompt("Multiplicador:");
  var cor5 = prompt("Tolerância:");

  var d1, d2, d3, mult;

  if (cor1 === "preto") d1 = 0;
  if (cor1 === "marrom") d1 = 1;
  if (cor1 === "vermelho") d1 = 2;
  if (cor1 === "laranja") d1 = 3;
  if (cor1 === "amarelo") d1 = 4;
  if (cor1 === "verde") d1 = 5;
  if (cor1 === "azul") d1 = 6;
  if (cor1 === "violeta") d1 = 7;
  if (cor1 === "cinza") d1 = 8;
  if (cor1 === "branco") d1 = 9;

  if (cor2 === "preto") d2 = 0;
  if (cor2 === "marrom") d2 = 1;
  if (cor2 === "vermelho") d2 = 2;
  if (cor2 === "laranja") d2 = 3;
  if (cor2 === "amarelo") d2 = 4;
  if (cor2 === "verde") d2 = 5;
  if (cor2 === "azul") d2 = 6;
  if (cor2 === "violeta") d2 = 7;
  if (cor2 === "cinza") d2 = 8;
  if (cor2 === "branco") d2 = 9;

  if (cor3 === "preto") d3 = 0;
  if (cor3 === "marrom") d3 = 1;
  if (cor3 === "vermelho") d3 = 2;
  if (cor3 === "laranja") d3 = 3;
  if (cor3 === "amarelo") d3 = 4;
  if (cor3 === "verde") d3 = 5;
  if (cor3 === "azul") d3 = 6;
  if (cor3 === "violeta") d3 = 7;
  if (cor3 === "cinza") d3 = 8;
  if (cor3 === "branco") d3 = 9;

  if (cor4 === "preto") mult = 1;
  if (cor4 === "marrom") mult = 10;
  if (cor4 === "vermelho") mult = 100;
  if (cor4 === "laranja") mult = 1000;
  if (cor4 === "amarelo") mult = 10000;
  if (cor4 === "verde") mult = 100000;
  if (cor4 === "azul") mult = 1000000;
  if (cor4 === "violeta") mult = 10000000;
  if (cor4 === "cinza") mult = 100000000;
  if (cor4 === "branco") mult = 1000000000;
  if (cor4 === "dourado") mult = 0.1;
  if (cor4 === "prateado") mult = 0.01;

  if (cor5 === "marrom") tolerancia = "mais ou menos 1 por cento";
  if (cor5 === "vermelho") tolerancia = "mais ou menos 2 por cento";
  if (cor5 === "dourado") tolerancia = "mais ou menos 5 por cento";
  if (cor5 === "prateado") tolerancia = "mais ou menos 10 por cento";

  valor = (d1 * 100 + d2 * 10 + d3) * mult;
}


if (valor >= 1000000000) {
  valor = (valor / 1000000000) + " gigaohms";
}
else if (valor >= 1000000) {
  valor = (valor / 1000000) + " megaohms";
}
else if (valor >= 1000) {
  valor = (valor / 1000) + " kiloohms";
}
else if (valor >= 1) {
  valor = valor + " ohms";
}
else if (valor >= 0.001) {
  valor = (valor * 1000) + " miliohms";
}
else {
  valor = valor + " ohms";
}

alert("Resistencia: " + valor + " " + tolerancia);