const usuarioFixo = {
    usuario: "Gustavo",
    senha: "12345"
};

function Enviar() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (
        usuario === usuarioFixo.usuario &&
        senha === usuarioFixo.senha
    ) {
        alert("Login bem-sucedido!");
        window.location.href = "cadastro.html";
    } else {
        alert("Usuário ou senha incorretos");
    }

}
