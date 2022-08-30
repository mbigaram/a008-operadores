const operacao1 = 5 > 20 && 5 < 2
console.log (operacao1)

/*false, porque 5  é igual a 5, mas 5 não é igual a "5" consequentemente temos true && false,
que devolve true por ser OU*/
const operacao2 = 5 === 5 || 5 === "5"
console.log (operacao2)

const operacao3 = !(20 > 50)
console.log (operacao3)

const operacao4 = !(20 > 50 || 50 >60)
console.log (operacao4)


