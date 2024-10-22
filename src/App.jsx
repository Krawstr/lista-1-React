import './App.css'
import Saudacao from './components/Saudacao.jsx'
import BemVindo from './components/BemVindo.jsx'
import SaudacaoCondicional from './components/SaudacaoCondicional.jsx'
import Idade from './components/Idade.jsx'
import Estudante from './components/Estudante.jsx'
import NotaAluno from './components/NotaAluno.jsx'
import Desconto from './components/Desconto.jsx'
import Usuario from './components/Usuario.jsx'
import LevelUser from './components/LevelUser.jsx'
import ButtonOn from './components/ButtonOn.jsx'



function App() {
  const condicional = true

  return (
    <>
    <BemVindo/>
    <Saudacao nome="João"/>
    <SaudacaoCondicional condicao = {condicional}/>
    <Idade idade={17}/>
    <Estudante isEstudante={condicional}/>
    <NotaAluno nota={70}/>
    <Desconto desconto={false}/>
    <Usuario userOn={true}/>
    <LevelUser nivel="iniciante"/>
    <ButtonOn logado={true}/>

    </>
  )
}

export default App
