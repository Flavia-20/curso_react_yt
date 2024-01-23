import { useState } from 'react'

function Condicional() {
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail() {//no imput é digitado o email, ativa esse função e mdifica no que for guardado na linha 21
    setUserEmail(email)
  }

  function limparEmail() {
    setUserEmail('')//aqui é gerado um false, não vaia aprecer nada na tela
  }

  return (
    <div>
      <h2>Cadastre seu email:</h2>
      <input
        type="email"
        placeholder="Insira seu e-mail..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={enviarEmail}>Enviar e-mail</button>

{/*{userEmail &&  é o IF do react */}
      {userEmail && (//aqui quer dize: se o UseState ofr preenchido deve aparecer um botão para lipar o email
        <div>
          <p>O email do usuário é: {userEmail}</p>
          <button onClick={limparEmail}>Limpar Email</button>
        </div>
      )}
    </div>
  )
}

export default Condicional
