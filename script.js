console.log("Meu primeiro sript foi executado!");
//mensagem generica
console.log("Nome do projeto: contas de menos e mais e as pessoas que fazem elas");
console.log("10 + 5");
console.log("10 - 5");
//variaveis de tema escolhido
const nomePessoa = "Samuel";
let contaDaVez = "mais";
//alternado de 4 + 3 para 2 + 3 
let conta = 2 + 3;
//patica
console.log("/nome:", nomePessoa, "/conta: ", contaDaVez, "/resultado: ", conta,);
//criação variavel var so pq sim
var contaNaoUsada = "vezes";
console.log("conta que não usei: ", contaNaoUsada);
//variaveis de cada tipo
const nomeDoCriador = "joelsol"; //string
const numeroDeUsuarios = 5; //number
const estaFuncionando = true; // boolean
const observação = null; //ausencia de valor intecional 
console.log("/nome do criado:",nomeDoCriador,"/numero de usuarios:",numeroDeUsuarios,"/as contas estão funcionando?:",estaFuncionando,"/observações:",observação,);
// operadores de cada tipo
let n1 = 4;
let n2 = 5;
const mais = (n1 + n2);
const menos = (n1 - n2);
const maiorMa = mais >= 6;
const menorMa = mais <= 6;

console.log(maiorMa)
console.log(menorMa)

//templates literais
const mensagem = `primerio numero: ${n1}, mais o segundo numero: ${n2}, é igual á : ${mais}, esse resultado é menor que 6?: ${menorMa}, esse resultado é maior que 6?: ${maiorMa}`
console.log(mensagem)

//criar um if else
if (mais === 9){
    console.log(`WOW!!!! ${mais}, esse numero é do balacobaco!!!!`)
}else{
    console.log("numero legal mas bem mehh...")
}

document.getElementById("resultado-codigo").innerText = `resultado: ${mais}`;