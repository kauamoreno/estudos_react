import './App.css';
import HelloWord from './components/HelloWord';

function App() {

  const myName = "Kauã"

  function soma(x, y) {
    return x + y
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Meu app React</h1>
      <p>lorem ipsum dorem</p>
      <p>O meu nome é {myName}</p>
      <p>A soma: {soma(2, 3)}</p>
      <img src={url} alt='sdfsdf' />

      <HelloWord />

    </div>
  );
}

export default App;
