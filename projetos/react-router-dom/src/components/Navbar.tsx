import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
       <Link to={'/'}>Home</Link>
       <Link to={'/contact'}>Contatos</Link>
    </nav>
  )
}

export default Navbar