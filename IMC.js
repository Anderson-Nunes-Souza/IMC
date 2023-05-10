const readline = require('readline-sync');

const peso = parseFloat(readline.question('Qual é o seu peso em kg? '));
const altura = parseFloat(readline.question('Qual é a sua altura em metros? '));

//IMC = Peso / Altura²
const imc = peso / (altura * altura);

console.log(`Seu IMC é ${imc.toFixed(2)}.`);

if (imc <=18.5) {
 //Magreza, quando o resultado é menor que 18,5 kg/m2;
  console.log('Magreza');
} else if (imc >18.5 && imc <=25) {
//Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
  console.log('Normal');
} else if (imc >25 && imc <=30) {
//Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
  console.log('Sobrepeso');
} else{
    //Obesidade, quando o resultado é maior que 30 kg/m2;
    console.log('Obesidade');
};