
let pesoProva1 = Number(prompt("Qual o peso da prova 1?"))
let notaProva1 = Number(prompt("Qual sua nota na prova 1?"))

let pesoProva2 = Number(prompt("Qual o peso da prova 2?"))
let notaProva2 = Number(prompt("Qual sua nota na prova 2?"))

let pesoProva3 = Number(prompt("Qual o peso da prova 3?"))
let notaProva3 = Number(prompt("Qual sua nota na prova 3?"))

let mediaPonderada = (((pesoProva1*notaProva1)+(pesoProva2*notaProva2)+(pesoProva3*notaProva3))/(pesoProva1+pesoProva2+pesoProva3))

alert(`A sua média ponderada foi de: ${mediaPonderada}`)
