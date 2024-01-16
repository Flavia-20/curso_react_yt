import styles from "./Frase.module.css";//para importar o stilo

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Este componente é apenas uma frase!</p>
    </div>
  );
}
/*em react não usa-se class como no HTML e css normal porque aqui Class é uma palavra reservada, então usamos className */
export default Frase;
