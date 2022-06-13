const crud = {
  posts: [
    {
      conteudo: 'aaaaaa'
    }
  ]
}

function criaPost(mensagem) {
  crud.posts.push({
    conteudo: mensagem
  })
}
