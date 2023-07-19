import { useParams, useNavigate } from 'react-router-dom';

function RotaAninhada() {

  const { id } = useParams();

  // 6 - redirect
  const navigate = useNavigate();

  const handleContact = () => {
    console.log('Contatato Enviado');
    return navigate('/');
  }

  return (
    <div>
      <div>RotaAninhada - Detalhes: ID {id}</div>
      <button onClick={handleContact}>Enviar Mensagem</button>
    </div>
  )
}

export default RotaAninhada