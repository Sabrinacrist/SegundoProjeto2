//baseURL
const baseURL = 'http://127.0.0.1:5500'


/**
 * novoUsuario.
 * Cria um novo usuário no Firebase.
 * @param {string} email - e-mail do usuário
 * @param {string} senha - Senha do usuário
 * @return {object} - O usuário criado
 */
function novoUsuario(email, senha) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, senha)
    .then((result) => {
      alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
      window.location.href =`C:\\Users\\sc287\\Downloads\\Projeto2Academia-main (2)\\Projeto2Academia-main/home.html`
    
     
    })
    .catch(error => {
      console.log(error.code)
      console.log(error.message)
      alert(`Não foi possível cadastrar o usuário \n Erro: ${error.message}`)
    })
}

/**
 * loginFirebase.
 * Realiza a autenticação do usuário no Firebase.
 * @param {string} email - e-mail do usuário
 * @param {string} senha - Senha do usuário
 * @return {object} - O usuário logado
 */
function loginFirebase(email, senha){
  firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(result => {
      alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
     // window.location.href = `${baseURL}/home.html`
     window.location.href =`C:\\Users\\sc287\\Downloads\\Projeto2Academia-main (2)\\Projeto2Academia-main/home.html`
    })
    .catch(error => {
      console.error(error.code)
      console.error(error.message)
      alert(`Não foi possível efetuar o login \n Erro: ${error.message}`)
    })
}

/**
 * logoutFirebase.
 * Realiza o logout do usuário no Firebase.
 * @return {null} - Redireciona o usuário para o login
 */
function logoutFirebase(){
  firebase
  .auth()
  .signOut()
  .then(function() {
    window.location.href = `C:\\Users\\sc287\\Downloads\\Projeto2Academia-main (2)\\Projeto2Academia-main/index.html`
  })
  .catch(function(error) {
    alert(`Não foi possível efetuar o logout \n Erro: ${error.message}`)
  });
}

/**
 * verificaLogado.
 * Verifica se o usuário deve ter acesso a página que será carregada
 * @return {null} - Caso não esteja logado, redireciona para o início
 */
function verificaLogado(){
firebase
.auth()
.onAuthStateChanged(user => {
  if(user){
    console.log('Usuário logado!')
  } else {
    console.log('Usuário não logado. Redirecionando...')
    window.location.href = baseURL
  }
})
}