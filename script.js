function validaForms(){

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirma = document.getElementById("confirmaSenha").value;

    // validação inicial: campos vazios

    if(nome === '' || email === '' || senha === ''){
        alert(" Por favor, preencha o campo vazio!")
        return
    }

    // validação campo de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Regex: expressão regular, pode buscar, validar e alterar qualquer padrão de caracteres em qualquer texto
    
    if(!emailRegex.test(email)){
        alert("Digite um email válido")
        return
    }

    //validação tamanho da senha
    if( senha.length < 8 ){
        alert("A senha deve conter mais que 8 caracteres, por favor preencha esse campo novamente!")
        return
    }

    // confirmação de senha
    if(confirma !== senha){
        alert("A senha está incorreta, digite novamente!")
        return
    }

    alert("Cadastro realizado com sucesso!")

}

function darkMode(){
    const pagina = document.body;
    const formulario = document.getElementById("formulario")


    formulario.classList.toggle("forms")
    pagina.classList.toggle("darkMode")  //toggle: geralmente representados por um botão que pode ser clicado para ativar ou desativar uma determinada funcionalidade.

    const botao = document.getElementById("b2");

    const isDarkMode = document.body.classList.contains("darkMode"); // aqui vai armazenar a classe "darkMode" para verficar essa classe

    if(isDarkMode == true){
        botao.textContent = "Modo Claro"
    }
    else{
        botao.textContent = "Modo Escuro "
    }
}
