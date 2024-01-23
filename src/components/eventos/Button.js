function Button(props) {
  return <button onClick={props.event}>{props.text}</button>
}
//como no return so tem um comando de uma linha nõa precisa usar as {}
export default Button
