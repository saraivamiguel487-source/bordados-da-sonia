/*()
// Banco de Dados
const nomeUsuario1 = "user@gmail.com"
const senhaUsuario1 = "123456"
const nomeUsuario2 = "user@gmail.com"
const senhaUsuario2 = "123456"

//Variáveis de login
let nomeDigitado = prompt("Digite seu email:")
let senhaDigitada = prompt("Digite sua senha:")

//Verificação de login
if(nomeDigitado === nomeUsuario1 && senhaDigitada === senhaUsuario1){
alert("Login bem-sucedido! Bem-vindo, " + nomeUsuario1 + "!")
} else if(nomeDigitado === nomeUsuario2 && senhaDigitada === senhaUsuario2){
    alert("Login bem-sucedido! Bem-vindo, " + nomeUsuario2 + "!")
} else {
    alert("Login falhou! Email ou senha incorretos.")
    document.body.classList.add("acesso-negado")
}
*/
//Banco de Dados para Aprender JS
const nomeUsuario1 = "user1@gmail.com"
const nomeUsuario2 = "user2@gmail.com"
//Variaveis de login
let nomeDigitado = prompt("Digite seu email:")
//Verificação de login
if(nomeDigitado === nomeUsuario1){
    alert("Bem-vindo, " + nomeUsuario1 + "!")
} else if(nomeDigitado === nomeUsuario2){
    alert("Bem-vindo, " + nomeUsuario2 + "!")
} else {
    alert("Email não encontrado! Por favor, tente novamente.")
    document.body.classList.add("acesso-negado")
}
//Variáveis de idade

const idadeUsuario1 = 25

const idadeUsuario2 = 10


if (idadeUsuario1 >= 25) {
 alert("idade,ok bem-vindo," + idadeUsuario1 + "!")
 alert("idade,ok bem-vindo," + idadeUsuario2 + "!")
 alert("Restricao de idade você NÃO pode ENTRAR!")


}
