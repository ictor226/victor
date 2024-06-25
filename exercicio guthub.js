// 1-Escreva um programa que verifique se um número fornecido pelo usuário é positivo, negativo ou zero.
 console.log ("atividade 01")

numero = 0
if (numero > 0){
    console.log('positivo')
}
else if(numero <= -1){
    console.log('negativo')
}
else if (numero == 0){
    console.log('Número é zero')
}
 
console.log("-------------------------------------------------------------------------------------------------")
 
//2-Crie um programa que leia a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.
console.log ("atividade 02")
numero = 16
if (numero >= 18){
    console.log('É maior de idade')
}
else if(numero <= 17){
    console.log('É menor de idade')
}
 
console.log("-------------------------------------------------------------------------------------------------")
 
//3-Escreva um programa que verifique se um número fornecido pelo usuário é par ou ímpar
console.log ("atividade 03")
numero = 90
var total = (numero)
if (numero%2 == 0){
    console.log("Par")
}
else{
    console.log("Impar")
}
console.log(total)
 
console.log()
console.log("-------------------------------------------------------------------------------------------------")
//4-Crie um programa que leia três números e determine qual é o maior.
console.log ("atividade 04")
numero1 = 4
numero2 = 8
numero3 = 16
 
if (numero1 > numero2) {
    console.log('O numero 1 é maior que o numero 2');
 
    if(numero1 > numero3){
        console.log('O numero 1 é maior que o numero 3');
        console.log('O MAIOR numero é do numero 1')
    }
}
 
 
if (numero2 > numero1) {
    console.log('O numero 2 é maior que o numero 1');
 
    if(numero2 > numero3){
        console.log('O numero 2 é maior que o numero 3');
        console.log('O MAIOR numero é do numero 2')
    }
}
 
 
if (numero3 > numero1) {
    console.log('O numero 3 é maior que o numero 1');
 
    if(numero3 > numero2){
        console.log('O numero 3 é maior que o numero 2');
        console.log('O MAIOR numero é do numero 3')
    }
}
 
console.log("-------------------------------------------------------------------------------------------------")
//5-Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante.
console.log ("atividade 05")
letraUsuario = 'A'
 
if (letraUsuario.toLowerCase() == 'a'){
    console.log('VOGAL');
} else if (letraUsuario.toLowerCase() == 'e'){
    console.log('VOGAL');
} else if (letraUsuario.toLowerCase() == 'i'){
    console.log('VOGAL');
} else if (letraUsuario.toLowerCase() == 'o'){
    console.log('VOGAL');
} else if (letraUsuario.toLowerCase() == 'u'){
    console.log('VOGAL');
} else {
    console.log('CONSOANTE')
}
console.log("-------------------------------------------------------------------------------------------------")
//06 Faça um programa que leia a nota de um aluno e informe se ele está aprovado (nota maior ou igual a 7), em recuperação (nota entre 5 e 7) ou reprovado (nota menor que 5).
console.log ("atividade 06")


let nota = 8
if (nota >= 7){
console.log ("parabens vc esta aprovado")
}
else if (nota >= 5 && nota <7){
    console.log ("vc esta de recuperação")
}
else if (nota >= 0 && nota <4){
    console.log ("vc esta reprovado")
}










console.log("-------------------------------------------------------------------------------------------------")
//07 Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.
console.log ("atividade 07")

var numero1 = 3
var numero2 = 3


console.log (numero1 + numero2 , " adição")
console.log (numero1 - numero2 , "subtração")
console.log (numero1 * numero2 , "multiplicação"  )
console.log (numero1 / numero2 ,  "divisão" )
console.log("-------------------------------------------------------------------------------------------------")

//08Crie um programa que determine se um ano é bissexto.
// guida me ajudouu
console.log ("atividade 08")

function bissexto (ano){
    return (ano % 4 == 0 && (  ano %100 !== 0 || ano % 400 === 0) )
}const ano = 3043 ;console.log( ) 
if (bissexto (ano)){
    console.log (ano + 'nao é um ano bissexto.')
}else {
    console.log (ano + 'é um ano bissexto.')
}
console.log("-------------------------------------------------------------------------------------------------")
//10Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC, informando se está abaixo do peso, no peso normal, acima do peso ou obeso.
console.log ("atividade 08")
peso = 90
altura = 1.50
imc = peso / (altura * altura)
if (imc < 18.5){
    console.log ("abaixo do peso")
}else if (imc >= 18.5 && imc < 30){
    console.log ("peso normal")
}

else if (imc >= 25 && imc < 30){
    console.log ("acima do peso")
}else console.log ("vc esta ecima do peso")
console.log("-------------------------------------------------------------------------------------------------")



//11Escreva um programa que leia um mês do ano e informe quantos dias ele tem.
//RYAN ME AJUDOU NESSA 
console.log ("atividade 11")
 
mes =  "junho"

if (mes == "janeiro"||mes == "março"|| mes == "maio" || mes == "julho" || mes == "agosto" || mes == "outubro" || mes =="dezenbro" ){
    console.log ("o mes de " + mes, "tem 30 dias")
}


else if (mes == "abril" || mes == "julho" ||mes == "setembro" || mes == "novembro"){
console.log("o mes de" + mes, "tem 30 Dias  ")
}
else if (mes == "fevereiro"){
  console.log( "o mes de " + mes, "tem 28 dias")
}

 







console.log("-------------------------------------------------------------------------------------------------")





