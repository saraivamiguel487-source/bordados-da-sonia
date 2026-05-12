const FORM_CADASTRAR = document.getElementById("form-cadastrar")

if(FORM_CADASTRAR){

    FORM_CADASTRAR.addEventListener ("submit", function(event){
        event.preventDefault()


        const usuario = {
            nome : document.getElementById ("nome").value,
            sobrenome : document.getElementById ("sobrenome"). value,
            email : document.getElementById ("email"). value,
            senha : document.getElementById ("senha"). value,
            ddd : document.getElementById ("ddd"). value,
            telefone : document.getElementById ("telefone"). value,
            endereco : document.getElementById ("endereco"). value,
            numero : document.getElementById ("numero"). value,
            cidade : document.getElementById ("cidade").value,
            cep : document.getElementById ("cep").value,
            dataNascimento : document.getElementById ("dataNascimento").value,
            genero : document.getElementById ("genero").selectedOptions[0].text
        }

        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario))
        alert("Cadastro Realizado com SUCESSO!")
        window.location.href="login.html" 

    })
    
}


// Parte de Login

const FORM_LOGAR = document.getElementById("form-logar")
    if(FORM_LOGAR){
        FORM_LOGAR.addEventListener("submit", function(event){
            event.preventDefault()

            const usuarioCadastrado = localStorage.getItem("usuarioCadastrado")

            if(usuarioCadastrado){
                const usuarioEncontrado = JSON.parse(usuarioCadastrado)
                
                var emailDigitado = document.getElementById ("email").value
                var senhaDigitado = document.getElementById ("senha").value
                
                if(emailDigitado == usuarioEncontrado.email && senhaDigitado == usuarioEncontrado.senha){
                    alert("Usuario logado com Sucesso!")
                    window.location.href = "index.html"
                } else {
                    alert("ATENÇÃO: Email ou Senha Incorretos")
                }
            } else {
                alert("Nenhum usuário cadastrado encontrado")
            }

        })
    }