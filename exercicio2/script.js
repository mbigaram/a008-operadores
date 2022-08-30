let numeroA = Number(prompt("Qual o primeiro numero?"))
console.log ("O primeiro numero é", numeroA)

let numeroB = Number(prompt("Qual o segundo numero?"))
console.log ("O segundo numero é", numeroB)

console.log ("O primeiro numero é maior que o segundo?", numeroA > numeroB)
console.log ("O primeiro numero é igual ao segundo?", numeroA === numeroB)

let primeiroVsSegundo = numeroA % numeroB
let segundoVsPrimeiro = numeroB % numeroA

let restoPrimeiroVsSegundo = primeiroVsSegundo === 0
let restoSegundoVsPrimeiro = segundoVsPrimeiro === 0

console.log ("O primeiro numero é divisível pelo segundo?", restoPrimeiroVsSegundo)
console.log ("O segundo numero é divisível pelo primeiro?", restoSegundoVsPrimeiro)

