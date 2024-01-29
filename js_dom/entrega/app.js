// Começo definindo as funções do projeto fora do meu evento principal pra que elas possam ser acessadas em qualquer parte do codigo. Essa primeira função usa uma expressão regular pra validar endereços de email, como pede orequisito 1. Se o preenchimento segue o padrão de um endereço de email, ele será considerado válido:

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// A segunda função salva os valores preenchidos localmente:

function saveFormValues() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        localStorage.setItem(input.id, input.value)
    })
}

// Já nessa função, os valores preenchidos anteriormente sao carregados, pra que o user não seja solicitado a preencher os campos novamente, como pede o requisito 1:

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

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    root.appendChild(divContainer)

// a partir desse ponto, seguimos construindo uma estrutura HTML Dinamica dentro do elemento root, criando elementos, atribuindo a eles atributos e anexando-os como filhos do elemento root:

    const titulo = document.createElement('h1');
    titulo.textContent = 'Churrascômetro';
    titulo.classList.add('title-page')
    divContainer.appendChild(titulo)

// Aqui, eu crio uma div de class='calculator' para encapsular todo o conteúdo do formulário e uso o método isertBefore pra definir esta div como irmã do primeiro h1 da pagina, onde este é passado como argumento do metodo para defini-lo como irmão da div, ou seja, ela vira filha direta de root, assim como o h1 de churrascometro acima:

    const divCalculator = document.createElement('div');
    divCalculator.classList.add('calculator')
    /*root.insertBefore(divCalculator, titulo.nextSibling);*/
    divContainer.appendChild(divCalculator)

// dentro da div calculator, tbm foi criada uma outra div que vai englobar tudo da pagina, menos o primeiro h1. Essa escolha foi feita pra seguir o template disponibilizado pelo professor e eu poder aproveitar o css feito por ele: 

    const divFormGroup = document.createElement('div');
    divFormGroup.classList.add('row', 'input-form-group')

    const paragrafo = document.createElement('h1');
    paragrafo.textContent = 'Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!';
    paragrafo.setAttribute('id', 'header-form')
    divFormGroup.appendChild(paragrafo)

// Aqui foi criado um form pra englobar apenas os elementos de entrada do formulário:

    const form = document.createElement('form');
    
    const nomeInput = document.createElement('input');
    nomeInput.setAttribute('type', 'text');
    nomeInput.setAttribute('id', 'nome');
    nomeInput.setAttribute('placeholder', 'Nome');
    nomeInput.classList.add('input-form');
    nomeInput.setAttribute('required', true);
    form.appendChild(nomeInput);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('placeholder', 'E-mail');
    emailInput.classList.add('input-form');
    emailInput.setAttribute('required', true);
    form.appendChild(emailInput);
    
    const cepInput = document.createElement('input');
    cepInput.setAttribute('type', 'text');
    cepInput.setAttribute('id', 'cep');
    cepInput.setAttribute('placeholder', 'CEP');
    cepInput.classList.add('input-form');
    cepInput.setAttribute('required', true);
    form.appendChild(cepInput);

// inspecionando o codigo disponibilizado pelo prof, tbm notei que o input e a chekbox foram encapsuladas por uma div de ID='consent-input' então, tbm reproduzi isto: 

    const divConsent = document.createElement('div');
    divConsent.id = 'consent-input';

    const consentimentoCheckbox = document.createElement('input');
    consentimentoCheckbox.setAttribute('type', 'checkbox');
    consentimentoCheckbox.setAttribute('id', 'consentimento');
// Para que o checkbox seja carregado marcado automaticamente(requisito 1):    
    consentimentoCheckbox.checked = true;
    divConsent.appendChild(consentimentoCheckbox);
    
    const consentimentoLabel = document.createElement('label');
    consentimentoLabel.setAttribute('for', 'consentimento');
    consentimentoLabel.setAttribute('id', 'consent-label');
    consentimentoLabel.textContent = 'Aceito receber emails com promoções';
    divConsent.appendChild(consentimentoLabel);
    form.appendChild(divConsent)
    divFormGroup.appendChild(form)

// Aqui foi criado uma div de class row pra encapsular o botao de cadastrar e uma variavel pra guardar este botao, então defini esta variavel como filha da divRow e a divRow como filha da divFormGroup inicializada acima:

    const divRow = document.createElement('div');
    divRow.classList.add('row');
// no template usado pelo prof, o botão é feito com uma tag <a>, mas isso me impedia de 
    const buttonCadastrar = document.createElement('button');
    buttonCadastrar.textContent = 'Cadastrar';
    buttonCadastrar.classList.add('default-button')
    buttonCadastrar.href = '#';

    divRow.appendChild(buttonCadastrar);
    divFormGroup.appendChild(divRow);
    form.appendChild(buttonCadastrar);

// Criei o evento de clique para o botao:    

    buttonCadastrar.addEventListener('click', function() {
        alert('cadastro realizado com sucesso!')
    })

// e tbm criei uma div pra carregar os botoes de voltar e pular e organizei suas hierarquias dentro do codigo:

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
    /*root.appendChild(divCalculator)*/

// O método que segue me permite cumprir o requisito "Uma vez que o usuário já tenha preenchido estes campos, não devemos solicitá-los novamente após a página ser recarregada", ele carrega os valores salvos no localStorage de volta para os campos do formulário:
    
    loadFormValues();

// É com o trecho de codigo abaixo que consigo fornecer um feedback visual em tempo real se os dados inseridos sao validos ou nao, como pedido no requisito 1:

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