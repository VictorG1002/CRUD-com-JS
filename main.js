let input = document.getElementById('input')
let botao = document.getElementById('botao')
let form = document.getElementById('form')
let conteudo = document.getElementById('conteudo')

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('botao clicado')

  ValidaForm()
})

let ValidaForm = () => {
  if (input.value != '') {
    aceitaLembretes()
  }
}

const lembretes = {}

let aceitaLembretes = () => {
  lembretes['text'] = input.value
  console.log(lembretes)
}

function criaPost(mensagem) {
  crud.posts.push({
    conteudo: mensagem
  })
}
