// [CRUD] JAVASCRIPT BASICO

const miniTwitter = {
    usuarios: [
        {
            nomeUsuario: 'sarita'
        }
    ],
    posts: [
        {
            id: 1,
            dono: 'sarita',
            conteudo: 'meu primeiro twitte'
        }
    ],
}

// CREATE

function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length+1,
        dono: dados.dono,
        conteudo: dados.conteudo
    });

}

criaPost({dono: 'a_melifera', conteudo: 'segundo tweet com a conta nova!'})
criaPost({dono: 'a_melifera', conteudo: 'adcionando um terceiro tweet!'})
//console.log(miniTwitter.posts)

// READ

function pegaPosts() {
    return miniTwitter.posts
}
console.log(pegaPosts)

// UPDATE

function atualizaConteudoPosts(id, novoConteudo) {
    const postASerAtualizado =  pegaPosts().find((posts) => {
        return posts.id === id;
    });
    console.log(postASerAtualizado)
    postASerAtualizado.conteudo = novoConteudo
}
atualizaConteudoPosts(1,'Novo conteúdo de tweet')
console.log(pegaPosts())

// DELETE

function apagaPost(id) {
    const listaPostsAtualizada = pegaPosts().filter((postAtual) => {
    return postAtual.id !== id;
    })
    miniTwitter.posts = listaPostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts());
