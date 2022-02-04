import { useNavigate } from 'react-router-dom';
import './style.css';
import Img_sucesso from '../../assets/Img_Sucesso.svg'

function CadastroUsuarioSucesso() {
  const navigate = useNavigate();

  return (
    <div className="container-cadastro_sucesso">
      <div className="cadastro_sucesso">
        <img
          width={200}
          src={Img_sucesso}
          alt="Cadastro Sucesso"
        />
        <h1>Cadastro realizado com sucesso!</h1>
      </div>
      <button
        onClick={() => navigate('/login')}
        className="cadastro_sucesso_button"
      >
        Ir para Login
      </button>
    </div>
  );
}

export default CadastroUsuarioSucesso;