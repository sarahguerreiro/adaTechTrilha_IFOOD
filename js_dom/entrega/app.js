function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function saveFormValues() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        localStorage.setItem(input.id, input.value)
    })
}

function loadFormValues() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        const valoresSalvos = localStorage.getItem(input.id);
        if (valoresSalvos) {
            input.value = valoresSalvos
        }
    })
}

document.addEventListener('DOMContentLoaded', function(){
    const root = document.getElementById('root');

    const titulo = document.createElement('h1');
    titulo.textContent = 'Churrascômetro';
    root.appendChild(titulo)


    const nomeInput = document.createElement('input');
    nomeInput.setAttribute('type', 'text');
    nomeInput.setAttribute('id', 'nome');
    nomeInput.setAttribute('placeholder', 'Nome');
    root.appendChild(nomeInput);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('placeholder', 'E-mail');
    root.appendChild(emailInput);
    
    const cepInput = document.createElement('input');
    cepInput.setAttribute('type', 'text');
    cepInput.setAttribute('id', 'cep');
    cepInput.setAttribute('placeholder', 'CEP');
    root.appendChild(cepInput);

    const consentimentoCheckbox = document.createElement('input');
    consentimentoCheckbox.setAttribute('type', 'checkbox');
    consentimentoCheckbox.setAttribute('id', 'consentimento');
    consentimentoCheckbox.checked = true;
    root.appendChild(consentimentoCheckbox);
    
    const consentimentoLabel = document.createElement('label');
    consentimentoLabel.setAttribute('for', 'consentimento');
    consentimentoLabel.textContent = 'Aceito receber emails com promoções';
    root.appendChild(consentimentoLabel);

    const buttonCadastrar = document.createElement('button');
    buttonCadastrar.textContent = 'Cadastrar';
    root.appendChild(buttonCadastrar)

    buttonCadastrar.addEventListener('click', function() {
        alert('cadastro realizado com sucesso!')
    })

    loadFormValues();

    const inputs = [nomeInput, emailInput, cepInput];
    inputs.forEach(input => {
        input.addEventListener('input', function(){
            if (!input.checkValidity()) {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        })
    })

    root.addEventListener('change', saveFormValues)

})