import Item from './Item'


/*Primeira forma que o professor mostrou o fragment 

  function List() {
  return (
    <>/*o fragment é deixar as tags internas sem uma tag pai, para isso deixo só as setas */
/*      <h1>Minha Lista de Marcas:</h1>
      <ul>
        <li>Intem 1</li>
        <li>Intem 2</li>
      </ul>
    </>
  )
}

export default List
*/
function List() {
  return (
    <div>
      <h1>Minha Lista de Marcas:</h1>
      <ul>
        <Item marca="Ferrari" />{/*Aqui ta usando props */}
        <Item marca="Fiat" />
        <Item marca="Honda" />
      </ul>
    </div>
  )
}

export default List
