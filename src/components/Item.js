import PropTypes from 'prop-types'
/*proptypes já é do React  */

/*esse uso de props foi mostrado na aula sobre props*/
function Item(props) {
  return (
    <>
      <li>
        {props.marca} - {props.ano_lancamento}
      </li>
    </>
  )
}

Item.propTypes = {/*definindo os tipos das props */
  marca: PropTypes.string.isRequired,   
  ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
  marca: 'Faltou a marca',
  ano_lancamento: 1,
}

export default Item

