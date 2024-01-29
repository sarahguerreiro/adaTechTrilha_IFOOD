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

// Primeiro, crio um evento que é acionado depois de o HTML ser totalmente carregado. Então, a função associada à esse evento seleciona o elemento do HTML estático de ID 'root' e o guarda na variavel root:

document.addEventListener('DOMContentLoaded', function(){
    const root = document.getElementById('root');

// a partir desse ponto, seguimos construindo uma estrutura HTML Dinamica dentro do elemento root, criando elementos, atribuindo a eles atributos e anexando-os como filhos do elemento root:

    const titulo = document.createElement('h1');
    titulo.textContent = 'Churrascômetro';
    titulo.classList.add('title-page')
    root.appendChild(titulo)

    const divCalculator = document.createElement('div');
    divCalculator.classList.add('calculator')
    root.insertBefore(divCalculator, titulo.nextSibling);

    const divFormGroup = document.createElement('div');
    divFormGroup.classList.add('row', 'input-form-group')

    const paragrafo = document.createElement('h1');
    paragrafo.textContent = 'Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!';
    paragrafo.setAttribute('id', 'header-form')
    divFormGroup.appendChild(paragrafo)


    const form = document.createElement('form');
    
    const nomeInput = document.createElement('input');
    nomeInput.setAttribute('type', 'text');
    nomeInput.setAttribute('id', 'nome');
    nomeInput.setAttribute('placeholder', 'Nome');
    nomeInput.classList.add('input-form');
    form.appendChild(nomeInput);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('placeholder', 'E-mail');
    emailInput.classList.add('input-form');
    form.appendChild(emailInput);
    
    const cepInput = document.createElement('input');
    cepInput.setAttribute('type', 'text');
    cepInput.setAttribute('id', 'cep');
    cepInput.setAttribute('placeholder', 'CEP');
    cepInput.classList.add('input-form');
    form.appendChild(cepInput);


    const divConsent = document.createElement('div');
    divConsent.id = 'consent-input';

    const consentimentoCheckbox = document.createElement('input');
    consentimentoCheckbox.setAttribute('type', 'checkbox');
    consentimentoCheckbox.setAttribute('id', 'consentimento');
    consentimentoCheckbox.checked = true;
    divConsent.appendChild(consentimentoCheckbox);
    
    const consentimentoLabel = document.createElement('label');
    consentimentoLabel.setAttribute('for', 'consentimento');
    consentimentoLabel.setAttribute('id', 'consent-label');
    consentimentoLabel.textContent = 'Aceito receber emails com promoções';
    divConsent.appendChild(consentimentoLabel);
    form.appendChild(divConsent)
    divFormGroup.appendChild(form)
    /*root.appendChild(form)*/


    const divRow = document.createElement('div');
    divRow.classList.add('row');

    const buttonCadastrar = document.createElement('a');
    buttonCadastrar.textContent = 'Cadastrar';
    buttonCadastrar.classList.add('default-button')
    buttonCadastrar.href = '#';

    divRow.appendChild(buttonCadastrar);
    divFormGroup.appendChild(divRow);

    buttonCadastrar.addEventListener('click', function() {
        alert('cadastro realizado com sucesso!')
    })

    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav-container');

    const voltar = document.createElement('button')
    voltar.setAttribute('id', 'back-nav')
    voltar.textContent = 'Voltar'
    voltar.href = '#'
    nav.appendChild(voltar)
    
    const pular = document.createElement('button')
    pular.setAttribute('id', 'skip-register')
    pular.textContent = 'Pular'
    pular.href = '#'
    nav.appendChild(pular)
    divFormGroup.appendChild(nav)

    divCalculator.appendChild(divFormGroup)
    root.appendChild(divCalculator)

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