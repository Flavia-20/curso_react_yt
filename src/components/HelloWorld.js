import Frase from "./Frase";
function HelloWorld() {/*a function normalmente recebe o nome do arquivo */
    /*dentro da function tem o return e dentro dela as tags HTML */
    return (
        <div>
            <Frase />
            <h1>Meu primeiro componente</h1>
            <p>os componentes são reutilizáveis</p>
        </div>
    )

}

export default HelloWorld /*sempre lembrar de colocar o export que vai com o nome do arquivo tambem */ 
/*para o arquivos er usado ele tem que importado em outro arquivo, importei ele no App.js com o import*/