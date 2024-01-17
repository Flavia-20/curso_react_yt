import { useState } from 'react'
/*O useState é um hook do react;
Com ele consigo manusear o estado de um componente de forma simples;
Este hook funciona muito bem com eventos;
Posso atrelar um evento a mudança */
function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(`Usuario ${name} cadastrado com a senha ${password}`)
  }

  /*constante [o nome do campo que eu quero tratar/que será lido, o que será alterado] */
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor='name'>Nome: </label>
          {/*No HTML quando fazemos uma label usamos so for="" mas aqui no JSX usamos htmlFor="" para o mesmo fim */}
          <input
            type="text"
            id='name'
            name='name'
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='Senha'>Senha: </label>
          <input
            type="password"
            id='password'
            name='password'
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
