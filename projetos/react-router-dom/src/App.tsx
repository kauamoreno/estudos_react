import './App.css';

// 2 - Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

// 4 - Navegando entre paginas
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>FOOTER</p>
    </>
  )
}

export default App
