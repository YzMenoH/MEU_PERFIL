import './App.css'
import Pessoa from './components/Pessoa'

function App() {

  return (
    <div className='App'>
        <h1>Perfil do aluno</h1>
        <h2>Informações do Aluno</h2>
        <Pessoa
        nome="Rodrigo dos Santos"
        idade="19"
        profissao="Assistente Administrativo"
        musica1=""
        musica2=""
        musica3=""
        musica4=""
        musica5=""
        musica6=""
        filme1=""
        filme2=""
        filme3=""
        filme4=""
        filme5=""
        filme6=""
        design="Design"
        futebol="Futebol"
        geografia="Bandeiras"
        jogos="Jogar jogos"
        comida="Comer"
        />
    </div>
  )
}

export default App
