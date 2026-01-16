console.log("cadastro.js carregou");
function Cadastrar() {
    alert("Enviando formulário...");
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const nascimento = document.getElementById('nascimento').value.trim();

    if (!nome) {
        alert("Por favor, preencha o nome.");
        return;
    }

    if (nome.length < 3) {
        alert("O nome deve ter no mínimo 3 caracteres.");
        return;
    }

    if (!email) {
        alert("Por favor, preencha o email.");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um email válido.");
        return;
    }
    if (cpf.length !== 11 || isNaN(cpf)) {
        alert("Por favor, insira um CPF válido.");
        return;
    }

    const texto = `
Nome: ${nome}
Email: ${email}
CPF: ${cpf}
Data de Nascimento: ${nascimento}
`;

    const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dados_formulario.txt";
    link.click();

    alert("Cadastro realizado com sucesso!");
}
