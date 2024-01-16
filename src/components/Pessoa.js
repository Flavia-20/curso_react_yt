 /*Primeira maneira de escrever uma function ocm mais props

  function Pessoa(props) {
  return (
    <div>
      <img src={props.foto} alt={props.nome} />
      <h2>Nome: {props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Profissão: {props.profissao}</p>
    </div>
  );
}

export default Pessoa;

Dessa maneira acontece muita repetição, chamando props
*/

/*Segunda forma de escrever um function com mais props só que cm menos repetiçoes */
function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}

export default Pessoa;
