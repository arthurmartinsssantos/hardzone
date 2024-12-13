document.getElementById('toggleSenha').addEventListener('click', function() {
    const senhaField = document.getElementById('senha');
    const type = senhaField.type === 'password' ? 'text' : 'password';
    senhaField.type = type;
});


document.getElementById('toggleConfirmaSenha').addEventListener('click', function() {
    const confirmaSenhaField = document.getElementById('confirma_senha');
    const type = confirmaSenhaField.type === 'password' ? 'text' : 'password';
    confirmaSenhaField.type = type;
});