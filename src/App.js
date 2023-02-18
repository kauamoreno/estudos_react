import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

  const nome = 'José'

  return (
    <div className="App">
      <SayMyName nome='Kauã'/>
      <SayMyName nome={nome} />

      <Pessoa 
        img='https://via.placeholder.com/200' 
        nome='Kauã' 
        idade='17' 
        profissao='Programador' 
      />

      <Frase />
      <Frase />
    </div>
  );
    
}

export default App;
