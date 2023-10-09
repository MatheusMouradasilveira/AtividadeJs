
const login = prompt("Defina seu login");
const senha = prompt("Defina sua senha");


const confirmarLogin = prompt("Digite seu login para entrar");
const confirmarSenha = prompt("Digite sua senha para entrar");


if (confirmarLogin === login && confirmarSenha === senha) {
    alert("Logando");
} else {
    alert("Login ou senha inválidos");
}
