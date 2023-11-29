/*const agenda = {
    contatos: [
        {
            nome: 'aluno 1',
            telefone: 665454,
            email: 'email@email.com'
        },

        {
            nome: 'aluno 2',
            telefone: 665454,
            email: 'email@email.com'
        },

        {
            nome: 'aluno 3',
            telefone: 665454,
            email: 'email@email.com'
        }
    ],
    adicionar: function(contato) {
        this.contatos.push(contato)
    }
}

const contato = {
    nome: 'aluno x',
    telefone: 4548484,
    email: 'email@email.com'
}


console.log(contato.nome);

console.log(agenda.nome);

agenda.adcionar({nome: "sarah", telefone: 12345, email: 'emaildasa@email.com'});

console.log(agenda.contatos);*/


class agendaTelefonica {
    contatos = [];
    adicionar(contato){
        this.contatos.push(contato)
    }
}

const ag = new agendaTelefonica();

console.log(ag.contatos)

ag.adicionar({nome: 'fulano', telefone: 123, email: 'email@email.com'})

console.log(ag.contatos);

