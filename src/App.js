import HelloWorld from "./components/HellWorld";
import SayMyName from "./components/SayMyName";//importa o arquivo para que este aqui tenha acesso
import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Matheus" /> {/* a propriedade name esta recebendo um texto, este arquivo linkado com o SayMyName recebe a frase escrita no JSX */}
      <SayMyName nome="João" />
      <SayMyName nome="Francisco" />
      <SayMyName nome="Flavia"/>
      <Pessoa
        nome="Flavia"
        idade="20"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
