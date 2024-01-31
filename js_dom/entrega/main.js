export function segundaPagina(root) {

    const divCalculator = document.createElement('div');
    divCalculator.classList.add("calculator")
// Aqui eu limpo o conteudo da divCalculator
    divCalculator.innerHTML = "";
    const h3 = document.createElement('h3');
    h3.textContent = 'Precisa de uma ajudinha com o churrasco?Quantas pessoas vão participar?';
    divCalculator.appendChild(h3);
    root.appendChild(divCalculator);

    const divCounters = document.createElement('div');
    divCounters.classList.add('counters');
    divCalculator.appendChild(divCounters);

    const countersData = [
        { label: 'homens', id: 'homens', value: 0 },
        { label: 'mulheres', id: 'mulheres', value: 0 },
        { label: 'criancas', id: 'criancas', value: 0 },
    ];

    countersData.forEach(counter => {
        const divCounter = document.createElement('div');
        divCounter.classList.add('counter');

        const label = document.createElement('label');
        label.setAttribute('for', counter.id);
        label.textContent = counter.label;
        divCounter.appendChild(label);

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', counter.id);
        input.setAttribute('value', counter.value);
        divCounter.appendChild(input);

        const divButtonGroup = document.createElement('div');
        divButtonGroup.classList.add('button-group');

        const buttonDecremento = document.createElement('button');
        buttonDecremento.classList.add('input-group__button--small');
        buttonDecremento.textContent = '-';
        buttonDecremento.addEventListener('click', function() {
            if (parseInt(input.value) > 0) {
                input.value = parseInt(input.value) -1;
            }
        })
        divButtonGroup.appendChild(buttonDecremento);
        
        const buttonIncremento = document.createElement('button');
        buttonIncremento.classList.add('input-group__button--small');
        buttonIncremento.textContent = '+';
        buttonIncremento.addEventListener('click', function() {
            
                input.value = parseInt(input.value) +1;
            
        })

        divButtonGroup.appendChild(buttonIncremento);

        divCounter.appendChild(divButtonGroup);
        divCounters.appendChild(divCounter);

    })

    const divRow = document.createElement('div');
    divRow.classList.add('row');

    const buttonCalcular = document.createElement('a');
    buttonCalcular.textContent = 'Calcular';
    buttonCalcular.classList.add('default-button');
    buttonCalcular.setAttribute('href', '#');
    divRow.appendChild(buttonCalcular);

    divCalculator.appendChild(divRow);
    
}