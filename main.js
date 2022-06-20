let form = document.getElementById('form')
let input = document.getElementById('input')
let botao = document.getElementById('botao')
let posts = document.getElementById('posts')

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
  criaPost()
}

// o erro ta no conteudo.inner amanha voce resolve
let criaPost = () => {
  posts.innerHTML = +` 
   <div class="container1">
    <div class="caixa2">
      <h2 id="conteudo">${lembretes.text}</h2>
      <div class="container2">
         <button class="botao2">editar</button>
         <button class="botao3">apagar</button>
       </div>
      </div>
     </div>
    `
  input.value = ''
}
