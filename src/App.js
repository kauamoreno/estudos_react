import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = 'José'

  return (
    <div className="App">
      <HelloWord />
      <SayMyName nome='Kauã'/>
      <SayMyName nome={nome} />

      <Pessoa 
        img='https://via.placeholder.com/200' 
        nome='Kauã' 
        idade='17' 
        profissao='Programador' 
      />
    </div>
  );
    
}

export default App;
