import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const nome = "Flávia"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <HelloWorld></HelloWorld>
        <p>Eu, {nome},  posso editar aqui o react</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
