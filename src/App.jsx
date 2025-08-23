import './App.css'
import Pessoa from './components/Pessoa'

import Eu from './assets/Eu.jpg'

import Ultimato from './assets/Avengers_Endgame.jpg'
import  Circulo from './assets/Pacific_Rim_FilmPoster.jpeg'
import  Guerra from './assets/Avengers_Infinity_War.jpg'
import  Jogador from './assets/JogadorN1.jpg'
import  Inter from './assets/Interstellar_Filme.png'
import  Jumanji from './assets/Jumanji.jpg'

import Design from './assets/Design.avif'
import Futebol from './assets/Futebol.webp'
import Bandeiras from './assets/Bandeiras.avif'
import Jogos from './assets/Jogos.webp'
import Comer from './assets/Comer.jpg'

function App() {

  return (
    <div className='App'>
        <h1>Perfil do aluno</h1>
        <h2>Informações do Aluno</h2>
        <Pessoa
        foto={Eu}
        nome="Rodrigo dos Santos"
        idade="19"
        profissao="Assistente Administrativo"
        musica1=""
        musica2=""
        musica3=""
        musica4=""
        musica5=""
        musica6=""
        imgFilme1={Ultimato}
        imgFilme2={Circulo}
        imgFilme3={Guerra}
        imgFilme4={Jogador}
        imgFilme5={Inter}
        imgFilme6={Jumanji}
        filme1="Vingadores: Ultimato"
        filme2="Circulo de Fogo"
        filme3="Vingadores: Guerra Infinita"
        filme4="Jogador Nª1"
        filme5="Interstellar"
        filme6="Jumanji"
        imgDesign={Design}
        imgFutebol={Futebol}
        imgGeografia={Bandeiras}
        imgJogos={Jogos}
        imgComida={Comer}
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
