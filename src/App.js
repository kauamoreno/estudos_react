import logo from './logo.svg';
import './App.css';

function App() {

  const myName = "Kauã"

  function soma(x, y){
    return x+y
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Meu app React</h1>
      <p>lorem ipsum dorem</p>
      <p>O meu nome é {myName}</p>
      <p>A soma: {soma(2, 3)}</p>      
      <img src={url} alt='sdfsdf'/>
    </div>
  );
}

export default App;
