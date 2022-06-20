let form = document.getElementById('form')
let input = document.getElementById('input')
let botao = document.getElementById('botao')
let posts = document.getElementById('posts')

form.addEventListener('submit', e => {
  e.preventDefault()

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
  criaPost()
}

let criaPost = () => {
  posts.innerHTML += ` 
   <div class="container1">
    <div class="caixa2">
      <h2 id="conteudo">${lembretes.text}</h2>
      <div class="container2">
         <button class="botao2">editar</button>
         <button class="botao3" onClick="removePost(this)">apagar</button>
       </div>
      </div>
     </div>
    `
  input.value = ''
}

let removePost = e => {
  e.parentElement.parentElement.remove()
}
