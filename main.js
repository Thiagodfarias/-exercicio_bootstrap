function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    
    var regexNome = /^[a-zA-Z\s]+$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexTelefone = /^\d{10,}$/;
    
    var formValido = true;
    
    if (!regexNome.test(nome)) {
    document.getElementById('nome').classList.add('is-invalid');
    formValido = false;
    } else {
    document.getElementById('nome').classList.remove('is-invalid');
    }
    
    if (!regexEmail.test(email)) {
    document.getElementById('email').classList.add('is-invalid');
    formValido = false;
    } else {
    document.getElementById('email').classList.remove('is-invalid');
    }
    
    if (!regexTelefone.test(telefone)) {
    document.getElementById('telefone').classList.add('is-invalid');
    formValido = false;
    } else {
    document.getElementById('telefone').classList.remove('is-invalid');
    }
    
    return formValido;
}

function pularCampo(event, proximoCampoId) {
    if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById(proximoCampoId).focus();
    }
}

document.getElementById('nome').addEventListener('keydown', function(event) {
    pularCampo(event, 'email');
});
document.getElementById('email').addEventListener('keydown', function(event) {
    pularCampo(event, 'telefone');
});
document.getElementById('telefone').addEventListener('keydown', function(event) {
    pularCampo(event, 'submit');
});

function scrollToForm() {
    var formCollapse = document.getElementById('formCollapse');
    formCollapse.scrollIntoView({ behavior: 'smooth' });
}