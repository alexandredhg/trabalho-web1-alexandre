var formLogin = document.getElementById("formLogin");
var txtEmail = document.getElementById("txtEmail");
var txtSenha = document.getElementById("txtSenha");
var toggleSenhaBtn = document.getElementById('toggleSenha');
var divMensagem = document.getElementById("divMensagem");
toggleSenhaBtn.addEventListener('click', function (mostrar) {
    // Alterna o tipo do campo de senha
    var type = txtSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    txtSenha.setAttribute('type', type);
    // Altera o texto do botão para refletir a nova ação
    toggleSenhaBtn.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});
formLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = txtEmail.value;
    var senha = txtSenha.value;
    if (!email) {
        divMensagem.style.color = "red";
        divMensagem.textContent = "O Campo E-mail é Obrigatório!";
        return;
    }
    else if (!senha) {
        divMensagem.style.color = "Red";
        divMensagem.textContent = "O Campo Senha é Obrigatório!";
        return;
    }
    else if (email == "admin@gmail.com" && senha == "123") {
        divMensagem.style.color = "green";
        divMensagem.textContent = "Login Realizado com Sucesso!";
        setTimeout(function () {
            window.location.href = "areaRestrita.html";
        }, 3000);
    }
    else {
        divMensagem.style.color = "Red";
        divMensagem.textContent = "Senha ou E-mail Invalido!";
    }
});
