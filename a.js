let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("idade?"))

function maiorIdade(idade){
    if(idade > 18){
        return true
    } else {
        return false
    }
}

alert(`Nome: ${nome}\nIdade: ${idade}\nMaior de Idade? ${maiorIdade(idade)}`)