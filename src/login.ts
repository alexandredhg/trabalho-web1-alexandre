const formLogin = document.getElementById("formLogin") as HTMLFormElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const toggleSenhaBtn = document.getElementById('toggleSenha') as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

toggleSenhaBtn.addEventListener('click', (mostrar) => {
    // Alterna o tipo do campo de senha
    const type = txtSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    txtSenha.setAttribute('type', type);

    // Altera o texto do botão para refletir a nova ação
    toggleSenhaBtn.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});

formLogin.addEventListener("submit", (event) =>{
   
    event.preventDefault();

    const email = txtEmail.value;
    const senha = txtSenha.value;  
                    

    if(!email){
        divMensagem.style.color ="red";
        divMensagem.textContent = "O Campo E-mail é Obrigatório!"; 
        return;       
    }
    else if(!senha){
        divMensagem.style.color ="Red";
        divMensagem.textContent = "O Campo Senha é Obrigatório!";
        return;
    }
    else if(email == "admin@gmail.com" && senha == "123"){
       divMensagem.style.color = "green";
        divMensagem.textContent = "Login Realizado com Sucesso!";

        setTimeout(() => {
            window.location.href = "areaRestrita.html";
        }, 3000);
    }  
    else{
        divMensagem.style.color = "Red";
         divMensagem.textContent = "Senha ou E-mail Invalido!";
    }

});