function Evento() {
  function meuEvento() {
    console.log('Opa, fui ativado!')
  }

  return (
    <div>
      <p>Clique para disparar o evento:</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  )
}
/* Eventos em react são os mesmos do DOM;
O evento é atrelado a uma tag que vai executar ele;
Geralmente um método é atribuido a ele; 
podendo esse método ser criado no componente*/

export default Evento
